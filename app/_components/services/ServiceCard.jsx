import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICE_ICONS } from '../../_data/serviceIcons';

export default function ServiceCard({ service }) {
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-[#00ACA9]/40 lg:p-7"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00ACA9]/10">
            <Icon size={22} strokeWidth={1.7} className="text-[#00ACA9]" />
          </div>
          <span className="text-xs font-semibold tracking-[0.15em] text-[#00ACA9]">
            {service.number}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{service.summary}</p>
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ACA9] transition-colors group-hover:text-[#004884]">
        Mehr erfahren
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
