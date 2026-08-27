import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/ui/Reveal";
import BlurImage from "@/components/ui/BlurImage";
import { formatDate, posts } from "@/lib/data";
import { img, u } from "@/lib/images";

export const metadata: Metadata = {
  title: "Aktuelles · AURELIA Zahnmedizin – Demo",
  description: "Wissen aus der Praxis: Beiträge rund um Zahngesundheit, Ästhetik und Technologie (Demo).",
};

export default function AktuellesPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="05 – Aktuelles"
        title={
          <>
            Wissen aus der <em className="text-gold-soft">Praxis.</em>
          </>
        }
        copy="Verständlich statt Fachchinesisch: Was Sie über Ihre Zähne wissen sollten – geschrieben von unserem Team."
        image={u(img.newsHero, 2200)}
        alt="Moderne Zahnmedizin – Beiträge aus der Praxis"
      />

      <section className="bg-porcelain py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Hervorgehobener Beitrag */}
          <Reveal>
            <Link
              href={`/aktuelles/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl bg-cream lg:grid-cols-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                <BlurImage
                  src={u(featured.image, 1400)}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  {featured.category} ·{" "}
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-ink transition-colors group-hover:text-pine sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-stone">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-pine">
                  Beitrag lesen
                  <span className="block h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Weitere Beiträge */}
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link href={`/aktuelles/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <BlurImage
                      src={u(post.image, 900)}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-porcelain/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-pine backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-stone">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug text-ink transition-colors group-hover:text-pine">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Fragen zu einem Thema?" copy="Schreiben Sie uns – wir antworten persönlich, nicht mit Textbausteinen." />
    </>
  );
}
