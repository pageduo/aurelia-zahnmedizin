# Medien-Audit — AURELIA

Stand: 31.10.2026 · Branch `legal/medien-audit` · Prüfer: Claude Opus 5 im Auftrag von PageDuo

Geprüft wurden alle Bilder, Videos, Grafiken, Schriften und Icon-Bibliotheken
dieses Repositorys auf Herkunft, Lizenzlage und Kennzeichnungspflicht nach
Art. 50 Abs. 4 EU AI Act (in Kraft seit 02.08.2026).

**Grundregel dieses Dokuments: Es wird nichts geraten.** Wo die Herkunft nicht
belegbar ist, steht „unklar" — nicht die wahrscheinlichste Vermutung.

---

## Überblick

| Ampel | Anzahl | |
|---|---|---|
| 🟢 GRÜN | 7 | Gerüstgrafiken aus der Next.js-Vorlage, Favicon, die Schriften |
| 🟡 GELB | 30 | Unsplash-Motive: Quelle belegt, Lizenz und KI-Status nicht |
| 🔴 ROT | 0 | — |

Kein Medium wurde gekennzeichnet, gelöscht oder ausgetauscht. Das war in
diesem Schritt so vorgesehen.

---

## Der eine Befund, der alles andere trägt

Die Unsplash-Fotoseiten sind **nicht erreichbar**. Die lange Zahlenkette in
`images.unsplash.com/photo-1600880292203-757bb62b4baf` ist die Kennung des
Bildservers, nicht der Adressteil der Fotoseite; `unsplash.com/photos/<diese ID>`
antwortet mit 404. Ohne die Fotoseite lässt sich je Bild nicht feststellen:

- wer es aufgenommen hat,
- ob die freie Unsplash-Lizenz oder die abweichende **Unsplash+**-Lizenz gilt,
- ob Unsplash es als **KI-generiert** ausweist.

Der Dateikopf von `lib/images.ts` nennt die Unsplash-Lizenz und hält fest, die Motive seien
visuell geprüft worden. Das ist eine Angabe im Repo und zählt als Hinweis —
aber nicht als Nachweis gegenüber einem Rechteinhaber. Deshalb stehen alle
Unsplash-Motive auf 🟡, nicht auf 🟢.

**Was 🟢 daraus machen würde:** je Motiv die Fotoseite über die Bildersuche von
Unsplash auflösen und Fotograf, Lizenzart und KI-Kennzeichnung notieren. Oder
die Motive durch eigene beziehungsweise beauftragte Fotografie ersetzen — was
der Dateikopf für den echten Kundenbetrieb ohnehin vorsieht.

---

## Inventar

### Extern eingebundene Fotos (Unsplash)

Alle 30 Motive werden vom Bildserver `images.unsplash.com` geladen und liegen
**nicht** im Repository. Für sie gilt durchgehend: Quelle Unsplash (durch den
Auslieferungshost belegt), Fotograf **unklar**, Lizenzart **unklar**, KI
**unklar**, fotorealistisch ja, Ampel 🟡, keine Kennzeichnung gesetzt.

| Einsatzort im Code | Unsplash-ID | Motiv laut Repo |
|---|---|---|
| `hero` | `1616391182219-e080b4d1043a` | dunkles Premium-Behandlungszimmer mit Skyline |
| `praxisEmpfang` | `1598256989800-fe5f95da9787` | warmes Behandlungszimmer, Holztür |
| `praxisRaum` | `1663755781620-b9b8fdbdead5` | sonnendurchflutet, Holzboden |
| `praxisDetail, news2` | `1606811842243-af7e16970c1f` | ruhige Beratungssituation, grau/weiß |
| `techDvt` | `1588776814546-1ffcf47267a5` | Behandler prüft Röntgenbild am Schirm |
| `techScanner, newsHero` | `1656428964836-78d54bf76231` | Intraoralscanner im Einsatz |
| `techMikroskop, leistungenHero` | `1663185551550-f8f56529ac5e` | Behandler mit Lupenbrille |
| `techSmile` | `1619691249147-c5689d88016b` | Patientin betrachtet 3D-Scan |
| `leistungAesthetik` | `1611880147493-7542bdb0f024` | offenes Lächeln, warmes Innenlicht |
| `leistungImplantat` | `1588776814546-daab30f310ce` | OP-Team steril |
| `leistungDiagnostik` | `1598531136726-4157529f8cbb` | Scanner & Laptop |
| `leistungEndo` | `1626736985932-c0df2ae07a2e` | Präzisionsarbeit, dunkle Handschuhe |
| `leistungProphylaxe` | `1629909613654-28e377c37b09` | helles, klinisch reines Zimmer |
| `leistungAligner` | `1667133295315-820bb6481730` | Aligner-Einsatz mit Monitor |
| `teamRoth` | `1559839734-2b71ea197ec2` | Ärztin im Kittel, warmes Licht |
| `teamBerger` | `1729162128021-f37dca3ff30d` | Behandler im Kittel, neutraler Grund |
| `teamLindqvist` | `1662837775272-545d8e143ad0` | Zahnärztin lachend am Stuhl |
| `teamKhan` | `1643297654397-97b3201abc7c` | lachende Medizinerin im Freien |
| `ergebnisseHero` | `1610631066894-62452ccb927c` | Ergebnisse (Fälle) |
| `fall1` | `1548382131-e0ebb1f0cdea` | Veneers: offenes Lächeln, Tageslicht |
| `fall2` | `1611695434369-a8f5d76ceb7b` | Aligner: lachender Mann, Berufsalltag |
| `fall3` | `1566616213894-2d4e1baee5d8` | Implantat: Seniorin, breites Lächeln |
| `fall4` | `1758600587815-b654d1405e83` | Bleaching |
| `fall5` | `1736741517726-30189ca046ae` | Komplettsanierung, s/w editorial |
| `fall6` | `1567516364473-233c4b6fcfbe` | Zahnfleischästhetik: Lächeln nah, warm |
| `news1` | `1617812191081-2a24e3f30e45` | Veneers oder Bleaching: offenes Lächeln |
| `news3` | `1588776813941-dcf9c55e84d2` | Dämmerschlaf / OP |
| `news4` | `1629909615957-be38d48fbbe6` | Prophylaxe |
| `ctaBand` | `1643660527098-559f89e45a92` | CTA / Über uns |
| `ueberUns` | `1629909615184-74f495363b67` | *(im Repo nicht beschrieben)* |

### Dateien im Repository

| Datei | Größe | Quelle | Beleg | KI | Ampel |
|---|---|---|---|---|---|
| `app/favicon.ico` | 25 KB | eigene Grafik | im Projekt erstellt | nein | 🟢 |

### Gerüstgrafiken aus `create-next-app`

| Datei | Quelle | Lizenz | Ampel |
|---|---|---|---|
| `public/file.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |
| `public/globe.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |
| `public/next.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |
| `public/vercel.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |
| `public/window.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |

### Schriften

Eingebunden über `next/font/google`. Next.js lädt die Schriftdateien zur
Bauzeit herunter und liefert sie von der eigenen Domain aus; beim Seitenaufruf
entsteht **kein Aufruf an Google**. Google Fonts stehen unter der SIL Open
Font License. 🟢

### Icon-Bibliotheken

Keine. Die Symbole sind Inline-SVG im Quelltext. 🟢

---

## Zusätzliche Prüfungen

### Öffentliches Repository und Weitergabe der Originaldateien

`pageduo/aurelia-zahnmedizin` ist auf GitHub **öffentlich**. Jede im Repository liegende
Bilddatei wird damit als Originaldatei zum Download angeboten.

Im Repository liegen keine Fotos — die Unsplash-Motive werden extern geladen.
Betroffen sind nur die Gerüstgrafiken aus der Next.js-Vorlage (MIT) und das
Favicon. Beide dürfen weitergegeben werden. **Kein Befund.**

### Externe Aufrufe beim Seitenaufruf

Beim Laden der Live-Seite werden die Motive von `images.unsplash.com` geholt.
Dabei erfährt Unsplash die **IP-Adresse jedes Besuchers**, dazu Zeitpunkt,
Browser und die verweisende Seite. Eine Einwilligung wird nicht eingeholt, und
die Datenschutzerklärung der Demo verweist auf PageDuo, deren Erklärung sagt:
„Beim Aufruf werden keine Inhalte von Drittanbietern geladen."

**Das deckt sich nicht.** Entweder die Bilder wandern ins Repository (sofern die
Lizenz das erlaubt — siehe oben, derzeit ungeklärt), oder die Datenschutz-
erklärung muss den Abruf benennen. Hier wurde nichts umgebaut.

---

## KI-Kennzeichnung

**Es wurde keine gesetzt.** Art. 50 Abs. 4 EU AI Act verlangt die Offenlegung bei
KI-erzeugten Medien, die echt wirken. Ob eines der Motive KI-erzeugt ist, lässt
sich ohne die Unsplash-Fotoseiten nicht feststellen — und die Regel aus dem
Prüfauftrag lautet: Bei „unklar" **nicht** kennzeichnen, sondern melden.

Eine Kennzeichnung auf Verdacht wäre nicht die sichere Seite, sondern eine
falsche Angabe über ein möglicherweise von Hand fotografiertes Bild.

## Bildnachweise

Keine erforderlich. Die Unsplash-Lizenz verlangt keine Namensnennung. Sollte sich
bei der Klärung herausstellen, dass ein Motiv unter Unsplash+ steht, ist dessen
Lizenz gesondert zu prüfen.

---

## Klärung nötig

| Was | Wie viele | Warum offen |
|---|---|---|
| KI-Status der Unsplash-Motive | 30 | Fotoseite nicht erreichbar |
| Lizenzart (frei oder Unsplash+) | 30 | dito |

---

## Werkzeuge und Methode

`exiftool`, `ffprobe` und ImageMagick stehen auf diesem Rechner nicht zur
Verfügung. Die Metadaten wurden deshalb direkt aus den Dateien gelesen: JPEG-
Segmente (EXIF, XMP, IPTC, Kommentar, C2PA), PNG-Textkammern und die Kopf-Atome
von MP4. Gesucht wurde nach `Software`, `Artist`, `Creator`, `Credit`,
`Copyright`, `DigitalSourceType` sowie nach Spuren bekannter KI-Werkzeuge.

Dazu: Git-Historie der Dateien, Kommentare und Dokumente im Repo, Sichtprüfung,
und für die externen Aufrufe eine Aufzeichnung aller Netzwerk-Anfragen der
Live-Seite.
