import type { Metadata } from "next";
import DemoHinweis from "@/components/DemoHinweis";
import { PAGEDUO_URL } from "@/lib/pageduo";

export const metadata: Metadata = {
  title: "Datenschutz · AURELIA Zahnmedizin – Demo",
};

const linkKlasse =
  "group inline-flex items-center gap-3 rounded-full bg-pine px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-porcelain transition-colors duration-300 hover:bg-ink";

function Pfeil() {
  return (
    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  );
}

/*
 * Verantwortlich im Sinne der DSGVO ist, wer ueber die Verarbeitung
 * entscheidet - hier also die Agentur, die die Demo betreibt, nicht die
 * erfundene Praxis. Der frueherere Abschnitt zur Google-Maps-Karte ist
 * entfallen: Die Karte gibt es nicht mehr, und ein Hinweis auf eine
 * Datenuebertragung, die nicht stattfindet, verwirrt nur.
 */
export default function DatenschutzPage() {
  return (
    <div className="bg-porcelain">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold sm:text-base">
          <span aria-hidden className="mr-4 inline-block h-px w-8 bg-current align-middle opacity-50" />Rechtliches
        </p>
        <h1 className="mt-4 font-serif text-5xl text-ink">Datenschutzerklärung</h1>

        <DemoHinweis className="mt-8" />

        <div className="mt-10 space-y-8 leading-relaxed text-stone">
          <section>
            <h2 className="font-serif text-2xl text-ink">Formulare und Buchung</h2>
            <p className="mt-3">
              Formulare und Buchungsfunktionen dieser Demo sind deaktiviert. Es werden keine eingegebenen Daten
              übermittelt oder gespeichert. Für den technischen Betrieb dieser Website gilt die
              Datenschutzerklärung von PageDuo:
            </p>
            <a
              href={`${PAGEDUO_URL}/datenschutz`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkKlasse} mt-6`}
            >
              Datenschutzerklärung von PageDuo
              <Pfeil />
            </a>
          </section>

          <section id="cookies" className="scroll-mt-28">
            <h2 className="font-serif text-2xl text-ink">Cookies</h2>
            <p className="mt-3">
              Diese Demo setzt keine Cookies. Beim Aufruf werden keine Inhalte von Drittanbietern geladen und keine
              Karten eingebunden.
            </p>
            <a
              href={`${PAGEDUO_URL}/cookies`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkKlasse} mt-6`}
            >
              Cookie-Hinweise von PageDuo
              <Pfeil />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
