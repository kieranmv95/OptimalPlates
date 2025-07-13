import BarbellCalculator from "@/components/BarbellCalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Optimal Plates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
