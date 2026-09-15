'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl shadow-lg shadow-black/5"
    >
      <div className="aspect-[4/5] w-full bg-gradient-to-br from-gray-200 to-gray-300 sm:aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = `https://placehold.co/600x450/004884/FFFFFF?text=${encodeURIComponent(
              project.title
            )}`;
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
          <MapPin size={10} />
          {project.location}
        </span>
        <h3 className="mt-3 text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-1 text-xs text-white/70">{project.category}</p>
      </div>

      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <ArrowUpRight size={16} />
      </div>
    </Link>
  );
}
