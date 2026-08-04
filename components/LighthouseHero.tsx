/* eslint-disable @next/next/no-img-element */

"use client";

import ImageWrapper from './ImageWrapper';

export default function LighthouseHero() {
  return (
    <section className="w-full bg-gradient-to-b from-black/80 to-black/90">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              LIGHTHOUSE
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-prose">
              Premium web design that grows your business. We craft thoughtful, accessible, and performant sites
              that convert.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <a href="/contact" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-brand text-black min-h-[44px]">
                Get started
              </a>
              <a href="/services" className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-white/10 text-white min-h-[44px]">
                Our services
              </a>
            </div>
          </div>

          <div>
            <ImageWrapper src="/lighthouse-bg.png" alt="Lighthouse background" width={1200} height={800} />
          </div>
        </div>
      </div>
    </section>
  );
}
