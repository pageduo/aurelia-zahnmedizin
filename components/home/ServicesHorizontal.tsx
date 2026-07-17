"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurImage from "@/components/ui/BlurImage";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import { u } from "@/lib/images";

/**
 * Horizontal-Scroll-Sektion: Die Seite bleibt gepinnt, die Leistungs-Karten
 * fahren seitlich durch - Lösung vom klassischen Oben-nach-unten-Scrollen.
 */
export default function ServicesHorizontal() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section id="leistungen" ref={ref} className="relative bg-pine" style={{ height: "320vh" }}>
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex w-max items-stretch gap-6 px-6 lg:px-12">
          {/* Intro-Panel */}
          <div className="flex w-[85vw] max-w-xl flex-col justify-center pr-8 sm:w-[60vw]">
            <Eyebrow light>Leistungen</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-porcelain sm:text-5xl lg:text-6xl">
              Sechs Disziplinen, <em className="text-gold-soft">ein Anspruch.</em>
            </h2>
            <p className="mt-6 max-w-md text-porcelain/70">
              Von der Prophylaxe bis zur navigierten Implantation - scrollen Sie weiter und entdecken Sie unser
              Spektrum von der Seite.
            </p>
            <div className="mt-8 flex items-center gap-3 text-porcelain/50">
              <span className="text-[0.6rem] uppercase tracking-[0.3em]">Weiterscrollen</span>
              <span className="block h-px w-12 bg-gold" />
            </div>
          </div>

          {/* Leistungs-Karten */}
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/leistungen#${s.slug}`}
              className="group relative flex h-[62vh] w-[80vw] flex-col justify-end overflow-hidden rounded-2xl sm:w-[420px]"
            >
              <BlurImage
                src={u(s.image, 1000)}
                alt={s.title}
                fill
                sizes="(min-width: 640px) 420px, 80vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-colors duration-500 group-hover:from-ink/95" />
              <div className="relative p-7">
                <span className="text-xs tracking-widest text-gold">{s.n}</span>
                <h3 className="mt-2 font-serif text-2xl text-porcelain sm:text-3xl">{s.title}</h3>
                {/* Hover-Reveal: Teaser klappt auf */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-3 text-sm leading-relaxed text-porcelain/75">{s.teaser}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">
                      Mehr erfahren <span className="block h-px w-8 bg-gold" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Abschluss-CTA-Panel */}
          <div className="flex w-[80vw] max-w-md flex-col items-start justify-center pl-4 pr-12 sm:w-[420px]">
            <p className="font-serif text-3xl leading-snug text-porcelain sm:text-4xl">
              Nicht sicher, was Sie brauchen?
            </p>
            <p className="mt-4 text-porcelain/70">Wir finden es gemeinsam heraus - in einem Gespräch, nicht auf einem Behandlungsstuhl.</p>
            <Link
              href="/ueber-uns#kontakt"
              className="mt-8 rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-105"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
