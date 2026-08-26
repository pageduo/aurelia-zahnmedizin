import Link from "next/link";
import { hours, nav, site } from "@/lib/data";

const legal = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Cookie-Einstellungen", href: "/datenschutz#cookies" },
];

function SocialIcon({ label, href, path }: { label: string; href: string; path: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-porcelain/20 text-porcelain/70 transition-all hover:border-gold hover:text-gold"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="dark-texture bg-ink text-porcelain">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-12">
        {/* Abschluss-CTA */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-porcelain/10 pb-14 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold sm:text-base">
              <span aria-hidden className="mr-4 inline-block h-px w-8 bg-current align-middle opacity-50" />Kontakt
            </p>
            <p className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              Wir freuen uns auf&nbsp;Sie.
            </p>
          </div>
          <Link
            href="/termin"
            className="rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
          >
            Online Termin buchen
          </Link>
        </div>

        {/* Sitemap & Info */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl tracking-[0.15em]">AURELIA</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-porcelain/50">
              Zahnmedizin · Privatpraxis
            </p>
            <p className="mt-6 text-sm leading-relaxed text-porcelain/60">
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
            <p className="mt-4 text-sm text-porcelain/60">
              <a href={site.phoneHref} className="transition-colors hover:text-gold">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-porcelain/40">Sitemap</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-porcelain/70 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/termin" className="text-gold-soft transition-colors hover:text-gold">
                  Online-Termin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-porcelain/40">Öffnungszeiten</p>
            <ul className="mt-5 space-y-3 text-sm text-porcelain/70">
              {hours.map((h) => (
                <li key={h.day}>
                  <span className="block text-porcelain/45">{h.day}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-porcelain/40">Rechtliches</p>
            <ul className="mt-5 space-y-3 text-sm">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-porcelain/70 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <SocialIcon
                label="Instagram"
                href="#"
                path="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.2.6-.3 1.7-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.6.2 1.7.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.2-.6.3-1.7.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.6-.2-1.7-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.2-8.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z"
              />
              <SocialIcon
                label="LinkedIn"
                href="#"
                path="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8h4.96V24H.02V8zM8.98 8h4.75v2.18h.07c.66-1.25 2.28-2.57 4.7-2.57 5.02 0 5.95 3.3 5.95 7.6V24h-4.96v-7.75c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.1V24H8.98V8z"
              />
            </div>
          </div>
        </div>

        {/* Copyright + Demo-Hinweis */}
        <div className="flex flex-col gap-3 border-t border-porcelain/10 pt-8 text-xs text-porcelain/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AURELIA Zahnmedizin, {site.city}. Alle Rechte vorbehalten.</p>
          <p>
            Demo-Vorlage – kein echtes Unternehmen. Alle Namen, Daten und Fälle sind fiktiv. Gestaltung:{" "}
            <span className="text-porcelain/60">PageDuo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
