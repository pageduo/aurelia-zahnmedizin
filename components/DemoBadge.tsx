import { PAGEDUO_URL } from "@/lib/pageduo";

/**
 * Dauerhafte Kennzeichnung als Demo, unten links.
 *
 * Der Footer sagt es auch, aber den liest man am Ende — falls man so weit
 * kommt. Wer über eine Unterseite einsteigt und nach dreißig Sekunden zum
 * Telefon greift, hat den Hinweis nie gesehen. Deshalb steht er fest im
 * Bild, von der ersten Sekunde an.
 *
 * Unten links, weil unten rechts auf Mobilgeräten der Daumen liegt und dort
 * die Handlungsknöpfe stehen. `pointer-events-none` auf dem Rahmen und
 * `pointer-events-auto` nur auf dem Schild: So fängt die Leiste keine Klicks
 * ab, die dem Inhalt darunter gelten.
 */
export default function DemoBadge() {
  return (
    <div className="pointer-events-none fixed bottom-3 left-3 z-40 sm:bottom-5 sm:left-5">
      <a
        data-demo-badge
        href={PAGEDUO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-gold/50 bg-ink/90 px-2.5 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-porcelain shadow-lg backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:gap-2 sm:px-3.5 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.2em]"
      >
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
        Demo
        <span aria-hidden className="text-porcelain/30">·</span>
        PageDuo
      </a>
    </div>
  );
}
