'use client';

import { useRef, useEffect, useState } from 'react';
import { usePreloadImages } from '@/hooks/usePreloadImages';
import { useScrollProgress } from '@/hooks/useImageSequence';
import { drawImageCover } from '@/lib/canvas';
import Link from 'next/link';

const FRAME_COUNT = 138;
const imagePaths = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `/lighthouse-sequence/frame_${String(i + 1).padStart(4, '0')}.jpg`
);

// Helper for interpolating values
function interpolate(value: number, input: number[], output: number[]) {
  if (value <= input[0]) return output[0];
  if (value >= input[input.length - 1]) return output[output.length - 1];
  
  for (let i = 1; i < input.length; i++) {
    if (value <= input[i]) {
      const t = (value - input[i - 1]) / (input[i] - input[i - 1]);
      return output[i - 1] + t * (output[i] - output[i - 1]);
    }
  }
  return output[0];
}

export default function LighthouseHero() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { progress: loadProgress, isLoaded, images } = usePreloadImages(imagePaths);
  const scrollProgress = useScrollProgress(containerRef);

  const [loadingFadeOut, setLoadingFadeOut] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => setLoadingFadeOut(true), 500); 
    }
  }, [isLoaded]);

  // Render loop synced to scroll
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      
      const imgIndex = Math.min(FRAME_COUNT - 1, Math.round(scrollProgress * (FRAME_COUNT - 1)));
      const img = images[imgIndex];
      if (img) drawImageCover(ctx, img, window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); 

    const imgIndex = Math.min(FRAME_COUNT - 1, Math.round(scrollProgress * (FRAME_COUNT - 1)));
    const img = images[imgIndex];
    if (img) {
      drawImageCover(ctx, img, window.innerWidth, window.innerHeight);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isLoaded, images, scrollProgress]);

  // Scene Opacity Maps (Timing) - Adjusted for longer 'stay'
  const scene1Opacity = interpolate(scrollProgress, [0, 0.15, 0.28], [1, 1, 0]);
  const scene2Opacity = interpolate(scrollProgress, [0.18, 0.28, 0.45, 0.55], [0, 1, 1, 0]);
  const scene3Opacity = interpolate(scrollProgress, [0.45, 0.55, 0.72, 0.82], [0, 1, 1, 0]);
  const scene4Opacity = interpolate(scrollProgress, [0.72, 0.82, 1], [0, 1, 1]);

  return (
    <div className="relative bg-[#050e18] font-sans text-white">
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050e18] transition-opacity duration-1000 ease-in-out ${
          loadingFadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="h-[1px] w-48 bg-white/20 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 bg-[#f5d08b] transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <p className="text-[#f5d08b] tracking-widest text-sm uppercase">
            Loading Experience {Math.round(loadProgress)}%
          </p>
        </div>
      </div>

      <main ref={containerRef} className="h-[500vh] w-full relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Overlay for text legibility and blending to deep navy base */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050e18] pointer-events-none opacity-80" />

          {/* Scene 1: Main Title */}
          <div
            style={{ opacity: scene1Opacity, transition: 'opacity 0.1s linear' }}
            className="absolute inset-0 flex flex-col items-start justify-center px-8 pb-20 pt-24 md:px-24 md:pb-20 md:pt-32 lg:px-32 xl:px-48"
          >
            <div className="max-w-2xl text-left">
              <h3 className="text-[#f5d08b] text-xs md:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
                Clarity. Direction. Confidence.
                <span className="w-12 h-[1px] bg-[#f5d08b]"></span>
              </h3>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-[#f2f2f2] mb-6 leading-[1.1]">
                GUIDING YOU <br/> THROUGH THE FOG
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light mb-10 leading-relaxed max-w-xl">
                In uncertain times, we light the way forward with eye catching Wed sites, insight, experience and unwavering support from idea to ongoing support.
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#f5d08b] text-[#f5d08b] text-xs font-semibold tracking-[0.2em] uppercase rounded-[2px] hover:bg-[#f5d08b] hover:text-black transition-colors"
              >
                Discover Our Services 
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Scene 2: Cyprus Based */}
          <div
            style={{ opacity: scene2Opacity, transition: 'opacity 0.1s linear' }}
            className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 lg:px-32 xl:px-48"
          >
            <div className="max-w-2xl text-right">
              <h3 className="mb-4 ml-auto flex w-fit items-center justify-end gap-3 rounded-full border border-[#f5d08b]/40 bg-[#02060c]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ffe0a3] shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md md:text-sm">
                <span className="w-12 h-[1px] bg-[#f5d08b]"></span>
                Cyprus Based
              </h3>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#f2f2f2] mb-6 leading-[1.1]">
                Premium Quality, <br/> Local Focus
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-light mb-10 leading-relaxed max-w-xl ml-auto">
                We provide local businesses with top-tier web design and management packages that are highly affordable, without sacrificing quality or customer service.
              </p>
            </div>
          </div>

          {/* Scene 3: Empowering Local Businesses */}
          <div
            style={{ opacity: scene3Opacity, transition: 'opacity 0.1s linear' }}
            className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24 lg:px-32 xl:px-48"
          >
            <div className="max-w-2xl text-left">
              <h3 className="text-[#f5d08b] text-xs md:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
                Management & Growth
                <span className="w-12 h-[1px] bg-[#f5d08b]"></span>
              </h3>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#f2f2f2] mb-6 leading-[1.1]">
                Empowering Local <br/> Businesses
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-light mb-10 leading-relaxed max-w-xl">
                From striking visuals to seamless technical management, we handle the complex tech so you can focus entirely on growing your business all over Europe and the Middle East.
              </p>
            </div>
          </div>

          {/* Scene 4: Ready to Shine? */}
          <div
            style={{ opacity: scene4Opacity, transition: 'opacity 0.1s linear' }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
          >
            <div className="max-w-3xl flex flex-col items-center">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif text-[#f2f2f2] mb-8 leading-[1.1]">
                Ready to Shine?
              </h2>
              <p className="text-xl md:text-2xl text-[#f5d08b] font-light mb-12 max-w-2xl">
                Let&apos;s build a digital presence that perfectly represents your local brand.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-3 px-10 py-5 border border-[#f5d08b] bg-[#f5d08b]/10 text-[#f5d08b] text-sm font-semibold tracking-[0.2em] uppercase rounded-[2px] hover:bg-[#f5d08b] hover:text-black transition-all backdrop-blur-sm"
              >
                Let&apos;s Build It 
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            style={{ opacity: scene1Opacity, transition: 'opacity 0.1s linear' }}
            className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full border border-white/20 bg-[#02060c]/75 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md pointer-events-none md:bottom-8"
          >
            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.28em] text-white md:text-xs">
              Scroll down
            </span>
            <span className="text-lg leading-none text-[#f5d08b] animate-bounce" aria-hidden="true">
              ↓
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
