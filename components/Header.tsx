'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'SERVICES', href: '/services' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'PORTFOLIO', href: '#portfolio' },
  { name: 'ABOUT', href: '#about' },
  { name: 'BLOG', href: '#blog' },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Determine which item to highlight
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    const targetEl = itemRefs.current[targetIndex];

    if (targetEl && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      
      setIndicatorStyle({
        left: targetRect.left - navRect.left,
        width: targetRect.width,
        opacity: 1,
      });
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between pointer-events-auto">
      {/* Logo Area */}
      <Link href="/" className="flex items-center gap-4 group">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-white/20 bg-black/50 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
          <img 
            src="/logo.png" 
            alt="Lighthouse Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif tracking-widest text-white leading-none group-hover:text-[#f5d08b] transition-colors">
            LIGHTHOUSE
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-[1px] w-6 bg-[#f5d08b]"></span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#f5d08b] uppercase leading-none">
              Web Design
            </span>
            <span className="h-[1px] w-6 bg-[#f5d08b]"></span>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <nav 
        ref={navRef}
        className="hidden lg:flex items-center gap-8 relative"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navItems.map((item, index) => (
          <Link 
            key={item.name} 
            href={item.href}
            ref={(el) => { itemRefs.current[index] = el; }}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={`text-xs font-semibold tracking-widest transition-colors py-2 ${
              (hoveredIndex === index || (hoveredIndex === null && activeIndex === index))
                ? 'text-white' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
        
        {/* Animated Underline */}
        <div 
          className="absolute -bottom-1 h-[1px] bg-[#f5d08b] transition-all duration-300 ease-out"
          style={{ 
            left: indicatorStyle.left, 
            width: indicatorStyle.width,
            opacity: indicatorStyle.opacity 
          }}
        />
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link 
          href="/contact" 
          className="inline-block px-8 py-3 border border-[#f5d08b] text-[#f5d08b] text-xs font-semibold tracking-widest uppercase rounded-[50px] hover:bg-[#f5d08b] hover:text-[#050e18] transition-colors"
        >
          Let's Talk
        </Link>
      </div>
    </header>
  );
}
