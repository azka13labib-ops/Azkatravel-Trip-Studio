import { Link } from 'react-router-dom';
import { VideoText } from '@/components/ui/video-text';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}WhatsApp Video 2026-05-05 at 21.48.39.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">
          Azkatravel Studio
        </p>
        <VideoText
          src={`${import.meta.env.BASE_URL}ssstik.io_@sadxgt_1767015577555.mp4`}
          className="h-[30vh] w-full text-[14vw] font-black tracking-widest"
        >
          EXPLORE
        </VideoText>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          Rancang perjalanan sinematik dengan itinerary personal, pengalaman
          lokal, dan layanan premium di setiap destinasi.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/packages"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
          >
            Cari Paket
          </Link>
          <Link
            to="/destinations"
            className="rounded-full border border-white/60 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Lihat Destinasi
          </Link>
        </div>
      </div>
    </section>
  );
}
