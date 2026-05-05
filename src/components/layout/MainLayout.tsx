import type { ReactNode } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
=======
>>>>>>> 6b5feccfc1e588c5c88da6430d914ac3f5e49f0c
import Footer from './Footer';
import Navbar from './Navbar';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
<<<<<<< HEAD
      
      {/* Floating Home Button (Mobile Only) */}
      <Link
        to="/"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 md:hidden"
        aria-label="Kembali ke Home"
      >
        <Home size={24} />
      </Link>
=======
>>>>>>> 6b5feccfc1e588c5c88da6430d914ac3f5e49f0c
    </div>
  );
}
