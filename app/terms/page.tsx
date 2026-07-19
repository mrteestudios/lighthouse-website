import Header from '@/components/Header';
import MainFooter from '@/components/MainFooter';

export const metadata = {
  title: 'Terms & Conditions | Lighthouse Web Design',
  description: 'Terms and Conditions for Lighthouse Web Design services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050e18] flex flex-col font-sans text-white">
      <Header />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full relative">
        <h1 className="text-4xl md:text-5xl font-serif text-[#f2f2f2] mb-12">Terms & Conditions</h1>
        
        <div className="prose prose-invert prose-p:text-white/70 prose-headings:text-[#f5d08b] max-w-none">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you and Lighthouse Web Design 
            concerning your access to and use of our website as well as any other media form, media channel, mobile website 
            or mobile application related, linked, or otherwise connected thereto.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site and our services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
          </p>

          <h2>3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
          </p>

          <h2>4. Services and Pricing</h2>
          <p>
            We make every effort to display as accurately as possible the colors, features, specifications, and details of the services available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the services will be accurate, complete, reliable, current, or free of other errors.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of Cyprus and the European Union. Lighthouse Web Design and yourself irrevocably consent that the courts of Cyprus shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
          
          <h2>6. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: mrteestudios@gmail.com.
          </p>
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
