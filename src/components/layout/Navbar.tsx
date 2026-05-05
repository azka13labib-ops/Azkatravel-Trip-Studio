import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-900">
            <img
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="Azkatravel logo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">Azkatravel</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Trip Studio
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "relative text-slate-600 transition hover:text-slate-900 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300",
                  isActive && "text-slate-900 after:scale-x-100",
                )
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 md:inline-flex"
          >
            Konsultasi
          </Link>
          <Link
            to="/packages"
            className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 sm:inline-flex"
          >
            Mulai Booking
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation"
            aria-expanded={isOpen}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Slide-over */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 flex h-[100dvh] w-64 flex-col border-l border-slate-200/70 bg-white px-5 py-6 shadow-2xl transition-transform duration-200 ease-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">Menu</span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-100"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>
        
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900",
                  isActive ? "bg-slate-900 text-white hover:bg-slate-800 hover:text-white" : "text-slate-600"
                )
              }
              end={link.to === '/'}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-4 rounded-xl border-2 border-slate-900 bg-slate-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-transparent hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Konsultasi Sekarang
          </Link>
        </nav>
      </div>
    </>
  );
}
