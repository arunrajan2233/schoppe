"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Zap, ShieldCheck, Users } from "lucide-react";

const STATS = [
  { icon: Zap, title: "Schnell vor Ort", subtitle: "In allen Bezirken" },
  {
    icon: Users,
    title: "Feste Ansprechpartner",
    subtitle: "Zuverlässig & lokal",
  },
  { icon: ShieldCheck, title: "15+ Jahre", subtitle: "Erfahrung vor Ort" },
];

export default function ServiceArea() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 sm:px-6 lg:px-8 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-black/5 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          {/* Left: copy */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#00ACA9]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
                Einsatzgebiet
              </span>
                  <span className={`h-px w-8 bg-[#00ACA9] transition-all duration-700 delay-300 ${
                isVisible ? 'w-8' : 'w-0'
              }`} />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vor Ort in <br />{" "}
              <span className="text-[#00ACA9]">Berlin & Brandenburg</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Schopp24 betreut Immobilien in ganz Berlin und Umgebung – von
              Charlottenburg über Mitte bis Köpenick. Auch in Potsdam und an
              verschiedenen Standorten in Brandenburg sind wir für Sie im
              Einsatz. Unsere festen Teams vor Ort sorgen für kurze Wege und
              schnelle Reaktionszeiten.
            </p>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#00ACA9]/15 bg-[#00ACA9]/5 p-4 text-sm text-gray-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ACA9]" />
              Sie haben eine Immobilie in Berlin oder Brandenburg? Sprechen Sie
              uns an — wir sind schnell bei Ihnen vor Ort.
            </div>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#004884] transition-colors hover:text-[#00ACA9]"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right: map card */}
          <div className="flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-2xl bg-[#eef3f7] p-6 sm:p-8">
              {/* Legend: both regions are the service area */}
              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-medium text-gray-600">
                <span className="font-semibold uppercase tracking-[0.15em] text-gray-400">
                  Unser Einsatzgebiet
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#00ACA9]" />
                  Berlin
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#0d2b45]" />
                  Brandenburg
                </span>
              </div>

              {/* Aspect ratio matches the SVG viewBox so the % pin positions line up */}
              <div className="relative mx-auto aspect-[1060/1092] w-full max-w-md">
                <img
                  src="/assets/map/berlin-brandenburg.svg"
                  alt="Karte von Berlin und Brandenburg – Einsatzgebiet von Schopp24"
                  className="h-full w-full"
                />

                {/* Brandenburg badge, styled like the Berlin one */}
                <span className="pointer-events-none absolute left-[38%] top-[74%] -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#0d2b45] shadow-md">
                  Brandenburg
                </span>

                {/* Pin marker over Berlin */}
                <div className="absolute left-[60.9%] top-[47.6%] -translate-x-1/2 -translate-y-full">
                  <div className="flex flex-col items-center">
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#00ACA9] shadow-lg shadow-[#00ACA9]/40 ring-4 ring-white">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-[#00ACA9] opacity-40" />
                      <MapPin size={16} className="relative text-white" />
                    </span>
                    <span className="mt-1 rounded-full bg-[#004884] px-3 py-1 text-[11px] font-semibold text-white shadow-md">
                      Berlin
                    </span>
                  </div>
                </div>
              </div>

              <p className="absolute bottom-2 right-3 text-[9px] text-gray-400">
                Kartendaten:{" "}
                <a
                  href="https://www.naturalearthdata.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-500"
                >
                  Natural Earth
                </a>
              </p>
            </div>

            {/* Stat strip */}
            {/* <div className="mt-4 grid grid-cols-3 divide-x divide-gray-100 rounded-2xl border border-gray-100 bg-white">
              {STATS.map(({ icon: Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="flex flex-col items-center gap-1.5 px-2 py-4 text-center"
                >
                  <Icon
                    size={18}
                    strokeWidth={1.75}
                    className="text-[#00ACA9]"
                  />
                  <span className="text-xs font-bold text-gray-900">
                    {title}
                  </span>
                  <span className="text-[10px] text-gray-500">{subtitle}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
