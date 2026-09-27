'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Clock3, BadgeCheck } from "lucide-react";

const SERVICES = ["Hausmeisterservice", "Reinigung", "Gartenpflege", "Handwerkerservice"];

const STATS = [
  { icon: Shield, value: "100%", label: "Zuverlässigkeit" },
  { icon: Clock3, value: "24/7", label: "Erreichbar" },
  { icon: BadgeCheck, value: "15+", label: "Jahre Erfahrung" },
];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-neutral-950">
      {/* Video background, cinematically graded */}
      <video
        className="absolute inset-0 h-full w-full object-cover [filter:brightness(0.8)_saturate(1.05)]"
        src="/assets/video/14213975_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Grading + legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#00ACA9]/15 blur-[110px]" />

      {/* Vertical scroll cue, right edge */}
      <div className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 lg:flex xl:right-10">
        <div className="flex flex-col items-center gap-4">
          <span className="h-16 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <span className="rotate-90 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
            Scrollen
          </span>
          <span className="h-16 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-14 pt-40 sm:px-6 lg:px-8 lg:pb-16">
        {/* Eyebrow */}
        <div
          className={`flex items-center gap-3 transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="h-px w-10 bg-[#00ACA9]" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            Gebäudemanagement seit über 15 Jahren
          </span>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Headline */}
          <h1
            className={`max-w-2xl transition-all delay-100 duration-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="block text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl ">
              SCHOPP<span className="text-[#00ACA9]">24</span>
            </span>
            <span className="mt-4 block text-xl font-light tracking-wide text-white/70 sm:text-2xl lg:text-3xl">
              Ihre Immobilie in den besten Händen
            </span>
          </h1>

          {/* Services + CTA */}
          <div
            className={`flex flex-col items-start gap-6 transition-all delay-200 duration-700 lg:items-end ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/60 lg:justify-end">
              {SERVICES.map((service, i) => (
                <span key={service} className="flex items-center gap-3">
                  <span>{service}</span>
                  {i < SERVICES.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                  )}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00ACA9] to-[#004884] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#00ACA9]/25 transition-all hover:shadow-xl hover:shadow-[#00ACA9]/40 hover:-translate-y-0.5"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/5"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust stat bar */}
      {/* <div
        className={`relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm transition-opacity delay-300 duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-4 sm:px-6 lg:px-8">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center justify-center gap-3 py-5 sm:justify-start sm:py-6">
              <Icon className="hidden h-5 w-5 shrink-0 text-[#00ACA9] sm:block" strokeWidth={1.75} />
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-white sm:text-xl">{value}</span>
                <span className="text-xs text-white/50 sm:text-sm">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
