import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import WipeImage from "@/components/ui/WipeImage";
import { services } from "@/lib/data";
import { img, u } from "@/lib/images";

export const metadata: Metadata = {
  title: "Leistungen · AURELIA Zahnmedizin - Demo",
  description: "Ästhetik, Implantologie, Endodontie, Prophylaxe: das Leistungsspektrum der Privatpraxis AURELIA (Demo).",
};

const specials = [
  { title: "Behandlung im Dämmerschlaf", text: "Analgosedierung mit Anästhesie-Begleitung - für Angstpatienten und umfangreiche Eingriffe." },
  { title: "Lachgas-Sedierung", text: "Die sanfte Alternative: entspannt durch die Behandlung, danach sofort wieder fit." },
  { title: "Zweitmeinung", text: "Ein unabhängiger Blick auf Ihren Heil- und Kostenplan - ehrlich, auch wenn wir Ihnen abraten." },
  { title: "Ästhetische Sprechstunde", text: "60 Minuten Analyse mit digitalem Smile Design - sehen Sie Ihr Ergebnis vor der Entscheidung." },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="02 - Leistungen"
        title={
          <>
            Alles unter <em className="text-gold-soft">einem Dach.</em>
          </>
        }
        copy="Sechs Disziplinen, drei Spezialisten, eine digitale Kette vom ersten Scan bis zum fertigen Ergebnis."
        image={u(img.leistungenHero, 2200)}
        alt="Präzisionsarbeit mit Lupenbrille in der Praxis AURELIA"
      />

      {/* Übersicht: 3D-Tilt-Karten */}
      <section className="bg-porcelain py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Überblick"
            title={<>Unser Spektrum.</>}
            copy="Tippen oder klicken Sie eine Leistung an, um direkt zur ausführlichen Beschreibung zu springen."
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.1}>
                <TiltCard className="h-full">
                  <Link
                    href={`#${s.slug}`}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-cream p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10"
                  >
                    <div>
                      <span className="font-serif text-4xl text-gold">{s.n}</span>
                      <h3 className="mt-4 font-serif text-2xl leading-snug text-ink">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone">{s.teaser}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-pine">
                      Details <span className="block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailblöcke */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-24 px-6 lg:space-y-32 lg:px-12">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <WipeImage
                src={u(s.image, 1400)}
                alt={s.title}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] rounded-2xl"
              />
              <Reveal delay={0.1}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold sm:text-base">
                  <span className="mr-2 opacity-60">{"//"}</span>Leistung {s.n}
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">{s.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-stone">{s.text}</p>
                <Link
                  href="/ueber-uns#kontakt"
                  className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-pine"
                >
                  Beratungstermin anfragen
                  <span className="block h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Besondere Behandlungen */}
      <section className="dark-texture bg-ink py-24 text-porcelain lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Das Besondere"
            title={<>Was uns von anderen Praxen unterscheidet.</>}
            light
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {specials.map((sp, i) => (
              <Reveal key={sp.title} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-2xl border border-porcelain/10 bg-porcelain/5 p-8 transition-colors duration-300 hover:border-gold/40">
                  <h3 className="font-serif text-2xl text-gold-soft">{sp.title}</h3>
                  <p className="mt-3 leading-relaxed text-porcelain/70">{sp.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Welche Behandlung passt zu Ihnen?"
        copy="Wir beraten ehrlich - auch dann, wenn die beste Empfehlung lautet: gar keine Behandlung."
      />
    </>
  );
}
