"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

function Card({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof processSteps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Sobald die nächste Karte heranscrollt, schiebt sich diese nach hinten:
  // sie schrumpft leicht, wandert nach oben und dunkelt ab.
  const start = index / total;
  const end = (index + 1) / total;
  const scale = useTransform(progress, [start, end], [1, 0.9]);
  const y = useTransform(progress, [start, end], [0, -28]);
  const dim = useTransform(progress, [start, end], [0, 0.35]);
  const rotate = index % 2 === 0 ? -0.6 : 0.8;

  return (
    <div className="sticky" style={{ top: `calc(14vh + ${index * 22}px)` }}>
      <motion.article
        style={{ scale, y, rotate }}
        className="ruled-card relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-ink/10 bg-cream px-7 py-10 shadow-[0_24px_60px_-20px_rgba(13,35,33,0.35)] sm:px-12 sm:py-12"
      >
        {/* Karteikarten-Reiter */}
        <span className="absolute left-8 top-0 rounded-b-lg bg-gold px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-ink">
          Schritt {step.n}
        </span>
        {/* Lochung wie bei einer Karteikarte */}
        <span className="absolute right-8 top-6 hidden h-3 w-3 rounded-full border border-ink/15 bg-porcelain sm:block" />

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <span className="font-serif text-6xl leading-none text-gold sm:text-7xl">{step.n}</span>
          <div>
            <h3 className="font-serif text-3xl text-ink sm:text-4xl">{step.title}</h3>
            <p className="mt-4 leading-relaxed text-stone" style={{ lineHeight: "36px" }}>
              {step.text}
            </p>
            <p className="mt-5 inline-block rounded-full border border-pine/20 bg-porcelain px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pine">
              {step.detail}
            </p>
          </div>
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-ink" />
      </motion.article>
    </div>
  );
}

/** Karteikarten-Scrollytelling: Karten stapeln sich und schieben sich beim Scrollen nach hinten. */
export default function CardStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.35", "end end"] });

  return (
    <section id="ablauf" className="bg-porcelain py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Ihr Weg zu uns"
          title={
            <>
              Vier Schritte. <em className="text-pine">Kein Stress.</em>
            </>
          }
          copy="So läuft Ihre Behandlung bei AURELIA ab - vom ersten Gespräch bis zur langfristigen Begleitung."
          className="mb-16 lg:mb-20"
        />
        <div ref={ref} className="flex flex-col gap-[38vh] pb-[10vh]">
          {processSteps.map((step, i) => (
            <Card key={step.n} step={step} index={i} total={processSteps.length} progress={scrollYProgress} />
          ))}
        </div>
        <div className="mt-20 text-center">
          <Link
            href="/ueber-uns#kontakt"
            className="inline-block rounded-full bg-pine px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-porcelain transition-all duration-300 hover:bg-ink"
          >
            Schritt 01 starten - Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
