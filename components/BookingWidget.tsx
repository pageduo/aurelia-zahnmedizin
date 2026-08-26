"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BlurImage from "@/components/ui/BlurImage";
import { bookingServices, team } from "@/lib/data";
import { u } from "@/lib/images";

/* ---------- deterministische Demo-Slots (stabil pro Tag & Behandler) ---------- */

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Öffnungszeiten wie auf der Website: Mo-Do 8-19, Fr 8-15, Sa 9-13, So geschlossen. */
function daySlots(dateKey: string, staffId: string): string[] {
  const d = new Date(dateKey + "T00:00:00");
  const dow = d.getDay();
  if (dow === 0) return [];
  let start = 8;
  let end = 19;
  if (dow === 5) end = 15;
  if (dow === 6) {
    start = 9;
    end = 13;
  }
  const rng = mulberry32(hash(dateKey + staffId));
  const slots: string[] = [];
  for (let h = start; h < end; h++) {
    for (const m of ["00", "30"]) {
      if (rng() < 0.28) slots.push(`${String(h).padStart(2, "0")}:${m}`);
    }
  }
  return slots.slice(0, 9);
}

function toKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

/* ---------- UI-Bausteine ---------- */

const steps = ["Leistung", "Behandler", "Termin", "Bestätigung"];

function StepIndicator({ current }: { current: number }) {
  return (
    <ol className="flex flex-wrap items-center gap-3 sm:gap-4">
      {steps.map((label, i) => {
        const state = i < current ? "done" : i === current ? "active" : "todo";
        return (
          <li key={label} className="flex items-center gap-3">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                state === "active"
                  ? "bg-gold text-ink"
                  : state === "done"
                    ? "bg-pine text-porcelain"
                    : "border border-ink/20 text-stone"
              }`}
            >
              {state === "done" ? "✓" : i + 1}
            </span>
            <span
              className={`text-xs font-semibold uppercase tracking-[0.15em] ${
                state === "todo" ? "text-stone/60" : "text-ink"
              }`}
            >
              {label}
            </span>
            {i < steps.length - 1 && <span className="hidden h-px w-6 bg-ink/15 sm:block" />}
          </li>
        );
      })}
    </ol>
  );
}

const fieldClass =
  "w-full rounded-lg border border-ink/15 bg-porcelain px-4 py-3.5 text-sm text-ink placeholder:text-stone/60 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30";

/* ---------- Widget ---------- */

export default function BookingWidget() {
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [staffId, setStaffId] = useState<string | null>(null); // "any" = nächstmöglich
  const [month, setMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [dateKey, setDateKey] = useState<string | null>(null);
  const [slot, setSlot] = useState<{ time: string; staffId: string } | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const service = bookingServices.find((s) => s.id === serviceId) ?? null;
  const allowedStaff = useMemo(() => (service ? team.filter((m) => service.staff.includes(m.id)) : []), [service]);

  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1);

  const slotsForDay = useMemo(() => {
    if (!service || !staffId || !dateKey) return [];
    const ids = staffId === "any" ? service.staff : [staffId];
    const merged = new Map<string, string>();
    for (const id of ids) {
      for (const time of daySlots(dateKey, id)) {
        if (!merged.has(time)) merged.set(time, id);
      }
    }
    return [...merged.entries()].map(([time, id]) => ({ time, staffId: id })).sort((a, b) => a.time.localeCompare(b.time));
  }, [service, staffId, dateKey]);

  const calendarDays = useMemo(() => {
    const first = new Date(month.getFullYear(), month.getMonth(), 1);
    const offset = (first.getDay() + 6) % 7; // Montag = 0
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const cells: (Date | null)[] = Array.from({ length: offset }, () => null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(month.getFullYear(), month.getMonth(), d));
    return cells;
  }, [month]);

  const staffName = (id: string) => team.find((m) => m.id === id)?.name ?? "";
  const staffShort = (id: string) => staffName(id).replace("Dr. med. dent. ", "Dr. ");

  const reset = () => {
    setStep(0);
    setServiceId(null);
    setStaffId(null);
    setDateKey(null);
    setSlot(null);
    setConfirmed(false);
  };

  if (confirmed && service && slot && dateKey) {
    const d = new Date(dateKey + "T00:00:00");
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-2xl rounded-2xl border border-gold/40 bg-cream p-10 text-center"
      >
        <motion.svg viewBox="0 0 52 52" className="mx-auto h-16 w-16 text-pine" initial="hidden" animate="visible">
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
        <h3 className="mt-6 font-serif text-3xl text-ink">Termin reserviert!</h3>
        <p className="mt-4 text-stone">
          <strong className="text-ink">{service.title}</strong>
          <br />
          {d.toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })} ·{" "}
          {slot.time} Uhr · {staffShort(slot.staffId)}
        </p>
        <p className="mt-4 text-sm text-stone">
          Sie erhalten in Kürze eine Bestätigung per E-Mail. Bitte bringen Sie zum ersten Termin Ihre
          Versichertenkarte und ggf. Vorbefunde mit.
        </p>
        <p className="mt-5 text-xs text-stone/60">(Demo-Funktion: Es wurde kein echter Termin gebucht.)</p>
        <button
          onClick={reset}
          className="mt-8 rounded-full border border-ink/20 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold hover:text-pine"
        >
          Weiteren Termin buchen
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink/10 bg-cream p-6 shadow-sm sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <StepIndicator current={step} />
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-stone transition-colors hover:text-pine"
          >
            ← Zurück
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* Schritt 1: Leistung */}
        {step === 0 && (
          <motion.div
            key="s0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {bookingServices.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setServiceId(s.id);
                  setStaffId(null);
                  setDateKey(null);
                  setSlot(null);
                  setStep(1);
                }}
                className={`group rounded-xl border p-5 text-left transition-all duration-300 hover:border-gold hover:shadow-md ${
                  serviceId === s.id ? "border-gold bg-porcelain" : "border-ink/10 bg-porcelain/60"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                  <span className="shrink-0 rounded-full bg-pine/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-pine">
                    {s.duration} Min
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone">{s.desc}</p>
              </button>
            ))}
          </motion.div>
        )}

        {/* Schritt 2: Behandler */}
        {step === 1 && service && (
          <motion.div
            key="s1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-8"
          >
            <p className="text-sm text-stone">
              Gewählt: <strong className="text-ink">{service.title}</strong> ({service.duration} Min)
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allowedStaff.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setStaffId(m.id);
                    setDateKey(null);
                    setSlot(null);
                    setStep(2);
                  }}
                  className="group overflow-hidden rounded-xl border border-ink/10 bg-porcelain/60 text-left transition-all duration-300 hover:border-gold hover:shadow-md"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <BlurImage
                      src={u(m.image, 600)}
                      alt={`Porträt: ${m.name}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg leading-snug text-ink">{m.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gold">{m.role}</p>
                  </div>
                </button>
              ))}
              {allowedStaff.length > 1 && (
                <button
                  onClick={() => {
                    setStaffId("any");
                    setDateKey(null);
                    setSlot(null);
                    setStep(2);
                  }}
                  className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-pine/40 bg-porcelain/40 p-6 text-center transition-all duration-300 hover:border-gold hover:shadow-md"
                >
                  <span className="font-serif text-lg text-pine">Nächstmöglicher Termin</span>
                  <span className="text-sm text-stone">Behandler egal – Hauptsache bald</span>
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Schritt 3: Kalender & Slots */}
        {step === 2 && service && staffId && (
          <motion.div
            key="s2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]"
          >
            {/* Kalender */}
            <div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
                  disabled={month <= minMonth}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Voriger Monat"
                >
                  ←
                </button>
                <p className="font-serif text-xl text-ink">
                  {MONTHS[month.getMonth()]} {month.getFullYear()}
                </p>
                <button
                  onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
                  disabled={month >= maxMonth}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Nächster Monat"
                >
                  →
                </button>
              </div>
              <div className="mt-4 grid grid-cols-7 gap-1 text-center">
                {WEEKDAYS.map((d) => (
                  <span key={d} className="py-2 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-stone">
                    {d}
                  </span>
                ))}
                {calendarDays.map((d, i) => {
                  if (!d) return <span key={`x${i}`} />;
                  const key = toKey(d);
                  const disabled = d < todayStart || d.getDay() === 0;
                  const selected = key === dateKey;
                  return (
                    <button
                      key={key}
                      disabled={disabled}
                      onClick={() => {
                        setDateKey(key);
                        setSlot(null);
                      }}
                      className={`aspect-square rounded-lg text-sm transition-all duration-200 ${
                        selected
                          ? "bg-gold font-bold text-ink"
                          : disabled
                            ? "cursor-not-allowed text-stone/30"
                            : "text-ink hover:bg-pine/10"
                      }`}
                    >
                      {d.getDate()}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-stone/70">
                Mo-Do 08-19 Uhr · Fr 08-15 Uhr · Sa nach Vereinbarung · So geschlossen
              </p>
            </div>

            {/* Freie Slots */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pine">
                {staffId === "any" ? "Alle Behandler" : staffShort(staffId)}
              </p>
              {!dateKey && <p className="mt-4 text-stone">Bitte wählen Sie links einen Tag aus.</p>}
              {dateKey && slotsForDay.length === 0 && (
                <p className="mt-4 text-stone">An diesem Tag sind leider keine Termine frei – bitte wählen Sie einen anderen Tag.</p>
              )}
              {dateKey && slotsForDay.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {slotsForDay.map((s) => {
                    const isSel = slot?.time === s.time;
                    return (
                      <button
                        key={s.time}
                        onClick={() => {
                          setSlot(s);
                          setStep(3);
                        }}
                        className={`rounded-lg border px-3 py-3 text-sm transition-all duration-200 ${
                          isSel
                            ? "border-gold bg-gold font-bold text-ink"
                            : "border-ink/15 bg-porcelain/60 text-ink hover:border-gold"
                        }`}
                      >
                        {s.time}
                        {staffId === "any" && (
                          <span className="mt-0.5 block truncate text-[0.6rem] uppercase tracking-wide text-stone">
                            {staffShort(s.staffId).split(" ").slice(0, 2).join(" ")}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Schritt 4: Bestätigung */}
        {step === 3 && service && slot && dateKey && (
          <motion.form
            key="s3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            onSubmit={(e) => {
              e.preventDefault();
              setConfirmed(true);
            }}
            className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]"
          >
            <div className="rounded-xl bg-porcelain p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Ihre Auswahl</p>
              <p className="mt-4 font-serif text-2xl leading-snug text-ink">{service.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-stone">
                <li>
                  <span className="text-ink">
                    {new Date(dateKey + "T00:00:00").toLocaleDateString("de-DE", {
                      weekday: "long", day: "2-digit", month: "long", year: "numeric",
                    })}
                  </span>
                </li>
                <li>{slot.time} Uhr · ca. {service.duration} Minuten</li>
                <li>{staffShort(slot.staffId)}</li>
                <li>Neuer Wall 34, 20354 Hamburg</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Ihr Name *" className={fieldClass} />
                <input required type="email" name="email" placeholder="E-Mail-Adresse *" className={fieldClass} />
              </div>
              <input type="tel" name="phone" placeholder="Telefon (optional)" className={fieldClass} />
              <label className="flex items-start gap-3 text-xs leading-relaxed text-stone">
                <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-gold" />
                <span>
                  Ich habe die <a href="/datenschutz" className="underline decoration-gold underline-offset-2">Datenschutzerklärung</a>{" "}
                  gelesen und bin mit der Verarbeitung meiner Angaben zur Terminvereinbarung einverstanden. *
                </span>
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-pine px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-porcelain transition-all duration-300 hover:bg-ink sm:w-auto"
              >
                Termin verbindlich reservieren
              </button>
              <p className="text-xs text-stone/60">Demo-Funktion: Es wird kein echter Termin gebucht.</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
