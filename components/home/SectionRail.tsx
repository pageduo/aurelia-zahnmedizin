"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "start", n: "01", label: "Start" },
  { id: "praxis", n: "02", label: "Die Praxis" },
  { id: "technologie", n: "03", label: "Technologie" },
  { id: "leistungen", n: "04", label: "Leistungen" },
  { id: "ablauf", n: "05", label: "Ihr Weg" },
  { id: "aktuelles", n: "06", label: "Aktuelles" },
];

/**
 * Nummerierte Sektions-Navigation am rechten Rand (nur Startseite):
 * wandert beim Scrollen mit und springt per Klick zur Sektion.
 */
export default function SectionRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const mid = window.innerHeight * 0.45;
        let current = 0;
        sections.forEach((s, i) => {
          const el = document.getElementById(s.id);
          if (el && el.getBoundingClientRect().top <= mid) current = i;
        });
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop + 2, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Sektionen dieser Seite"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-5 xl:flex"
    >
      {sections.map((s, i) => {
        const isActive = i === active;
        return (
          <button
            key={s.id}
            onClick={() => jump(s.id)}
            className="group flex cursor-pointer items-center justify-end gap-3"
            aria-label={`Zu Sektion ${s.label}`}
          >
            <span
              className={`whitespace-nowrap text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                isActive
                  ? "translate-x-0 text-gold opacity-100"
                  : "translate-x-2 text-porcelain opacity-0 mix-blend-difference group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`text-[0.65rem] font-semibold tracking-widest transition-colors duration-300 ${
                isActive ? "text-gold" : "text-porcelain mix-blend-difference"
              }`}
            >
              {s.n}
            </span>
            <span
              className={`block h-px transition-all duration-300 ${
                isActive ? "w-10 bg-gold" : "w-5 bg-porcelain mix-blend-difference group-hover:w-10"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
