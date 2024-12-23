import Navbar from '@/components/Navbar';
import OpenTo from '@/components/OpenTo';
import Partners from '@/components/Partners';
import RecentWork from '@/components/RecentWork';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import HowIWork from '@/components/HowIWork';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <OpenTo />
      <Partners />
      <RecentWork />
      <Testimonials />
      <HowIWork />
      <Footer />
      {/* <Banner />
      <WorkTogether />
      */}
    </main>
  );
}
