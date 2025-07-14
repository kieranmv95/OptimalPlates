"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BarbellVisualization from "./BarbellVisualization";

type Unit = "kg" | "lbs";
type BarType = "male" | "female";

interface Plate {
  weight: number;
  count: number;
  color: string;
}

interface RecentCalculation {
  id: string;
  targetWeight: string;
  unit: Unit;
  barType: BarType;
  plates: Plate[];
  timestamp: number;
}

export default function BarbellCalculator() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [unit, setUnit] = useState<Unit>("kg");
  const [targetWeight, setTargetWeight] = useState<string>("");
  const [barType, setBarType] = useState<BarType>("male");
  const [plates, setPlates] = useState<Plate[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recentCalculations, setRecentCalculations] = useState<
    RecentCalculation[]
  >([]);

  // Load recent calculations from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("optimalPlates_recentCalculations");
    if (saved) {
      try {
        setRecentCalculations(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading recent calculations:", error);
      }
    }
  }, []);

  // Save recent calculations to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "optimalPlates_recentCalculations",
      JSON.stringify(recentCalculations)
    );
  }, [recentCalculations]);

  // Check URL parameters on mount and when they change
  useEffect(() => {
    const weight = searchParams.get("weight");
    const unitParam = searchParams.get("unit") as Unit;
    const barTypeParam = searchParams.get("barType") as BarType;

    if (weight && unitParam && barTypeParam) {
      setTargetWeight(weight);
      setUnit(unitParam);
      setBarType(barTypeParam);

      const weightNum = parseFloat(weight);
      if (weightNum > 0) {
        const calculatedPlates = calculatePlates(
          weightNum,
          unitParam,
          barTypeParam
        );
        setPlates(calculatedPlates);
        setShowResult(true);
      }
    }
  }, [searchParams]);

  const calculatePlates = (weight: number, unit: Unit, barType: BarType) => {
    // Standard Olympic bar weights
    const barWeightKg = barType === "male" ? 20 : 15; // kg

    // Available plates in kg (will be converted to lbs if needed)
    const availablePlates = [25, 20, 15, 10, 5, 2.5, 1.25];
    const plateColors = {
      25: "#FF6B6B", // Red
      20: "#4ECDC4", // Blue
      15: "#45B7D1", // Yellow
      10: "#96CEB4", // Green
      5: "#FFEAA7", // White
      2.5: "#DDA0DD", // Purple
      1.25: "#F8BBD9", // Pink
    };

    let targetWeightKg = weight;
    if (unit === "lbs") {
      targetWeightKg = weight * 0.453592;
    }

    let remainingWeight = (targetWeightKg - barWeightKg) / 2; // Divide by 2 for each side

    if (remainingWeight < 0) {
      remainingWeight = 0;
    }

    const result: Plate[] = [];

    for (const plateWeight of availablePlates) {
      if (remainingWeight >= plateWeight) {
        const count = Math.floor(remainingWeight / plateWeight);
        if (count > 0) {
          result.push({
            weight: plateWeight,
            count: count,
            color: plateColors[plateWeight as keyof typeof plateColors],
          });
          remainingWeight -= count * plateWeight;
        }
      }
    }

    return result;
  };

  const addToRecentCalculations = (
    targetWeight: string,
    unit: Unit,
    barType: BarType,
    plates: Plate[]
  ) => {
    const newCalculation: RecentCalculation = {
      id: Date.now().toString(),
      targetWeight,
      unit,
      barType,
      plates,
      timestamp: Date.now(),
    };

    // Add to beginning of array and keep only last 10 calculations
    const updated = [
      newCalculation,
      ...recentCalculations.filter(
        (calc) =>
          !(
            calc.targetWeight === targetWeight &&
            calc.unit === unit &&
            calc.barType === barType
          )
      ),
    ].slice(0, 10);

    setRecentCalculations(updated);
  };

  const loadRecentCalculation = (calculation: RecentCalculation) => {
    setTargetWeight(calculation.targetWeight);
    setUnit(calculation.unit);
    setBarType(calculation.barType);
    setPlates(calculation.plates);
    setShowResult(true);

    // Update URL to reflect the loaded calculation
    const params = new URLSearchParams({
      weight: calculation.targetWeight,
      unit: calculation.unit,
      barType: calculation.barType,
    });
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const clearRecentCalculations = () => {
    setRecentCalculations([]);
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60);
      return `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weight = parseFloat(targetWeight);
    if (weight > 0) {
      const calculatedPlates = calculatePlates(weight, unit, barType);
      setPlates(calculatedPlates);
      setShowResult(true);
      addToRecentCalculations(targetWeight, unit, barType, calculatedPlates);

      // Update URL with the calculation parameters
      const params = new URLSearchParams({
        weight: targetWeight,
        unit: unit,
        barType: barType,
      });
      router.push(`/?${params.toString()}`, { scroll: false });
    }
  };

  const resetCalculator = () => {
    setTargetWeight("");
    setShowResult(false);
    setPlates([]);

    // Clear URL parameters and go back to base URL
    router.push("/", { scroll: false });
  };

  if (showResult) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Your Plate Setup
          </h2>
          <p className="text-gray-300 text-sm">
            Target: {targetWeight} {unit} | Bar:{" "}
            {barType === "male" ? "Male Olympic" : "Female Olympic"}
          </p>
        </div>

        <BarbellVisualization plates={plates} unit={unit} barType={barType} />

        <div className="mt-6 text-center">
          <button
            onClick={resetCalculator}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Calculate Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Barbell Calculator
        </h2>
        <p className="text-gray-300 text-sm">Calculate your plate setup</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Unit Selection */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Unit
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setUnit("kg")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                unit === "kg"
                  ? "bg-green-600 text-white"
                  : "bg-gray-600 text-gray-300 hover:bg-gray-500"
              }`}
            >
              kg
            </button>
            <button
              type="button"
              onClick={() => setUnit("lbs")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                unit === "lbs"
                  ? "bg-green-600 text-white"
                  : "bg-gray-600 text-gray-300 hover:bg-gray-500"
              }`}
            >
              lbs
            </button>
          </div>
        </div>

        {/* Target Weight */}
        <div>
          <label
            htmlFor="weight"
            className="block text-white text-sm font-medium mb-2"
          >
            Target Weight ({unit})
          </label>
          <input
            id="weight"
            type="number"
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
            placeholder={`Enter weight in ${unit}`}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
            min="0"
            step="0.1"
            required
          />
        </div>

        {/* Bar Type */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Bar Type
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setBarType("male")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                barType === "male"
                  ? "bg-green-600 text-white"
                  : "bg-gray-600 text-gray-300 hover:bg-gray-500"
              }`}
            >
              Male (20kg)
            </button>
            <button
              type="button"
              onClick={() => setBarType("female")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                barType === "female"
                  ? "bg-green-600 text-white"
                  : "bg-gray-600 text-gray-300 hover:bg-gray-500"
              }`}
            >
              Female (15kg)
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
        >
          Calculate Plates
        </button>
      </form>

      {/* Recent Calculations */}
      {recentCalculations.length > 0 && (
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              Recent Calculations
            </h3>
            <button
              onClick={clearRecentCalculations}
              className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
            >
              Clear All
            </button>
          </div>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {recentCalculations.map((calculation) => (
              <button
                key={calculation.id}
                onClick={() => loadRecentCalculation(calculation)}
                className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">
                      {calculation.targetWeight} {calculation.unit}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {calculation.barType === "male"
                        ? "Male Olympic"
                        : "Female Olympic"}{" "}
                      • {formatTimestamp(calculation.timestamp)}
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
