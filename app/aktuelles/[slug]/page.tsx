import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABand from "@/components/CTABand";
import BlurImage from "@/components/ui/BlurImage";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { formatDate, posts } from "@/lib/data";
import { u } from "@/lib/images";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} · AURELIA Zahnmedizin – Demo` : "Beitrag · AURELIA Zahnmedizin – Demo",
    description: post?.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="relative flex min-h-[60svh] items-end overflow-hidden bg-ink text-porcelain">
          <BlurImage src={u(post.image, 2200)} alt={post.title} fill preload sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
          <div className="relative mx-auto w-full max-w-4xl px-6 pb-16 pt-44">
            <Eyebrow light>
              {post.category} · {formatDate(post.date)}
            </Eyebrow>
            <h1 className="mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{post.title}</h1>
          </div>
        </header>

        <div className="bg-porcelain py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="font-serif text-2xl leading-relaxed text-pine">{post.excerpt}</p>
            <div className="mt-10 space-y-7 text-lg leading-relaxed text-stone">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-8">
              <Link
                href="/aktuelles"
                className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-pine"
              >
                <span className="block h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
                Alle Beiträge
              </Link>
              <Link
                href="/ueber-uns#kontakt"
                className="rounded-full bg-pine px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-porcelain transition-colors hover:bg-ink"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Weiterlesen */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold sm:text-base">
            <span aria-hidden className="mr-4 inline-block h-px w-8 bg-current align-middle opacity-50" />Weiterlesen
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {others.map((p) => (
              <Link key={p.slug} href={`/aktuelles/${p.slug}`} className="group flex gap-6">
                <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-lg">
                  <BlurImage
                    src={u(p.image, 500)}
                    alt={p.title}
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-stone">{p.category}</p>
                  <h3 className="mt-1 font-serif text-xl leading-snug text-ink transition-colors group-hover:text-pine">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
