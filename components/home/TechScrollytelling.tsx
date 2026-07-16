"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import BlurImage from "@/components/ui/BlurImage";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { techSteps } from "@/lib/data";
import { u } from "@/lib/images";

/**
 * Apple-Style Scrollytelling: Die Sektion bleibt gepinnt, während beim
 * Weiterscrollen Bild und Text durch die vier Technologie-Stationen wechseln.
 */
export default function TechScrollytelling() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(techSteps.length - 1, Math.floor(v * techSteps.length));
    setActive(idx);
  });

  const step = techSteps[active];

  return (
    <section ref={ref} className="relative bg-ink" style={{ height: `${techSteps.length * 120}vh` }}>
      <div className="dark-texture sticky top-0 flex h-svh items-center overflow-hidden">
        {/* Hintergrundbilder (Crossfade) */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={step.n}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <BlurImage src={u(step.image, 2000)} alt={step.title} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          </motion.div>
        </AnimatePresence>

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_auto] lg:px-12">
          <div className="max-w-2xl">
            <Eyebrow light>Diagnostik &amp; Technologie</Eyebrow>
            <div className="relative mt-6 min-h-[19rem] sm:min-h-[17rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
