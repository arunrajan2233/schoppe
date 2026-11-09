"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Bump this when categories change so every visitor is asked again.
const CONSENT_VERSION = 1;
const STORAGE_KEY = "schopp24-consent";

// Optional categories the visitor can opt into. "Notwendig" is always on and
// is not stored. Only list categories the site actually uses – asking for
// consent to something that isn't there is misleading.
export const CONSENT_CATEGORIES = [
  {
    key: "analytics",
    title: "Statistik",
    description:
      "Hilft uns zu verstehen, wie Besucher die Website nutzen (Google Analytics). Die Daten werden pseudonymisiert ausgewertet.",
  },
  // {
  //   key: "marketing",
  //   title: "Marketing",
  //   description: "Ermöglicht personalisierte Werbung, z. B. über Google Ads oder Meta.",
  // },
];

const ConsentContext = createContext(null);

function readStoredConsent() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return stored?.version === CONSENT_VERSION ? stored : null;
  } catch {
    return null;
  }
}

// Removes Google Analytics cookies after consent is withdrawn.
function clearAnalyticsCookies() {
  const domain = window.location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid") {
      for (const d of ["", `; domain=${domain}`, `; domain=.${domain}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
      }
    }
  });
}

export function ConsentProvider({ children }) {
  // null = not loaded yet (avoids flashing the banner during hydration)
  const [consent, setConsent] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setConsent(readStoredConsent() ?? { decided: false });
  }, []);

  const save = useCallback(
    (choices) => {
      const next = {
        version: CONSENT_VERSION,
        decided: true,
        date: new Date().toISOString(),
        ...Object.fromEntries(CONSENT_CATEGORIES.map(({ key }) => [key, Boolean(choices[key])])),
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}

      // Scripts that already ran can't be unloaded – clean up and reload.
      const withdrawn = CONSENT_CATEGORIES.some(({ key }) => consent?.[key] && !next[key]);
      if (withdrawn) {
        clearAnalyticsCookies();
        window.location.reload();
        return;
      }

      setConsent(next);
      setSettingsOpen(false);
    },
    [consent],
  );

  const acceptAll = () =>
    save(Object.fromEntries(CONSENT_CATEGORIES.map(({ key }) => [key, true])));
  const rejectAll = () => save({});

  return (
    <ConsentContext.Provider
      value={{
        consent,
        settingsOpen,
        openSettings: () => setSettingsOpen(true),
        closeSettings: () => setSettingsOpen(false),
        save,
        acceptAll,
        rejectAll,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent must be used inside <ConsentProvider>");
  return context;
}
