import BarbellCalculatorWrapper from "@/components/BarbellCalculatorWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1">
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
            <BarbellCalculatorWrapper />
          </div>
        </div>
      </div>

      <footer className="py-6 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Built by{" "}
            <a
              href="https://localhostdevelopment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              localhost development ltd
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
