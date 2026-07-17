"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { techSteps } from "@/lib/data";
import { u } from "@/lib/images";

/**
 * Apple-Style Scrollytelling: Die Sektion bleibt gepinnt, während beim
 * Weiterscrollen Bild und Text durch die vier Technologie-Stationen wechseln.
 * Performance: Alle Bilder bleiben dauerhaft gemountet und werden nur per
 * CSS-Opacity überblendet - kein Mount/Unmount, kein Ruckeln.
 */
export default function TechScrollytelling() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(techSteps.length - 1, Math.max(0, Math.floor(v * techSteps.length)));
    if (idx !== active) setActive(idx);
  });

  const step = techSteps[active];

  return (
    <section id="technologie" ref={ref} className="relative bg-ink" style={{ height: `${techSteps.length * 75}vh` }}>
      <div className="dark-texture sticky top-0 flex h-svh items-center overflow-hidden">
        {/* Hintergrundbilder: alle gemountet, Überblendung nur per Opacity */}
        {techSteps.map((s, i) => (
          <div
            key={s.n}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-700 ease-out will-change-[opacity] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={u(s.image, 1800)} alt={s.title} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          </div>
        ))}

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_auto] lg:px-12 xl:pr-36">
          <div className="max-w-2xl">
            <Eyebrow light>Diagnostik &amp; Technologie</Eyebrow>
            <div className="relative mt-6 min-h-[19rem] sm:min-h-[17rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-serif text-7xl text-gold/40 sm:text-8xl">{step.n}</span>
                  <h3 className="mt-2 font-serif text-4xl leading-tight text-porcelain sm:text-5xl">{step.title}</h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-porcelain/70">{step.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Vertikale Fortschritts-Nummerierung */}
          <div className="hidden flex-col justify-center gap-6 lg:flex">
            {techSteps.map((s, i) => (
              <div key={s.n} className="flex items-center gap-4">
                <span
                  className={`text-xs tracking-widest transition-colors duration-500 ${
                    i === active ? "text-gold" : "text-porcelain/30"
                  }`}
                >
                  {s.n}
                </span>
                <span
                  className={`block h-px transition-all duration-500 ${
                    i === active ? "w-16 bg-gold" : "w-8 bg-porcelain/20"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
