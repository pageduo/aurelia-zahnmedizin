// Zentrale Bildverwaltung — alle Motive: Unsplash (lizenzfrei), visuell geprüft.
// Ein Motiv tauschen = nur hier die ID ändern.

export function u(id: string, w = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
}

export const img = {
  // Hero & Praxis
  hero: "photo-1616391182219-e080b4d1043a", // dunkles Premium-Behandlungszimmer mit Skyline
  praxisEmpfang: "photo-1598256989800-fe5f95da9787", // warmes Behandlungszimmer, Holztür
  praxisRaum: "photo-1663755781620-b9b8fdbdead5", // sonnendurchflutet, Holzboden
  praxisDetail: "photo-1606811842243-af7e16970c1f", // ruhige Beratungssituation, grau/weiß

  // Technologie (Scrollytelling, Startseite)
  techDvt: "photo-1600170311833-c2cf5280ce49", // Tablet mit 3D-Röntgen
  techScanner: "photo-1656428964836-78d54bf76231", // Intraoralscanner im Einsatz
  techMikroskop: "photo-1663185551550-f8f56529ac5e", // Behandler mit Lupenbrille
  techSmile: "photo-1619691249147-c5689d88016b", // Patientin betrachtet 3D-Scan

  // Leistungen
  leistungAesthetik: "photo-1773899337978-b8d83bd9b783", // warmes Porträt am Fenster
  leistungImplantat: "photo-1588776814546-daab30f310ce", // OP-Team steril
  leistungDiagnostik: "photo-1598531136726-4157529f8cbb", // Scanner & Laptop
  leistungEndo: "photo-1626736985932-c0df2ae07a2e", // Präzisionsarbeit, dunkle Handschuhe
  leistungProphylaxe: "photo-1629909613654-28e377c37b09", // helles, klinisch reines Zimmer
  leistungAligner: "photo-1667133295315-820bb6481730", // Aligner-Einsatz mit Monitor
  leistungenHero: "photo-1663185551550-f8f56529ac5e",

  // Team
  teamRoth: "photo-1559839734-2b71ea197ec2", // Ärztin im Kittel, warmes Licht
  teamBerger: "photo-1758691463393-a2aa9900af8a", // Arzt mit Brille, lächelnd
  teamLindqvist: "photo-1662837775272-545d8e143ad0", // Zahnärztin lachend am Stuhl
  teamKhan: "photo-1643297654397-97b3201abc7c", // lachende Medizinerin im Freien

  // Ergebnisse (Fälle)
  ergebnisseHero: "photo-1610631066894-62452ccb927c",
  fall1: "photo-1688760116377-516bab574f6a", // Veneers
  fall2: "photo-1765648763932-43a3e2f8f35c", // Aligner im Berufsalltag
  fall3: "photo-1758686254593-7c4cd55b2621", // Implantat, Seniorin
  fall4: "photo-1758600587815-b654d1405e83", // Bleaching
  fall5: "photo-1736741517726-30189ca046ae", // Komplettsanierung, s/w editorial
  fall6: "photo-1746632452765-05eeadb3c552", // Zahnfleischästhetik, editorial grün

  // Aktuelles
  news1: "photo-1688760117655-bffd7d7c5bf6", // Veneers oder Bleaching
  news2: "photo-1606811842243-af7e16970c1f", // Intraoralscanner-Beitrag
  news3: "photo-1588776813941-dcf9c55e84d2", // Dämmerschlaf / OP
  news4: "photo-1629909615957-be38d48fbbe6", // Prophylaxe
  newsHero: "photo-1656428964836-78d54bf76231",

  // CTA / Über uns
  ctaBand: "photo-1643660527098-559f89e45a92",
  ueberUns: "photo-1629909615184-74f495363b67",
} as const;
