import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Diferenciais from '@/components/Diferenciais';
import CatalogGrid from '@/components/CatalogGrid';
import FinishSimulator from '@/components/FinishSimulator';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Diferenciais />
      <CatalogGrid />
      <FinishSimulator />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
