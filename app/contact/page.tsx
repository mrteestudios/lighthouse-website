import Header from '@/components/Header';
import MainFooter from '@/components/MainFooter';

export const metadata = {
  title: 'Contact Us | Lighthouse Web Design',
  description: 'Get in touch to build a beautiful, high-performing website for your business.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050e18] flex flex-col font-sans text-white">
      <Header />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 flex items-center justify-center relative">
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#f5d08b]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-2xl w-full relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-[#f2f2f2] mb-4">
              Let's Build Something Great
            </h1>
            <p className="text-white/60 font-light tracking-wide">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-[#02060c] border border-white/10 p-8 md:p-12 rounded-[4px] shadow-2xl">
            <form action="https://formsubmit.co/mrteestudios@gmail.com" method="POST" className="flex flex-col gap-6">
              
              {/* FormSubmit Configuration Settings */}
              <input type="hidden" name="_subject" value="New Web Design Inquiry from Lighthouse Website!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#f5d08b]">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors rounded-[2px]"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#f5d08b]">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors rounded-[2px]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-[#f5d08b]">Contact Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors rounded-[2px]"
                    placeholder="+357 99 123456"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="country" className="text-xs uppercase tracking-widest text-[#f5d08b]">Country</label>
                  <input 
                    type="text" 
                    name="country" 
                    id="country" 
                    required 
                    className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors rounded-[2px]"
                    placeholder="Cyprus"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#f5d08b]">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  required 
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f5d08b] focus:bg-white/10 transition-colors resize-none rounded-[2px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit" 
                className="mt-4 px-8 py-4 bg-[#f5d08b] text-[#050e18] text-sm font-semibold tracking-widest uppercase rounded-[2px] hover:bg-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
