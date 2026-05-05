import { Link } from 'react-router-dom';
import { featuredDestinations } from '@/data/travelData';

export default function PopularDestinations() {
  const destinations = featuredDestinations;

  return (
    <section id="destinations" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Destinasi Populer
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Favorit para traveler modern
            </h2>
          </div>
          <Link
            to="/destinations"
            className="rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Lihat Semua Destinasi
          </Link>
        </div>

        <div className="mt-10">
          {destinations.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              Belum ada destinasi yang dipublikasikan.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {destinations.map((destination) => (
                <article
                  key={destination.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
                      {destination.highlight}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {destination.region}
                    </p>
                    <p className="mt-3 text-sm text-slate-600">
                      {destination.description}
                    </p>
                    <Link
                      to={`/destinations/${destination.slug}`}
                      className="mt-4 inline-flex text-sm font-semibold text-slate-900 transition hover:text-slate-700"
                    >
                      Lihat detail
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
