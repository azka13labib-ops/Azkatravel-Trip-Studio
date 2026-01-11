import { useState, type FormEvent } from 'react';

const contacts = [
  {
    label: 'Phone',
    value: '+62 831 5576 1573',
    note: 'Setiap hari 09.00 - 21.00 WIB',
  },
  {
    label: 'Email',
    value: 'Azka13labib@gmail.com',
    note: 'Respon maksimal 12 jam',
  },
  {
    label: 'Office',
    value: 'Lumajang',
    note: 'By appointment only',
  },
];

const offices = [
  {
    city: 'Lumajang',
    address: 'Lumajang Kota',
    hours: 'Senin - Sabtu, 10.00 - 18.00',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white">
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Konsultasi trip dengan tim Azkatravel.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
            Ceritakan gaya liburan, tanggal, dan kebutuhan khususmu. Kami akan
            menyusun rekomendasi itinerary serta estimasi budget.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {contact.label}
                </p>
                <p className="mt-3 text-lg font-semibold">{contact.value}</p>
                <p className="mt-2 text-sm text-white/70">{contact.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/6283155761573"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
              target="_blank"
              rel="noreferrer"
            >
              Chat WhatsApp
            </a>
            <a
              href="mailto:hello@azkatravel.id"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Email Kami
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Form Konsultasi
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Mulai rencanakan perjalananmu.
              </h2>
            </div>

            <div className="mt-6 grid gap-5">
              <label className="text-sm text-slate-600">
                Nama lengkap
                <input
                  type="text"
                  name="name"
                  placeholder="Nama traveler"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                  required
                />
              </label>
              <label className="text-sm text-slate-600">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="nama@email.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  required
                />
              </label>
              <label className="text-sm text-slate-600">
                Subjek
                <input
                  type="text"
                  name="subject"
                  placeholder="Contoh: Konsultasi trip keluarga"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                  value={formData.subject}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: event.target.value,
                    }))
                  }
                  required
                />
              </label>
              <label className="text-sm text-slate-600">
                Ceritakan kebutuhanmu
                <textarea
                  name="message"
                  placeholder="Destinasi, jumlah traveler, tanggal, dan detail lain"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
                  required
                />
              </label>

              {submitError ? (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {submitError}
                </div>
              ) : null}
              {submitSuccess ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Pesan terkirim. Tim kami akan menghubungi kamu segera.
                </div>
              ) : null}

              <button
                type="submit"
                className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Permintaan'}
              </button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">
                Jam operasional
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Senin - Sabtu, 09.00 - 21.00 WIB
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Minggu dan hari libur tetap tersedia by appointment.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">Office hub</p>
              <div className="mt-4 space-y-4">
                {offices.map((office) => (
                  <div key={office.city}>
                    <p className="text-sm font-semibold text-slate-900">
                      {office.city}
                    </p>
                    <p className="text-sm text-slate-600">{office.address}</p>
                    <p className="text-xs text-slate-500">{office.hours}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-900">
                Butuh respon cepat?
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Kirim pesan lewat WhatsApp untuk konsultasi singkat sebelum
                meeting.
              </p>
              <a
                href="https://wa.me/6283255762573"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                target="_blank"
                rel="noreferrer"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
