import Header from '@/components/Header';
import LighthouseHero from '@/components/LighthouseHero';
import FooterFeatures from '@/components/FooterFeatures';
import ContactSection from '@/components/ContactSection';
import MainFooter from '@/components/MainFooter';
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050e18]">
      <Header />
      <LighthouseHero />
      <FooterFeatures />
      <ContactSection />
      <MainFooter />
    </main>
  );
}
