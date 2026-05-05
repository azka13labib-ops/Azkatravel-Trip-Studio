import { Link } from 'react-router-dom';
import { featuredPackages } from '@/data/travelData';

export default function TravelPackages() {
  const packages = featuredPackages;

  return (
    <section id="packages" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Paket Unggulan
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Paket fleksibel sesuai gaya liburanmu
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Pilih paket dengan itinerary kurasi tim lokal, bisa disesuaikan
            sesuai preferensi waktu dan budget.
          </p>
        </div>

        <div className="mt-10">
          {packages.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              Belum ada paket yang dipublikasikan.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {packages.map((item) => {
                const highlights =
                  item.highlights.length > 0 ? item.highlights : item.inclusions;

                return (
                  <article
                    key={item.slug}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
                        {item.duration}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {item.location}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                        <span>Durasi {item.duration}</span>
                        <span className="font-semibold text-slate-900">
                          {item.price}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        {highlights.length > 0
                          ? highlights.slice(0, 3).map((feature) => (
                              <li key={feature}>- {feature}</li>
                            ))
                          : [
                              'Itinerary fleksibel',
                              'Kurasi partner lokal',
                              'Support 24/7',
                            ].map((fallback) => (
                              <li key={fallback}>- {fallback}</li>
                            ))}
                      </ul>
                      <Link
                        to={`/packages/${item.slug}`}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
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
      </div>
    </section>
  );
}
