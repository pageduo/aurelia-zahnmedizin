/**
 * Anbieter dieser Demo-Website.
 *
 * Diese Seite zeigt ein frei erfundenes Unternehmen. Rechtlich verantwortlich
 * ist nicht die dargestellte Praxis, sondern die Agentur, die die Demo
 * betreibt — Impressum und Datenschutz verweisen deshalb hierher.
 *
 * Alle Angaben der fiktiven Praxis stehen in `lib/data.ts` und sind
 * anonymisiert: `.example` als Domain, eine nicht vergebene Postleitzahl,
 * eine Nummer aus Nullen. Wer dort etwas ändert, prüft bitte vorher, ob der
 * neue Wert zufällig einen echten Betrieb oder eine echte Person trifft.
 */

export const PAGEDUO_NAME = "PageDuo GbR";
export const PAGEDUO_PARTNERS = "Nick Neukirchner, Benedikt Kaiser";
export const PAGEDUO_EMAIL = "info@pageduo.de";
// TODO: auf https://pageduo.de umstellen, sobald die Domain live ist
export const PAGEDUO_URL = "https://pageduo-new.vercel.app";

/** Kurzname dieser Demo. Trägt die Platzhalter-Domain `<slug>.example`. */
export const DEMO_SLUG = "aurelia";

/** Name des dargestellten, frei erfundenen Unternehmens. */
export const DEMO_FIRMA = "AURELIA Zahnmedizin";

/** Steht wortgleich im Impressum, im Datenschutz und als Sammelzeile unter
 *  Fällen und Kennzahlen. Eine Demo muss als Demo erkennbar sein, bevor
 *  jemand auf die Idee kommt, hier anzurufen. */
export const DEMO_HINWEIS =
  `Dies ist eine Demo-Website. ${DEMO_FIRMA} ist ein fiktives Unternehmen. ` +
  "Alle Namen, Adressen, Kontaktdaten, Personen, Bewertungen und Inhalte sind frei erfunden.";

/** Antwort auf jeden Klick, der in der Demo ins Leere laufen würde. */
export const DEMO_DEAKTIVIERT = "In der Demo deaktiviert";
