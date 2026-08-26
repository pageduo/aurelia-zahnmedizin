"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/data";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group relative z-50 block leading-none">
      <span className="font-serif text-2xl tracking-[0.18em]">AURELIA</span>
      <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.32em] opacity-70">
        Zahnmedizin · Privatpraxis
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [menuPfad, setMenuPfad] = useState(pathname);

  /*
   * Routenwechsel schlieszt das Menue. Die Anpassung passiert beim Rendern
   * statt in einem Effekt: React verwirft den angefangenen Durchlauf sofort
   * und rendert neu, statt das offene Menue erst zu zeigen und dann wieder
   * zuzuklappen. Als Effekt geschrieben brach es auszerdem den Lint.
   */
  if (menuPfad !== pathname) {
    setMenuPfad(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navigationsleiste: Logo links, Menüpunkte + Telefon + Kontakt-Button rechts */}
      <header
        className={`fixed inset-x-0 top-0 z-40 text-porcelain transition-all duration-500 ${
          scrolled && !open ? "bg-ink/90 shadow-lg shadow-ink/20 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <Logo />

          {/* Horizontale Navigation (Desktop) */}
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 lg:flex xl:gap-8">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active ? "text-gold" : "text-porcelain/85 hover:text-gold-soft"
                  }`}
                >
                  {item.short}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Kontakt-Symbole: Telefon & E-Mail, klappen bei Hover/Fokus auf */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={site.phoneHref}
                aria-label={`Anrufen: ${site.phone}`}
                className="group flex h-11 items-center rounded-full border border-porcelain/25 px-3.5 text-porcelain/85 transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm tracking-wide opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-52 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:max-w-52 group-focus-visible:opacity-100">
                  {site.phone}
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label={`E-Mail schreiben: ${site.email}`}
                className="group flex h-11 items-center rounded-full border border-porcelain/25 px-3.5 text-porcelain/85 transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm tracking-wide opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-64 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:max-w-64 group-focus-visible:opacity-100">
                  {site.email}
                </span>
              </a>
            </div>
            <Link
              href="/termin"
              className="hidden whitespace-nowrap rounded-full border border-gold/70 bg-gold/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-ink sm:block"
            >
              Termin buchen
            </Link>
            {/* Burger (mobil & Tablet) */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] rounded-full border border-porcelain/25 lg:hidden"
            >
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-1 rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-1 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Vollbild-Overlay (mobil) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="dark-texture fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink px-6 pb-10 pt-28 text-porcelain"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className={`group flex items-baseline gap-4 py-2.5 ${
                      pathname === item.href ? "text-gold" : ""
                    }`}
                  >
                    <span className="text-xs tracking-widest text-gold">{item.n}</span>
                    <span className="font-serif text-3xl transition-colors group-hover:text-gold sm:text-4xl">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * nav.length + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/termin"
                  className="mt-6 inline-block rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
                >
                  Online Termin buchen
                </Link>
              </motion.div>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 space-y-1 text-sm text-porcelain/60"
            >
              <p>
                {site.address.street} · {site.address.zip} {site.address.city}
              </p>
              <p>
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>{" "}
                ·{" "}
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
