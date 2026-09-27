'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../../_data/projects';
import ProjectCard from '../../projects/ProjectCard';

export default function Portfolio() {
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
      id="projekte"
      ref={sectionRef}
      className="bg-gray-50 py-20 sm:py-24 lg:py-28"
    >
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 sm:px-6 lg:px-8 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#00ACA9]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
                Projekte &amp; Referenzen
              </span>
                  <span className={`h-px w-8 bg-[#00ACA9] transition-all duration-700 delay-300 ${
                isVisible ? 'w-8' : 'w-0'
              }`} />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Objekte, die wir{' '}
              <span className="text-[#00ACA9]">betreuen.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Eine Auswahl an Wohn- und Gewerbeobjekten, die wir in Berlin und
              Brandenburg laufend bewirtschaften.
            </p>
          </div>

          <Link
            href="/projects"
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-[#00ACA9] transition-colors hover:text-[#004884] sm:inline-flex"
          >
            Alle Projekte ansehen
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Horizontal scroll strip */}
        <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          {PROJECTS.map((project) => (
            <div key={project.slug} className="w-[78%] shrink-0 snap-start sm:w-[340px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <Link
          href="/projects"
          className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ACA9] transition-colors hover:text-[#004884] sm:hidden"
        >
          Alle Projekte ansehen
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
