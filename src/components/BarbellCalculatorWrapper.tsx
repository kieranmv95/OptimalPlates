"use client";

import { Suspense } from "react";
import BarbellCalculator from "./BarbellCalculator";

function BarbellCalculatorSuspense() {
  return <BarbellCalculator />;
}

export default function BarbellCalculatorWrapper() {
  return (
    <Suspense
      fallback={
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Barbell Calculator
            </h2>
            <p className="text-gray-300 text-sm">Loading...</p>
          </div>
          <div className="animate-pulse">
            <div className="space-y-4">
              <div className="h-10 bg-gray-600 rounded-lg"></div>
              <div className="h-10 bg-gray-600 rounded-lg"></div>
              <div className="h-10 bg-gray-600 rounded-lg"></div>
              <div className="h-12 bg-gray-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      }
    >
      <BarbellCalculatorSuspense />
    </Suspense>
  );
}
