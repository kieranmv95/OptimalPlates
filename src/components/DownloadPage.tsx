"use client";

import { DownloadButtons } from "./DownloadButtons";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-green-600/20 to-yellow-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Available Now on App Store & Coming soon to Google Play
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Optimal
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Plates
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            The ultimate plate calculator for your gym sessions.
          </p>

          <DownloadButtons />

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Community Driven</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Regular Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">
                One time payment, no subscriptions
              </span>
            </div>
          </div>
        </div>

        {/* Screenshot Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              See it in{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                action
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Beautiful, intuitive, and powerful - just like your workouts
              should be
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Screenshot 1 */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden border border-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
                  <img
                    src="/1.png"
                    alt="Main Calculator Interface Screenshot"
                    className="relative z-10 rounded-2xl object-cover w-full h-full"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Simple Calculation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No need to go to a weightlifting site, just input what you
                  want to lift, and we&apos;ll do the rest
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden border border-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
                  <img
                    src="/2.png"
                    alt="Main Calculator Interface Screenshot"
                    className="relative z-10 rounded-2xl object-cover w-full h-full"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Visual Display
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  See exactly how your plates should be arranged on the barbell
                  in a nice visual display
                </p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-green-600/20 to-yellow-600/20 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden border border-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
                  <img
                    src="/3.png"
                    alt="Main Calculator Interface Screenshot"
                    className="relative z-10 rounded-2xl object-cover w-full h-full"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Save</h3>
                <p className="text-gray-300 leading-relaxed">
                  Save your recent calculations and favorite plate combinations
                  for easy access
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Optimal Plates
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built by lifters, for lifters. No more mental math, no more wasted
              time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">KG Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently supports KG plates. LBS support is in development!
              </p>
            </div>

            <div className="group text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                One time payment
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We all have enough subscriptions as it is, so no subscriptions,
                no ads, all future updates and features are included in the one
                time payment.
              </p>
            </div>

            <div className="group text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Simple Calculation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                No need to go to a weightlifting site, just input what you want
                to lift, and we&apos;ll do the rest
              </p>
            </div>
          </div>
        </div>

        {/* In Development*/}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What&apos;s{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                in development?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are working hard to bring you the best experience possible.
              Some features are still in development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group text-center bg-gradient-to-br from-yellow-900/30 to-green-900/20 rounded-2xl p-8 border border-yellow-400/10 hover:scale-105 transition-transform duration-300 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                Plate Selection
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Customize which plates you own for accurate calculations, no
                more guessing!
              </p>
            </div>
            <div className="group text-center bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl p-8 border border-blue-400/10 hover:scale-105 transition-transform duration-300 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                LBS Support
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Pounds are coming soon! Currently, only KG plates are supported.
              </p>
            </div>
            <div className="group text-center bg-gradient-to-br from-pink-900/30 to-purple-900/20 rounded-2xl p-8 border border-pink-400/10 hover:scale-105 transition-transform duration-300 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                Community Features
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We listen! Suggest features and help shape the app, your
                feedback drives development.
              </p>
            </div>
            <div className="group text-center bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-2xl p-8 border border-red-400/10 hover:scale-105 transition-transform duration-300 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-2">Bug Fixes</h3>
              <p className="text-gray-300 leading-relaxed">
                We’re squashing bugs and improving stability, thanks for your
                patience and reports!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 backdrop-blur-xl rounded-3xl px-4 py-12 md:px-12 md:py-12  border border-purple-500/20 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                dominate
              </span>{" "}
              your workouts?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join thousands of lifters who&apos;ve already upgraded their gym
              experience. Download Optimal Plates today and never struggle with
              plate math again!
            </p>

            <DownloadButtons />
          </div>
        </div>

        {/* Contact/Follow Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl px-4 py-12 md:px-12 border border-gray-600/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Follow{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tempered Strength
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest fitness tips, app updates, and join
              our community of strength enthusiasts
            </p>

            <a
              href="https://instagram.com/temperedstrength"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              temperedstrength
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
