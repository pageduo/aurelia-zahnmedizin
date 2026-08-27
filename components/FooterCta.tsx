"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/data";

const knopf =
  "rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-transform hover:scale-105";

/*
 * Abschluss-Aufruf im Footer.
 *
 * Er zeigt auf die Terminbuchung – nur steht er auch auf der Terminseite
 * selbst, und dort wäre es ein Knopf ins Leere: man landet auf der Seite, auf
 * der man schon ist. Dort bietet er deshalb den Anruf an, also die Handlung,
 * die von hier aus tatsächlich weiterführt.
 */
export default function FooterCta() {
  const pathname = usePathname();

  if (pathname === "/termin") {
    return (
      <a href={site.phoneHref} className={`${knopf} border border-porcelain/30 text-porcelain hover:border-gold hover:text-gold`}>
        Lieber anrufen
      </a>
    );
  }

  return (
    <Link href="/termin" className={`${knopf} bg-gold text-ink`}>
      Online Termin buchen
    </Link>
  );
}
