import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../_data/services';
import ServiceCard from './ServiceCard';
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal';

export default function Services() {
  return (
    <div className="bg-white pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealGroup className="mb-12 max-w-2xl" stagger={0.12}>
          <RevealItem>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#00ACA9]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
                Unsere Leistungen
              </span>
            </div>
          </RevealItem>

          <RevealItem>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Fünf Leistungsbereiche.{' '}
              <span className="text-[#00ACA9]">Ein Ansprechpartner.</span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Von der Unterhaltsreinigung bis zur Notöffnung der Wohnungstür – Schopp24
              übernimmt die gesamte Bewirtschaftung Ihrer Immobilie aus einer Hand.
              Klicken Sie auf eine Leistung für Details.
            </p>
          </RevealItem>
        </RevealGroup>

        {/* Grid */}
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* CTA */}
        <Reveal className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 px-6 py-10 text-center">
          <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            Nicht die passende Leistung dabei? Sprechen Sie uns an — wir finden eine
            Lösung für Ihre Immobilie.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00ACA9] to-[#004884] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00ACA9]/20 transition-all hover:shadow-xl hover:shadow-[#00ACA9]/30"
          >
            Kontakt aufnehmen
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
