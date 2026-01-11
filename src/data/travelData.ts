export type Destination = {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
  slug: string;
  highlight: string;
  duration: string;
  season: string;
  experiences: string[];
  gallery: string[];
};

export const destinations: Destination[] = [
  {
    id: 'dest-labuan-bajo',
    name: 'Labuan Bajo',
    region: 'Nusa Tenggara Timur',
    description:
      'Sailing ke pulau karang, sunset deck, dan wildlife experience di taman nasional.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    slug: 'labuan-bajo',
    highlight: 'Komodo Cruise',
    duration: '4-6 hari',
    season: 'Apr - Nov',
    experiences: [
      'Sunrise sailing',
      'Komodo island trek',
      'Private beach stop',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'dest-ubud',
    name: 'Ubud',
    region: 'Bali',
    description:
      'Retreat alam dengan art walk, spa lokal, dan culinary trail yang curated.',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
    slug: 'ubud',
    highlight: 'Wellness Escape',
    duration: '3-5 hari',
    season: 'Mar - Okt',
    experiences: ['Yoga sunrise', 'Farm-to-table dining', 'Artisan market'],
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'dest-raja-ampat',
    name: 'Raja Ampat',
    region: 'Papua Barat',
    description:
      'Dive spot kelas dunia, laguna biru, dan private island hopping itinerary.',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80',
    slug: 'raja-ampat',
    highlight: 'Ocean Discovery',
    duration: '6-8 hari',
    season: 'Okt - Apr',
    experiences: ['Diving expedition', 'Lagoon kayak', 'Liveaboard nights'],
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'dest-yogyakarta',
    name: 'Yogyakarta',
    region: 'Daerah Istimewa Yogyakarta',
    description:
      'Heritage tour dengan highlight keraton, kuliner malam, dan batik atelier.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    slug: 'yogyakarta',
    highlight: 'Culture Route',
    duration: '3-4 hari',
    season: 'Feb - Nov',
    experiences: ['Heritage walk', 'Batik workshop', 'Night culinary tour'],
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'dest-sumba',
    name: 'Sumba',
    region: 'Nusa Tenggara Timur',
    description:
      'Landscape savannah, eco-resort private, dan ritual budaya autentik.',
    image:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80',
    slug: 'sumba',
    highlight: 'Savannah Luxe',
    duration: '4-6 hari',
    season: 'Mei - Sep',
    experiences: ['Savannah sunset', 'Cultural ritual', 'Cliffside resort'],
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'dest-lombok',
    name: 'Lombok',
    region: 'Nusa Tenggara Barat',
    description:
      'Pantai tenang, Gili hopping, dan curated culinary beach trail.',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
    slug: 'lombok',
    highlight: 'Beach Hopping',
    duration: '4-5 hari',
    season: 'Apr - Nov',
    experiences: ['Beach hopping', 'Gili cruise', 'Seafood night market'],
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];

export const featuredDestinations = destinations.slice(0, 3);

export type ItineraryDay = {
  day: string;
  title: string;
  description: string;
};

export type TravelPackage = {
  slug: string;
  name: string;
  location: string;
  duration: string;
  price: string;
  tag: string;
  description: string;
  image: string;
  highlights: string[];
  inclusions: string[];
  facilities: string[];
  itinerary: ItineraryDay[];
  groupSize: string;
  departure: string;
};

export const travelPackages: TravelPackage[] = [
  {
    slug: 'island-escape',
    name: 'Island Escape',
    location: 'Labuan Bajo',
    duration: '5D4N',
    price: 'IDR 6.5 jt',
    tag: 'Best Seller',
    description:
      'Paket sailing premium dengan itinerary fleksibel, private guide, dan akses spot terbaik di Labuan Bajo.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    highlights: ['Sunset sailing', 'Private island picnic', 'Komodo trekking'],
    inclusions: ['Hotel bintang 4', 'Private boat charter', 'Guide lokal', 'Airport transfer'],
    facilities: [
      'Akomodasi bintang 4',
      'Transport lokal privat',
      'Guide bersertifikasi',
      'Welcome dinner',
      'Dokumentasi foto',
      'Emergency support 24/7',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival dan sunset briefing',
        description:
          'Check-in hotel, welcome drink, dan briefing itinerary sambil menikmati sunset deck.',
      },
      {
        day: 'Day 2',
        title: 'Sailing Komodo island',
        description:
          'Island hopping, snorkeling, dan trekking Komodo dengan ranger resmi.',
      },
      {
        day: 'Day 3',
        title: 'Pink beach dan private picnic',
        description:
          'Eksplor pantai Pink, makan siang privat, lalu sunset cruise.',
      },
      {
        day: 'Day 4',
        title: 'Cave tour dan leisure',
        description:
          'Kunjungi Goa Rangko, lalu free time di resort untuk spa atau city stroll.',
      },
      {
        day: 'Day 5',
        title: 'Checkout dan transfer',
        description:
          'Sarapan, checkout, dan transfer ke bandara dengan concierge assistance.',
      },
    ],
    groupSize: '2-8 traveler',
    departure: 'Apr - Nov',
  },
  {
    slug: 'cultural-journey',
    name: 'Cultural Journey',
    location: 'Yogyakarta',
    duration: '4D3N',
    price: 'IDR 4.8 jt',
    tag: 'Culture',
    description:
      'Rute heritage dengan workshop budaya, kuliner tradisional, dan art scene lokal.',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
    highlights: ['Keraton access', 'Batik atelier', 'Sunrise temple visit'],
    inclusions: ['Boutique stay', 'Private driver', 'Curated dining', 'Guide budaya'],
    facilities: [
      'Hotel boutique',
      'Transport privat',
      'Museum access',
      'Workshop batik',
      'Kuliner pilihan',
      'Support itinerary',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival dan Malioboro night',
        description:
          'Check-in, welcome briefing, dan night walk di Malioboro dengan guide lokal.',
      },
      {
        day: 'Day 2',
        title: 'Heritage city tour',
        description:
          'Kunjungi Keraton, Taman Sari, dan workshop batik privat.',
      },
      {
        day: 'Day 3',
        title: 'Temple sunrise experience',
        description:
          'Sunrise di Borobudur, dilanjutkan kuliner tradisional dan free time.',
      },
      {
        day: 'Day 4',
        title: 'Artisan market dan departure',
        description:
          'Shopping artisan, checkout, dan transfer ke bandara.',
      },
    ],
    groupSize: '2-6 traveler',
    departure: 'Feb - Nov',
  },
  {
    slug: 'ocean-discovery',
    name: 'Ocean Discovery',
    location: 'Raja Ampat',
    duration: '6D5N',
    price: 'IDR 8.2 jt',
    tag: 'Premium',
    description:
      'Ekspedisi laut untuk diver dan ocean lover dengan basecamp privat dan boat charter.',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80',
    highlights: ['Dive master', 'Private lagoon', 'Island barbecue'],
    inclusions: ['Resort premium', 'Boat charter', 'Dive equipment', 'Full board meals'],
    facilities: [
      'Resort tepi laut',
      'Boat charter privat',
      'Dive master certified',
      'Full board meals',
      'Snorkeling gear',
      '24/7 support team',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival dan dive briefing',
        description:
          'Check-in resort, briefing keselamatan, dan sunset dinner di beachfront.',
      },
      {
        day: 'Day 2',
        title: 'Dive signature spots',
        description:
          'Diving di spot favorit, lunch on board, dan relax di resort.',
      },
      {
        day: 'Day 3',
        title: 'Lagoon exploration',
        description:
          'Island hopping, lagoon tour, dan photoshoot di viewpoint.',
      },
      {
        day: 'Day 4',
        title: 'Private beach day',
        description:
          'Beach leisure, BBQ dinner, dan stargazing session.',
      },
      {
        day: 'Day 5',
        title: 'Dive and culture',
        description:
          'Diving pagi, kunjungan desa lokal, dan sunset cruise.',
      },
      {
        day: 'Day 6',
        title: 'Checkout dan transfer',
        description:
          'Sarapan, checkout, dan transfer ke bandara.',
      },
    ],
    groupSize: '2-10 traveler',
    departure: 'Okt - Apr',
  },
  {
    slug: 'savannah-luxe',
    name: 'Savannah Luxe',
    location: 'Sumba',
    duration: '4D3N',
    price: 'IDR 7.1 jt',
    tag: 'Exclusive',
    description:
      'Experience savannah landscapes dengan resort eksklusif dan cultural immersion.',
    image:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80',
    highlights: ['Private villa stay', 'Waterfall trail', 'Cultural ritual'],
    inclusions: ['Resort eksklusif', 'Private driver', 'Curated dining', 'Local guide'],
    facilities: [
      'Private villa',
      'SUV transport',
      'Local guide',
      'Sunset dinner',
      'Cultural performance',
      'Concierge service',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival dan resort check-in',
        description:
          'Welcome drink, sunset welcome, dan makan malam privat.',
      },
      {
        day: 'Day 2',
        title: 'Savannah tour',
        description:
          'Explore Bukit Wairinding, photoshoot, dan picnic lunch.',
      },
      {
        day: 'Day 3',
        title: 'Waterfall dan cultural night',
        description:
          'Trekking ke air terjun, lalu cultural night di resort.',
      },
      {
        day: 'Day 4',
        title: 'Checkout dan transfer',
        description:
          'Sarapan santai, checkout, dan transfer bandara.',
      },
    ],
    groupSize: '2-6 traveler',
    departure: 'Mei - Sep',
  },
  {
    slug: 'family-explorer',
    name: 'Family Explorer',
    location: 'Bali dan Lombok',
    duration: '4D3N',
    price: 'IDR 5.4 jt',
    tag: 'Family',
    description:
      'Paket keluarga dengan tempo santai, aktivitas edukatif, dan kids friendly guide.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80',
    highlights: ['Kids friendly guide', 'Family suite', 'Beach activity'],
    inclusions: ['Family suite', 'Private transport', 'Activity host', 'Snack corner'],
    facilities: [
      'Suite keluarga',
      'Transport privat',
      'Kids activity host',
      'Snack corner',
      'Welcome kit',
      'Family support',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival dan family check-in',
        description:
          'Check-in, welcome kit anak, dan activity briefing ringan.',
      },
      {
        day: 'Day 2',
        title: 'Beach activity',
        description:
          'Beach hopping, mini games, dan kuliner lokal keluarga.',
      },
      {
        day: 'Day 3',
        title: 'Island leisure',
        description:
          'Free time, optional water sport, dan family dinner.',
      },
      {
        day: 'Day 4',
        title: 'Checkout dan transfer',
        description:
          'Sarapan dan transfer bandara.',
      },
    ],
    groupSize: '4-10 traveler',
    departure: 'Apr - Nov',
  },
  {
    slug: 'weekend-luxe',
    name: 'Weekend Luxe',
    location: 'Bandung',
    duration: '2D1N',
    price: 'IDR 2.8 jt',
    tag: 'Short Trip',
    description:
      'Staycation premium dengan curated dining dan spa recharge di akhir pekan.',
    image:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1400&q=80',
    highlights: ['Luxury stay', 'Spa package', 'Concierge service'],
    inclusions: ['Hotel bintang 5', 'Late checkout', 'Spa voucher', 'Private driver'],
    facilities: [
      'Hotel bintang 5',
      'Late checkout',
      'Spa voucher',
      'Private driver',
      'Chef curated meal',
      'Weekend concierge',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival dan spa session',
        description:
          'Check-in hotel, spa recharge, dan dinner rekomendasi chef.',
      },
      {
        day: 'Day 2',
        title: 'Leisure dan checkout',
        description:
          'Brunch, free time di hotel, lalu checkout.',
      },
    ],
    groupSize: '2-4 traveler',
    departure: 'Setiap akhir pekan',
  },
];

export const featuredPackages = travelPackages.slice(0, 3);
