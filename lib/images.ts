// Zentrale Bildverwaltung - alle Motive: Unsplash (lizenzfrei), visuell geprüft.
// Ein Motiv tauschen = nur hier die ID ändern.

export function u(id: string, w = 1600, h?: number): string {
  const hoehe = h ? `&h=${h}` : "";
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${hoehe}&q=75`;
}

export const img = {
  // Hero & Praxis
  hero: "photo-1616391182219-e080b4d1043a", // dunkles Premium-Behandlungszimmer mit Skyline
  praxisEmpfang: "photo-1598256989800-fe5f95da9787", // warmes Behandlungszimmer, Holztür
  praxisRaum: "photo-1663755781620-b9b8fdbdead5", // sonnendurchflutet, Holzboden
  praxisDetail: "photo-1606811842243-af7e16970c1f", // ruhige Beratungssituation, grau/weiß

  // Technologie (Scrollytelling, Startseite)
  techDvt: "photo-1588776814546-1ffcf47267a5", // Behandler prüft Röntgenbild am Schirm
  techScanner: "photo-1656428964836-78d54bf76231", // Intraoralscanner im Einsatz
  techMikroskop: "photo-1663185551550-f8f56529ac5e", // Behandler mit Lupenbrille
  techSmile: "photo-1619691249147-c5689d88016b", // Patientin betrachtet 3D-Scan

  // Leistungen
  leistungAesthetik: "photo-1611880147493-7542bdb0f024", // offenes Lächeln, warmes Innenlicht
  leistungImplantat: "photo-1588776814546-daab30f310ce", // OP-Team steril
  leistungDiagnostik: "photo-1598531136726-4157529f8cbb", // Scanner & Laptop
  leistungEndo: "photo-1626736985932-c0df2ae07a2e", // Präzisionsarbeit, dunkle Handschuhe
  leistungProphylaxe: "photo-1629909613654-28e377c37b09", // helles, klinisch reines Zimmer
  leistungAligner: "photo-1667133295315-820bb6481730", // Aligner-Einsatz mit Monitor
  leistungenHero: "photo-1663185551550-f8f56529ac5e",

  // Team
  teamRoth: "photo-1559839734-2b71ea197ec2", // Ärztin im Kittel, warmes Licht
  teamBerger: "photo-1729162128021-f37dca3ff30d", // Behandler im Kittel, neutraler Grund
  teamLindqvist: "photo-1662837775272-545d8e143ad0", // Zahnärztin lachend am Stuhl
  teamKhan: "photo-1643297654397-97b3201abc7c", // lachende Medizinerin im Freien

  // Ergebnisse (Fälle)
  ergebnisseHero: "photo-1610631066894-62452ccb927c",
  fall1: "photo-1548382131-e0ebb1f0cdea", // Veneers: offenes Lächeln, Tageslicht
  fall2: "photo-1611695434369-a8f5d76ceb7b", // Aligner: lachender Mann, Berufsalltag
  fall3: "photo-1566616213894-2d4e1baee5d8", // Implantat: Seniorin, breites Lächeln
  fall4: "photo-1758600587815-b654d1405e83", // Bleaching
  fall5: "photo-1736741517726-30189ca046ae", // Komplettsanierung, s/w editorial
  fall6: "photo-1567516364473-233c4b6fcfbe", // Zahnfleischästhetik: Lächeln nah, warm

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
