"use client";

import { useState } from "react";
import BarbellVisualization from "./BarbellVisualization";

type Unit = "kg" | "lbs";
type BarType = "male" | "female";

interface Plate {
  weight: number;
  count: number;
  color: string;
}

export default function BarbellCalculator() {
  const [unit, setUnit] = useState<Unit>("kg");
  const [targetWeight, setTargetWeight] = useState<string>("");
  const [barType, setBarType] = useState<BarType>("male");
  const [plates, setPlates] = useState<Plate[]>([]);
  const [showResult, setShowResult] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weight = parseFloat(targetWeight);
    if (weight > 0) {
      const calculatedPlates = calculatePlates(weight, unit, barType);
      setPlates(calculatedPlates);
      setShowResult(true);
    }
  };

  const resetCalculator = () => {
    setTargetWeight("");
    setShowResult(false);
    setPlates([]);
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
    </div>
  );
}
