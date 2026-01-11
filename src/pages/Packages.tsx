import { Link } from 'react-router-dom';
import { travelPackages } from '@/data/travelData';

export default function Packages() {
  const packages = travelPackages;

  return (
    <div className="bg-white">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Travel Packages
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
                Paket perjalanan siap jalan dengan fleksibilitas penuh.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
                Semua paket dapat di-upgrade sesuai preferensi hotel, transport,
                dan aktivitas pilihanmu.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Minta Proposal
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          {packages.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              Belum ada paket yang dipublikasikan.
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {packages.map((item) => {
                const highlights =
                  item.highlights.length > 0 ? item.highlights : item.inclusions;

                return (
                  <article
                    key={item.slug}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
                        {item.duration}
                      </span>
                    </div>
                    <div className="space-y-4 p-6">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {item.location}
                        </p>
                      </div>
                      <p className="text-sm text-slate-600">
                        {highlights.length > 0
                          ? highlights.slice(0, 2).join(', ')
                          : 'Paket travel curated untuk pengalaman terbaik.'}
                        {highlights.length > 2 ? '...' : ''}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>Durasi {item.duration}</span>
                        <span className="text-base font-semibold text-slate-900">
                          {item.price}
                        </span>
                      </div>
                      <Link
                        to={`/packages/${item.slug}`}
                        className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
