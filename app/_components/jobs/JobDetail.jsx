import Link from 'next/link';
import { ArrowRight, MapPin, Clock3, Briefcase, Check } from 'lucide-react';
import JobCard from './JobCard';
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal';

function ChecklistSection({ title, items }) {
  return (
    <>
      <h2 className="mt-10 text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00ACA9]/10">
              <Check size={11} strokeWidth={3} className="text-[#00ACA9]" />
            </span>
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function JobDetail({ job, related }) {
  const mailtoHref = `mailto:karriere@schopp24.de?subject=${encodeURIComponent(
    `Bewerbung: ${job.title}`
  )}`;

  return (
    <div className="bg-white pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-[#00ACA9]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#00ACA9]">
            {job.department}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {job.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-[#00ACA9]" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 size={15} className="text-[#00ACA9]" />
              {job.type}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={15} className="text-[#00ACA9]" />
              {job.department}
            </span>
          </div>
        </Reveal>

        {/* Content */}
        <div className="mt-10 grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{job.intro}</p>

            <ChecklistSection title="Ihre Aufgaben" items={job.responsibilities} />
            <ChecklistSection title="Ihr Profil" items={job.requirements} />
            <ChecklistSection title="Wir bieten" items={job.benefits} />
          </Reveal>

          {/* Sidebar */}
          <Reveal className="lg:col-span-1" delay={0.15}>
            <aside className="h-full">
              <div className="sticky top-28 rounded-2xl border border-gray-100 bg-gray-50/80 p-6 text-center">
                <h3 className="text-base font-bold text-gray-900">Interesse geweckt?</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Senden Sie uns Ihre Bewerbung — wir melden uns zeitnah bei Ihnen.
                </p>
                <a
                  href={mailtoHref}
                  className="group mt-5 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00ACA9] to-[#004884] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00ACA9]/20 transition-all hover:shadow-xl"
                >
                  Jetzt bewerben
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </aside>
          </Reveal>
        </div>

        {/* Related jobs */}
        {related?.length > 0 && (
          <div className="mt-20">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Weitere Stellen</h2>
            <RevealGroup className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((j) => (
                <RevealItem key={j.slug}>
                  <JobCard job={j} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        )}
      </div>
    </div>
  );
}
