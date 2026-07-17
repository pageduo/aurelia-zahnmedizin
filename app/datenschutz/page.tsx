import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz · AURELIA Zahnmedizin - Demo",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-porcelain">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold sm:text-base">
          <span className="mr-2 opacity-60">{"//"}</span>Rechtliches
        </p>
        <h1 className="mt-4 font-serif text-5xl text-ink">Datenschutzerklärung</h1>

        <div className="mt-8 rounded-xl border border-gold/40 bg-cream p-6 text-sm leading-relaxed text-stone">
          <strong className="text-ink">Hinweis:</strong> Dies ist eine Demo-Website. Der folgende Text ist ein
          Platzhalter und ersetzt keine juristisch geprüfte Datenschutzerklärung.
        </div>

        <div className="mt-10 space-y-8 leading-relaxed text-stone">
          <section>
            <h2 className="font-serif text-2xl text-ink">1. Verantwortliche Stelle</h2>
            <p className="mt-3">
              AURELIA Zahnmedizin (fiktiv), Neuer Wall 34, 20354 Hamburg - für diese Demo ohne rechtliche Wirkung.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink">2. Datenverarbeitung auf dieser Website</h2>
            <p className="mt-3">
              Diese Demo-Website setzt keine Tracking- oder Analyse-Cookies ein. Schriftarten werden lokal
              ausgeliefert; es findet keine Übertragung an Google-Font-Server statt. Das Kontaktformular versendet
              in dieser Demo keine Daten.
            </p>
          </section>
          <section id="cookies" className="scroll-mt-28">
            <h2 className="font-serif text-2xl text-ink">3. Cookies &amp; externe Karten</h2>
            <p className="mt-3">
              Die eingebundene Google-Maps-Karte wird erst nach Ihrer aktiven Zustimmung geladen (Zwei-Klick-Lösung).
              Erst dann werden Daten (z. B. Ihre IP-Adresse) an Google übertragen. Ohne Zustimmung bleibt die Karte
              deaktiviert.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink">4. Ihre Rechte</h2>
            <p className="mt-3">
              Nach DSGVO stehen Ihnen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit und Widerspruch zu. - Platzhaltertext für Demo-Zwecke.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
