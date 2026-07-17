import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CatalogGrid from '@/components/CatalogGrid';
import MaterialInfo from '@/components/MaterialInfo';
import HowItWorks from '@/components/HowItWorks';
import Gallery from '@/components/Gallery';
import Diferenciais from '@/components/Diferenciais';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <CatalogGrid />
      <MaterialInfo />
      <HowItWorks />
      <Gallery />
      <Diferenciais />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
