import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import ContactForm from "./ContactForm";
import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";

// Custom icon: half circle with a spanner above the "24/7" label
function Emergency247({ size = 24, strokeWidth = 2, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M1.5 13.5a10.5 10.5 0 0 1 21 0" />
      <path
        transform="translate(7.2 2.6) scale(0.4)"
        vectorEffect="non-scaling-stroke"
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
      <text
        x="12"
        y="22.5"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
        fontFamily="inherit"
      >
        24/7
      </text>
    </svg>
  );
}

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Telefon",
    value: " +49 30 4948080",
    href: "tel:+49304948080",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@schopp24.de",
    href: "mailto:info@schopp24.de",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Wilhelm-von-Siemens-Str. 26-28, 12277 Berlin",
    href: "https://www.google.com/maps/search/?api=1&query=Wilhelm-von-Siemens-Str.+26-28%2C+12277+Berlin",
  },
  {
    icon: Clock3,
    label: "Erreichbarkeit Office",
    value: "Mo. – Fr. 08:00 – 16:00 Uhr",
  },
  {
    icon: Emergency247,
    label: "Erreichbarkeit Notdienst",
    value: "24/7",
  },
];

export default function Contact() {
  return (
    <div className="bg-white pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealGroup className="max-w-2xl" stagger={0.12}>
          <RevealItem>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#00ACA9]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
                Kontakt
              </span>
            </div>
          </RevealItem>

          <RevealItem>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Sprechen Sie <span className="text-[#00ACA9]">mit uns.</span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Ob Anfrage, Angebot oder Notfall — wir sind für Sie da. Rufen Sie
              uns an, schreiben Sie uns eine E-Mail oder nutzen Sie das
              Kontaktformular.
            </p>
          </RevealItem>
        </RevealGroup>

        {/* Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Contact details */}
          <div className="lg:col-span-2">
            <RevealGroup className="space-y-4" delay={0.2}>
              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-start gap-3.5 rounded-2xl border border-gray-100 bg-gray-50/80 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00ACA9]/10">
                      <Icon
                        size={18}
                        strokeWidth={1.75}
                        className="text-[#00ACA9]"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-gray-900">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <RevealItem key={label} className="">
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={0.3}>
            <div className="rounded-3xl border border-gray-100 bg-gray-50/60 p-6 sm:p-10">
              <ContactForm
                context="contact-page"
                title="Schreiben Sie uns"
                subtitle="Füllen Sie das Formular aus — wir melden uns umgehend bei Ihnen."
                showMessage
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
