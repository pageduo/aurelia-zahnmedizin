"use client";

import { useState } from "react";
import { site } from "@/lib/data";

/**
 * DSGVO-konforme Zwei-Klick-Karte: Google Maps lädt erst nach aktiver Zustimmung.
 */
export default function MapConsent() {
  const [consent, setConsent] = useState(false);
  const query = encodeURIComponent(`${site.address.street}, ${site.address.zip} ${site.address.city}`);

  if (consent) {
    return (
      <iframe
        title="Anfahrt zur Praxis AURELIA"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="h-96 w-full rounded-2xl border-0 grayscale-[35%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="dark-texture flex h-96 w-full flex-col items-center justify-center gap-4 rounded-2xl bg-pine px-8 text-center text-porcelain">
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
      <p className="font-serif text-2xl">
        {site.address.street}, {site.address.zip} {site.address.city}
      </p>
      <p className="max-w-md text-sm text-porcelain/70">
        Erst nach Ihrem Klick wird die Google-Maps-Karte geladen und eine Verbindung zu Google-Servern aufgebaut
        (Datenschutzhinweis).
      </p>
      <button
        onClick={() => setConsent(true)}
        className="mt-2 rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
      >
        Karte laden
      </button>
    </div>
  );
}
