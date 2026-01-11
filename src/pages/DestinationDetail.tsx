import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { destinations } from '@/data/travelData';

export default function DestinationDetail() {
  const { slug } = useParams();
  const destination = destinations.find((item) => item.slug === slug) ?? null;

  const galleryImages = useMemo(() => {
    if (!destination) {
      return [];
    }

    return [destination.image, ...destination.gallery].filter(Boolean).slice(0, 4);
  }, [destination]);

  const experiences = useMemo(() => {
    if (!destination) {
      return [];
    }

    return destination.experiences;
  }, [destination]);

  if (!slug || !destination) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Destinasi tidak ditemukan
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Destinasi yang kamu cari tidak tersedia.
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Cek daftar destinasi lainnya atau konsultasi dengan travel curator
          kami.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/destinations"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Lihat Destinasi
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Konsultasi Trip
          </Link>
        </div>
      </section>
    );
  }

  const conciergeItems = [
    'Kurasi itinerary dan pacing perjalanan',
    'Rekomendasi partner lokal dan kuliner',
    'Support perjalanan selama trip berlangsung',
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        <div className="relative mx-auto max-w-6xl px-4 py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            Destinasi
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            {destination.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            {destination.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
            <span className="rounded-full border border-white/30 px-4 py-2">
              {destination.region}
            </span>
            <span className="rounded-full border border-white/30 px-4 py-2">
              {destination.highlight}
            </span>
            {experiences.length > 0 ? (
              <span className="rounded-full border border-white/30 px-4 py-2">
                {experiences.length} pengalaman utama
              </span>
            ) : null}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
            >
              Rencanakan Trip
            </Link>
            <Link
              to="/packages"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Lihat Paket
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Overview
              </h2>
              <p className="mt-4 text-sm text-slate-600">
                {destination.description} Highlight utama berupa{' '}
                {destination.highlight}, ideal untuk traveler yang mencari pace
                santai dengan momen berkesan.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {experiences.map((experience) => (
                  <div
                    key={experience}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {experience}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Galeri</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <div
                    key={`${destination.slug}-gallery-${index}`}
                    className="relative h-52 overflow-hidden rounded-3xl"
                  >
                    <img
                      src={image}
                      alt={`${destination.name} gallery ${index + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Ringkasan Trip
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">
              {destination.highlight}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Pilihan itinerary fleksibel dengan ritme perjalanan yang bisa
              disesuaikan sesuai preferensi kamu.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Lokasi</span>
                <span className="font-semibold text-slate-900">
                  {destination.region}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Highlight</span>
                <span className="font-semibold text-slate-900">
                  {destination.highlight}
                </span>
              </div>
              {experiences.length > 0 ? (
                <div className="flex items-center justify-between">
                  <span>Pengalaman utama</span>
                  <span className="font-semibold text-slate-900">
                    {experiences.length}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">
                Termasuk layanan
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {conciergeItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Konsultasi Trip
            </Link>
            <p className="mt-4 text-xs text-slate-500">
              Itinerary dapat disesuaikan dengan preferensi hotel, budget, dan
              aktivitas pilihan.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
