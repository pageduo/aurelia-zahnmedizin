import Link from "next/link";
import BlurImage from "@/components/ui/BlurImage";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { formatDate, posts } from "@/lib/data";
import { u } from "@/lib/images";

export default function NewsTeaser() {
  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Aktuelles" title={<>Wissen aus der Praxis.</>} />
          <Reveal delay={0.1}>
            <Link
              href="/aktuelles"
              className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-pine"
            >
              Alle Beiträge
              <span className="block h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.12}>
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
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-stone">{formatDate(post.date)}</p>
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
  );
}
