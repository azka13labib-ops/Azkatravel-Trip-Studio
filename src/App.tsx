import { BrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import AppRoutes from '@/routes/AppRoutes';
<<<<<<< HEAD
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
=======

export default function App() {
  return (
    <BrowserRouter>
>>>>>>> 6b5feccfc1e588c5c88da6430d914ac3f5e49f0c
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}
