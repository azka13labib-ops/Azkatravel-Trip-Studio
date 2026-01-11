const stats = [
  {
    label: 'Destinasi Aktif',
    value: '28+',
    description: 'Rute kurasi tiap musim',
  },
  {
    label: 'Travel Partners',
    value: '60+',
    description: 'Hotel, resort, operator lokal',
  },
  {
    label: 'Repeat Clients',
    value: '72%',
    description: 'Traveler kembali menggunakan layanan',
  },
];

const values = [
  {
    title: 'Curated experience',
    description:
      'Kami memilih partner lokal terbaik dan menyusun itinerary yang terasa personal.',
  },
  {
    title: 'Human support',
    description:
      'Tim travel curator mendampingi sejak perencanaan hingga perjalanan selesai.',
  },
  {
    title: 'Transparent planning',
    description:
      'Semua biaya dan detail layanan dijelaskan sejak awal agar perjalanan tetap nyaman.',
  },
];

const advantages = [
  {
    title: 'Premium logistics',
    description:
      'Transport, akomodasi, dan aktivitas sudah terkoordinasi agar perjalanan efisien.',
  },
  {
    title: 'Flexible itinerary',
    description:
      'Tambahkan hari atau upgrade hotel sesuai kebutuhan tanpa proses yang rumit.',
  },
  {
    title: 'Local insight',
    description:
      'Akses spot dan pengalaman yang tidak selalu tersedia untuk traveler umum.',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Azkatravel berdiri',
    description: 'Memulai studio perjalanan privat dengan fokus high touch service.',
  },
  {
    year: '2021',
    title: 'Ekspansi destinasi',
    description: 'Menambah rute Asia Pasifik dengan jaringan partner lokal.',
  },
  {
    year: '2025',
    title: 'Travel curator team',
    description: 'Membangun tim kurator itinerary dengan spesialisasi niche trip.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                About Azkatravel
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
                Studio perjalanan premium yang fokus pada detail.
              </h1>
              <p className="mt-4 text-sm text-slate-600 md:text-base">
                Azkatravel lahir dari keinginan menciptakan perjalanan yang
                terasa personal, rapi, dan effortless. Kami percaya pengalaman
                terbaik hadir dari riset, empati, dan eksekusi yang presisi.
              </p>
              <p className="mt-4 text-sm text-slate-600 md:text-base">
                Dengan jaringan partner lokal yang terkurasi, kami merancang
                itinerary sesuai tempo dan karakter setiap traveler.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Values
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                Prinsip kerja yang kami jaga.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Kami mengedepankan kualitas layanan agar setiap trip terasa
              memorable tanpa drama logistik.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Advantages
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Kenapa traveler memilih kami.
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/70">
              Setiap perjalanan kami kurasi dengan standar premium dan layanan
              personal.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">{advantage.title}</h3>
                <p className="mt-3 text-sm text-white/70">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Journey
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                Perjalanan kami membangun studio ini.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Milestone ini memperkuat komitmen kami pada kualitas layanan.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {milestone.year}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
