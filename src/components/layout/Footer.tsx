import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/Tryfind.azka' },
  { label: 'TikTok', href: 'https://tiktok.com/@AzkaaXO' },
  { label: 'YouTube', href: 'https://youtube.com/@LavenderExdi' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-slate-900">Azkatravel</p>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Studio perjalanan modern untuk eksplorasi destinasi terbaik di Asia
            Pasifik. Rancang liburan pribadi atau grup dengan tim lokal kami.
          </p>
          <div className="mt-4 text-sm text-slate-600">
            <p>Lumajang</p>
            <p>Azka13labib@gmail.com</p>
            <p>+62 831 5576 1573</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Menu Cepat</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Sosial Media</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-slate-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2025 Azkatravel. All rights reserved.</p>
          <p>Lisensi, kebijakan privasi, dan ketentuan layanan.</p>
        </div>
      </div>
    </footer>
  );
}
