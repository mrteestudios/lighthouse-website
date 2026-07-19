import { useState, useEffect } from 'react';

export function usePreloadImages(imagePaths: string[]) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    if (imagePaths.length === 0) return;

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const loadPromises = imagePaths.map((path, index) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
          loadedCount++;
          setProgress((loadedCount / imagePaths.length) * 100);
          loadedImages[index] = img;
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load image at ${path}`);
          loadedCount++; // Still count as loaded to avoid getting stuck
          setProgress((loadedCount / imagePaths.length) * 100);
          loadedImages[index] = img; // Push broken image or handle it
          resolve();
        };
      });
    });

    Promise.all(loadPromises).then(() => {
      setImages(loadedImages);
      setIsLoaded(true);
    });

    return () => {
      // Cleanup if needed
    };
  }, [imagePaths]);

  return { progress, isLoaded, images };
}
