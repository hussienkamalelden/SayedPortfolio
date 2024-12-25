import Navbar from '@/components/home/Navbar';
import OpenTo from '@/components/home/OpenTo';
import Partners from '@/components/home/Partners';
import RecentWork from '@/components/home/RecentWork';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/home/Footer';
import HowIWork from '@/components/home/HowIWork';
import Banner from '@/components/home/Banner';
import WorkTogether from '@/components/home/WorkTogether';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Banner />
      <OpenTo />
      <Partners />
      <RecentWork />
      <HowIWork />
      <WorkTogether />
      <Testimonials />
      <Footer />
    </main>
  );
}
