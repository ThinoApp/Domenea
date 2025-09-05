import { useEffect, useRef, useCallback } from 'react';

interface VideoCache {
  [url: string]: {
    element: HTMLVideoElement;
    loaded: boolean;
    canPlay: boolean;
    blobUrl?: string; // URL Blob partagée pour éviter multiples téléchargements
    blob?: Blob; // Données binaires de la vidéo
  };
}

interface UseVideoCacheReturn {
  preloadVideo: (url: string) => Promise<string>; // Retourne Blob URL au lieu d'HTMLVideoElement
  getCachedBlobUrl: (url: string) => string | null;
  isVideoReady: (url: string) => boolean;
  isVideoLoaded: (url: string) => boolean;
  clearCache: () => void;
}

// Cache global pour persister entre les navigations
const videoCache: VideoCache = {};

export const useVideoCache = (): UseVideoCacheReturn => {
  const activeVideos = useRef<Set<string>>(new Set());

  const preloadVideo = useCallback((url: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      // Si déjà en cache et prête, retourner le Blob URL
      if (videoCache[url] && videoCache[url].canPlay && videoCache[url].blobUrl) {
        console.log(`Video already cached: ${url}`);
        resolve(videoCache[url].blobUrl!);
        return;
      }

      // Si déjà en cours de chargement, attendre
      if (videoCache[url]) {
        const checkReady = () => {
          if (videoCache[url].canPlay && videoCache[url].blobUrl) {
            resolve(videoCache[url].blobUrl!);
          } else {
            setTimeout(checkReady, 100);
          }
        };
        checkReady();
        return;
      }

      try {
        console.log(`Starting single download for: ${url}`);
        
        // Initialiser l'entrée du cache
        videoCache[url] = {
          element: document.createElement('video'),
          loaded: false,
          canPlay: false,
        };

        // Télécharger une seule fois via fetch
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        // Créer le Blob et l'URL Blob
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        
        // Créer un élément vidéo de test pour valider
        const testVideo = document.createElement('video');
        testVideo.preload = 'auto';
        testVideo.muted = true;
        testVideo.playsInline = true;
        
        const handleCanPlay = () => {
          videoCache[url] = {
            element: testVideo,
            loaded: true,
            canPlay: true,
            blob: blob,
            blobUrl: blobUrl,
          };
          
          console.log(`Video successfully cached with Blob URL: ${url}`);
          resolve(blobUrl);
        };

        const handleError = () => {
          URL.revokeObjectURL(blobUrl);
          delete videoCache[url];
          reject(new Error(`Failed to load video: ${url}`));
        };

        testVideo.addEventListener('canplay', handleCanPlay, { once: true });
        testVideo.addEventListener('error', handleError, { once: true });
        testVideo.src = blobUrl;
        testVideo.load();

        // Timeout de sécurité
        setTimeout(() => {
          if (!videoCache[url]?.canPlay) {
            console.warn(`Video preload timeout for: ${url}`);
            URL.revokeObjectURL(blobUrl);
            delete videoCache[url];
            reject(new Error(`Video preload timeout: ${url}`));
          }
        }, 15000);
        
      } catch (error) {
        console.error(`Failed to fetch video: ${url}`, error);
        delete videoCache[url];
        reject(error);
      }
    });
  }, []);

  const getCachedBlobUrl = useCallback((url: string): string | null => {
    return videoCache[url]?.blobUrl || null;
  }, []);

  const isVideoReady = useCallback((url: string): boolean => {
    return videoCache[url]?.canPlay || false;
  }, []);

  const isVideoLoaded = useCallback((url: string): boolean => {
    return videoCache[url]?.loaded || false;
  }, []);

  const clearCache = useCallback(() => {
    Object.keys(videoCache).forEach(url => {
      const cacheEntry = videoCache[url];
      
      // Nettoyer l'élément vidéo
      if (cacheEntry.element && (cacheEntry.element as any)._cleanup) {
        (cacheEntry.element as any)._cleanup();
      }
      if (!cacheEntry.element.paused) {
        cacheEntry.element.pause();
      }
      cacheEntry.element.src = '';
      
      // Nettoyer le Blob URL
      if (cacheEntry.blobUrl) {
        URL.revokeObjectURL(cacheEntry.blobUrl);
      }
      
      delete videoCache[url];
    });
    activeVideos.current.clear();
  }, []);

  // Cleanup au démontage du composant
  useEffect(() => {
    return () => {
      // Ne pas nettoyer le cache au démontage, on veut le garder
      // pour les navigations entre pages
    };
  }, []);

  return {
    preloadVideo,
    getCachedBlobUrl,
    isVideoReady,
    isVideoLoaded,
    clearCache,
  };
};

export default useVideoCache;
