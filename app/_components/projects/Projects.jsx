import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../_data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div className="bg-white pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-7 bg-[#00ACA9]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
              Projekte &amp; Referenzen
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Objekte, die wir{' '}
            <span className="text-[#00ACA9]">betreuen.</span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Ein Überblick über Wohn- und Gewerbeobjekte, die Schopp24 Gebäudemanagement
            in Berlin und Brandenburg laufend betreut. Klicken Sie auf ein Projekt für
            Details zum Leistungsumfang.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 px-6 py-10 text-center">
          <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            Ihre Immobilie ist noch nicht dabei? Erzählen Sie uns von Ihrem Objekt —
            wir erstellen Ihnen ein passendes Angebot.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00ACA9] to-[#004884] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00ACA9]/20 transition-all hover:shadow-xl hover:shadow-[#00ACA9]/30"
          >
            Kontakt aufnehmen
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
