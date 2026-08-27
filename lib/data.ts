import { img } from "./images";

export const site = {
  name: "AURELIA",
  claim: "Privatpraxis für Zahnmedizin",
  city: "Hamburg",
  address: { street: "Neuer Wall 34", zip: "20354", city: "Hamburg" },
  phone: "+49 (0)40 228 817-0",
  phoneHref: "tel:+49402288170",
  email: "praxis@aurelia-zahnmedizin.de",
  founded: 2012,
};

export const nav = [
  { n: "01", label: "Start", short: "Start", href: "/" },
  { n: "02", label: "Leistungen", short: "Leistungen", href: "/leistungen" },
  { n: "03", label: "Team", short: "Team", href: "/team" },
  { n: "04", label: "Ergebnisse", short: "Ergebnisse", href: "/ergebnisse" },
  { n: "05", label: "Aktuelles", short: "Aktuelles", href: "/aktuelles" },
  { n: "06", label: "Über uns & Kontakt", short: "Über uns", href: "/ueber-uns" },
];

export const hours = [
  { day: "Montag – Donnerstag", time: "08:00 – 19:00 Uhr" },
  { day: "Freitag", time: "08:00 – 15:00 Uhr" },
  { day: "Samstag", time: "09:00 – 13:00 Uhr" },
];

export const services = [
  {
    slug: "aesthetik",
    n: "01",
    title: "Ästhetische Zahnheilkunde",
    teaser: "Veneers, Bleaching und Smile Design – geplant am digitalen Modell, bevor wir den ersten Handgriff tun.",
    text: "Ob hauchdünne Keramik-Veneers, schonendes Bleaching oder eine komplette Neugestaltung Ihres Lächelns: Wir entwerfen Ihr Ergebnis zuerst digital. Im Smile Design sehen Sie Ihr neues Lächeln, bevor die Behandlung beginnt – kein Versprechen, sondern eine Vorschau.",
    image: img.leistungAesthetik,
  },
  {
    slug: "implantologie",
    n: "02",
    title: "Implantologie & Chirurgie",
    teaser: "3D-navigierte Implantation mit geführter Schablone – minimalinvasiv, präzise, planbar.",
    text: "Feste Zähne an einem Tag sind kein Marketingversprechen, sondern eine Frage der Planung. Auf Basis der 3D-Volumentomographie setzen wir Implantate navigiert und minimalinvasiv – oft ohne Aufklappen des Zahnfleischs, mit deutlich kürzerer Heilungszeit.",
    image: img.leistungImplantat,
  },
  {
    slug: "diagnostik",
    n: "03",
    title: "Digitale Diagnostik",
    teaser: "DVT, Intraoralscanner und KI-gestützte Befundung – wir sehen, was anderen verborgen bleibt.",
    text: "Unsere Diagnostik ist vollständig digital: strahlungsarmes 3D-Röntgen (DVT), Abformung ohne Abdruckmasse per Intraoralscanner und KI-gestützte Bildanalyse als zweites Augenpaar. Sie sehen jeden Befund auf dem Bildschirm – verständlich erklärt.",
    image: img.leistungDiagnostik,
  },
  {
    slug: "endodontie",
    n: "04",
    title: "Endodontie unter dem Mikroskop",
    teaser: "Wurzelkanalbehandlung mit 25-facher Vergrößerung – Zahnerhalt statt Zahnersatz.",
    text: "Der eigene Zahn ist durch nichts zu ersetzen. Unter dem Dentalmikroskop behandeln wir Wurzelkanäle mit 25-facher Vergrößerung und finden Kanalstrukturen, die dem bloßen Auge entgehen. So retten wir Zähne, die andernorts längst aufgegeben würden.",
    image: img.leistungEndo,
  },
  {
    slug: "prophylaxe",
    n: "05",
    title: "Prophylaxe & Dentalhygiene",
    teaser: "Professionelle Zahnreinigung mit Airflow – sanft, gründlich, ohne Kratzen.",
    text: "Die beste Behandlung ist die, die nie nötig wird. Unsere Dentalhygienikerinnen arbeiten mit dem Airflow-Verfahren: ein feiner Pulver-Wasser-Strahl entfernt Beläge sanft und vollständig – angenehmer als jede herkömmliche Reinigung.",
    image: img.leistungProphylaxe,
  },
  {
    slug: "aligner",
    n: "06",
    title: "Aligner & Kieferorthopädie",
    teaser: "Unsichtbare Zahnschienen für Erwachsene – digital geplant, Woche für Woche sichtbar.",
    text: "Gerade Zähne ohne Brackets: Mit transparenten Alignern korrigieren wir Zahnfehlstellungen diskret im Alltag. Die gesamte Bewegung wird vorab digital simuliert – Sie sehen das Endergebnis, bevor Sie sich entscheiden.",
    image: img.leistungAligner,
  },
];

export const techSteps = [
  {
    n: "01",
    title: "3D-Volumentomographie",
    text: "Unser digitales Volumentomogramm (DVT) zeigt Kiefer, Nerven und Zahnwurzeln in drei Dimensionen – bei einem Bruchteil der Strahlung klassischer CT-Aufnahmen. Die Grundlage jeder präzisen Planung.",
    image: img.techDvt,
  },
  {
    n: "02",
    title: "Intraoralscanner",
    text: "Kein Würgereiz, keine Abdruckmasse: Der Scanner erfasst Ihre Zähne in Minuten als hochpräzises 3D-Modell – die Basis für Veneers, Kronen und Aligner in Passform auf den Mikrometer.",
    image: img.techScanner,
  },
  {
    n: "03",
    title: "Dentalmikroskop",
    text: "Mit 25-facher Vergrößerung sehen wir feinste Kanalstrukturen und Haarrisse, die dem bloßen Auge verborgen bleiben. Präzision, die Zähne rettet, statt sie zu ersetzen.",
    image: img.techMikroskop,
  },
  {
    n: "04",
    title: "Digitales Smile Design",
    text: "Ihr neues Lächeln – als Vorschau auf dem Bildschirm, bevor wir beginnen. Fotos, Scan und KI-Analyse verschmelzen zu einem Entwurf, den wir gemeinsam mit Ihnen verfeinern.",
    image: img.techSmile,
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Kennenlernen & Analyse",
    text: "60 Minuten nur für Sie: ausführliches Gespräch, digitale Komplettdiagnostik mit Scan und 3D-Röntgen. Sie sehen jeden Befund live auf dem Bildschirm – verständlich erklärt, ohne Fachchinesisch.",
    detail: "Dauer: ca. 60 Minuten",
  },
  {
    n: "02",
    title: "Ihr persönlicher Plan",
    text: "Auf Basis aller Befunde entwickeln wir Ihren Behandlungsplan – mit klaren Etappen, ehrlichen Alternativen und einem transparenten Kostenrahmen. Keine Überraschungen, versprochen.",
    detail: "Transparente Kostenplanung",
  },
  {
    n: "03",
    title: "Behandlung in Ruhe",
    text: "Wir planen großzügige Termine, arbeiten ohne Zeitdruck und auf Wunsch mit Lachgas oder in Dämmerschlaf. Viele unserer Patientinnen und Patienten kamen als Angstpatienten – und blieben.",
    detail: "Auf Wunsch: Sedierung & Dämmerschlaf",
  },
  {
    n: "04",
    title: "Nachsorge & Begleitung",
    text: "Ihr Ergebnis soll Jahrzehnte halten. Mit individuellem Recall, professioneller Prophylaxe und einem festen Ansprechpartner begleiten wir Sie langfristig – nicht nur bis zur letzten Rechnung.",
    detail: "Individuelles Recall-Programm",
  },
];

export const stats = [
  /*
   * Aus dem Gruendungsjahr gerechnet statt fest eingetragen. Die 14 stimmte
   * zwar, waere aber zum naechsten Jahreswechsel still falsch geworden, ohne
   * dass es jemandem auffaellt. Stats ist eine Server-Komponente, der Wert
   * wird also beim Bauen ermittelt und als Eigenschaft weitergereicht.
   */
  {
    value: new Date().getFullYear() - site.founded,
    suffix: "",
    label: "Jahre Erfahrung",
    note: `Privatpraxis seit ${site.founded}`,
  },
  { value: 5200, suffix: "+", label: "Patientinnen & Patienten", note: "aus Hamburg und ganz Europa" },
  { value: 4.9, suffix: "", decimals: 1, label: "Google-Bewertung", note: "aus über 600 Rezensionen" },
  { value: 100, suffix: " %", label: "digitale Diagnostik", note: "DVT, Scanner, Smile Design" },
];

export const team = [
  {
    id: "roth",
    name: "Dr. med. dent. Helena Roth",
    role: "Gründerin · Ästhetische Zahnheilkunde & Implantologie",
    text: "Über 20 Jahre Erfahrung, Ausbildung in Zürich und New York. Ihre Überzeugung: Das beste Ergebnis sieht man nicht – man sieht nur ein natürliches Lächeln.",
    quals: ["Master of Science Implantologie (DGI)", "Spezialistin für Ästhetische Zahnmedizin (DGÄZ)", "Curriculum Smile Design, New York"],
    image: img.teamRoth,
  },
  {
    id: "berger",
    name: "Dr. med. dent. Jonas Berger",
    role: "Endodontie & Mikroskopische Zahnerhaltung",
    text: "Der Zahnretter im Team. Behandelt ausschließlich unter dem Dentalmikroskop und übernimmt Fälle, die andernorts als hoffnungslos gelten.",
    quals: ["Master of Science Endodontie", "Zertifizierung Mikroskopische Zahnheilkunde", "Referent der Deutschen Gesellschaft für Endodontologie"],
    image: img.teamBerger,
  },
  {
    id: "lindqvist",
    name: "Dr. med. dent. Sophie Lindqvist",
    role: "Kieferorthopädie & Aligner-Therapie",
    text: "Digitale Kieferorthopädie für Erwachsene: unsichtbare Schienen, sichtbare Ergebnisse. Plant jede Zahnbewegung am 3D-Modell.",
    quals: ["Fachzahnärztin für Kieferorthopädie", "Invisalign Diamond Provider", "Studium in Stockholm & Hamburg"],
    image: img.teamLindqvist,
  },
  {
    id: "khan",
    name: "Amira Khan",
    role: "Leitende Dentalhygienikerin",
    text: "Leitet unser Prophylaxe-Team mit vier Kolleginnen. Ihre Patientinnen und Patienten sagen: die gründlichste und zugleich sanfteste Reinigung, die sie je hatten.",
    quals: ["Dentalhygienikerin (B.Sc.)", "Zertifizierung Airflow / GBT", "15 Jahre Prophylaxe-Erfahrung"],
    image: img.teamKhan,
  },
];

export const cases = [
  { n: "01", category: "Veneers", year: "2025", title: "Acht Veneers, ein neues Lächeln", text: "Verfärbte und ungleichmäßige Frontzähne – versorgt mit acht hauchdünnen Keramik-Veneers, geplant im digitalen Smile Design.", image: img.fall1 },
  { n: "02", category: "Aligner", year: "2025", title: "Engstand korrigiert in 9 Monaten", text: "Deutlicher Frontzahn-Engstand, korrigiert mit transparenten Alignern – komplett ohne Brackets, unsichtbar im Berufsalltag.", image: img.fall2 },
  { n: "03", category: "Implantologie", year: "2024", title: "Feste Zähne statt Prothese", text: "Vier Implantate, navigiert gesetzt, festsitzende Brücke am selben Tag. Ein Leben ohne herausnehmbaren Zahnersatz.", image: img.fall3 },
  { n: "04", category: "Bleaching", year: "2025", title: "Drei Nuancen heller – natürlich", text: "Professionelles In-Office-Bleaching nach Airflow-Reinigung. Heller, aber glaubwürdig – kein künstliches Weiß.", image: img.fall4 },
  { n: "05", category: "Komplettsanierung", year: "2024", title: "Vom Angstpatienten zum Stammgast", text: "Komplettsanierung in Dämmerschlaf über drei Sitzungen – nach 15 Jahren ohne Zahnarztbesuch.", image: img.fall5 },
  { n: "06", category: "Zahnfleischästhetik", year: "2024", title: "Harmonische Zahnfleischlinie", text: "Mikrochirurgische Korrektur des Zahnfleischverlaufs – der oft übersehene Rahmen eines schönen Lächelns.", image: img.fall6 },
];

export const posts = [
  {
    slug: "veneers-oder-bleaching",
    date: "2026-06-24",
    category: "Ästhetik",
    title: "Veneers oder Bleaching – was passt zu mir?",
    excerpt: "Beide machen Zähne schöner, aber auf sehr unterschiedliche Weise. Wann Aufhellen genügt und wann Keramik die ehrlichere Antwort ist.",
    image: img.news1,
    body: [
      "Die häufigste Frage in unserer ästhetischen Sprechstunde lautet nicht „Was kostet das?“, sondern: „Was brauche ich überhaupt?“ Und das ist genau die richtige Frage.",
      "Ein professionelles Bleaching hellt die natürliche Zahnsubstanz auf – es eignet sich hervorragend, wenn Form und Stellung Ihrer Zähne stimmen und Sie sich lediglich mehr Frische wünschen. In einer einzigen Sitzung erreichen wir zwei bis drei Nuancen, ohne die Zahnsubstanz anzugreifen.",
      "Veneers dagegen sind hauchdünne Keramikschalen, die Form, Farbe und kleine Stellungskorrekturen in einem Schritt lösen. Sie sind die Antwort, wenn Zähne abgenutzt, ungleichmäßig oder von Füllungen gezeichnet sind. Der Preis: Es ist eine dauerhafte Entscheidung – und genau deshalb planen wir sie im digitalen Smile Design, bevor der erste Zahn berührt wird.",
      "Unsere ehrliche Empfehlung: Wir beginnen fast immer mit dem kleineren Eingriff. Wer nach Reinigung und Bleaching glücklich ist, braucht keine Keramik. Wer mehr will, entscheidet auf Basis einer digitalen Vorschau – nicht auf Basis eines Prospekts.",
    ],
  },
  {
    slug: "intraoralscanner-statt-abdruck",
    date: "2026-05-12",
    category: "Technologie",
    title: "Warum bei uns niemand mehr in Abdruckmasse beißt",
    excerpt: "Der Intraoralscanner hat die Abformung revolutioniert: präziser, schneller – und ohne Würgereiz. Ein Blick hinter die Technik.",
    image: img.news2,
    body: [
      "Wer je einen klassischen Abdruck erlebt hat, erinnert sich: der Löffel voller Silikon, das Warten, der Würgereiz. In unserer Praxis gehört dieses Ritual seit Jahren der Vergangenheit an.",
      "Der Intraoralscanner erfasst Ihre Zähne mit einer kleinen Kamera in wenigen Minuten als dreidimensionales Modell – mit einer Genauigkeit von wenigen Mikrometern. Das ist nicht nur angenehmer, sondern messbar präziser als jede Abdruckmasse, die beim Aushärten schrumpft.",
      "Für Sie heißt das: Kronen und Veneers passen beim ersten Einsetzen, Aligner sitzen wie angegossen, und das digitale Modell bleibt archiviert – für Vergleiche über Jahre hinweg.",
      "Und ein angenehmer Nebeneffekt: Sie sehen Ihre Zähne sofort auf dem Bildschirm, in Farbe und dreidimensional drehbar. Viele Patientinnen und Patienten verstehen ihre Situation in diesen zwei Minuten besser als in zehn Jahren zuvor.",
    ],
  },
  {
    slug: "behandlung-im-daemmerschlaf",
    date: "2026-04-03",
    category: "Angstpatienten",
    title: "Angst vorm Zahnarzt? So läuft eine Behandlung im Dämmerschlaf ab",
    excerpt: "Zahnbehandlungsangst ist keine Schwäche, sondern häufig – und gut lösbar. Was Sedierung wirklich bedeutet und für wen sie sich eignet.",
    image: img.news3,
    body: [
      "Schätzungen zufolge meidet jeder zehnte Erwachsene den Zahnarzt aus Angst – oft über Jahre. Die Folge ist ein Teufelskreis: Je länger die Pause, desto größer der Befund, desto größer die Angst.",
      "Der Dämmerschlaf (Analgosedierung) durchbricht diesen Kreis. Ein erfahrener Anästhesist begleitet Sie durch die gesamte Behandlung: Sie schlafen leicht, empfinden weder Schmerz noch Zeit – und erinnern sich hinterher an fast nichts. Anders als bei einer Vollnarkose atmen Sie selbstständig und sind schnell wieder fit.",
      "So können wir umfangreiche Sanierungen, die sonst sechs Termine bräuchten, in ein bis zwei Sitzungen zusammenfassen. Für viele Angstpatientinnen und -patienten ist genau das der Wendepunkt.",
      "Wichtig zu wissen: Der erste Termin bei uns ist immer nur ein Gespräch. Keine Behandlung, kein Bohrer – nur Zuhören, Anschauen, Erklären. Viele sagen hinterher, dieser Termin sei der leichteste Zahnarztbesuch ihres Lebens gewesen.",
    ],
  },
  {
    slug: "prophylaxe-zweimal-im-jahr",
    date: "2026-02-18",
    category: "Prophylaxe",
    title: "Warum zweimal Prophylaxe im Jahr den Unterschied macht",
    excerpt: "Professionelle Zahnreinigung ist keine Kosmetik, sondern die wirksamste Versicherung gegen Karies und Parodontitis – die Zahlen sind eindeutig.",
    image: img.news4,
    body: [
      "Die Langzeitstudien sind eindeutig: Wer regelmäßig zur professionellen Zahnreinigung geht, behält seine Zähne im Schnitt deutlich länger – und braucht seltener Füllungen, Kronen oder Implantate.",
      "Der Grund ist unsichtbar: Biofilm. Selbst bei perfekter Putztechnik bleiben Nischen, die Bürste und Zahnseide nicht erreichen. Dort organisieren sich Bakterien zu einem hartnäckigen Belag, der Karies und Zahnfleischentzündungen auslöst.",
      "Unser Prophylaxe-Team arbeitet mit dem Airflow-Verfahren: Ein feiner Strahl aus Wasser und Pulver entfernt den Biofilm vollständig und sanft – ohne das Kratzen, das viele von früher kennen. Anschließend werden die Zähne poliert und fluoridiert.",
      "Zweimal im Jahr, jeweils rund 60 Minuten: Das ist die ganze Investition. Verglichen mit den Kosten und dem Aufwand einer einzigen Krone ist Prophylaxe die mit Abstand rentabelste Entscheidung für Ihre Zahngesundheit.",
    ],
  },
];

// Online-Terminbuchung (Demo): Leistungen mit Dauer und zugeordneten Behandlern
export const bookingServices = [
  {
    id: "erstberatung",
    title: "Erstberatung & Kennenlernen",
    duration: 60,
    staff: ["roth", "berger", "lindqvist"],
    desc: "Gespräch, digitale Diagnostik, Behandlungsplan – der ideale Einstieg.",
  },
  {
    id: "prophylaxe",
    title: "Prophylaxe / Professionelle Zahnreinigung",
    duration: 60,
    staff: ["khan"],
    desc: "Airflow-Reinigung, Politur und Fluoridierung durch unser Prophylaxe-Team.",
  },
  {
    id: "aesthetik",
    title: "Ästhetische Beratung & Smile Design",
    duration: 90,
    staff: ["roth"],
    desc: "Veneers, Bleaching und digitale Vorschau Ihres neuen Lächelns.",
  },
  {
    id: "implantologie",
    title: "Implantat-Beratung",
    duration: 60,
    staff: ["roth"],
    desc: "3D-Planung und ehrliche Einschätzung für festen Zahnersatz.",
  },
  {
    id: "endodontie",
    title: "Endodontie / Wurzelkanalbehandlung",
    duration: 90,
    staff: ["berger"],
    desc: "Zahnerhalt unter dem Mikroskop – auch für aufgegebene Fälle.",
  },
  {
    id: "aligner",
    title: "Aligner / Unsichtbare Zahnschienen",
    duration: 60,
    staff: ["lindqvist"],
    desc: "Digitale Planung Ihrer Zahnkorrektur inkl. Ergebnis-Simulation.",
  },
  {
    id: "checkup",
    title: "Digitaler Check-up (Scan & Kontrolle)",
    duration: 45,
    staff: ["roth", "berger", "lindqvist"],
    desc: "Kompletter Status mit Intraoralscan – ideal als Zweitmeinung.",
  },
];

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
}
