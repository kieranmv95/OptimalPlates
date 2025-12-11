"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faFileExport,
  faTrophy,
  faFire,
  faChartLine,
  faWeight,
  faGraduationCap,
  faDumbbell,
  faPaintBrush,
  faShieldAlt,
  faLock,
  faDatabase,
  faEyeSlash,
  faBan,
  faHeart,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const roadmapItems = [
  {
    number: 1,
    title: "Android Public Release",
    description:
      "Bringing Optimal Plates to Android with full feature parity and UI optimisation across devices.",
    icon: faMobileAlt,
    gradient: "from-green-900/30 to-emerald-900/20",
    iconColor: "text-green-400",
    borderColor: "border-green-500/30",
  },
  {
    number: 2,
    title: "Data Export & Import",
    subtitle: "Privacy-First",
    description:
      "Export your training data to a file (JSON/CSV). Optional import for restoring your history on a new device. 100% on-device only — no cloud, no accounts, no tracking.",
    icon: faFileExport,
    gradient: "from-blue-900/30 to-cyan-900/20",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/30",
  },
  {
    number: 3,
    title: "Badges & Accolades",
    subtitle: "Lightweight Gamification",
    description:
      "All-Time / Monthly / Yearly PR badges. Tool usage achievements (plate calc, warmup, 1RM estimator, etc.). Training consistency and milestone badges. An Achievements section to showcase progress.",
    extra: "Designed for serious lifters — motivating, not gimmicky.",
    icon: faTrophy,
    gradient: "from-yellow-900/30 to-orange-900/20",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/30",
  },
  {
    number: 4,
    title: "Warmup Generator",
    description:
      "Smart, on-device warmup suggestions based on your logged 1RMs and chosen working weight. Fully custom, fast, and no internet required.",
    icon: faFire,
    gradient: "from-orange-900/30 to-red-900/20",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/30",
  },
  {
    number: 5,
    title: "Graphs & Charts",
    subtitle: "Progress Tracking",
    description:
      "PR progression curves. Volume trends. Time-based performance indicators. Designed to be clean, minimal, and fast even on-device.",
    extra: "Your lift history becomes a visual story of progress.",
    icon: faChartLine,
    gradient: "from-purple-900/30 to-pink-900/20",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/30",
  },
  {
    number: 6,
    title: "Bodyweight & Measurements Tracking",
    description:
      'Track bodyweight, waist / chest / hip / arm measurements. Bodyweight-based milestones (e.g., "Bench bodyweight", "Deadlift 2× bodyweight").',
    extra: "Fully private — nothing leaves your device.",
    icon: faWeight,
    gradient: "from-teal-900/30 to-cyan-900/20",
    iconColor: "text-teal-400",
    borderColor: "border-teal-500/30",
  },
  {
    number: 7,
    title: "Learning Section",
    description:
      "A structured library of technique explanations, programming basics, progression tips, weightlifting & powerlifting fundamentals, and how to use Optimal Plates effectively.",
    extra: "Built for clarity, beginners, and self-coached lifters.",
    icon: faGraduationCap,
    gradient: "from-indigo-900/30 to-violet-900/20",
    iconColor: "text-indigo-400",
    borderColor: "border-indigo-500/30",
  },
];

const ongoingItems = [
  {
    title: "Additional Exercises",
    description:
      "Regular expansion of barbell, dumbbell, and accessory movements with full translation support.",
    icon: faDumbbell,
    gradient: "from-pink-900/30 to-rose-900/20",
    iconColor: "text-pink-400",
  },
  {
    title: "UI Improvements & Bug Fixing",
    description:
      "Consistent quality-of-life enhancements, visual polish, performance improvements, and stability updates across both iOS and Android.",
    icon: faPaintBrush,
    gradient: "from-violet-900/30 to-purple-900/20",
    iconColor: "text-violet-400",
  },
];

const principles = [
  { icon: faBan, text: "No accounts", color: "text-red-400" },
  { icon: faDatabase, text: "No cloud storage", color: "text-orange-400" },
  {
    icon: faEyeSlash,
    text: "No analytics or tracking",
    color: "text-yellow-400",
  },
  { icon: faLock, text: "No subscriptions", color: "text-green-400" },
  {
    icon: faShieldAlt,
    text: "Data stays 100% on your device",
    color: "text-blue-400",
  },
];

export default function RoadmapPage() {
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
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8 sm:mb-12 group"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient">
                Where We&apos;re
              </span>
              <span
                className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient"
                style={{ animationDelay: "0.5s" }}
              >
                Headed
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            On top of what we already have, we&apos;re working on the following
            features. No dates. Just clear direction and order of delivery.
          </p>
        </div>

        {/* Sequential Roadmap */}
        <div className="mb-20 sm:mb-24 lg:mb-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              📌 Sequential{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light">
              Features in order of delivery
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {roadmapItems.map((item) => (
                <div
                  key={item.number}
                  className={`group relative bg-gradient-to-br ${item.gradient} rounded-2xl p-6 sm:p-8 border border-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-white/10 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1`}
                >
                  {/* Number badge - positioned top-left */}
                  <div
                    className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-2 ${item.borderColor} flex items-center justify-center shadow-lg overflow-hidden z-10`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`}
                    ></div>
                    <span className="relative text-white font-black text-base sm:text-lg">
                      {item.number}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 pl-4 sm:pl-6">
                    <div
                      className={`hidden sm:flex flex-shrink-0 mt-1 p-3 rounded-xl bg-gradient-to-br ${item.gradient} border border-white/10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`w-6 h-6 ${item.iconColor}`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <span
                            className={`text-xs font-semibold px-2 py-1 rounded-full bg-white/10 ${item.iconColor}`}
                          >
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-2">
                        {item.description}
                      </p>
                      {item.extra && (
                        <p className="text-gray-400 text-sm italic">
                          {item.extra}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ongoing Work Section */}
        <div className="mb-20 sm:mb-24 lg:mb-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              🔄 Ongoing,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                Regular Work
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light max-w-2xl mx-auto">
              These improvements happen continuously across all releases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {ongoingItems.map((item) => (
              <div
                key={item.title}
                className={`group bg-gradient-to-br ${item.gradient} rounded-2xl p-6 sm:p-8 border border-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-white/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 mt-1 p-3 rounded-xl bg-gradient-to-br ${item.gradient} border border-white/10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`w-6 h-6 ${item.iconColor}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles Section */}
        <div className="mb-16 sm:mb-20">
          <div className="relative bg-gradient-to-r from-gray-900/60 via-gray-800/50 to-gray-900/60 backdrop-blur-2xl rounded-3xl px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 border border-gray-600/30 shadow-2xl max-w-5xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-purple-600/5"></div>
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                  🛡️ Our Core{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                    Principles
                  </span>
                </h2>
                <p className="text-lg text-gray-400 font-light">
                  These will never change
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
                {principles.map((principle) => (
                  <div
                    key={principle.text}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <FontAwesomeIcon
                      icon={principle.icon}
                      className={`w-5 h-5 ${principle.color}`}
                    />
                    <span className="text-white font-medium text-sm sm:text-base">
                      {principle.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600/20 via-pink-600/15 to-red-600/20 border border-purple-500/30">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="w-5 h-5 text-pink-400"
                  />
                  <p className="text-gray-200 text-sm sm:text-base font-medium">
                    Optimal Plates is built to be a{" "}
                    <span className="text-white font-bold">
                      private, lightweight, serious tool
                    </span>{" "}
                    for barbell athletes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold rounded-2xl text-base sm:text-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(168,85,247,0.4)] active:scale-[0.98] group"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
