import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  Handshake,
  BadgeCheck,
} from "lucide-react";
import Team from "../home/team/Team";
import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Zuverlässigkeit",
    description:
      "Vereinbarte Termine und Leistungen halten wir ein - ohne Ausreden, mit einem festen Ansprechpartner für jedes Objekt.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    description:
      "Wir setzen auf umweltfreundliche Reinigungsmittel und ressourcenschonende Arbeitsweisen, wo immer es möglich ist.",
  },
  {
    icon: Handshake,
    title: "Partnerschaftlichkeit",
    description:
      "Wir verstehen uns als Generalunternehmer und Partner für Hausverwaltungen, Immobiliengesellschaften und Eigentümergemeinschaften.",
  },
  {
    icon: BadgeCheck,
    title: "Qualität",
    description:
      "Regelmäßige Kontrollen und geschulte Teams sorgen für gleichbleibend hohe Standards bei jedem Einsatz.",
  },
];

const STATS = [
  { value: "2011", label: "Gegründet" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Zufriedene Kunden" },
  { value: "100%", label: "Zuverlässigkeit" },
];

export default function About() {
  return (
    <div className="bg-white pb-20 pt-32 sm:pt-40">
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealGroup className="max-w-3xl" stagger={0.12}>
          <RevealItem>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#00ACA9]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
                Über uns
              </span>
            </div>
          </RevealItem>

          <RevealItem>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Ihr zuverlässiger Partner für{" "}
              <span className="text-[#00ACA9]">Gebäudemanagement.</span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Schopp24 Gebäudemanagement ist ihr Ansprechpartner für Reinigung,
              Glas & Fassade, Gartenpflege sowie Hausmeister- und
              Handwerkerservice in Berlin und Brandenburg. Wir betreuen Wohn-
              und Gewerbeimmobilien als Generalunternehmer - mit festen Teams,
              kurzen Wegen und einem klaren Anspruch: Handschlagqualität statt
              Wechselpersonal.
            </p>
          </RevealItem>
        </RevealGroup>
      </div>

      {/* Stats */}
      {/* <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div> */}

      {/* Story */}
      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealGroup
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
          stagger={0.15}
        >
          <RevealItem className="">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Unsere Geschichte
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Schopp24 mit der Vision gegründet, Hausverwaltungen,
              Eigentümergemeinschaften und Gewerbekunden eine zentrale und
              zuverlässige Lösung für die ganzheitliche Bewirtschaftung ihrer
              Immobilien zu bieten. Statt mit zahlreichen einzelnen
              Dienstleistern zu arbeiten, erhalten Kunden bei Schopp24 sämtliche
              Leistungen gebündelt aus einer Hand.
            </p>
          </RevealItem>
          <RevealItem className="">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Wie wir arbeiten
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Aus dieser Idee ist ein Unternehmen mit festen Objektteams,
              moderner Ausstattung und einer Vielzahl betreuter Objekte
              geworden. Dabei ist unser Anspruch gleich geblieben: jede
              Immobilie so zu pflegen, als wäre es unsere eigene.
            </p>
          </RevealItem>
        </RevealGroup>
      </div>

      {/* Values */}
      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Wofür wir stehen
          </h2>
        </Reveal>
        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <RevealItem key={value.title}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-[#00ACA9]/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00ACA9]/10">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="text-[#00ACA9]"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    {value.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      {/* Team (shared with homepage) */}
      <div className="mt-8">
        <Team showCta={false} />
      </div>

      {/* CTA */}
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 px-6 py-10 text-center">
          <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            Lernen Sie uns kennen – wir freuen uns auf die gemeinsame
            Zusammenarbeit.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00ACA9] to-[#004884] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00ACA9]/20 transition-all hover:shadow-xl hover:shadow-[#00ACA9]/30"
          >
            Kontakt aufnehmen
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
