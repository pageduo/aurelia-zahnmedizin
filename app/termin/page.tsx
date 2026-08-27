import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingWidget from "@/components/BookingWidget";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/data";
import { img, u } from "@/lib/images";

export const metadata: Metadata = {
  title: "Online Termin buchen · AURELIA Zahnmedizin – Demo",
  description: "Buchen Sie Ihren Wunschtermin online: Leistung, Behandler und freie Zeiten direkt auswählen (Demo).",
};

export default function TerminPage() {
  return (
    <>
      <PageHero
        eyebrow="Online-Terminbuchung"
        title={
          <>
            Ihr Termin, <em className="text-gold-soft">drei Klicks.</em>
          </>
        }
        copy="Leistung wählen, Behandler aussuchen, freien Termin sichern – rund um die Uhr, ohne Warteschleife."
        image={u(img.praxisRaum, 2200)}
        alt="Behandlungszimmer der Praxis AURELIA"
      />

      <section className="bg-porcelain py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <BookingWidget />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-sm text-stone">
              Lieber persönlich? Rufen Sie uns an:{" "}
              <a href={site.phoneHref} className="font-semibold text-pine underline decoration-gold underline-offset-4">
                {site.phone}
              </a>{" "}
              (Mo–Do 08–19 Uhr, Fr 08–15 Uhr)
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
