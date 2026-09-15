'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
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
      { threshold: 0.2 }
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="kontakt" ref={sectionRef} className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div
        className={`relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#004884] to-[#00ACA9] px-6 py-16 text-center shadow-2xl shadow-[#00ACA9]/20 transition-all duration-700 sm:px-12 sm:py-20 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Kontakt aufnehmen
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Bereit für ein Gebäudemanagement, auf das Sie sich verlassen können?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Erzählen Sie uns von Ihrer Immobilie — wir melden uns persönlich und
            unkompliziert mit einem passenden Angebot.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#004884] shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Leistungen entdecken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
