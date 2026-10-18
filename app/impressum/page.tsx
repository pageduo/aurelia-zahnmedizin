import type { Metadata } from "next";
import DemoHinweis from "@/components/DemoHinweis";
import { PAGEDUO_EMAIL, PAGEDUO_NAME, PAGEDUO_PARTNERS, PAGEDUO_URL } from "@/lib/pageduo";

export const metadata: Metadata = {
  title: "Impressum · AURELIA Zahnmedizin – Demo",
};

/*
 * Das Impressum nennt den Anbieter dieser Website, und der ist nicht die
 * dargestellte Praxis - die gibt es nicht. Anbieter ist die Agentur, die die
 * Demo betreibt. Die frueheren Angaben (fiktive Anschrift, Kammer,
 * Berufsrecht) standen hier als Platzhalter und sind ersatzlos entfallen:
 * Eine erfundene Kammerzugehoerigkeit ist keine Pflichtangabe, sondern eine
 * falsche Angabe.
 */
export default function ImpressumPage() {
  return (
    <div className="bg-porcelain">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold sm:text-base">
          <span aria-hidden className="mr-4 inline-block h-px w-8 bg-current align-middle opacity-50" />Rechtliches
        </p>
        <h1 className="mt-4 font-serif text-5xl text-ink">Impressum</h1>

        <DemoHinweis className="mt-8" />

        <div className="mt-10 space-y-8 leading-relaxed text-stone">
          <section>
            <h2 className="font-serif text-2xl text-ink">Anbieter dieser Website</h2>
            <p className="mt-3">
              {PAGEDUO_NAME} – Webdesign, Hamburg
              <br />
              Vertreten durch die Gesellschafter {PAGEDUO_PARTNERS.replace(", ", " und ")}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${PAGEDUO_EMAIL}`}
                className="underline decoration-gold underline-offset-4 transition-colors hover:text-ink"
              >
                {PAGEDUO_EMAIL}
              </a>
            </p>
          </section>

          <section>
            <a
              href={`${PAGEDUO_URL}/impressum`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-pine px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-porcelain transition-colors duration-300 hover:bg-ink"
            >
              Vollständiges Impressum von PageDuo
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
