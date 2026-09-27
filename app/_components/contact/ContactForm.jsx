'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const inputClasses =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#00ACA9] focus:outline-none focus:ring-2 focus:ring-[#00ACA9]/20';

export default function ContactForm({
  context,
  title = 'Kontakt aufnehmen',
  subtitle = 'Wir melden uns persönlich und unkompliziert bei Ihnen.',
  showMessage = false,
  compact = false,
}) {
  const [values, setValues] = useState({
    name: '',
    company: '',
    property: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [error, setError] = useState('');

  function handleChange(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !values.name.trim() ||
      !values.company.trim() ||
      !values.phone.trim() ||
      !values.email.trim()
    ) {
      setError('Bitte füllen Sie alle Pflichtfelder (*) aus.');
      return;
    }
    if (showMessage && !values.message.trim()) {
      setError('Bitte teilen Sie uns kurz Ihr Anliegen mit.');
      return;
    }
    setError('');
    setStatus('submitting');

    // No backend is wired up yet -- this simulates a submit so the form is
    // demo-ready. Replace with a real API route / email service call.
    window.setTimeout(() => setStatus('success'), 600);
  }

  if (status === 'success') {
    return (
      <div
        className={`flex flex-col items-center rounded-2xl border border-[#00ACA9]/20 bg-[#00ACA9]/5 text-center ${
          compact ? 'p-6' : 'p-10'
        }`}
      >
        <CheckCircle2 size={32} className="text-[#00ACA9]" />
        <h3 className="mt-3 text-base font-bold text-gray-900">Vielen Dank!</h3>
        <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-gray-600">
          Ihre Anfrage ist bei uns eingegangen. Wir melden uns schnellstmöglich
          bei Ihnen zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'text-left' : ''}>
      {(title || subtitle) && (
        <div className={compact ? 'mb-4 text-center' : 'mb-6'}>
          {title && <h3 className="text-base font-bold text-gray-900">{title}</h3>}
          {subtitle && (
            <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{subtitle}</p>
          )}
        </div>
      )}

      <div className="space-y-3.5">
        <div>
          <label htmlFor={`name-${context}`} className="mb-1.5 block text-xs font-medium text-gray-600">
            Name *
          </label>
          <input
            id={`name-${context}`}
            type="text"
            required
            value={values.name}
            onChange={handleChange('name')}
            placeholder="Ihr vollständiger Name"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor={`company-${context}`} className="mb-1.5 block text-xs font-medium text-gray-600">
            Firma *
          </label>
          <input
            id={`company-${context}`}
            type="text"
            required
            value={values.company}
            onChange={handleChange('company')}
            placeholder="Name Ihres Unternehmens"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor={`property-${context}`} className="mb-1.5 block text-xs font-medium text-gray-600">
            Objekt <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            id={`property-${context}`}
            type="text"
            value={values.property}
            onChange={handleChange('property')}
            placeholder="Adresse oder Bezeichnung des Objekts"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor={`phone-${context}`} className="mb-1.5 block text-xs font-medium text-gray-600">
            Telefonnummer *
          </label>
          <input
            id={`phone-${context}`}
            type="tel"
            required
            value={values.phone}
            onChange={handleChange('phone')}
            placeholder="+49 30 123 456 78"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor={`email-${context}`} className="mb-1.5 block text-xs font-medium text-gray-600">
            E-Mail *
          </label>
          <input
            id={`email-${context}`}
            type="email"
            required
            value={values.email}
            onChange={handleChange('email')}
            placeholder="ihre@email.de"
            className={inputClasses}
          />
        </div>

        {showMessage && (
          <div>
            <label htmlFor={`message-${context}`} className="mb-1.5 block text-xs font-medium text-gray-600">
              Ihr Anliegen *
            </label>
            <textarea
              id={`message-${context}`}
              required
              rows={4}
              value={values.message}
              onChange={handleChange('message')}
              placeholder="Erzählen Sie uns kurz von Ihrer Immobilie und Ihrem Anliegen."
              className={`${inputClasses} resize-none`}
            />
          </div>
        )}
      </div>

      {error && <p className="mt-3 text-xs font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00ACA9] to-[#004884] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00ACA9]/20 transition-all hover:shadow-xl disabled:opacity-70"
      >
        {status === 'submitting' ? 'Wird gesendet…' : 'Anfrage senden'}
        {status !== 'submitting' && (
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        )}
      </button>

      <p className="mt-3 text-center text-[11px] text-gray-400">
        Mit dem Absenden stimmen Sie unserer{' '}
        <a href="/datenschutz" className="underline hover:text-gray-500">
          Datenschutzerklärung
        </a>{' '}
        zu.
      </p>
    </form>
  );
}
