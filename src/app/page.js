import Navbar from '@/components/home/Navbar';
import OpenTo from '@/components/home/OpenTo';
import Partners from '@/components/home/Partners';
import RecentWork from '@/components/home/RecentWork';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/home/Footer';
import HowIWork from '@/components/home/HowIWork';

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
