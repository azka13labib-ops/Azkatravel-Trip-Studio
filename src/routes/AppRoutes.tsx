import { Route, Routes } from 'react-router-dom';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import DestinationDetail from '@/pages/DestinationDetail';
import Destinations from '@/pages/Destinations';
import Home from '@/pages/Home';
import PackageDetail from '@/pages/PackageDetail';
import Packages from '@/pages/Packages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:slug" element={<DestinationDetail />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:slug" element={<PackageDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
