import { CookieSettingsLink } from "../consent/CookieBanner";

export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-neutral-900">Datenschutz</h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Unsere Datenschutzerklärung gemäß DSGVO folgt hier in Kürze.
      </p>

      {/* TODO: have this section checked as part of the full privacy policy. */}
      <section className="mt-12 max-w-2xl space-y-4 text-neutral-600">
        <h2 className="text-xl font-semibold text-neutral-900">
          Cookies und Einwilligung
        </h2>
        <p>
          Beim ersten Besuch fragen wir Sie, welche Dienste wir verwenden dürfen.
          Technisch notwendige Speicherungen – etwa Ihre Cookie-Auswahl – erfolgen
          auf Grundlage von § 25 Abs. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO.
          Alle weiteren Dienste setzen wir nur mit Ihrer Einwilligung ein
          (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Ihre Einwilligung
          können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>

        <h3 className="pt-2 text-lg font-semibold text-neutral-900">
          Google Analytics
        </h3>
        <p>
          Sofern Sie in die Kategorie „Statistik“ eingewilligt haben, nutzen wir
          Google Analytics 4, einen Webanalysedienst der Google Ireland Limited,
          Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics setzt
          Cookies (z. B. „_ga“), um die Nutzung der Website pseudonymisiert
          auszuwerten. Dabei kann eine Übermittlung von Daten an Google LLC in
          den USA erfolgen; Google ist unter dem EU-US Data Privacy Framework
          zertifiziert. Weitere Informationen:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#004884] underline hover:text-[#00ACA9]"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>

        <CookieSettingsLink className="mt-2 inline-flex rounded-full bg-[#00ACA9] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#00918e]">
          Cookie-Einstellungen öffnen
        </CookieSettingsLink>
      </section>
    </div>
  );
}
