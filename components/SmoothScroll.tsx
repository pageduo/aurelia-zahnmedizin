"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenis: Lenis | null = null;

/*
 * Programmatische Spruenge muessen ueber Lenis laufen, nicht ueber
 * window.scrollTo. Lenis fuehrt eine eigene Scrollposition und laesst einen
 * nativen weichen Sprung dagegenlaufen, was ruckelt oder mittendrin stehen
 * bleibt. Der Rueckfall auf window.scrollTo greift, solange Lenis noch nicht
 * gestartet ist oder der Nutzer Bewegung reduziert hat.
 */
export function springeZu(y: number, dauer = 1.1) {
  if (lenis) lenis.scrollTo(y, { duration: dauer });
  else window.scrollTo({ top: y, behavior: "smooth" });
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let raf: number;
    const loop = (time: number) => {
      lenis?.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
