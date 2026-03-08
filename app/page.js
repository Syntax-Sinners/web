import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BuildCategories from '@/components/BuildCategories';
import SystemsBuilt from '@/components/SystemsBuilt';
import Capabilities from '@/components/Capabilities';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BuildCategories />
      <SystemsBuilt />
      <Capabilities />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
