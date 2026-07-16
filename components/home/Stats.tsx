import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="dark-texture bg-ink py-24 text-porcelain lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <Eyebrow light>Zahlen, die Vertrauen schaffen</Eyebrow>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="border-l border-gold/30 pl-6">
                <p className="font-serif text-6xl text-gold-soft lg:text-7xl">
                  <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em]">{s.label}</p>
                <p className="mt-1 text-sm text-porcelain/50">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
