import Link from "next/link";
import Image from "next/image";
import {
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
} from "./SocialIcons";
import { SERVICES } from "../../_data/services";

const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/projects", label: "Projekte" },
  { href: "/jobs", label: "Jobs" },
  { href: "/services", label: "Leistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
];

// TODO: swap in the real profile URLs once the accounts exist.
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: InstagramIcon,
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedinIcon },
  { label: "WhatsApp", href: "https://wa.me/49304948080", Icon: WhatsappIcon },
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#04141f] text-white/70">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00ACA9]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Schopp24 Gebäudemanagement"
                width={334}
                height={123}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Ihr zuverlässiger Partner für professionelles Gebäudemanagement in
              Berlin & Brandenburg.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-[#00ACA9]/50 hover:text-[#00ACA9]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#00ACA9]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-[#00ACA9]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Kontakt
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Rund um die Uhr erreichbar für Anfragen zu Ihrer Immobilie.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#00ACA9] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#00918e]"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {year} Schopp24 Gebäudemanagement. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="transition-colors hover:text-white/70"
            >
              Impressum
            </Link>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-white/70"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
