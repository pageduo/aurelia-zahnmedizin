import Link from "next/link";
import ParallaxImage from "./ui/ParallaxImage";
import Reveal from "./ui/Reveal";
import { Eyebrow } from "./ui/SectionHeading";
import { site } from "@/lib/data";
import { img, u } from "@/lib/images";

/** Wiederkehrender Call-to-Action mit Parallax-Hintergrund. */
export default function CTABand({
  title = "Bereit für Ihr gesündestes Lächeln?",
  copy = "Der erste Termin ist ein Gespräch – kein Bohrer, kein Zeitdruck. Lernen Sie uns kennen.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <ParallaxImage src={u(img.ctaBand, 2000)} alt="Behandlungszimmer der Praxis AURELIA" className="absolute inset-0" />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center lg:py-36">
        <Reveal>
          <Eyebrow light>Kontakt aufnehmen</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-porcelain sm:text-5xl lg:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-porcelain/70 sm:text-lg">{copy}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/termin"
              className="rounded-full bg-gold px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-105"
            >
              Online Termin buchen
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-porcelain/30 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-porcelain transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
