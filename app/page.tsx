import Header from '@/components/Header';
import LighthouseHero from '@/components/LighthouseHero';
import FooterFeatures from '@/components/FooterFeatures';
import ContactSection from '@/components/ContactSection';
import MainFooter from '@/components/MainFooter';

export default function Home() {
  return (
    <main id="content" className="min-h-screen bg-black text-white">
      <Header />
      <LighthouseHero />
      <FooterFeatures />
      <ContactSection />
      <MainFooter />
    </main>
  );
}
