"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MotionValue, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { springeZu } from "@/components/SmoothScroll";
import { techSteps } from "@/lib/data";
import { u } from "@/lib/images";

const SCHRITTE = techSteps.length;

/** Breite eines Schrittfensters im Scrollfortschritt (0 bis 1). */
const SPANNE = 1 / SCHRITTE;

/** Anteil eines Schrittfensters, über den ein- und ausgeblendet wird. */
const BLENDE = 0.22;

/** Scrollstrecke pro Schritt. Unverändert zur Vorfassung. */
const STRECKE_VH = 50;

/** Höhe der fixierten Kopfleiste – Sprungziele müssen darunter landen. */
const KOPF_ABSTAND = 88;

/*
 * Bildebene. Die Ebenen liegen gestapelt statt nebeneinander: Ebene i blendet
 * über allem darunter ein und bleibt danach deckend stehen. Bei einer echten
 * Kreuzblende wären beide Ebenen kurz halbtransparent und der dunkle Grund
 * würde durchschlagen – die Bühne sackte im Übergang sichtbar ab.
 */
function Bildebene({
  fortschritt,
  index,
  src,
}: {
  fortschritt: MotionValue<number>;
  index: number;
  src: string;
}) {
  const deckkraft = useTransform(
    fortschritt,
    [index * SPANNE - BLENDE * SPANNE, index * SPANNE + BLENDE * SPANNE],
    [0, 1]
  );

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0"
      style={{ opacity: index === 0 ? 1 : deckkraft, zIndex: index }}
    >
      <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
    </motion.div>
  );
}

/*
 * Textebene. Anders als die Bilder überlappen sich die Texte bewusst nicht:
 * jeder Schritt blendet am Ende seines Fensters aus, bevor der nächste
 * einblendet. Zwei übereinanderliegende Absätze wären sonst unlesbar.
 */
function Textebene({
  fortschritt,
  index,
  aktiv,
  step,
}: {
  fortschritt: MotionValue<number>;
  index: number;
  aktiv: boolean;
  step: (typeof techSteps)[number];
}) {
  const erste = index === 0;
  const letzte = index === SCHRITTE - 1;
  const von = index * SPANNE;
  const bis = (index + 1) * SPANNE;
  const marken = [von, von + BLENDE * SPANNE, bis - BLENDE * SPANNE, bis];

  const deckkraft = useTransform(fortschritt, marken, [erste ? 1 : 0, 1, 1, letzte ? 1 : 0]);
  const y = useTransform(fortschritt, marken, [erste ? 0 : 28, 0, 0, letzte ? 0 : -22]);

  return (
    <motion.div style={{ opacity: deckkraft, y }} className="absolute inset-0" aria-hidden={!aktiv}>
      <span className="font-serif text-7xl text-gold/40 sm:text-8xl">{step.n}</span>
      <h3 className="mt-2 font-serif text-4xl leading-tight text-porcelain sm:text-5xl">{step.title}</h3>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-porcelain/70">{step.text}</p>
    </motion.div>
  );
}

/*
 * Fortschrittsbalken eines Schritts. Er füllt sich am Scrollfortschritt statt
 * in einem Rutsch umzuspringen – dadurch ist jederzeit sichtbar, wie weit der
 * laufende Schritt ist und wie viel Strecke noch vor einem liegt.
 */
function Schrittbalken({
  fortschritt,
  index,
  aktiv,
  n,
}: {
  fortschritt: MotionValue<number>;
  index: number;
  aktiv: boolean;
  n: string;
}) {
  const breite = useTransform(fortschritt, [index * SPANNE, (index + 1) * SPANNE], ["0%", "100%"]);

  return (
    <li className="flex-1">
      <span className="relative block h-px w-full bg-porcelain/20">
        <motion.span className="absolute inset-y-0 left-0 block bg-gold" style={{ width: breite }} />
      </span>
      <span
        className={`mt-3 block text-[0.65rem] tracking-[0.22em] transition-colors duration-500 ${
          aktiv ? "text-gold" : "text-porcelain/35"
        }`}
      >
        {n}
      </span>
    </li>
  );
}

/*
 * Fallback für prefers-reduced-motion: dieselben Inhalte ohne gepinnte Bühne
 * und ohne Scroll-Übernahme. Wer Bewegung reduziert hat, bekommt den lesbaren
 * Endzustand direkt untereinander gestellt.
 */
function StatischeSchritte() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:grid-cols-2 lg:px-12">
      {techSteps.map((s) => (
        <div key={s.n} className="flex flex-col gap-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={u(s.image, 1200)}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-serif text-4xl text-gold/50">{s.n}</span>
            <h3 className="mt-1 font-serif text-2xl text-porcelain">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-porcelain/70">{s.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/*
 * Gepinnte Bühne: der Abschnitt ist mehrere Viewporthöhen hoch, die Bühne
 * bleibt stehen und der Scrollfortschritt schaltet die Stationen weiter.
 *
 * Alles, was sich bewegt, hängt direkt am Scrollfortschritt statt an einer
 * eigenen Laufzeit. Die Vorfassung schaltete per Math.floor hart um und stieß
 * danach eine AnimatePresence mit mode="wait" an: die blendete erst aus und
 * erst danach ein, was bei jedem Wechsel eine sichtbare Totzeit erzeugte.
 * Genau das war das Hängen.
 */
export default function TechScrollytelling() {
  const ref = useRef<HTMLElement>(null);
  const [aktiv, setAktiv] = useState(0);

  /*
   * Bewusst über einen Effekt statt direkt beim ersten Rendern gelesen: der
   * Server kennt die Einstellung nicht, und da unten der ganze Teilbaum daran
   * hängt, würde ein sofort gelesener Wert die Hydration auseinanderlaufen
   * lassen.
   */
  const [reduziert, setReduziert] = useState(false);

  useEffect(() => {
    const abfrage = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setzen = () => setReduziert(abfrage.matches);
    setzen();
    abfrage.addEventListener("change", setzen);
    return () => abfrage.removeEventListener("change", setzen);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  /*
   * Leichte Feder auf dem Fortschritt. Mausrad und Trackpad liefern grobe
   * Sprünge; die Feder bügelt sie aus. Sie ist steif und leicht eingestellt,
   * damit die Bühne nicht zusätzlich zu Lenis hinter dem Scrollen herläuft.
   */
  const fortschritt = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.25,
    restDelta: 0.001,
  });

  useMotionValueEvent(fortschritt, "change", (v) => {
    setAktiv(Math.min(SCHRITTE - 1, Math.max(0, Math.floor(v * SCHRITTE))));
  });

  /*
   * Sprungziel des Weiterschalters. Innerhalb der Strecke landet er in der
   * Mitte des nächsten Schrittfensters, dort steht der Schritt sicher deckend.
   * Nach der letzten Station führt er aus der Bühne heraus.
   */
  const zuSchritt = useCallback((index: number) => {
    const el = ref.current;
    if (!el) return;

    const oben = el.getBoundingClientRect().top + window.scrollY;

    if (index >= SCHRITTE) {
      springeZu(oben + el.offsetHeight - KOPF_ABSTAND);
      return;
    }

    const strecke = el.offsetHeight - window.innerHeight;
    springeZu(oben + strecke * (index + 0.5) * SPANNE);
  }, []);

  const letzterSchritt = aktiv === SCHRITTE - 1;

  if (reduziert) {
    return (
      <section id="technologie" className="dark-texture bg-ink">
        <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-12">
          <Eyebrow light>Diagnostik &amp; Technologie</Eyebrow>
        </div>
        <StatischeSchritte />
      </section>
    );
  }

  return (
    <section
      id="technologie"
      ref={ref}
      className="relative bg-ink"
      style={{ height: `${100 + SCHRITTE * STRECKE_VH}svh` }}
    >
      <div className="dark-texture sticky top-0 h-svh overflow-hidden">
        {techSteps.map((s, i) => (
          <Bildebene key={s.n} fortschritt={fortschritt} index={i} src={u(s.image, 1800)} />
        ))}

        {/* Abdunklung liegt einmal über allen Bildebenen statt in jeder einzeln */}
        <div
          aria-hidden
          className="absolute inset-0 z-[5] bg-gradient-to-r from-ink via-ink/80 to-ink/30"
        />
        {/* Auf schmalen Schirmen läuft der Text über die volle Breite, ein
            Verlauf von links nach rechts läge dann quer zur Leserichtung. */}
        <div aria-hidden className="absolute inset-0 z-[5] bg-ink/60 lg:hidden" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex flex-1 items-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 xl:pr-36">
              <Eyebrow light>Diagnostik &amp; Technologie</Eyebrow>
              <div className="relative mt-6 min-h-[19rem] max-w-2xl sm:min-h-[17rem]">
                {techSteps.map((s, i) => (
                  <Textebene
                    key={s.n}
                    fortschritt={fortschritt}
                    index={i}
                    aktiv={i === aktiv}
                    step={s}
                  />
                ))}
              </div>
            </div>
          </div>

          {/*
           * Fortschritt und Weiterschalter stehen unten und waagerecht.
           * Vorher lief die Schrittanzeige senkrecht am rechten Rand und stand
           * damit direkt neben der ebenfalls senkrechten Sektionsleiste der
           * Seite: zwei fast gleich aussehende Zaehlwerke nebeneinander, die
           * niemand auseinanderhalten konnte. Die andere Achse loest das ohne
           * Verrenkung und gibt dem Weiterschalter gleich seinen Platz.
           */}
          <div className="pb-12 sm:pb-14">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 xl:pr-36">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
                <ul className="flex w-full gap-4 sm:max-w-lg">
                  {techSteps.map((s, i) => (
                    <Schrittbalken
                      key={s.n}
                      fortschritt={fortschritt}
                      index={i}
                      aktiv={i === aktiv}
                      n={s.n}
                    />
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => zuSchritt(aktiv + 1)}
                  className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-porcelain/30 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-porcelain transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:self-end"
                >
                  {letzterSchritt ? "Weiter" : "Nächster Schritt"}
                  <span
                    aria-hidden
                    className="block transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    &darr;
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
