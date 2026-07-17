"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlurImage from "@/components/ui/BlurImage";
import { img, u } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="start" className="relative flex h-svh items-end overflow-hidden bg-ink text-porcelain">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease }}
        className="absolute inset-0"
      >
        <BlurImage
          src={u(img.hero, 2400)}
          alt="Lichtdurchflutetes Behandlungszimmer der Privatpraxis AURELIA"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/30" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 lg:px-12 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-soft"
        >
          <span className="mr-2 opacity-60">{"//"}</span>
          Privatpraxis für Zahnmedizin - Neuer Wall, Hamburg
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease }}
          className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[7.5rem]"
        >
          AURELIA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="mt-6 max-w-2xl font-serif text-2xl leading-snug text-porcelain/90 sm:text-3xl"
        >
          Zahnheilkunde, die man <em className="text-gold-soft">nicht spürt</em> - aber jeden Tag sieht.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mt-5 max-w-xl text-porcelain/70"
        >
          Digitale Diagnostik, mikroskopische Präzision und Zeit, die wir uns für Sie nehmen. Willkommen in einer
          Praxis, die anders arbeitet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-10"
        >
          <Link
            href="/termin"
            className="inline-block rounded-full bg-gold px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-105"
          >
            Online Termin buchen
          </Link>
        </motion.div>
      </div>

      {/* Scroll-Indikator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-porcelain/60 sm:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.35em]">Scroll</span>
        <span className="scroll-line block h-14 w-px" />
      </motion.div>
    </section>
  );
}
