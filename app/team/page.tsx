import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurImage from "@/components/ui/BlurImage";
import { team } from "@/lib/data";
import { img, u } from "@/lib/images";

export const metadata: Metadata = {
  title: "Team · AURELIA Zahnmedizin – Demo",
  description: "Die Zahnärztinnen, Zahnärzte und Spezialistinnen der Privatpraxis AURELIA (Demo).",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="03 – Team"
        title={
          <>
            Menschen, denen man <em className="text-gold-soft">vertraut.</em>
          </>
        }
        copy="Drei Spezialgebiete, ein Prophylaxe-Team und ein gemeinsames Versprechen: Wir nehmen uns Zeit."
        image={u(img.praxisDetail, 2200)}
        alt="Das Team der Praxis AURELIA"
      />

      <section className="bg-porcelain py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Unsere Köpfe"
            title={<>Spezialisiert statt „alles ein bisschen“.</>}
            copy="Jede Behandlung bei AURELIA liegt in der Hand der Person, die genau dafür ausgebildet ist."
            className="mb-16"
          />
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 2) * 0.12} className={i % 2 === 1 ? "sm:mt-16" : ""}>
                <div className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <BlurImage
                      src={u(m.image, 1000, 1250)}
                      alt={`Porträt: ${m.name}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Hover-Reveal: Qualifikationen */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ul className="space-y-1.5">
                        {m.quals.map((q) => (
                          <li key={q} className="flex items-baseline gap-2 text-xs text-porcelain/90">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-ink">{m.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{m.role}</p>
                  <p className="mt-4 leading-relaxed text-stone">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Werte-Band */}
      <section className="bg-pine py-24 text-porcelain lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              { n: "01", title: "Zeit statt Takt", text: "Unsere Termine sind so lang, wie Ihr Befund es braucht – nicht so kurz, wie es die Abrechnung erlaubt." },
              { n: "02", title: "Erklären statt behandeln", text: "Kein Eingriff, den Sie nicht verstanden haben. Jede Entscheidung fällt gemeinsam – auf Augenhöhe." },
              { n: "03", title: "Können statt Versprechen", text: "Master-Abschlüsse, Zertifizierungen, jährliche Fortbildungen: Qualität ist bei uns dokumentiert, nicht behauptet." },
            ].map((v, i) => (
              <Reveal key={v.n} delay={i * 0.12}>
                <span className="font-serif text-5xl text-gold/50">{v.n}</span>
                <h3 className="mt-4 font-serif text-2xl text-gold-soft">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-porcelain/70">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Lernen Sie uns persönlich kennen."
        copy="Der erste Termin ist ein Gespräch bei einem Kaffee – kein Behandlungsstuhl, kein Bohrer."
      />
    </>
  );
}
