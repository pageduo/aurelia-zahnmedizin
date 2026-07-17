"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import BlurImage from "@/components/ui/BlurImage";
import { cases } from "@/lib/data";
import { u } from "@/lib/images";

function ToothIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.5c-1.6 0-2.3.9-3.9.9S5.7 2.5 4.6 3.6C3 5.2 3.2 8.5 4.2 11c.8 2 1.2 4.4 1.5 6.5.2 1.6.5 4 1.9 4 1.6 0 1.3-3.6 2.1-5.6.4-1 .9-1.6 1.6-1.6 2.1 0 1.6 7.2 3.7 7.2 1.4 0 1.7-2.4 1.9-4 .3-2.1.7-4.5 1.5-6.5 1-2.5 1.2-5.8-.4-7.4-1.1-1.1-1.9-.2-3.5-.2S13.6 2.5 12 2.5z" />
    </svg>
  );
}

/**
 * Fall-Galerie mit spezialgeformtem Custom-Cursor: Über den Karten wird der
 * Mauszeiger zu einem goldenen Zahn-Emblem mit „Ansehen“-Label, das dem Cursor folgt.
 */
export default function ResultsGallery() {
  const [hovering, setHovering] = useState(false);
  const [openCase, setOpenCase] = useState<(typeof cases)[number] | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 28 });
  const y = useSpring(my, { stiffness: 300, damping: 28 });

  return (
    <section
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      className="bg-porcelain py-20 lg:py-28"
    >
      {/* Custom Cursor (nur Desktop mit Maus) */}
      <motion.div
        style={{ x, y }}
        className={`pointer-events-none fixed left-0 top-0 z-50 hidden -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 lg:block ${
          hovering && !openCase ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
        <div className="flex h-24 w-24 flex-col items-center justify-center gap-0.5 rounded-full bg-gold text-ink shadow-xl shadow-ink/30">
          <ToothIcon className="h-7 w-7" />
          <span className="text-[0.55rem] font-bold uppercase tracking-[0.2em]">Ansehen</span>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.button
              key={c.n}
              type="button"
              onClick={() => setOpenCase(c)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group block text-left lg:cursor-none ${i % 3 === 1 ? "lg:mt-14" : ""}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <BlurImage
                  src={u(c.image, 900)}
                  alt={`${c.category}: ${c.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold-soft">
                    {c.category} · {c.year}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-porcelain">{c.title}</h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Fall-Detail (Modal) */}
      <AnimatePresence>
        {openCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenCase(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[85svh] w-full max-w-3xl overflow-hidden overflow-y-auto rounded-2xl bg-porcelain sm:grid-cols-2"
            >
              <div className="relative aspect-[3/4] sm:aspect-auto">
                <BlurImage src={u(openCase.image, 1000)} alt={openCase.title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">
                  Fall {openCase.n} · {openCase.category} · {openCase.year}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">{openCase.title}</h3>
                <p className="mt-5 leading-relaxed text-stone">{openCase.text}</p>
                <p className="mt-6 text-xs text-stone/70">
                  Hinweis: Demo-Inhalt - Fallbeschreibung und Bild sind fiktiv bzw. Symbolfotos.
                </p>
                <button
                  onClick={() => setOpenCase(null)}
                  className="mt-8 rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold hover:text-pine"
                >
                  Schließen
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
