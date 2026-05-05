import { BrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import AppRoutes from '@/routes/AppRoutes';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}
