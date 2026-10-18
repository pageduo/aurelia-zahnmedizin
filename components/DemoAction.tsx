"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { DEMO_DEAKTIVIERT } from "@/lib/pageduo";

/**
 * Ein Bedienelement, das in der Demo bewusst nirgendwohin führt.
 *
 * Anrufen, Schreiben, Buchen: Auf einer echten Praxisseite sind das die
 * wichtigsten Knöpfe überhaupt, und genau deshalb bleiben sie hier stehen —
 * eine Vorlage, der die Hälfte der Handlungen fehlt, zeigt nicht, wie die
 * fertige Seite wirkt. Was fehlen muss, ist das Ziel dahinter: Eine Nummer,
 * die wählt, und eine Adresse, die versendet, gehören irgendwann jemandem.
 *
 * Der Knopf sagt deshalb beim Klick, was Sache ist, statt stumm nichts zu
 * tun. Nach ein paar Sekunden steht wieder die Beschriftung da, damit die
 * Seite nicht in einem Hinweiszustand kleben bleibt.
 *
 * `children` und `hinweis` sind einfache Knoten, keine Funktionen: Die
 * Aufrufer sind teils Server-Komponenten, und über diese Grenze lässt React
 * keine Funktionen durch.
 */
export default function DemoAction({
  className,
  ariaLabel,
  children,
  hinweis = DEMO_DEAKTIVIERT,
}: {
  className?: string;
  ariaLabel?: string;
  /** Die normale Beschriftung. */
  children: ReactNode;
  /** Was stattdessen erscheint, solange der Hinweis steht. */
  hinweis?: ReactNode;
}) {
  const [zeigeHinweis, setZeigeHinweis] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Ohne das Aufräumen liefe der Timer nach einem Seitenwechsel weiter und
  // setzte den Zustand einer Komponente, die es nicht mehr gibt.
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => {
        setZeigeHinweis(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setZeigeHinweis(false), 2600);
      }}
      className={className}
    >
      {zeigeHinweis ? hinweis : children}
    </button>
  );
}
