'use client';

import Link from 'next/link';
import { ArrowRight, Check, MapPin, Tag, CalendarDays, Ruler } from 'lucide-react';
import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import { EASE, Reveal, RevealGroup, RevealItem } from '../motion/Reveal';

export default function ProjectDetail({ project, related }) {
  return (
    <div className="bg-white pb-20 pt-24">
      {/* Hero banner */}
      <div className="relative h-[340px] w-full overflow-hidden sm:h-[420px] lg:h-[500px]">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.src = `https://placehold.co/1600x900/004884/FFFFFF?text=${encodeURIComponent(
              project.title
            )}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

        <RevealGroup className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8" stagger={0.12} delay={0.15}>
          <RevealItem className="">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
              <MapPin size={12} />
              {project.location}
            </span>
          </RevealItem>
          <RevealItem className="">
            <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
          </RevealItem>
          <RevealItem className="">
            <p className="mt-2 text-sm text-white/70 sm:text-base">{project.category}</p>
          </RevealItem>
        </RevealGroup>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main column */}
          <Reveal className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Über das Projekt</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-10 text-xl font-bold text-gray-900 sm:text-2xl">Leistungsumfang</h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {project.scope.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00ACA9]/10">
                    <Check size={11} strokeWidth={3} className="text-[#00ACA9]" />
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {project.gallery?.length > 0 && (
              <>
                <h2 className="mt-10 text-xl font-bold text-gray-900 sm:text-2xl">Impressionen</h2>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {project.gallery.map((src, i) => (
                    <div key={i} className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={src}
                        alt={`${project.title} – Impression ${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/400x400/27AAA7/FFFFFF?text=${encodeURIComponent(
                            project.title
                          )}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </Reveal>

          {/* Sidebar */}
          <Reveal className="lg:col-span-1" delay={0.15}>
            <aside className="h-full">
              <div className="sticky top-28 rounded-2xl border border-gray-100 bg-gray-50/80 p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Projektdaten
                </h3>
                <dl className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-[#00ACA9]" />
                    <div>
                      <dt className="text-xs text-gray-500">Standort</dt>
                      <dd className="text-sm font-semibold text-gray-900">{project.location}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Tag size={16} className="mt-0.5 shrink-0 text-[#00ACA9]" />
                    <div>
                      <dt className="text-xs text-gray-500">Kategorie</dt>
                      <dd className="text-sm font-semibold text-gray-900">{project.category}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarDays size={16} className="mt-0.5 shrink-0 text-[#00ACA9]" />
                    <div>
                      <dt className="text-xs text-gray-500">Betreut seit</dt>
                      <dd className="text-sm font-semibold text-gray-900">{project.since}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Ruler size={16} className="mt-0.5 shrink-0 text-[#00ACA9]" />
                    <div>
                      <dt className="text-xs text-gray-500">Objektgröße</dt>
                      <dd className="text-sm font-semibold text-gray-900">{project.size}</dd>
                    </div>
                  </div>
                </dl>

                <Link
                  href="/contact"
                  className="group mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00ACA9] to-[#004884] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00ACA9]/20 transition-all hover:shadow-xl"
                >
                  Ähnliches Projekt anfragen
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>

      {/* Related projects */}
      {related?.length > 0 && (
        <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Weitere Projekte</h2>
          <RevealGroup className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <RevealItem key={p.slug}>
                <ProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      )}
    </div>
  );
}
