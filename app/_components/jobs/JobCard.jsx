import Link from 'next/link';
import { ArrowRight, MapPin, Clock3 } from 'lucide-react';

export default function JobCard({ job }) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-[#00ACA9]/40 lg:p-7"
    >
      <div>
        <span className="inline-flex items-center rounded-full bg-[#00ACA9]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#00ACA9]">
          {job.department}
        </span>
        <h3 className="mt-4 text-lg font-bold text-gray-900">{job.title}</h3>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-gray-400" />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock3 size={13} className="text-gray-400" />
            {job.type}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">{job.intro}</p>
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ACA9] transition-colors group-hover:text-[#004884]">
        Stelle ansehen
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
