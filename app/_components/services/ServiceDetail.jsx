'use client';

import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import ServiceCard from './ServiceCard';
import ContactForm from '../contact/ContactForm';
import { SERVICE_ICONS } from '../../_data/serviceIcons';
import { EASE, Reveal, RevealGroup, RevealItem } from '../motion/Reveal';

export default function ServiceDetail({ service, related }) {
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <div className="bg-white pb-20 pt-24">
      {/* Hero banner */}
      <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] lg:h-[440px]">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.src = `https://placehold.co/1600x900/00ACA9/FFFFFF?text=${encodeURIComponent(
              service.title
            )}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        <RevealGroup className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8" stagger={0.12} delay={0.15}>
          <RevealItem className="">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00ACA9] shadow-lg shadow-[#00ACA9]/30">
              <Icon size={28} strokeWidth={1.6} className="text-white" />
            </div>
          </RevealItem>
          <RevealItem className="">
            <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
          </RevealItem>
          <RevealItem className="">
            <p className="mt-2 max-w-xl text-sm text-white/70 sm:text-base">{service.summary}</p>
          </RevealItem>
        </RevealGroup>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Im Überblick</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              {service.intro}
            </p>

            <h2 className="mt-10 text-xl font-bold text-gray-900 sm:text-2xl">
              Das gehört dazu
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00ACA9]/10">
                    <Check size={11} strokeWidth={3} className="text-[#00ACA9]" />
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Sidebar */}
          <Reveal className="lg:col-span-1" delay={0.15}>
            <aside className="h-full">
              <div className="sticky top-28 rounded-2xl border border-gray-100 bg-gray-50/80 p-6">
                <ContactForm
                  context={`service-${service.slug}`}
                  title={`Interesse an ${service.title}?`}
                  subtitle="Wir melden uns persönlich und erstellen Ihnen ein passendes Angebot."
                  compact
                />
              </div>
            </aside>
          </Reveal>
        </div>
      </div>

      {/* Related services */}
      {related?.length > 0 && (
        <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Weitere Leistungen</h2>
          <RevealGroup className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <RevealItem key={s.slug}>
                <ServiceCard service={s} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      )}
    </div>
  );
}
