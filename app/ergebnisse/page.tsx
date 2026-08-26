import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import ResultsGallery from "@/components/ResultsGallery";
import SectionHeading from "@/components/ui/SectionHeading";
import { img, u } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ergebnisse · AURELIA Zahnmedizin – Demo",
  description: "Ausgewählte Behandlungsergebnisse der Privatpraxis AURELIA (Demo, fiktive Fälle).",
};

export default function ErgebnissePage() {
  return (
    <>
      <PageHero
        eyebrow="04 – Ergebnisse"
        title={
          <>
            Arbeit, die man <em className="text-gold-soft">nicht sieht.</em>
          </>
        }
        copy="Das größte Kompliment für uns: Niemand erkennt, dass hier ein Zahnarzt am Werk war. Ausgewählte Fälle aus der Praxis."
        image={u(img.ergebnisseHero, 2200)}
        alt="Natürliches Lächeln nach der Behandlung"
      />

      <section className="bg-porcelain pt-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Fallgalerie"
            title={<>Sechs Geschichten, sechs Lächeln.</>}
            copy="Bewegen Sie den Mauszeiger über die Fälle – und klicken Sie für Details. Alle Fälle sind für diese Demo fiktiv."
          />
        </div>
      </section>

      <ResultsGallery />

      <CTABand
        title="Ihr Fall könnte der nächste sein."
        copy="Erzählen Sie uns, was Sie sich wünschen – wir zeigen Ihnen vorab digital, was möglich ist."
      />
    </>
  );
}
