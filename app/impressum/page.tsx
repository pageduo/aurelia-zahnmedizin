import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum · AURELIA Zahnmedizin - Demo",
};

export default function ImpressumPage() {
  return (
    <div className="bg-porcelain">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold sm:text-base">
          <span className="mr-2 opacity-60">{"//"}</span>Rechtliches
        </p>
        <h1 className="mt-4 font-serif text-5xl text-ink">Impressum</h1>

        <div className="mt-8 rounded-xl border border-gold/40 bg-cream p-6 text-sm leading-relaxed text-stone">
          <strong className="text-ink">Hinweis:</strong> Dies ist eine Demo-Website einer Webagentur. „AURELIA
          Zahnmedizin“ ist ein fiktives Unternehmen - alle nachfolgenden Angaben sind Platzhalter und haben keine
          rechtliche Gültigkeit.
        </div>

        <div className="mt-10 space-y-8 leading-relaxed text-stone">
          <section>
            <h2 className="font-serif text-2xl text-ink">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3">
              AURELIA Zahnmedizin (fiktiv)
              <br />
              Dr. med. dent. Helena Roth (fiktiv)
              <br />
              Neuer Wall 34 · 20354 Hamburg
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink">Kontakt</h2>
            <p className="mt-3">
              Telefon: +49 (0)40 228 817-0 (Platzhalter)
              <br />
              E-Mail: praxis@aurelia-zahnmedizin.de (Platzhalter)
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink">Berufsrechtliche Angaben</h2>
            <p className="mt-3">
              Berufsbezeichnung: Zahnärztin/Zahnarzt (verliehen in der Bundesrepublik Deutschland) · Zuständige
              Kammer: Zahnärztekammer Hamburg · Es gelten berufsrechtliche Regelungen (u. a. Heilberufsgesetz,
              Berufsordnung der Zahnärztekammer). - Platzhalterangaben für Demo-Zwecke.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
