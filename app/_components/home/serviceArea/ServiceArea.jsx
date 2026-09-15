'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Zap, ShieldCheck, Users } from 'lucide-react';
import { LOCATIONS } from '../../../_data/locations';

const STATS = [
  { icon: Zap, title: 'Schnell vor Ort', subtitle: 'In allen Bezirken' },
  { icon: Users, title: 'Feste Ansprechpartner', subtitle: 'Zuverlässig & lokal' },
  { icon: ShieldCheck, title: '15+ Jahre', subtitle: 'Erfahrung vor Ort' },
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
      { threshold: 0.1 }
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  const half = Math.ceil(LOCATIONS.length / 2);
  const columns = [LOCATIONS.slice(0, half), LOCATIONS.slice(half)];

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 sm:px-6 lg:px-8 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid gap-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-black/5 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          {/* Left: copy + location list */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#00ACA9]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
                Einsatzgebiet
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vor Ort in <span className="text-[#00ACA9]">Berlin.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Schopp24 betreut Immobilien in ganz Berlin und Umgebung — von
              Charlottenburg über Mitte bis Köpenick, dazu Standorte in
              Brandenburg. Feste Teams vor Ort sorgen für kurze Wege und
              schnelle Reaktionszeiten.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-1">
              {columns.map((col, colIdx) => (
                <ul key={colIdx} className="space-y-1">
                  {col.map((location) => (
                    <li key={location}>
                      <Link
                        href="/contact"
                        className="group flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors hover:bg-[#00ACA9]/5 hover:text-[#004884]"
                      >
                        <span className="flex items-center gap-2">
                          <MapPin size={13} className="shrink-0 text-[#00ACA9]" />
                          {location}
                        </span>
                        <ArrowRight
                          size={13}
                          className="shrink-0 text-gray-300 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-[#00ACA9] group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#00ACA9]/15 bg-[#00ACA9]/5 p-4 text-sm text-gray-700">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ACA9]" />
              Ihr Standort ist nicht gelistet? Sprechen Sie uns an — wir sind
              schnell bei Ihnen vor Ort.
            </div>
          </div>

          {/* Right: map card */}
          <div className="flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-2xl bg-[#eef3f7]">
              <div className="relative aspect-[6/5] w-full p-6 sm:p-8">
                <img
                  src="/assets/map/berlin-districts.svg"
                  alt="Karte der von Schopp24 betreuten Berliner Bezirke"
                  className="h-full w-full object-contain"
                />

                {/* Pin marker over central Berlin (Mitte) */}
                <div className="absolute left-[48%] top-[52%] -translate-x-1/2 -translate-y-full">
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
                Kartendaten:{' '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Berlin.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-500"
                >
                  Wikimedia Commons
                </a>{' '}
                (CC BY-SA 2.5), bearbeitet
              </p>
            </div>

            {/* Stat strip */}
            <div className="mt-4 grid grid-cols-3 divide-x divide-gray-100 rounded-2xl border border-gray-100 bg-white">
              {STATS.map(({ icon: Icon, title, subtitle }) => (
                <div key={title} className="flex flex-col items-center gap-1.5 px-2 py-4 text-center">
                  <Icon size={18} strokeWidth={1.75} className="text-[#00ACA9]" />
                  <span className="text-xs font-bold text-gray-900">{title}</span>
                  <span className="text-[10px] text-gray-500">{subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
