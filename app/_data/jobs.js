export const JOBS = [
  {
    slug: 'hausmeister',
    title: 'Hausmeister/in (m/w/d)',
    type: 'Vollzeit',
    location: 'Berlin',
    department: 'Hausmeisterservice',
    intro:
      'Für unsere Objekte in Berlin suchen wir eine zuverlässige Hausmeisterin bzw. einen zuverlässigen Hausmeister, die/der Freude an einem abwechslungsreichen Arbeitsalltag rund um Haus und Grundstück hat.',
    responsibilities: [
      'Regelmäßige Begehung und Kontrolle der betreuten Objekte',
      'Durchführung kleinerer Reparatur- und Instandhaltungsarbeiten',
      'Mülltonnenmanagement und Pflege der Außenanlagen',
      'Ansprechpartner/in für Mieter und Hausverwaltungen vor Ort',
      'Koordination von Handwerkerterminen',
    ],
    requirements: [
      'Handwerkliches Geschick und technisches Verständnis',
      'Erfahrung im Hausmeister- oder Facility-Bereich von Vorteil',
      'Führerschein Klasse B',
      'Freundliches, verbindliches Auftreten',
      'Deutschkenntnisse in Wort und Schrift',
    ],
    benefits: [
      'Unbefristeter Arbeitsvertrag',
      'Festes Team und feste Einsatzgebiete',
      'Firmenfahrzeug und Arbeitsausstattung',
      'Faire, pünktliche Bezahlung',
    ],
  },
  {
    slug: 'reinigungskraft',
    title: 'Reinigungskraft (m/w/d)',
    type: 'Teilzeit',
    location: 'Berlin',
    department: 'Reinigung',
    intro:
      'Zur Verstärkung unseres Reinigungsteams suchen wir engagierte Reinigungskräfte für die Unterhalts- und Treppenhausreinigung in Wohn- und Gewerbeobjekten.',
    responsibilities: [
      'Unterhaltsreinigung von Treppenhäusern und Gemeinschaftsflächen',
      'Glas- und Rahmenreinigung im Eingangsbereich',
      'Sorgfältiger Umgang mit Reinigungsgeräten und -mitteln',
      'Kontrolle und Meldung von Mängeln an die Einsatzleitung',
    ],
    requirements: [
      'Erste Erfahrung in der Gebäudereinigung wünschenswert, aber kein Muss',
      'Zuverlässigkeit und Sorgfalt',
      'Zeitliche Flexibilität für Früh- oder Spätschichten',
      'Grundkenntnisse in Deutsch',
    ],
    benefits: [
      'Flexible Teilzeitmodelle, auch als Nebenjob geeignet',
      'Wohnortnahe Einsatzorte',
      'Einarbeitung und Arbeitsmaterial werden gestellt',
      'Faire, pünktliche Bezahlung',
    ],
  },
  {
    slug: 'gaertner',
    title: 'Gärtner/in – Gartenpflege (m/w/d)',
    type: 'Vollzeit',
    location: 'Berlin & Brandenburg',
    department: 'Gartenpflege',
    intro:
      'Für die Pflege unserer Grünanlagen in Berlin und Brandenburg suchen wir eine Gärtnerin bzw. einen Gärtner, die/der unsere Kunden ganzjährig mit gepflegten Außenanlagen begeistert.',
    responsibilities: [
      'Rasenpflege, Heckenschnitt und Bepflanzung',
      'Laubentsorgung und saisonale Pflegearbeiten',
      'Winterdienst in den Wintermonaten',
      'Bedienung von Gartengeräten und -maschinen',
    ],
    requirements: [
      'Abgeschlossene Ausbildung als Gärtner/in von Vorteil, nicht zwingend',
      'Freude an der Arbeit im Freien',
      'Führerschein Klasse B',
      'Teamfähigkeit und körperliche Belastbarkeit',
    ],
    benefits: [
      'Ganzjährige Beschäftigung',
      'Moderne Ausrüstung und Maschinen',
      'Festes, kollegiales Team',
      'Faire, pünktliche Bezahlung',
    ],
  },
];

export function getJobBySlug(slug) {
  return JOBS.find((job) => job.slug === slug);
}

export function getRelatedJobs(slug, count = 3) {
  return JOBS.filter((job) => job.slug !== slug).slice(0, count);
}
