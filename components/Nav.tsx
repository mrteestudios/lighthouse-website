"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      // focus first link
      const first = menuRef.current?.querySelector('a');
      (first as HTMLElement | null)?.focus();
    } else {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      buttonRef.current?.focus();
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav aria-label="Primary" className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Homepage" className="inline-flex items-center">
            <img src="/logo.png" alt="Lighthouse logo" className="w-10 h-10 object-contain" />
            <span className="ml-2 font-semibold text-lg">Lighthouse</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((it) => (
            <Link key={it.href} href={it.href} className="text-sm hover:underline">
              {it.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            ref={buttonRef}
            aria-controls="primary-navigation"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center p-2 rounded-md bg-white/5"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="primary-navigation"
        ref={menuRef}
        className={`md:hidden ${open ? 'block' : 'hidden'} bg-black/90 backdrop-blur-sm`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          {NAV_ITEMS.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium px-2 py-2 rounded-md"
            >
              {it.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
