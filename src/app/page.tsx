import BarbellCalculator from "@/components/BarbellCalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Optimal Plates
          </h1>
          <p className="text text-gray-200 max-w-2xl mx-auto">
            Calculate the perfect plate combination for your Olympic barbell
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <BarbellCalculator />
        </div>
      </div>
    </main>
  );
}
