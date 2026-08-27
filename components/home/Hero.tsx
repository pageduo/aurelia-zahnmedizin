"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlurImage from "@/components/ui/BlurImage";
import { img, u } from "@/lib/images";
import { hours, site } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

/*
 * Auftakt der Seite, bewusst zurückhaltend gesetzt.
 *
 * Vorher standen hier vier Textblöcke übereinander: Rubrik, Wortmarke, Claim
 * und ein Fließtext über digitale Diagnostik. Der Fließtext ist entfallen, weil
 * der Abschnitt direkt darunter dasselbe ausführlicher sagt – im Auftakt hat er
 * nur Gewicht weggenommen. An seiner Stelle steht jetzt eine schmale Zeile mit
 * Adresse, Gründungsjahr und Sprechzeiten: nachprüfbare Angaben statt
 * Werbesprache, wie der Briefkopf einer Praxis.
 *
 * Die Bewegung ist ruhiger als zuvor (1.04 statt 1.12 über drei statt zwei
 * Sekunden), und die Abdunklung ist von unten kräftiger. Das nimmt der oberen
 * Bildhälfte mit Deckentechnik und Geräten die Aufmerksamkeit und lässt den
 * Blick aus dem Fenster stehen.
 */
export default function Hero() {
  const werktags = hours[0];

  return (
    <section id="start" className="relative flex h-svh items-end overflow-hidden bg-ink text-porcelain">
      <motion.div
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease }}
        className="absolute inset-0"
      >
        <BlurImage
          src={u(img.hero, 2400)}
          alt="Behandlungszimmer der Privatpraxis AURELIA mit Blick über Hamburg"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/45" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-12 lg:pb-14">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="text-xs font-semibold uppercase tracking-[0.34em] text-gold-soft sm:text-sm"
        >
          <span aria-hidden className="mr-4 inline-block h-px w-8 bg-current align-middle opacity-50" />
          Privatpraxis für Zahnmedizin
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55, ease }}
          className="mt-7 font-serif text-6xl leading-[0.95] tracking-[0.06em] sm:text-7xl lg:text-8xl"
        >
          AURELIA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.75, ease }}
          className="mt-7 max-w-xl font-serif text-2xl leading-snug text-porcelain/90 sm:text-3xl"
        >
          Zahnheilkunde, die man <em className="text-gold-soft">nicht spürt</em> – aber jeden Tag sieht.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease }}
          className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Link
            href="/termin"
            className="rounded-full bg-gold px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-gold-soft"
          >
            Termin vereinbaren
          </Link>
          <Link
            href="/ueber-uns"
            className="group inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-porcelain/80 transition-colors duration-300 hover:text-gold-soft"
          >
            Die Praxis kennenlernen
            <span aria-hidden className="block h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
          </Link>
        </motion.div>

        {/* Nachprüfbare Angaben als ruhiger Abschluss, durch eine Haarlinie abgesetzt */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.25, ease }}
          className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-porcelain/15 pt-5 text-xs text-porcelain/60 sm:mt-12"
        >
          <div className="flex gap-2">
            <dt className="sr-only">Adresse</dt>
            <dd>
              {site.address.street}, {site.address.city}
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">Gegründet</dt>
            <dd>Privatpraxis seit {site.founded}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">Sprechzeiten</dt>
            <dd>
              {werktags.day} {werktags.time}
            </dd>
          </div>
        </motion.dl>
      </div>

      {/*
        Der frühere Scroll-Hinweis stand mittig unten und lag damit genau auf
        der neuen Angabenzeile. Beide gehören an den unteren Rand, also musste
        einer weichen: die Angaben tragen mehr, und ein Wort "Scroll" ist für
        eine Privatpraxis ohnehin eher Beiwerk. Dass es weitergeht, zeigen die
        Haarlinie über den Angaben und die Sektionsleiste am rechten Rand.
      */}
    </section>
  );
}
