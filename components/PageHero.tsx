"use client";

import { motion } from "framer-motion";
import BlurImage from "./ui/BlurImage";
import { Eyebrow } from "./ui/SectionHeading";

/** Kompakter Bild-Hero für Unterseiten. */
export default function PageHero({
  eyebrow,
  title,
  copy,
  image,
  alt,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex min-h-[68svh] items-end overflow-hidden bg-ink text-porcelain">
      <BlurImage src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-44 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">{title}</h1>
          {copy && <p className="mt-6 max-w-2xl text-lg text-porcelain/75">{copy}</p>}
        </motion.div>
      </div>
    </section>
  );
}
