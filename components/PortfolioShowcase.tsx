import Link from 'next/link';

export default function MainFooter() {
  return (
    <footer className="bg-[#02060c] py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-black/50 flex items-center justify-center shrink-0">
            <img 
              src="/logo.png" 
              alt="Lighthouse Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif tracking-widest text-white leading-none">
              LIGHTHOUSE
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-[1px] w-6 bg-[#f5d08b]"></span>
              <span className="text-[10px] tracking-[0.3em] text-[#f5d08b] uppercase leading-none">
                Web Design
              </span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-6 text-xs text-white/60 tracking-widest uppercase">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#f5d08b] transition-colors">
              Contact Us
            </Link>
          </div>
          <p className="text-white/40 text-[10px] tracking-wider mt-2">
            &copy; {new Date().getFullYear()} Lighthouse Web Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
