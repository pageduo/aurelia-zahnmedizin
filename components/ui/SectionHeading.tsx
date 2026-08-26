import Reveal from "./Reveal";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.3em] sm:text-base ${light ? "text-gold-soft" : "text-gold"}`}>
      <span aria-hidden className="mr-4 inline-block h-px w-8 bg-current align-middle opacity-50" />
      {children}
    </p>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl ${
          light ? "text-porcelain" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${light ? "text-porcelain/70" : "text-stone"}`}>
          {copy}
        </p>
      )}
    </Reveal>
  );
}
