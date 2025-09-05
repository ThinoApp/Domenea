import { useState, useEffect, useRef, useCallback } from 'react';

interface VideoCache {
  [url: string]: {
    element: HTMLVideoElement;
    loaded: boolean;
    canPlay: boolean;
  };
}

interface UseVideoCacheReturn {
  preloadVideo: (url: string) => Promise<HTMLVideoElement>;
  getCachedVideo: (url: string) => HTMLVideoElement | null;
  isVideoReady: (url: string) => boolean;
  isVideoLoaded: (url: string) => boolean;
  clearCache: () => void;
}

// Cache global pour persister entre les navigations
const videoCache: VideoCache = {};

export const useVideoCache = (): UseVideoCacheReturn => {
  const [, setForceUpdate] = useState(0);
  const activeVideos = useRef<Set<string>>(new Set());

  const forceUpdate = useCallback(() => {
    setForceUpdate(prev => prev + 1);
  }, []);

  const preloadVideo = useCallback((url: string): Promise<HTMLVideoElement> => {
    return new Promise((resolve, reject) => {
      // Si déjà en cache et prête, retourner immédiatement
      if (videoCache[url] && videoCache[url].canPlay) {
        resolve(videoCache[url].element);
        return;
      }

      // Si déjà en cours de chargement, attendre
      if (videoCache[url]) {
        const checkReady = () => {
          if (videoCache[url].canPlay) {
            resolve(videoCache[url].element);
          } else {
            setTimeout(checkReady, 100);
          }
        };
        checkReady();
        return;
      }

      // Créer un nouveau élément vidéo
      const video = document.createElement('video');
      
      // Initialiser l'entrée du cache
      videoCache[url] = {
        element: video,
        loaded: false,
        canPlay: false,
      };

      // Configuration optimisée pour le préchargement
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      
      // Handlers d'événements
      const handleLoadedData = () => {
        videoCache[url].loaded = true;
        forceUpdate();
      };

      const handleCanPlay = () => {
        videoCache[url].canPlay = true;
        forceUpdate();
        resolve(video);
      };

      const handleError = (error: Event) => {
        console.warn(`Failed to preload video: ${url}`, error);
        delete videoCache[url];
        reject(new Error(`Failed to load video: ${url}`));
      };

      const handleLoadStart = () => {
        console.log(`Starting to load video: ${url}`);
      };

      const handleProgress = () => {
        if (video.buffered.length > 0) {
          const bufferedEnd = video.buffered.end(video.buffered.length - 1);
          const duration = video.duration;
          if (duration > 0) {
            const percentLoaded = (bufferedEnd / duration) * 100;
            console.log(`Video ${url} buffered: ${percentLoaded.toFixed(1)}%`);
          }
        }
      };

      // Ajouter les event listeners
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('progress', handleProgress);

      // Cleanup function
      const cleanup = () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('progress', handleProgress);
      };

      // Stocker la fonction de cleanup
      (video as any)._cleanup = cleanup;

      // Commencer le chargement
      video.src = url;
      video.load();

      // Timeout de sécurité
      setTimeout(() => {
        if (!videoCache[url]?.canPlay) {
          console.warn(`Video preload timeout for: ${url}`);
          cleanup();
          // Ne pas supprimer du cache, laisser le chargement continuer
          reject(new Error(`Video preload timeout: ${url}`));
        }
      }, 15000); // 15 secondes timeout
    });
  }, [forceUpdate]);

  const getCachedVideo = useCallback((url: string): HTMLVideoElement | null => {
    return videoCache[url]?.element || null;
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
      if (cacheEntry.element && (cacheEntry.element as any)._cleanup) {
        (cacheEntry.element as any)._cleanup();
      }
      // Pause et reset la vidéo
      if (!cacheEntry.element.paused) {
        cacheEntry.element.pause();
      }
      cacheEntry.element.src = '';
      delete videoCache[url];
    });
    activeVideos.current.clear();
    forceUpdate();
  }, [forceUpdate]);

  // Cleanup au démontage du composant
  useEffect(() => {
    return () => {
      // Ne pas nettoyer le cache au démontage, on veut le garder
      // pour les navigations entre pages
    };
  }, []);

  return {
    preloadVideo,
    getCachedVideo,
    isVideoReady,
    isVideoLoaded,
    clearCache,
  };
};

export default useVideoCache;
