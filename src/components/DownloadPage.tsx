"use client";

import Image from "next/image";
import { DownloadButtons } from "./DownloadButtons";
import {
  faCalculator,
  faPalette,
  faScaleBalanced,
  faBookBookmark,
  faRunning,
  faCog,
  faWeightHanging,
  faPoundSign,
  faFlag,
  faDumbbell,
  faWrench,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SmallFeatureBlock } from "./SmallFeatureBlock";

const features = [
  {
    icon: faDumbbell,
    title: "Log Exercises",
    description: "Log your exercises, Track your progress, and see your growth",
  },
  {
    icon: faCalculator,
    title: "Simple Calculation",
    description:
      "Enter your barbell and plates, get the perfect setup instantly.",
  },
  {
    icon: faScaleBalanced,
    title: "Percentages & Wendler Breakdown",
    description:
      "See your working sets and percentages, including Wendler 5/3/1 breakdowns.",
  },
  {
    icon: faBookBookmark,
    title: "Save Calculations",
    description: "Bookmark your favorite setups for quick access next time.",
  },
  {
    icon: faRunning,
    title: "Quick Increment/Decrement",
    description:
      "Adjust your target weight with a tap for fast changes between sets.",
  },
  {
    icon: faCog,
    title: "Custom Plates Setup",
    description:
      "Configure your own plate inventory for truly accurate calculations.",
  },
  {
    icon: faPalette,
    title: "Beautiful UI",
    description:
      "Modern, intuitive, and easy to use—looks great in the gym or at home.",
  },
  {
    icon: faPoundSign,
    title: "One Time Payment, No Subs",
    description:
      "No subscriptions, no ads. All features and updates included forever.",
  },
  {
    icon: faWeightHanging,
    title: "KG Support",
    description: "Calculate with KG plates for international standards.",
  },
  {
    icon: faFlag,
    title: "Multi-Language Support",
    description: "Now in English, German, Spanish, Japanese, French & Arabic",
  },
  {
    icon: faWrench,
    title: "More Tools Coming Soon",
    description: "More tools coming soon to the app, stay tuned for updates",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/25 via-pink-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/25 via-cyan-600/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-green-600/20 via-yellow-600/15 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* Subtle grid overlay for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-24 sm:mb-28 lg:mb-32">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient">
                Optimal
              </span>
              <span
                className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient"
                style={{ animationDelay: "0.5s" }}
              >
                Plates
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light">
            The ultimate barbell plate calculator and exercise tracker.
            Calculate perfect plate setups, log your workouts, and track your
            progress, all in one powerful app.
          </p>

          <div className="mb-12 sm:mb-16">
            <DownloadButtons />
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-gray-400">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-green-400"
              />
              <span className="text-sm font-medium">Supports 5 Languages</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-green-400"
              />
              <span className="text-sm font-medium">Regular Updates</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-green-400"
              />
              <span className="text-sm font-medium">
                One time payment, no subscriptions
              </span>
            </div>
          </div>
        </div>

        {/* Screenshot Section */}
        <div className="mb-24 sm:mb-28 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              See it in{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                action
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Beautiful, intuitive, and powerful - just like your workouts
              should be
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Screenshot 1 */}
            <div className="group relative">
              <div className="relative transition-all duration-500 hover:scale-[1.03]">
                <div className="aspect-[9/16] rounded-3xl mb-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 backdrop-blur-sm shadow-2xl group-hover:border-white/20 transition-all duration-500">
                  <Image
                    src="/screens/lightdarksplit.png"
                    alt="Main Calculator Interface Screenshot"
                    width={400}
                    height={711}
                    className="relative z-10 rounded-3xl object-contain w-full h-full p-2"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">
                  The right tool for the job
                </h3>
                <p className="text-gray-300 leading-relaxed text-center text-sm sm:text-base">
                  Get the right tool for the job with a simple, intuitive UI.
                  And more tools in the pipeline coming soon!
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative">
              <div className="relative transition-all duration-500 hover:scale-[1.03]">
                <div className="aspect-[9/16] rounded-3xl mb-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-white/10 backdrop-blur-sm shadow-2xl group-hover:border-white/20 transition-all duration-500">
                  <Image
                    src="/screens/calc.png"
                    alt="Main Calculator Interface Screenshot"
                    width={400}
                    height={711}
                    className="relative z-10 rounded-3xl object-contain w-full h-full p-2"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">
                  Simple UI
                </h3>
                <p className="text-gray-300 leading-relaxed text-center text-sm sm:text-base">
                  See exactly how your plates should be arranged on the barbell
                  in a nice visual display
                </p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative">
              <div className="relative transition-all duration-500 hover:scale-[1.03]">
                <div className="aspect-[9/16] rounded-3xl mb-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-900/20 to-yellow-900/20 border border-white/10 backdrop-blur-sm shadow-2xl group-hover:border-white/20 transition-all duration-500">
                  <Image
                    src="/screens/logexercise.png"
                    alt="Log Exercise Interface Screenshot"
                    width={400}
                    height={711}
                    className="relative z-10 rounded-3xl object-contain w-full h-full p-2"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">
                  Log Exercises
                </h3>
                <p className="text-gray-300 leading-relaxed text-center text-sm sm:text-base">
                  Log your exercises with sets and reps to track your progress
                  and see your growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-24 sm:mb-28 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                Optimal Plates
              </span>
              ?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-2">
              Built by lifters, for lifters. No more mental math, no more wasted
              time.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Everything you need for fast, accurate, and beautiful barbell
              math.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {features.map((feature) => (
              <SmallFeatureBlock key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-24 sm:mb-28 lg:mb-32">
          <div className="relative bg-gradient-to-r from-purple-600/30 via-pink-600/25 to-red-600/30 backdrop-blur-2xl rounded-3xl px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 border border-purple-500/30 shadow-2xl max-w-6xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-red-600/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  dominate
                </span>{" "}
                your workouts?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Join thousands of lifters who&apos;ve already upgraded their gym
                experience. Download Optimal Plates today and never struggle
                with plate math again!
              </p>

              <DownloadButtons />
            </div>
          </div>
        </div>

        {/* Contact/Follow Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative bg-gradient-to-r from-gray-900/60 via-gray-800/50 to-gray-900/60 backdrop-blur-2xl rounded-3xl px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 border border-gray-600/30 shadow-2xl max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-purple-600/5"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                Follow{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Optimal Plates
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Stay updated with the latest fitness tips, app updates, and join
                our community of strength enthusiasts
              </p>

              <a
                href="https://instagram.com/optimalplates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold rounded-2xl text-base sm:text-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(168,85,247,0.4)] active:scale-[0.98] group"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="whitespace-nowrap">optimalplates</span>
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
    </div>
  );
}
