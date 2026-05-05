import { Link } from 'react-router-dom';
import { travelPackages } from '@/data/travelData';

export default function BookingCTA() {
  const previewPackage = travelPackages[0];
  const previewItinerary = previewPackage?.itinerary.slice(0, 3) ?? [];
  const previewHighlights = previewPackage?.highlights ?? [];
  const previewInclusions = previewPackage?.inclusions ?? [];
  const previewMoments =
    previewHighlights.length > 0 ? previewHighlights : previewInclusions;
  const previewLink = previewPackage
    ? `/packages/${previewPackage.slug}`
    : '/packages';
  const packageMeta = [
    { label: 'Durasi', value: previewPackage?.duration ?? '4D3N' },
    { label: 'Group size', value: previewPackage?.groupSize ?? '2-8 traveler' },
    { label: 'Departure', value: previewPackage?.departure ?? 'Apr - Nov' },
    { label: 'Mulai dari', value: previewPackage?.price ?? 'IDR 5 jt' },
  ];
  const studioHighlights = [
    {
      title: 'Moodboard trip',
      description: 'Pilih vibe: island, culture, slow adventure.',
    },
    {
      title: 'Tempo seimbang',
      description: 'Rute dibuat nyaman dengan jeda untuk recharge.',
    },
    {
      title: 'Local access',
      description: 'Partner lokal untuk spot autentik dan privat.',
    },
    {
      title: 'Concierge 24/7',
      description: 'Tim standby dari briefing sampai kepulangan.',
    },
  ];

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-slate-950 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%)]" />
      <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Studio blueprint
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Rancang trip seperti storyboard, bukan spreadsheet.
            </h2>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              Kamu pilih mood, tempo, dan highlight favorit. Tim curator kami
              merangkai itinerary, logistik, dan local access supaya perjalanan
              terasa rapi dan personal.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {studioHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Respon maks 12 jam
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Partner lokal terkurasi
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Itinerary fleksibel
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
            >
              Diskusi Trip
            </Link>
            <Link
              to="/packages"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Lihat Paket
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Itinerary preview
            </p>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
              {previewPackage?.tag ?? 'Signature'}
            </span>
          </div>

          {previewPackage ? (
            <div className="relative mt-4 h-44 overflow-hidden rounded-2xl">
              <img
                src={previewPackage.image}
                alt={previewPackage.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {previewPackage.location}
                </p>
                <h3 className="mt-1 text-xl font-semibold">
                  {previewPackage.name}
                </h3>
              </div>
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              Paket itinerary akan segera hadir.
            </div>
          )}

          <div className="mt-6 grid gap-4">
            {previewItinerary.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-sm text-white/70">
                Itinerary preview belum tersedia.
              </div>
            ) : (
              previewItinerary.map((day) => (
                <div
                  key={day.day}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {day.day}
                    </p>
                    <span className="text-xs text-white/50">
                      {previewPackage?.duration ?? ''}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold">{day.title}</p>
                  <p className="mt-2 text-xs text-white/70">
                    {day.description}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {packageMeta.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Signature moments
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {previewMoments.length === 0
                ? ['Curated dining', 'Local guide', 'Flexible tempo'].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80"
                      >
                        {item}
                      </span>
                    ),
                  )
                : previewMoments.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
            </div>
          </div>

          <Link
            to={previewLink}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Lihat itinerary lengkap
          </Link>
        </div>
      </div>
    </section>
  );
}
