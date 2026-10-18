import { site } from "@/lib/data";

/**
 * Standort als eigene Zeichnung statt als fremde Karte.
 *
 * Vorher hing hier ein Google-Maps-iframe hinter einer Zwei-Klick-Lösung.
 * Die war datenschutzrechtlich sauber, aber sie löste ein Problem, das diese
 * Demo gar nicht hat: Die Adresse ist frei erfunden. Eine echte Karte hätte
 * entweder auf einen fremden Hauseingang gezeigt oder ins Leere — beides
 * schlechter als eine Zeichnung, die ehrlich sagt, dass sie eine ist.
 *
 * Kein Screenshot, keine Kacheln, kein externer Request beim Seitenaufruf.
 * Wer die Stadt wirklich sehen will, bekommt sie über den Link darunter —
 * dann aber bewusst und erst nach dem Klick.
 */

/** Zeigt auf die Stadt, nicht auf die erfundene Hausnummer. */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.city)}`;

export default function MapConsent() {
  return (
    <div className="dark-texture relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-pine px-8 text-center text-porcelain">
      {/* Elbe und Alster als Andeutung: Flächen und Haarlinien, mehr nicht. */}
      <svg
        viewBox="0 0 400 200"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M-10 128 C 60 128, 96 108, 150 108 L 258 108 C 312 108, 348 92, 410 92 L 410 116 C 348 116, 312 132, 258 132 L 150 132 C 96 132, 60 152, -10 152 Z"
          fill="currentColor"
          className="text-porcelain"
        />
        <path
          d="M236 44 C 262 36, 286 50, 282 70 C 278 90, 248 96, 238 84 C 228 72, 222 50, 236 44 Z"
          fill="currentColor"
          className="text-porcelain"
        />
        {["M-10 128 C 60 128, 96 108, 150 108 L 258 108 C 312 108, 348 92, 410 92",
          "M-10 152 C 60 152, 96 132, 150 132 L 258 132 C 312 132, 348 116, 410 116"].map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            className="text-porcelain"
          />
        ))}
      </svg>

      <svg
        viewBox="0 0 24 24"
        className="relative h-10 w-10 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
      <p className="relative mt-4 font-serif text-2xl">
        {site.address.street}, {site.address.zip} {site.address.city}
      </p>
      <p className="relative mt-1 text-xs uppercase tracking-[0.25em] text-porcelain/50">
        Adresse fiktiv · 53.55° N · 9.99° E
      </p>
      <p className="relative mt-4 max-w-md text-sm text-porcelain/70">
        Diese Demo bindet keine Karte ein. Beim Aufruf der Seite werden keine Daten an Google übertragen.
      </p>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-5 rounded-full border border-porcelain/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-porcelain transition-colors hover:border-gold hover:text-gold"
      >
        In Google Maps öffnen ↗
      </a>
    </div>
  );
}
