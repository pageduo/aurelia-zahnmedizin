"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const fieldClass =
  "w-full rounded-lg border border-ink/15 bg-porcelain px-4 py-3.5 text-sm text-ink placeholder:text-stone/60 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30";

/** Demo-Kontaktformular: validiert, animiert - versendet aber nichts (statische Demo). */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[28rem] flex-col items-center justify-center rounded-2xl border border-gold/40 bg-cream p-10 text-center"
          >
            <motion.svg
              viewBox="0 0 52 52"
              className="h-16 w-16 text-pine"
              initial="hidden"
              animate="visible"
            >
              <motion.circle
                cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="2"
                variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.path
                d="M15 27l7 7 15-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              />
            </motion.svg>
            <h3 className="mt-6 font-serif text-3xl text-ink">Vielen Dank!</h3>
            <p className="mt-3 max-w-sm text-stone">
              Ihre Anfrage ist angekommen. Wir melden uns in der Regel innerhalb eines Werktags bei Ihnen.
            </p>
            <p className="mt-4 text-xs text-stone/60">(Demo: Es wurde keine echte Nachricht versendet.)</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -12 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Ihr Name *" className={fieldClass} />
              <input required type="email" name="email" placeholder="E-Mail-Adresse *" className={fieldClass} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="tel" name="phone" placeholder="Telefon (optional)" className={fieldClass} />
              <select name="topic" defaultValue="" className={fieldClass} aria-label="Ihr Anliegen">
                <option value="" disabled>
                  Ihr Anliegen …
                </option>
                <option>Erstberatung / Kennenlernen</option>
                <option>Ästhetische Zahnheilkunde</option>
                <option>Implantologie</option>
                <option>Prophylaxe-Termin</option>
                <option>Angstpatient - behutsamer Einstieg</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="Ihre Nachricht - was können wir für Sie tun?"
              className={fieldClass}
            />
            <label className="flex items-start gap-3 text-xs leading-relaxed text-stone">
              <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-gold" />
              <span>
                Ich habe die <a href="/datenschutz" className="underline decoration-gold underline-offset-2">Datenschutzerklärung</a>{" "}
                gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. *
              </span>
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-pine px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-porcelain transition-all duration-300 hover:bg-ink sm:w-auto"
            >
              Nachricht senden
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
