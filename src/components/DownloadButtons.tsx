export const DownloadButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
      <a
        href="https://apps.apple.com/us/app/optimal-plates/id6751637015?itscg=30200&itsct=apps_box_link&mttnsubad=6751637015"
        className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold rounded-2xl text-lg sm:text-xl transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(168,85,247,0.4)] active:scale-[0.98] overflow-hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex items-center gap-3 relative z-10">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.22 2.96 4.07 3.09 4.11-.2.49-.62 1.42-.89 1.85z" />
            <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span className="whitespace-nowrap">iOS App Store</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      </a>
      <div className="relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-gray-700/50 to-gray-600/50 backdrop-blur-sm text-white/70 font-bold rounded-2xl text-lg sm:text-xl border border-gray-600/30 cursor-not-allowed">
        <span className="flex items-center gap-2.5 relative z-10">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9993.9993-.9993.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9993.9993-.9993.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.0987L4.8429 5.4465a.4161.4161 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.186.8532 13.0817.8532 15.3414c0 .8546.6959 1.5511 1.5511 1.5511h18.7914c.8546 0 1.5511-.6965 1.5511-1.5511 0-2.2597-1.8357-4.1554-4.8291-5.02" />
          </svg>
          <span className="whitespace-nowrap">Google Play</span>
          <span className="text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10 font-medium">
            Coming Soon
          </span>
        </span>
      </div>
    </div>
  );
};
