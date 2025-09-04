import React, { useState, useEffect, useRef } from "react";
import { useAppLanguage } from "../context/AppContext";
import "../styles/pannellum-custom.css";

// Déclaration des types pour Pannellum
declare global {
  interface Window {
    pannellum: any;
  }
}

interface VRTourPageProps {
  onBackToHome: () => void;
}

const VRTourPage: React.FC<VRTourPageProps> = ({ onBackToHome }) => {
  const { language } = useAppLanguage();
  const [activeScene, setActiveScene] = useState(0);
  const [viewerOpacity, setViewerOpacity] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const panoramaRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const preloadedImages = useRef<Set<string>>(new Set());

  // Scènes VR avec images panoramiques temporaires
  const vrScenes = [
    {
      id: "aerial",
      name: {
        fr: "Vue Aérienne TAO",
        en: "TAO Aerial View",
      },
      description: {
        fr: "Découvrez la résidence depuis les airs",
        en: "Discover the residence from above",
      },
      panorama: "/assets/Panorama/marc-markstein-if4wsNq145o-unsplash.jpg", // Vue aérienne panoramique
      hotspots: [
        {
          x: 0.2,
          y: 0.1,
          target: "villa-interior",
          label: { fr: "Villa Intérieur", en: "Villa Interior" },
        },
        { x: 0.8, y: 0.3, target: "spa", label: { fr: "SPA", en: "SPA" } },
      ],
    },
    {
      id: "villa-interior",
      name: {
        fr: "Villa Intérieur",
        en: "Villa Interior",
      },
      description: {
        fr: "Explorez nos villas luxueuses",
        en: "Explore our luxurious villas",
      },
      panorama: "/assets/Panorama/alex-bdnr-nrQ86ujBqMs-unsplash.jpg", // Villa intérieur luxueux
      hotspots: [
        {
          x: 0.1,
          y: 0.2,
          target: "aerial",
          label: { fr: "Vue Aérienne", en: "Aerial View" },
        },
        { x: 0.9, y: 0.4, target: "spa", label: { fr: "SPA", en: "SPA" } },
      ],
    },
    {
      id: "spa",
      name: {
        fr: "SPA & Wellness",
        en: "SPA & Wellness",
      },
      description: {
        fr: "Détendez-vous dans notre SPA",
        en: "Relax in our SPA",
      },
      panorama: "/assets/Panorama/allphoto-bangkok-GfXqtWmiuDI-unsplash.jpg", // SPA et wellness
      hotspots: [
        {
          x: 0.3,
          y: 0.2,
          target: "aerial",
          label: { fr: "Vue Aérienne", en: "Aerial View" },
        },
        {
          x: 0.7,
          y: 0.3,
          target: "villa-interior",
          label: { fr: "Villa", en: "Villa" },
        },
      ],
    },
    {
      id: "pool-area",
      name: {
        fr: "Piscine & Espaces Communs",
        en: "Pool & Common Areas",
      },
      description: {
        fr: "Profitez de nos espaces de détente",
        en: "Enjoy our relaxation spaces",
      },
      panorama: "/assets/Panorama/jose-g-ortega-castro-PYpkPbBCNFw-unsplash.jpg", // Piscine et espaces communs
      hotspots: [
        {
          x: 0.4,
          y: 0.1,
          target: "aerial",
          label: { fr: "Vue Aérienne", en: "Aerial View" },
        },
        {
          x: 0.6,
          y: 0.4,
          target: "villa-interior",
          label: { fr: "Villa", en: "Villa" },
        },
      ],
    },
  ];

  const content = {
    fr: {
      title: "Visite Virtuelle TAO",
      subtitle: "Explorez votre future résidence",
      quickAccess: "Accès Rapide 360°",
      loading: "Chargement de l'expérience...",
      fullscreen: "Plein écran",
      info: "Informations",
      close: "Fermer",
      navigate: "Cliquez sur les points d'intérêt pour naviguer",
      experience: "Expérience immersive en réalité virtuelle",
    },
    en: {
      title: "TAO Virtual Tour",
      subtitle: "Explore your future residence",
      quickAccess: "360° Quick Access",
      loading: "Loading experience...",
      fullscreen: "Fullscreen",
      info: "Information",
      close: "Close",
      navigate: "Click on hotspots to navigate",
      experience: "Immersive virtual reality experience",
    },
  };

  const currentContent = content[language];
  const currentScene = vrScenes[activeScene];

  // Préchargement de toutes les images panoramiques
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = vrScenes.map((scene) => {
          return new Promise<void>((resolve, reject) => {
            if (preloadedImages.current.has(scene.panorama)) {
              resolve();
              return;
            }

            const img = new Image();
            img.onload = () => {
              preloadedImages.current.add(scene.panorama);
              resolve();
            };
            img.onerror = reject;
            img.src = scene.panorama;
          });
        });

        await Promise.all(imagePromises);
        setImagesPreloaded(true);
        console.log('Toutes les images panoramiques sont préchargées');
      } catch (error) {
        console.error('Erreur lors du préchargement:', error);
        setImagesPreloaded(true); // Continuer même en cas d'erreur
      }
    };

    preloadImages();
  }, []);

  // Initialisation de Pannellum une seule fois
  useEffect(() => {
    if (!imagesPreloaded) return;

    const loadPannellum = () => {
      // Charger CSS
      if (!document.querySelector('link[href*="pannellum"]')) {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
        document.head.appendChild(cssLink);
      }

      // Charger JS
      if (!window.pannellum) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
        script.onload = () => {
          initializePanorama();
        };
        document.head.appendChild(script);
      } else {
        initializePanorama();
      }
    };

    const initializePanorama = () => {
      if (panoramaRef.current && window.pannellum && !viewerRef.current) {
        const currentScene = vrScenes[activeScene];
        
        // Configuration avec toutes les scènes
        const sceneConfig: any = {
          default: {
            firstScene: currentScene.id,
            autoLoad: true,
            showZoomCtrl: true,
            showFullscreenCtrl: false,
            showControls: true,
            compass: true,
            autoRotate: -2,
            hfov: 100,
            minHfov: 50,
            maxHfov: 120
          },
          scenes: {}
        };

        // Ajouter toutes les scènes
        vrScenes.forEach((scene) => {
          sceneConfig.scenes[scene.id] = {
            type: 'equirectangular',
            panorama: scene.panorama,
            hotSpots: scene.hotspots.map((hotspot) => ({
              pitch: (0.5 - hotspot.y) * 180,
              yaw: (hotspot.x - 0.5) * 360,
              type: 'scene',
              text: hotspot.label[language],
              sceneId: hotspot.target,
              clickHandlerFunc: () => handleHotspotClick(hotspot.target),
              className: 'vr-hotspot'
            }))
          };
        });
        
        // Créer le viewer
        viewerRef.current = window.pannellum.viewer(panoramaRef.current, sceneConfig);
        
        // Fade in initial
        viewerRef.current.on('load', () => {
          setIsInitialized(true);
          setViewerOpacity(1);
        });
      }
    };

    loadPannellum();

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [imagesPreloaded]);

  const handleSceneChange = (sceneIndex: number) => {
    if (viewerRef.current && isInitialized && sceneIndex !== activeScene) {
      const targetScene = vrScenes[sceneIndex];
      
      // Effet de fade out
      setViewerOpacity(0);
      
      // Attendre la fin du fade out, puis changer de scène
      setTimeout(() => {
        try {
          viewerRef.current.loadScene(targetScene.id);
          setActiveScene(sceneIndex);
          
          // Fade in après changement
          setTimeout(() => {
            setViewerOpacity(1);
          }, 50);
        } catch (error) {
          console.error('Erreur lors du changement de scène:', error);
          setViewerOpacity(1); // Restore opacity even on error
        }
      }, 200); // Durée du fade out
    }
  };

  const handleHotspotClick = (targetId: string) => {
    const targetIndex = vrScenes.findIndex((scene) => scene.id === targetId);
    if (targetIndex !== -1) {
      handleSceneChange(targetIndex);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header VR */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Bouton retour */}
            <button
              onClick={onBackToHome}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-sm">{currentContent.close}</span>
            </button>

            <div>
              <h1 className="text-3xl md:text-4xl font-extralight tracking-wide">
                {currentContent.title}
              </h1>
              <p className="text-white/60 font-light">
                {currentContent.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              {currentContent.fullscreen}
            </button>
            <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              {currentContent.info}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Quick Access */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-black/60 backdrop-blur-md rounded-2xl border border-white/20 p-6 max-w-xs">
          <h3 className="text-lg font-medium mb-4 text-white">
            {currentContent.quickAccess}
          </h3>
          <div className="space-y-3">
            {vrScenes.map((scene, index) => (
              <button
                key={scene.id}
                onClick={() => handleSceneChange(index)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  activeScene === index
                    ? "bg-white/20 border-2 border-white/40"
                    : "bg-white/10 border border-white/20 hover:bg-white/15"
                }`}
              >
                <div className="text-sm font-medium">
                  {scene.name[language]}
                </div>
                <div className="text-xs text-white/60 mt-1">
                  {scene.description[language]}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Panneau d'informations de la scène active */}
      <div className="absolute right-6 bottom-6 z-50">
        <div className="bg-black/60 backdrop-blur-md rounded-xl border border-white/20 p-4 max-w-sm">
          <h4 className="text-lg font-medium mb-2">
            {currentScene.name[language]}
          </h4>
          <p className="text-white/70 text-sm mb-3">
            {currentScene.description[language]}
          </p>
          <div className="text-xs text-white/50">{currentContent.navigate}</div>
        </div>
      </div>

      {/* Viewer VR principal avec Pannellum */}
      <div className="w-full h-screen relative">
        {/* Container Pannellum avec transition opacity */}
        <div 
          ref={panoramaRef}
          className="w-full h-full transition-opacity duration-200 ease-in-out"
          style={{ opacity: viewerOpacity }}
          id="panorama-container"
        />

        {/* Overlay de chargement initial seulement */}
        {!isInitialized && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
            <div className="text-center">
              <div className="animate-spin w-12 h-12 border-4 border-white/20 border-t-white rounded-full mb-4 mx-auto"></div>
              <p className="text-white/80">{currentContent.loading}</p>
            </div>
          </div>
        )}

        {/* Effet de vignette pour l'immersion */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 pointer-events-none"></div>
      </div>

      {/* Footer VR */}
      <footer className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="container mx-auto text-center">
          <p className="text-white/60 text-sm">{currentContent.experience}</p>
          <div className="mt-2 text-xs text-white/40">
            © 2025 DOMENEA - TAO Residence
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VRTourPage;
