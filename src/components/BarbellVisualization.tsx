"use client";

type Unit = "kg" | "lbs";
type BarType = "male" | "female";

interface Plate {
  weight: number;
  count: number;
  color: string;
}

interface BarbellVisualizationProps {
  plates: Plate[];
  unit: Unit;
  barType: BarType;
}

export default function BarbellVisualization({
  plates,
  unit,
  barType,
}: BarbellVisualizationProps) {
  const barWeight = barType === "male" ? 20 : 15; // kg
  const barWeightLbs = barType === "male" ? 45 : 33; // lbs

  const totalPlateWeight = plates.reduce(
    (sum, plate) => sum + plate.weight * plate.count,
    0
  );
  const totalWeight = barWeight + totalPlateWeight * 2; // *2 because plates are on both sides
  const totalWeightLbs = totalWeight * 2.20462;

  const displayWeight = unit === "kg" ? totalWeight : totalWeightLbs;
  const displayBarWeight = unit === "kg" ? barWeight : barWeightLbs;

  return (
    <div className="space-y-6">
      {/* Barbell Visualization */}
      <div className="relative bg-gray-800 rounded-lg p-8">
        <div className="flex items-center justify-center space-x-[2px]">
          {/* Left Plates Stack */}
          <div className="flex items-center space-x-[2px]">
            {plates
              .slice()
              .reverse()
              .map((plate, index) => (
                <div
                  key={`left-${index}`}
                  className="flex items-center gap-[2px]"
                >
                  {Array.from({ length: plate.count }, (_, i) => (
                    <div
                      key={`left-${index}-${i}`}
                      className="w-2 h-12"
                      style={{ backgroundColor: plate.color }}
                      title={`${plate.weight} ${unit}`}
                    />
                  ))}
                </div>
              ))}
          </div>

          {/* Barbell Bar */}
          <div className="flex items-center">
            <div className="w-2 h-4 bg-gray-600"></div>
            <div className="w-24 h-2 bg-gray-600 mx-1"></div>
            <div className="w-2 h-4 bg-gray-600"></div>
          </div>

          {/* Right Plates Stack - Same order as left (heaviest inside) */}
          <div className="flex items-center space-x-[2px]">
            {plates.map((plate, index) => (
              <div
                key={`right-${index}`}
                className="flex items-center gap-[2px]"
              >
                {Array.from({ length: plate.count }, (_, i) => (
                  <div
                    key={`right-${index}-${i}`}
                    className="w-2 h-12"
                    style={{ backgroundColor: plate.color }}
                    title={`${plate.weight} ${unit}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Weight Display */}
        <div className="text-center mt-6">
          <div className="text-2xl font-bold text-white">
            Total Weight: {displayWeight.toFixed(1)} {unit}
          </div>
          <div className="text-gray-300">
            Bar: {displayBarWeight} {unit} | Plates:{" "}
            {(displayWeight - displayBarWeight).toFixed(1)} {unit}
          </div>
        </div>
      </div>

      {/* Plate Details */}
      <div className="bg-gray-800 backdrop-blur-lg rounded-lg p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {plates.map((plate, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/5 rounded-lg p-3"
              >
                <div
                  className="w-6 h-6 rounded-full border border-white"
                  style={{ backgroundColor: plate.color }}
                />
                <div>
                  <div className="text-white font-semibold">
                    {plate.weight} {unit}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {plate.count} per side
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-gray-300">
                <span className="font-semibold">Bar Weight:</span>{" "}
                {displayBarWeight} {unit}
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">Total Plate Weight:</span>{" "}
                {(displayWeight - displayBarWeight).toFixed(1)} {unit}
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">Plates per Side:</span>{" "}
                {plates.reduce((sum, plate) => sum + plate.count, 0)}
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">Total Weight:</span>{" "}
                {displayWeight.toFixed(1)} {unit}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
