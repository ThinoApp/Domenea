import { useState, useEffect } from "react";

interface UseAssetLoaderProps {
  images?: string[];
  videos?: string[];
  minimumLoadTime?: number;
}

export const useAssetLoader = ({
  images = [],
  videos = [],
  minimumLoadTime = 2000,
}: UseAssetLoaderProps = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const allAssets = [...images, ...videos];
    setTotalAssets(allAssets.length);
    
    console.log("🚀 Starting asset loading process");
    console.log("📊 Total assets to load:", allAssets.length);
    console.log("🖼️ Images:", images);
    console.log("🎥 Videos:", videos);

    if (allAssets.length === 0) {
      // Si pas d'assets à charger, attendre le temps minimum
      setTimeout(() => {
        setIsLoading(false);
      }, minimumLoadTime);
      return;
    }

    let loadedCount = 0;
    let hasFinished = false;
    const loadedAssetsList: string[] = [];
    const failedAssetsList: string[] = [];

    const finishLoading = () => {
      if (hasFinished) return;
      hasFinished = true;
      
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
      
      console.log("✅ Finishing loading process");
      console.log("📈 Final loaded count:", loadedCount);
      console.log("📊 Total assets:", allAssets.length);
      console.log("⏱️ Elapsed time:", elapsedTime + "ms");
      console.log("⏳ Remaining time:", remainingTime + "ms");
      console.log("✅ Successfully loaded:", loadedAssetsList);
      console.log("❌ Failed to load:", failedAssetsList);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    const handleAssetLoad = (type: string, src: string, success: boolean = true) => {
      if (hasFinished) return;
      
      loadedCount++;
      setLoadedAssets(loadedCount);
      
      if (success) {
        loadedAssetsList.push(src);
        console.log(`✅ ${type} loaded:`, src);
      } else {
        failedAssetsList.push(src);
        console.log(`❌ ${type} failed:`, src);
      }

      console.log(`📊 Progress: ${loadedCount}/${allAssets.length}`);
      
      if (loadedCount === allAssets.length) {
        finishLoading();
      }
    };

    // Timeout de sécurité après 10 secondes
    const safetyTimeout = setTimeout(() => {
      if (!hasFinished) {
        console.warn("⚠️ Safety timeout reached - forcing loader to finish");
        console.warn("📊 Assets loaded so far:", loadedCount, "/", allAssets.length);
        console.warn("✅ Successfully loaded:", loadedAssetsList);
        console.warn("❌ Failed assets:", failedAssetsList);
        console.warn("⏳ Missing assets:", allAssets.filter(asset => !loadedAssetsList.includes(asset) && !failedAssetsList.includes(asset)));
        finishLoading();
      }
    }, 10000);

    // Précharger les images
    images.forEach((src, index) => {
      console.log(`🖼️ Loading image ${index + 1}/${images.length}:`, src);
      const img = new Image();
      img.onload = () => handleAssetLoad("image", src, true);
      img.onerror = (error) => {
        console.error("❌ Image load error:", src, error);
        handleAssetLoad("image", src, false);
      };
      img.src = src;
    });

    // Précharger les vidéos
    videos.forEach((src, index) => {
      console.log(`🎥 Loading video ${index + 1}/${videos.length}:`, src);
      const video = document.createElement("video");
      video.onloadeddata = () => handleAssetLoad("video", src, true);
      video.onerror = (error) => {
        console.error("❌ Video load error:", src, error);
        handleAssetLoad("video", src, false);
      };
      video.src = src;
      video.preload = "metadata";
    });

    return () => {
      clearTimeout(safetyTimeout);
    };
  }, [images, videos, minimumLoadTime]);

  const progress = totalAssets > 0 ? (loadedAssets / totalAssets) * 100 : 100;

  return {
    isLoading,
    progress,
    loadedAssets,
    totalAssets,
  };
};
