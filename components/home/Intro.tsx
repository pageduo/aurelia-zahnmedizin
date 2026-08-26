import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import WipeImage from "@/components/ui/WipeImage";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { img, u } from "@/lib/images";

export default function Intro() {
  return (
    <section id="praxis" className="overflow-hidden bg-porcelain py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Die Praxis"
            title={
              <>
                Ruhe trifft <em className="text-pine">Präzision.</em>
              </>
            }
          />
          <Reveal delay={0.15} className="space-y-6 text-lg leading-relaxed text-stone lg:pt-4">
            <p>
              Seit 2012 verbinden wir am Neuen Wall das Beste aus zwei Welten: die Sorgfalt einer klassischen
              Privatpraxis und die Möglichkeiten vollständig digitaler Zahnmedizin. Bei uns entscheidet kein
              Fünf-Minuten-Takt, sondern Ihr Befund.
            </p>
            <p>
              Drei spezialisierte Zahnärztinnen und Zahnärzte, ein eigenes Prophylaxe-Team und Diagnostik, die
              sonst nur Universitätskliniken bieten – unter einem Dach, mit einem Anspruch:{" "}
              <span className="text-ink">Ergebnisse, die man nicht als Zahnersatz erkennt.</span>
            </p>
            <Link
              href="/ueber-uns"
              className="group inline-flex items-center gap-3 pt-2 text-xs font-semibold uppercase tracking-[0.25em] text-pine"
            >
              Mehr über uns
              <span className="block h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
            </Link>
          </Reveal>
        </div>

        {/* Bild-Komposition: Wipe-Reveal + Parallax */}
        <div className="mt-20 grid gap-6 md:grid-cols-12">
          <WipeImage
            src={u(img.praxisEmpfang, 1800)}
            alt="Empfangsbereich der Praxis"
            sizes="(min-width: 768px) 60vw, 100vw"
            className="aspect-[4/3] md:col-span-7 md:aspect-[16/11]"
          />
          <ParallaxImage
            src={u(img.praxisRaum, 1200)}
            alt="Behandlungszimmer mit Blick über Hamburg"
            sizes="(min-width: 768px) 40vw, 100vw"
            strength={14}
            className="aspect-[4/3] md:col-span-5 md:mt-24 md:aspect-[3/4]"
          />
        </div>
      </div>
    </section>
  );
}
