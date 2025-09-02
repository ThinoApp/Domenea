import { useState, useEffect } from 'react';

interface UseAssetLoaderProps {
  images?: string[];
  videos?: string[];
  minimumLoadTime?: number;
}

export const useAssetLoader = ({
  images = [],
  videos = [],
  minimumLoadTime = 2000
}: UseAssetLoaderProps = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const allAssets = [...images, ...videos];
    setTotalAssets(allAssets.length);

    if (allAssets.length === 0) {
      // Si pas d'assets à charger, attendre le temps minimum
      setTimeout(() => {
        setIsLoading(false);
      }, minimumLoadTime);
      return;
    }

    let loadedCount = 0;

    const handleAssetLoad = () => {
      loadedCount++;
      setLoadedAssets(loadedCount);

      if (loadedCount === allAssets.length) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
        
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    };

    // Précharger les images
    images.forEach(src => {
      const img = new Image();
      img.onload = handleAssetLoad;
      img.onerror = handleAssetLoad; // Même en cas d'erreur, on continue
      img.src = src;
    });

    // Précharger les vidéos
    videos.forEach(src => {
      const video = document.createElement('video');
      video.onloadeddata = handleAssetLoad;
      video.onerror = handleAssetLoad;
      video.src = src;
      video.preload = 'metadata';
    });

  }, [images, videos, minimumLoadTime]);

  const progress = totalAssets > 0 ? (loadedAssets / totalAssets) * 100 : 100;

  return {
    isLoading,
    progress,
    loadedAssets,
    totalAssets
  };
};
