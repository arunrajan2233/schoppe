"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Cookie, X } from "lucide-react";
import { CONSENT_CATEGORIES, useConsent } from "./ConsentProvider";

// Both buttons share one style on purpose: German law (TDDDG / DSGVO) requires
// "reject" to be as easy and as visible as "accept".
const BUTTON =
  "flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors";
const PRIMARY = `${BUTTON} bg-[#00ACA9] text-white hover:bg-[#00918e]`;

function Toggle({ checked, disabled, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        checked ? "bg-[#00ACA9]" : "bg-gray-300"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}

function SettingsDialog() {
  const { consent, save, acceptAll, closeSettings } = useConsent();
  const [choices, setChoices] = useState(() =>
    Object.fromEntries(CONSENT_CATEGORIES.map(({ key }) => [key, Boolean(consent?.[key])])),
  );

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && consent?.decided && closeSettings();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [consent, closeSettings]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 backdrop-blur-sm sm:items-center"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="cookie-settings-title" className="text-xl font-bold text-gray-900">
            Cookie-Einstellungen
          </h2>
          {consent?.decided && (
            <button
              type="button"
              onClick={closeSettings}
              aria-label="Schließen"
              className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Wählen Sie, welche Dienste wir verwenden dürfen. Ihre Auswahl können Sie
          jederzeit über „Cookie-Einstellungen“ im Footer ändern.
        </p>

        <ul className="mt-6 space-y-3">
          <li className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-gray-900">Notwendig</span>
              <Toggle checked disabled label="Notwendig (immer aktiv)" />
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
              Für den Betrieb der Website erforderlich, z. B. zum Speichern Ihrer
              Cookie-Auswahl. Immer aktiv.
            </p>
          </li>
          {CONSENT_CATEGORIES.map(({ key, title, description }) => (
            <li key={key} className="rounded-2xl border border-gray-100 p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-gray-900">{title}</span>
                <Toggle
                  checked={choices[key]}
                  label={title}
                  onChange={(value) => setChoices((c) => ({ ...c, [key]: value }))}
                />
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => save(choices)} className={PRIMARY}>
            Auswahl speichern
          </button>
          <button type="button" onClick={acceptAll} className={PRIMARY}>
            Alle akzeptieren
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CookieBanner() {
  const { consent, settingsOpen, openSettings, acceptAll, rejectAll } = useConsent();
  const showBanner = consent && !consent.decided && !settingsOpen;

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            role="region"
            aria-label="Cookie-Hinweis"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.4 }}
            className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-gray-100 bg-white p-5 shadow-2xl shadow-black/15 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-md sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00ACA9]/10 text-[#00ACA9]">
                <Cookie size={20} />
              </span>
              <h2 className="text-base font-bold text-gray-900">
                Wir respektieren Ihre Privatsphäre
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Wir nutzen technisch notwendige Cookies sowie – nur mit Ihrer
              Einwilligung – Statistik-Dienste wie Google Analytics, um unsere
              Website zu verbessern. Ihre Einwilligung können Sie jederzeit
              widerrufen. Mehr in unserer{" "}
              <Link href="/datenschutz" className="font-medium text-[#004884] underline hover:text-[#00ACA9]">
                Datenschutzerklärung
              </Link>
              .
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button type="button" onClick={rejectAll} className={PRIMARY}>
                Nur notwendige
              </button>
              <button type="button" onClick={acceptAll} className={PRIMARY}>
                Alle akzeptieren
              </button>
            </div>
            <button
              type="button"
              onClick={openSettings}
              className="mt-3 w-full text-center text-xs font-medium text-gray-500 underline-offset-2 hover:text-[#004884] hover:underline"
            >
              Einstellungen anpassen
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{settingsOpen && <SettingsDialog />}</AnimatePresence>
    </>
  );
}

// Footer / privacy-page link that reopens the settings.
export function CookieSettingsLink({ className, children = "Cookie-Einstellungen" }) {
  const { openSettings } = useConsent();
  return (
    <button type="button" onClick={openSettings} className={className}>
      {children}
    </button>
  );
}
