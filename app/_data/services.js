export const SERVICES = [
  {
    slug: 'reinigung',
    number: '01',
    title: 'Reinigung',
    icon: 'Sparkles',
    summary: 'Streifenfrei sauber, jeden Tag.',
    intro:
      'Böden, Treppenhäuser, Tiefgaragen und Einrichtungen brauchen regelmäßige Reinigung und Pflege – für maximale Sauberkeit und echten Werterhalt.',
    image: '/assets/image/home/ra66bm60-gb-14-scrubber-dryer-floor-scrubber-cleaning-machine.jpeg',
    bullets: [
      'Unterhaltsreinigung',
      'Treppenhausreinigung',
      'Grundreinigung',
      'Parkhaus- & Tiefgaragenreinigung',
      'Büroreinigung',
      'Sonderreinigung nach Vereinbarung',
    ],
  },
  {
    slug: 'glas-fassade',
    number: '02',
    title: 'Glas & Fassade',
    icon: 'Droplets',
    summary: 'Streifenfreier Durchblick mit modernster Technik.',
    intro:
      'Mit Reinwassertechnik und geschultem Personal sorgen wir für klare Sicht durch Fenster, Fassaden und Vordächer — auch in schwer zugänglichen Höhen.',
    image: '/assets/image/home/66e3dc07edd8d90bd4fd32e0_attachment_1_Foto 1.webp',
    bullets: [
      'Fensterreinigung',
      'Fassadenreinigung',
      'Vordächer & Glasflächen',
      'Rahmen- & Rollladenreinigung',
    ],
  },
  {
    slug: 'gartenpflege',
    number: '03',
    title: 'Gartenpflege',
    icon: 'Trees',
    summary: 'Grünanlagen, dauerhaft gepflegt und gesund.',
    intro:
      'Von Rasenpflege bis Heckenschnitt — wir halten Ihre Außenanlagen das ganze Jahr über in gutem Zustand, inklusive Winterdienst.',
    image: '/assets/image/home/service3.webp',
    bullets: [
      'Rasenpflege',
      'Heckenschnitt',
      'Laubentsorgung',
      'Winterdienst',
      'Bepflanzung & Pflege',
    ],
  },
  {
    slug: 'hausmeister',
    number: '04',
    title: 'Hausmeister',
    icon: 'Building2',
    summary: 'Rund um die Uhr Ansprechpartner vor Ort.',
    intro:
      'Unsere Hausmeister behalten Ihre Immobilie im Blick — von der regelmäßigen Objektbegehung bis zur Koordination kleinerer Instandhaltungsarbeiten.',
    image: '/assets/image/home/service1.webp',
    bullets: [
      'Regelmäßige Objektbegehung',
      'Kleinreparaturen',
      'Mülltonnenmanagement',
      'Schlüsselverwaltung',
      'Notdienst',
    ],
  },
  {
    slug: 'handwerker',
    number: '05',
    title: 'Handwerker',
    icon: 'Wrench',
    summary: 'Von Kleinreparatur bis Wasserschaden.',
    intro:
      'Ob Sanitär, Elektro oder Malerarbeiten — unser Handwerkerservice übernimmt Reparaturen und kleinere Renovierungen aus einer Hand.',
    image: '/assets/image/home/pexels-pavel-danilyuk-7108400.jpg',
    bullets: [
      'Kleinreparaturen',
      'Sanitär- & Elektroarbeiten',
      'Malerarbeiten',
      'Wasserschadenbehebung',
      'Renovierungsarbeiten',
    ],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((service) => service.slug === slug);
}

export function getRelatedServices(slug, count = 3) {
  return SERVICES.filter((service) => service.slug !== slug).slice(0, count);
}
