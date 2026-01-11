insert into public.destinations
  (slug, title, location, description, highlight, hero_image_url, gallery_images, experiences)
values
  (
    'labuan-bajo',
    'Labuan Bajo',
    'Nusa Tenggara Timur',
    'Sailing ke pulau karang, sunset deck, dan wildlife experience di taman nasional.',
    'Komodo Cruise',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    '["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"]'::jsonb,
    '["Sunrise sailing","Komodo island trek","Private beach stop"]'::jsonb
  ),
  (
    'ubud',
    'Ubud',
    'Bali',
    'Retreat alam dengan art walk, spa lokal, dan culinary trail yang curated.',
    'Wellness Escape',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
    '["https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"]'::jsonb,
    '["Yoga sunrise","Farm-to-table dining","Artisan market"]'::jsonb
  ),
  (
    'raja-ampat',
    'Raja Ampat',
    'Papua Barat',
    'Dive spot kelas dunia, laguna biru, dan private island hopping itinerary.',
    'Ocean Discovery',
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    '["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"]'::jsonb,
    '["Diving expedition","Lagoon kayak","Liveaboard nights"]'::jsonb
  );

insert into public.packages
  (slug, title, destination_slug, price, duration_days, includes, itinerary, hero_image_url)
values
  (
    'island-escape',
    'Island Escape',
    'labuan-bajo',
    'IDR 6.5 jt',
    5,
    '["Hotel bintang 4","Private boat charter","Guide lokal","Airport transfer"]'::jsonb,
    '[{"day":"Day 1","title":"Arrival dan sunset briefing","description":"Check-in hotel, welcome drink, dan briefing itinerary sambil menikmati sunset deck."},{"day":"Day 2","title":"Sailing Komodo island","description":"Island hopping, snorkeling, dan trekking Komodo dengan ranger resmi."},{"day":"Day 3","title":"Pink beach dan private picnic","description":"Eksplor pantai Pink, makan siang privat, lalu sunset cruise."},{"day":"Day 4","title":"Cave tour dan leisure","description":"Kunjungi Goa Rangko, lalu free time di resort untuk spa atau city stroll."},{"day":"Day 5","title":"Checkout dan transfer","description":"Sarapan, checkout, dan transfer ke bandara dengan concierge assistance."}]'::jsonb,
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80'
  ),
  (
    'cultural-journey',
    'Cultural Journey',
    'ubud',
    'IDR 4.8 jt',
    4,
    '["Boutique stay","Private driver","Curated dining","Guide budaya"]'::jsonb,
    '[{"day":"Day 1","title":"Arrival dan Malioboro night","description":"Check-in, welcome briefing, dan night walk di Malioboro dengan guide lokal."},{"day":"Day 2","title":"Heritage city tour","description":"Kunjungi Keraton, Taman Sari, dan workshop batik privat."},{"day":"Day 3","title":"Temple sunrise experience","description":"Sunrise di Borobudur, dilanjutkan kuliner tradisional dan free time."},{"day":"Day 4","title":"Artisan market dan departure","description":"Shopping artisan, checkout, dan transfer ke bandara."}]'::jsonb,
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80'
  ),
  (
    'ocean-discovery',
    'Ocean Discovery',
    'raja-ampat',
    'IDR 8.2 jt',
    6,
    '["Resort premium","Boat charter","Dive equipment","Full board meals"]'::jsonb,
    '[{"day":"Day 1","title":"Arrival dan dive briefing","description":"Check-in resort, briefing keselamatan, dan sunset dinner di beachfront."},{"day":"Day 2","title":"Dive signature spots","description":"Diving di spot favorit, lunch on board, dan relax di resort."},{"day":"Day 3","title":"Lagoon exploration","description":"Island hopping, lagoon tour, dan photoshoot di viewpoint."},{"day":"Day 4","title":"Private beach day","description":"Beach leisure, BBQ dinner, dan stargazing session."},{"day":"Day 5","title":"Dive and culture","description":"Diving pagi, kunjungan desa lokal, dan sunset cruise."},{"day":"Day 6","title":"Checkout dan transfer","description":"Sarapan, checkout, dan transfer ke bandara."}]'::jsonb,
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80'
  );
