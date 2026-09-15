import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JOBS } from '../../_data/jobs';
import JobCard from './JobCard';

export default function Jobs() {
  return (
    <div className="bg-white pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-7 bg-[#00ACA9]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
              Karriere
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Werden Sie Teil{' '}
            <span className="text-[#00ACA9]">unseres Teams.</span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Wir suchen laufend engagierte Mitarbeiter:innen für Reinigung,
            Gartenpflege sowie Hausmeister- und Handwerkerservice in Berlin
            und Brandenburg. Werfen Sie einen Blick auf unsere offenen Stellen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 px-6 py-10 text-center">
          <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            Keine passende Stelle dabei? Wir freuen uns auch über
            Initiativbewerbungen.
          </p>
          <Link
            href="mailto:karriere@schopp24.de?subject=Initiativbewerbung"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00ACA9] to-[#004884] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00ACA9]/20 transition-all hover:shadow-xl hover:shadow-[#00ACA9]/30"
          >
            Initiativ bewerben
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
