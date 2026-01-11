import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { travelPackages } from '@/data/travelData';

export default function PackageDetail() {
  const { slug } = useParams();
  const travelPackage =
    travelPackages.find((item) => item.slug === slug) ?? null;

  const includes = useMemo(() => {
    if (!travelPackage) {
      return [];
    }

    return travelPackage.inclusions;
  }, [travelPackage]);

  const itinerary = useMemo(() => {
    if (!travelPackage) {
      return [];
    }

    return travelPackage.itinerary;
  }, [travelPackage]);

  if (!slug || !travelPackage) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Paket tidak ditemukan
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Paket yang kamu cari tidak tersedia.
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Cek daftar paket lainnya atau konsultasi dengan travel curator kami.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/packages"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Lihat Paket
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

  const destinationLabel = travelPackage.location;

  const overviewText = includes.length
    ? `Paket ${travelPackage.name} untuk ${destinationLabel} berdurasi ${travelPackage.duration} dengan benefit seperti ${includes
        .slice(0, 3)
        .join(', ')}.`
    : `Paket ${travelPackage.name} untuk ${destinationLabel} berdurasi ${travelPackage.duration} dengan itinerary fleksibel dan layanan kurasi lokal.`;

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <img
          src={travelPackage.image}
          alt={travelPackage.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        <div className="relative mx-auto max-w-6xl px-4 py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            Paket Travel
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            {travelPackage.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            {overviewText}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
            <span className="rounded-full border border-white/30 px-4 py-2">
              {destinationLabel}
            </span>
            <span className="rounded-full border border-white/30 px-4 py-2">
              Durasi {travelPackage.duration}
            </span>
            <span className="rounded-full border border-white/30 px-4 py-2">
              {travelPackage.price}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
            >
              Mulai Booking
            </Link>
            <Link
              to="/packages"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Lihat Paket Lain
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Overview</h2>
              <p className="mt-4 text-sm text-slate-600">{overviewText}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {includes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Itinerary
              </h2>
              <div className="mt-6 space-y-4">
                {itinerary.map((item) => (
                  <div
                    key={item.day}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {item.day}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Harga Paket
            </p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">
              {travelPackage.price}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Estimasi per traveler, bisa disesuaikan dengan pilihan hotel dan
              aktivitas.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Destinasi</span>
                <span className="font-semibold text-slate-900">
                  {destinationLabel}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Durasi</span>
                <span className="font-semibold text-slate-900">
                  {travelPackage.duration}
                </span>
              </div>
            </div>

            {includes.length > 0 ? (
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-900">
                  Termasuk dalam paket
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {includes.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Mulai Booking
            </Link>
            <p className="mt-4 text-xs text-slate-500">
              Harga dapat berubah mengikuti musim dan ketersediaan partner.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
