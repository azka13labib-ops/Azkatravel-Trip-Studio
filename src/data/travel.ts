export type Destination = {
  slug: string;
  name: string;
  region: string;
  highlight: string;
  duration: string;
  season: string;
  description: string;
  image: string;
  experiences: string[];
  featured?: boolean;
  gallery: string[];
};

export type PackageItineraryDay = {
  day: string;
  title: string;
  activities: string[];
};

export type TravelPackage = {
  slug: string;
  name: string;
  tag: string;
  duration: string;
  type: string;
  price: string;
  destination: string;
  focus: string;
  description: string;
  image: string;
  highlights: string[];
  includes: string[];
  itinerary: PackageItineraryDay[];
  facilities: string[];
  featured?: boolean;
};

export const destinations: Destination[] = [
  {
    name: 'Labuan Bajo',
    region: 'Nusa Tenggara Timur',
    highlight: 'Komodo Cruise',
    duration: '4-6 hari',
    season: 'Apr - Nov',
    slug: 'labuan-bajo',
    description:
      'Liveaboard premium, pulau karang, dan sunset deck dengan kru lokal.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    experiences: ['Sunrise sailing', 'Komodo island trek', 'Private beach stop'],
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    name: 'Ubud',
    region: 'Bali',
    highlight: 'Wellness Retreat',
    duration: '3-5 hari',
    season: 'Mar - Okt',
    slug: 'ubud',
    description:
      'Kombinasi yoga, kuliner sehat, dan art walk di tengah sawah.',
    image:
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1400&q=80',
    experiences: ['Yoga sunrise', 'Farm-to-table dining', 'Artisan market'],
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    name: 'Raja Ampat',
    region: 'Papua Barat',
    highlight: 'Dive Escape',
    duration: '6-8 hari',
    season: 'Okt - Apr',
    slug: 'raja-ampat',
    description:
      'Spot diving kelas dunia, boat charter, dan basecamp privat.',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
    experiences: ['Diving expedition', 'Lagoon kayak', 'Liveaboard nights'],
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    name: 'Yogyakarta',
    region: 'Daerah Istimewa Yogyakarta',
    highlight: 'Cultural Circuit',
    duration: '3-4 hari',
    season: 'Feb - Nov',
    slug: 'yogyakarta',
    description:
      'Kurasi heritage, kuliner malam, dan workshop kerajinan lokal.',
    image:
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1400&q=80',
    experiences: ['Heritage walk', 'Batik workshop', 'Night culinary tour'],
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    name: 'Sumba',
    region: 'Nusa Tenggara Timur',
    highlight: 'Savannah Journey',
    duration: '4-6 hari',
    season: 'Mei - Sep',
    slug: 'sumba',
    description:
      'Bukit savana, resort tepi laut, dan ritual budaya eksklusif.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80',
    experiences: ['Savannah sunset', 'Cultural ritual', 'Cliffside resort'],
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    name: 'Lombok',
    region: 'Nusa Tenggara Barat',
    highlight: 'Beach Hopping',
    duration: '4-5 hari',
    season: 'Apr - Nov',
    slug: 'lombok',
    description:
      'Sirkuit pantai, sunset Gili, dan kuliner pesisir pilihan.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    experiences: ['Beach hopping', 'Gili cruise', 'Seafood night market'],
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];

export const packages: TravelPackage[] = [
  {
    name: 'Island Escape',
    slug: 'island-escape',
    tag: 'Best Seller',
    duration: '5D4N',
    type: 'Private getaway',
    price: 'IDR 6.5 jt',
    destination: 'Labuan Bajo',
    focus: 'Resort tepi laut, snorkeling, dan dining sunset.',
    description:
      'Liburan santai dengan pacing nyaman, itinerary fleksibel, dan hotel tepi laut pilihan.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Boat charter untuk island hopping',
      'Dinner sunset di dek privat',
      'Waktu bebas untuk spa dan beach club',
    ],
    includes: ['Hotel bintang 4', 'Transport lokal', 'Guide privat'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & sunset welcome',
        activities: [
          'Private transfer bandara',
          'Check-in dan welcome drink',
          'Sunset dinner di tepi laut',
        ],
      },
      {
        day: 'Day 2',
        title: 'Island hopping',
        activities: [
          'Sailing ke pulau karang',
          'Snorkeling spot pilihan',
          'Lunch box dan beach time',
        ],
      },
      {
        day: 'Day 3',
        title: 'Free pace day',
        activities: [
          'Spa atau leisure di resort',
          'Opsional: photo session',
          'Dinner rekomendasi chef lokal',
        ],
      },
      {
        day: 'Day 4',
        title: 'Cultural touch',
        activities: [
          'Kunjungan pasar lokal',
          'Kuliner malam khas pesisir',
          'Briefing untuk trip esok hari',
        ],
      },
      {
        day: 'Day 5',
        title: 'Departure',
        activities: ['Checkout santai', 'Transfer ke bandara'],
      },
    ],
    facilities: [
      'Private driver & transport AC',
      'Resort beach view',
      'Breakfast harian',
      'Crew support 24/7',
    ],
    featured: true,
  },
  {
    name: 'Cultural Journey',
    slug: 'cultural-journey',
    tag: 'New Route',
    duration: '4D3N',
    type: 'Culture and art',
    price: 'IDR 4.8 jt',
    destination: 'Yogyakarta',
    focus: 'Workshop budaya, museum, dan pasar artisan.',
    description:
      'Eksplor budaya dengan kurator lokal, ritme santai, dan akses ke hidden gem.',
    image:
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Tur heritage dengan guide lokal',
      'Sesi batik privat',
      'Food trail malam dengan rekomendasi chef',
    ],
    includes: ['Boutique stay', 'Kelas budaya', 'Kuliner pilihan'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'City heritage',
        activities: [
          'Check-in boutique hotel',
          'Walking tour pusat kota',
          'Dinner di restoran klasik',
        ],
      },
      {
        day: 'Day 2',
        title: 'Culture immersion',
        activities: [
          'Workshop batik privat',
          'Museum dan galeri seni',
          'Malam free time Malioboro',
        ],
      },
      {
        day: 'Day 3',
        title: 'Temple & sunset',
        activities: [
          'Tur situs sejarah',
          'Sunset session dengan fotografer',
          'Kuliner malam legendaris',
        ],
      },
      {
        day: 'Day 4',
        title: 'Departure',
        activities: ['Check-out', 'Transfer bandara/stasiun'],
      },
    ],
    facilities: [
      'Hotel butik lokasi premium',
      'Private guide',
      'Transport city tour',
      'Snack dan air mineral',
    ],
    featured: true,
  },
  {
    name: 'Ocean Discovery',
    slug: 'ocean-discovery',
    tag: 'Premium',
    duration: '6D5N',
    type: 'Marine adventure',
    price: 'IDR 8.2 jt',
    destination: 'Raja Ampat',
    focus: 'Boat charter, dive spot, dan island hopping.',
    description:
      'Petualangan laut dengan basecamp privat, dive master, dan jadwal sailing eksklusif.',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Liveaboard pilihan dengan crew lokal',
      'Diving spot kelas dunia',
      'Sunrise deck session',
    ],
    includes: ['Resort premium', 'Boat charter', 'Dive master'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & briefing',
        activities: [
          'Transfer ke basecamp',
          'Welcome briefing',
          'Sunset warm-up dive',
        ],
      },
      {
        day: 'Day 2',
        title: 'Dive circuit',
        activities: [
          '2x diving session',
          'Island picnic',
          'Night snorkeling',
        ],
      },
      {
        day: 'Day 3',
        title: 'Sailing day',
        activities: [
          'Sailing ke spot ikonik',
          'Kayak dan lagoon visit',
          'Chef dinner on board',
        ],
      },
      {
        day: 'Day 4',
        title: 'Private exploration',
        activities: [
          'Hidden beach hopping',
          'Drone photo session',
          'Rest and spa',
        ],
      },
      {
        day: 'Day 5',
        title: 'Local village',
        activities: [
          'Visit desa lokal',
          'Marketplace stop',
          'Sunset cruise',
        ],
      },
      {
        day: 'Day 6',
        title: 'Departure',
        activities: ['Check-out', 'Transfer bandara'],
      },
    ],
    facilities: [
      'Resort beachfront',
      'Private boat charter',
      'Dive equipment support',
      'Crew support 24/7',
    ],
    featured: true,
  },
  {
    name: 'Mountain Reset',
    slug: 'mountain-reset',
    tag: 'Wellness',
    duration: '3D2N',
    type: 'Highland retreat',
    price: 'IDR 3.6 jt',
    destination: 'Ubud',
    focus: 'Nature walk, spa, dan sesi mindfulness.',
    description:
      'Recharge singkat di dataran tinggi dengan aktivitas slow-living dan wellness.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Morning yoga dengan instruktur',
      'Private spa treatment',
      'Slow dinner set menu',
    ],
    includes: ['Eco lodge', 'Private driver', 'Wellness kit'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & reset',
        activities: [
          'Check-in eco lodge',
          'Welcome tea session',
          'Evening meditation',
        ],
      },
      {
        day: 'Day 2',
        title: 'Nature flow',
        activities: [
          'Sunrise walk',
          'Spa treatment',
          'Free time by the pool',
        ],
      },
      {
        day: 'Day 3',
        title: 'Departure',
        activities: ['Breakfast santai', 'Check-out'],
      },
    ],
    facilities: [
      'Wellness lodge',
      'Daily breakfast',
      'Spa voucher',
      'Curated playlist',
    ],
  },
  {
    name: 'Family Explorer',
    slug: 'family-explorer',
    tag: 'Family',
    duration: '4D3N',
    type: 'Kids friendly',
    price: 'IDR 5.4 jt',
    destination: 'Lombok',
    focus: 'Atraksi edukatif dan tempo santai untuk keluarga.',
    description:
      'Trip keluarga dengan itinerary ringan, aktivitas edukatif, dan akomodasi nyaman.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Hotel keluarga dengan kids club',
      'Activity host untuk anak',
      'Pilihan menu ramah anak',
    ],
    includes: ['Suite keluarga', 'Snack corner', 'Activity host'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Easy arrival',
        activities: [
          'Private transfer',
          'Check-in dan kids kit',
          'Leisure time',
        ],
      },
      {
        day: 'Day 2',
        title: 'Family fun',
        activities: [
          'Beach activity',
          'Educational visit',
          'Sunset picnic',
        ],
      },
      {
        day: 'Day 3',
        title: 'Slow day',
        activities: [
          'Pool time',
          'Spa untuk orang tua',
          'Movie night',
        ],
      },
      {
        day: 'Day 4',
        title: 'Departure',
        activities: ['Check-out', 'Transfer bandara'],
      },
    ],
    facilities: [
      'Family suite',
      'Private transport',
      'Kids activity host',
      'Medical kit',
    ],
  },
  {
    name: 'Weekend Luxe',
    slug: 'weekend-luxe',
    tag: 'Short Trip',
    duration: '2D1N',
    type: 'Quick recharge',
    price: 'IDR 2.8 jt',
    destination: 'Jakarta',
    focus: 'Staycation premium dengan servis concierge.',
    description:
      'Staycation singkat dengan layanan concierge dan akses experience premium.',
    image:
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Late checkout',
      'Chef tasting menu',
      'Concierge access',
    ],
    includes: ['Hotel bintang 5', 'Late checkout', 'Spa voucher'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Check-in & recharge',
        activities: [
          'Welcome amenities',
          'Afternoon tea',
          'Spa session',
        ],
      },
      {
        day: 'Day 2',
        title: 'Slow morning',
        activities: ['Breakfast in room', 'Late checkout'],
      },
    ],
    facilities: [
      'Concierge service',
      'Premium suite',
      'Spa voucher',
      'Breakfast in room',
    ],
  },
];

export const featuredDestinations = destinations.filter(
  (destination) => destination.featured,
);

export const featuredPackages = packages.filter((item) => item.featured);
