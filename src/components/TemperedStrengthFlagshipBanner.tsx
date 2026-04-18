import Image from "next/image";

const tsGold = "#c9b072";

export function TemperedStrengthFlagshipBanner() {
  return (
    <div
      className="relative z-20"
      style={{ borderColor: `${tsGold}33` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <a
          href="https://temperedstrength.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tempered Strength — our flagship gym app. Opens temperedstrength.com in a new tab."
          className="group flex flex-col gap-4 rounded-xl border border-[#c9b072]/25 bg-[#0c0c0c] px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[#c9b072]/45 hover:bg-[#101010] hover:shadow-[0_0_48px_rgba(201,176,114,0.14)] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-2xl sm:px-5 sm:py-4"
        >
          <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Image
              src="/ts.svg"
              alt="Tempered Strength"
              width={144}
              height={43}
              className="h-7 w-auto shrink-0 sm:h-9"
              priority
            />
            <div className="min-w-0">
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ring-1 ring-inset ring-[#c9b072]/35"
                  style={{
                    color: tsGold,
                    backgroundColor: `${tsGold}18`,
                  }}
                >
                  Flagship app
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                  From the Optimal Plates team
                </span>
              </div>
              <p
                className="text-base font-bold leading-snug sm:text-lg"
                style={{ color: tsGold }}
              >
                Gym programs that actually work
              </p>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-400">
                Structured strength &amp; Olympic lifting programs, 40+ on-demand
                workouts, smart exercise swaps, and more — free on the App Store with
                optional Pro.
              </p>
            </div>
          </div>
          <span
            className="inline-flex shrink-0 items-center justify-center gap-2 self-stretch rounded-xl px-4 py-2.5 text-sm font-bold transition-transform duration-300 group-hover:scale-[1.02] group-hover:brightness-110 active:scale-[0.98] sm:self-center sm:px-5 sm:py-3"
            style={{
              backgroundColor: tsGold,
              color: "#0a0a0a",
              boxShadow: `0 12px 40px ${tsGold}33`,
            }}
          >
            Explore Tempered Strength
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
