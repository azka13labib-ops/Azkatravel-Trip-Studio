import BookingCTA from '@/components/sections/BookingCTA';
import Hero from '@/components/sections/Hero';
import PopularDestinations from '@/components/sections/PopularDestinations';
import TravelPackages from '@/components/sections/TravelPackages';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <TravelPackages />
      <BookingCTA />
    </>
  );
}
