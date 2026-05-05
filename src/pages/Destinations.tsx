import { Link } from 'react-router-dom';
import { destinations } from '@/data/travelData';

export default function Destinations() {
  return (
    <div className="bg-white">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Destinations
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
                Destinasi terbaik untuk setiap gaya liburan.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
                Kami memilih destinasi dengan akses terbaik, layanan lokal
                terpercaya, dan pengalaman yang terasa personal untuk setiap
                traveler.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Konsultasi Trip
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          {destinations.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              Belum ada destinasi yang dipublikasikan.
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {destinations.map((destination) => (
                <article
                  key={destination.id}
                  className="group space-y-4 rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-56 overflow-hidden rounded-2xl">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
                      {destination.highlight}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {destination.region}
                    </p>
                    <p className="mt-3 text-sm text-slate-600">
                      {destination.description}
                    </p>
                  </div>
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="inline-flex text-sm font-semibold text-slate-900 transition hover:text-slate-700"
                  >
                    Lihat detail
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
