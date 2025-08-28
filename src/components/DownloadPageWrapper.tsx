"use client";

import { Suspense } from "react";
import DownloadPage from "./DownloadPage";

function DownloadPageSuspense() {
  return <DownloadPage />;
}

export default function DownloadPageWrapper() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <div className="animate-pulse">
                <div className="h-16 bg-gray-700 rounded-lg mb-6 max-w-2xl mx-auto"></div>
                <div className="h-8 bg-gray-700 rounded-lg mb-8 max-w-3xl mx-auto"></div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="h-12 bg-gray-700 rounded-lg w-48"></div>
                  <div className="h-12 bg-gray-700 rounded-lg w-48"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <DownloadPageSuspense />
    </Suspense>
  );
}
