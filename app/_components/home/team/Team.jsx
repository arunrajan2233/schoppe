"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  UserCog,
  SprayCan,
  HardHat,
  PhoneCall,
} from "lucide-react";

const TEAM = [
  {
    id: "geschaeftsfuehrung",
    role: "Geschäftsführung",
    focus: "Strategie, Kundenbeziehungen & Qualitätssicherung",
    icon: UserCog,
  },
  {
    id: "reinigung",
    role: "Teamleitung Reinigung",
    focus: "Einsatzplanung & Qualitätskontrolle vor Ort",
    icon: SprayCan,
  },
  {
    id: "hausmeister",
    role: "Teamleitung Hausmeisterservice",
    focus: "Technische Betreuung & Instandhaltung",
    icon: HardHat,
  },
  {
    id: "kundenservice",
    role: "Kundenservice & Koordination",
    focus: "Ansprechpartner für Anfragen & Termine",
    icon: PhoneCall,
  },
];

export default function Team({ showCta = true }) {
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
      { threshold: 0.15 },
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ueber-uns"
      ref={sectionRef}
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div
        className={`mx-auto max-w-4xl px-4 text-center transition-all duration-700 sm:px-6 lg:px-8 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-[#00ACA9]" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
            Über uns
          </span>
          <span className="h-px w-7 bg-[#00ACA9]" />
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Menschen, die <span className="text-[#00ACA9]">anpacken.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          Unser qualifiziertes Team verfügt über langjährige Erfahrungen in den
          Bereichen: Sanitär, Heizung, Reinigung, Trockenbau, Maler-, sowie
          Elektroarbeiten. Gemeinsam arbeiten wir Hand in Hand von der Anfrage
          bis zur Fertigstellung.
        </p>

        <blockquote className="mx-auto mt-8 max-w-xl border-l-4 border-[#00ACA9] pl-5 text-left text-base italic leading-relaxed text-gray-700 sm:text-lg">
          „Wir betreuen jede Immobilie so, als wäre es unsere eigene — mit
          Handschlagqualität und einem Ansprechpartner, der wirklich zuständig
          ist.“
          <footer className="mt-3 text-sm not-italic font-semibold text-gray-500">
            — Geschäftsführung, Schopp24
          </footer>
        </blockquote>
      </div>

      {/* Team grid */}
      <div
        className={`mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-5 px-4 transition-all delay-200 duration-700 sm:px-6 lg:grid-cols-4 lg:px-8 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {TEAM.map((member) => {
          const Icon = member.icon;
          return (
            <div
              key={member.id}
              className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50/80 p-6 text-center transition-all hover:-translate-y-1 hover:border-[#00ACA9]/30 hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00ACA9] to-[#004884] shadow-lg shadow-[#00ACA9]/20">
                <Icon size={26} strokeWidth={1.6} className="text-white" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-gray-900">
                {member.role}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                {member.focus}
              </p>
            </div>
          );
        })}
      </div>

      {showCta && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ACA9] transition-colors hover:text-[#004884]"
          >
            Mehr über uns erfahren
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      )}
    </section>
  );
}
