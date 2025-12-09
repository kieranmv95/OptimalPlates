import DownloadPageWrapper from "@/components/DownloadPageWrapper";

export default function Home() {
  return (
    <main>
      <DownloadPageWrapper />

      <footer className="py-6 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Made by{" "}
            <a
              href="https://instagram.com/optimalplates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              Optimal Plates
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
