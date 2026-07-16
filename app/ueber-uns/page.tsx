import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapConsent from "@/components/MapConsent";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { hours, site } from "@/lib/data";
import { img, u } from "@/lib/images";

export const metadata: Metadata = {
  title: "Über uns & Kontakt · AURELIA Zahnmedizin — Demo",
  description: "Geschichte, Werte und Kontakt der Privatpraxis AURELIA am Neuen Wall, Hamburg (Demo).",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="06 — Über uns & Kontakt"
        title={
          <>
            Eine Praxis mit <em className="text-gold-soft">Haltung.</em>
          </>
        }
        copy="Wer wir sind, woran wir glauben — und wie Sie uns erreichen."
        image={u(img.ueberUns, 2200)}
        alt="Die Praxisräume von AURELIA am Neuen Wall"
      />

      {/* Geschichte & Werte */}
      <section className="bg-porcelain py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Unsere Geschichte"
              title={
                <>
                  Seit 2012 am <em className="text-pine">Neuen Wall.</em>
                </>
              }
            />
            <Reveal delay={0.15} className="space-y-6 text-lg leading-relaxed text-stone lg:pt-4">
              <p>
                AURELIA entstand aus einer einfachen Beobachtung: Die beste Zahnmedizin scheitert selten am Können —
                sondern an fehlender Zeit. Dr. Helena Roth gründete die Praxis 2012 mit dem Vorsatz, beides zu
                verbinden: universitäres Niveau und Termine ohne Taktung.
              </p>
              <p>
                Heute arbeiten hier drei spezialisierte Behandler, ein fünfköpfiges Prophylaxe-Team und ein eigenes
                Praxislabor — vollständig digital, vom ersten Scan bis zur fertigen Keramik.{" "}
                <span className="text-ink">Was geblieben ist: Wir kennen unsere Patientinnen und Patienten beim Namen.</span>
              </p>
            </Reveal>
          </div>
          <ParallaxImage
            src={u(img.praxisEmpfang, 2000)}
            alt="Empfangsbereich der Praxis AURELIA"
            className="mt-20 aspect-[21/9] rounded-2xl"
          />
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="scroll-mt-20 bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Kontakt"
            title={<>So erreichen Sie uns.</>}
            copy="Schreiben Sie uns über das Formular oder rufen Sie direkt an — wir melden uns in der Regel innerhalb eines Werktags."
            className="mb-14"
          />
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={0.15}>
              <div className="space-y-8 rounded-2xl bg-porcelain p-8 shadow-sm lg:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Adresse</p>
                  <p className="mt-3 font-serif text-2xl text-ink">
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Direkt</p>
                  <p className="mt-3 text-stone">
                    <a href={site.phoneHref} className="block text-lg text-ink transition-colors hover:text-pine">
                      {site.phone}
                    </a>
                    <a href={`mailto:${site.email}`} className="block transition-colors hover:text-pine">
                      {site.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Öffnungszeiten</p>
                  <ul className="mt-3 space-y-2 text-stone">
                    {hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6 border-b border-ink/5 pb-2">
                        <span>{h.day}</span>
                        <span className="text-ink">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Anfahrt</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    U-Bahn Jungfernstieg (U1/U2/U4, 3 Minuten zu Fuß) · Parkhaus Neuer Wall direkt gegenüber ·
                    barrierefreier Zugang über den Aufzug im Innenhof.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-12">
            <MapConsent />
          </Reveal>
        </div>
      </section>
    </>
  );
}
