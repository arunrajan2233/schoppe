import { Phone, Mail, MapPin, Clock3 } from 'lucide-react';
import ContactForm from './ContactForm';

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+49 30 123 456 78',
    href: 'tel:+493012345678',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'info@schopp24.de',
    href: 'mailto:info@schopp24.de',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Musterstraße 12, 10115 Berlin',
    href: 'https://www.google.com/maps/search/?api=1&query=Musterstra%C3%9Fe+12%2C+10115+Berlin',
  },
  {
    icon: Clock3,
    label: 'Erreichbarkeit',
    value: 'Mo–Fr 08:00–18:00 Uhr · Notdienst 24/7',
  },
];

export default function Contact() {
  return (
    <div className="bg-white pb-20 pt-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#00ACA9]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00ACA9]">
              Kontakt
            </span>
            <span className="h-px w-7 bg-[#00ACA9]" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Sprechen Sie{' '}
            <span className="text-[#00ACA9]">mit uns.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Ob Anfrage, Angebot oder Notfall — wir sind für Sie da. Rufen Sie
            uns an, schreiben Sie uns eine E-Mail oder nutzen Sie das
            Kontaktformular.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Contact details */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-start gap-3.5 rounded-2xl border border-gray-100 bg-gray-50/80 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00ACA9]/10">
                      <Icon size={18} strokeWidth={1.75} className="text-[#00ACA9]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-gray-900">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-gray-100 bg-gray-50/60 p-6 sm:p-10">
              <ContactForm
                context="contact-page"
                title="Schreiben Sie uns"
                subtitle="Füllen Sie das Formular aus — wir melden uns in der Regel innerhalb eines Werktages."
                showMessage
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
