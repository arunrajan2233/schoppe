'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../../_data/services';
import { SERVICE_ICONS } from '../../../_data/serviceIcons';

export default function Services() {
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

  const [hero, ...tiles] = SERVICES;
  const HeroIcon = SERVICE_ICONS[hero.icon];

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 py-16 sm:py-20 lg:px-8"
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-7 bg-[#00ACA9]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
                Unsere Leistungen
              </span>
                  <span className={`h-px w-8 bg-[#00ACA9] transition-all duration-700 delay-300 ${
                isVisible ? 'w-8' : 'w-0'
              }`} />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Fünf Leistungsbereiche.{' '}
              <span className="text-[#00ACA9]">Ein Ansprechpartner.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Von der Unterhaltsreinigung bis zur Notöffnung der Wohnungstür – Schopp24
              übernimmt die gesamte Bewirtschaftung Ihrer Immobilie aus einer Hand.
            </p>
          </div>

          <Link
            href="/services"
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-[#00ACA9] transition-colors hover:text-[#004884] sm:inline-flex"
          >
            Alle Leistungen ansehen
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Hero tile */}
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl border border-[#00ACA9]/15 bg-[#EAF7F6] p-7 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00ACA9]">
                  <HeroIcon size={28} strokeWidth={1.6} className="text-white" />
                </div>
                <span className="text-xs font-semibold tracking-[0.15em] text-[#00ACA9]">
                  {hero.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{hero.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 mb-5 max-w-md">
                {hero.intro}
              </p>

              <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5">
                {hero.bullets.slice(0, 4).map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white">
                      <Check size={9} strokeWidth={3} className="text-[#00ACA9]" />
                    </span>
                    <span className="text-sm text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/services/${hero.slug}`}
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ACA9] transition-colors hover:text-[#004884]"
            >
              Mehr erfahren
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Compact tiles */}
          {tiles.map((tile) => {
            const Icon = SERVICE_ICONS[tile.icon];
            return (
              <div
                key={tile.slug}
                className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between transition-colors hover:border-[#00ACA9]/40"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00ACA9]/10 mb-3.5">
                    <Icon size={20} strokeWidth={1.7} className="text-[#00ACA9]" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">{tile.title}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">{tile.summary}</p>
                </div>

                <Link
                  href={`/services/${tile.slug}`}
                  className="group mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#00ACA9] transition-colors hover:text-[#004884]"
                >
                  Mehr erfahren
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <Link
          href="/services"
          className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ACA9] transition-colors hover:text-[#004884] sm:hidden"
        >
          Alle Leistungen ansehen
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
