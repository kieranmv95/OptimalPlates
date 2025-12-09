import DownloadPageWrapper from "@/components/DownloadPageWrapper";

export default function Home() {
  return (
    <main>
      <DownloadPageWrapper />

      <footer className="py-8 sm:py-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Made by{" "}
            <a
              href="https://localhostdevelopment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium hover:underline"
            >
              Localhost Development Ltd
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
