'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const STATS = [
  { value: '15+', label: 'Jahre Erfahrung' },
  { value: '500+', label: 'Zufriedene Kunden' },
  { value: '100%', label: 'Zuverlässigkeit' },
  { value: '24/7', label: 'Erreichbar' },
];

const TESTIMONIALS = [
  {
    id: 'hausverwaltung-mitte',
    quote:
      'Seit der Zusammenarbeit mit Schopp24 läuft die Betreuung unserer Objekte spürbar reibungsloser. Absprachen werden eingehalten, Anfragen zügig bearbeitet.',
    author: 'Hausverwaltung',
    location: 'Berlin-Mitte',
  },
  {
    id: 'weg-charlottenburg',
    quote:
      'Sauberkeit und Pflege der Außenanlagen sind konstant auf hohem Niveau. Man merkt, dass hier mit festem Personal statt wechselnden Kräften gearbeitet wird.',
    author: 'Eigentümergemeinschaft',
    location: 'Berlin-Charlottenburg',
  },
  {
    id: 'gewerbe-potsdam',
    quote:
      'Als Gewerbekunde schätzen wir vor allem die schnelle Erreichbarkeit und den einen festen Ansprechpartner für alle Anliegen rund um unser Objekt.',
    author: 'Gewerbekunde',
    location: 'Potsdam',
  },
];

export default function Testimonials() {
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

  return (
    <section
      id="referenzen"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#04141f] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#00ACA9]/10 blur-[130px]" />

      <div
        className={`relative mx-auto max-w-7xl px-4 transition-all duration-700 sm:px-6 lg:px-8 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#00ACA9]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
              Zahlen &amp; Stimmen
            </span>
            <span className="h-px w-7 bg-[#00ACA9]" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Worauf unsere Kunden{' '}
            <span className="text-[#00ACA9]">zählen.</span>
          </h2>
        </div>

        {/* Stats row */}
        <div className="mb-16 grid grid-cols-2 gap-y-8 divide-white/10 sm:grid-cols-4 sm:divide-x">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/50 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-[#00ACA9]/30"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#00ACA9] text-[#00ACA9]" />
                  ))}
                </div>
                <Quote size={22} className="text-white/15" />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/80">{t.quote}</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-white/50">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
