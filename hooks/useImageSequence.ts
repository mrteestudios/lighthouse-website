import { useState, useEffect, RefObject } from 'react';

export function useScrollProgress(containerRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Total scrollable distance within the container
      const scrollableDistance = rect.height - window.innerHeight;
      
      // Calculate how far we've scrolled into the container
      // If rect.top is 0, we are at the start. If rect.bottom is window.innerHeight, we are at the end.
      const scrolled = -rect.top;
      
      let newProgress = scrolled / scrollableDistance;
      newProgress = Math.max(0, Math.min(1, newProgress));
      
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Init

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [containerRef]);

  return progress;
}
