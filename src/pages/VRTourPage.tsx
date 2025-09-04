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
  const [isLoading, setIsLoading] = useState(true);
  const panoramaRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);

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
      panorama: "https://pannellum.org/images/tocopilla.jpg", // Vue extérieure, adaptée pour une vue aérienne
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
      panorama: "https://pannellum.org/images/bma-1.jpg", // Intérieur moderne, adapté pour une villa
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
      panorama: "https://pannellum.org/images/charles-street.jpg", // Intérieur calme, utilisé comme approximation pour un spa
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
      panorama: "https://pannellum.org/images/alma.jpg", // Extérieur ouvert, utilisé comme approximation pour une piscine
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

  // Chargement de Pannellum
  useEffect(() => {
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
      if (panoramaRef.current && window.pannellum) {
        // Détruire l'ancien viewer s'il existe
        if (viewerRef.current) {
          viewerRef.current.destroy();
        }

        const currentScene = vrScenes[activeScene];
        
        // Créer le viewer Pannellum
        viewerRef.current = window.pannellum.viewer(panoramaRef.current, {
          type: 'equirectangular',
          panorama: currentScene.panorama,
          autoLoad: true,
          autoRotate: -2, // Rotation automatique lente
          compass: true,
          showZoomCtrl: true,
          showFullscreenCtrl: false,
          showControls: true,
          hotSpotDebug: false,
          hfov: 100,
          minHfov: 50,
          maxHfov: 120,
          hotSpots: currentScene.hotspots.map((hotspot) => ({
            pitch: (0.5 - hotspot.y) * 180, // Conversion Y vers pitch
            yaw: (hotspot.x - 0.5) * 360,   // Conversion X vers yaw
            type: 'scene',
            text: hotspot.label[language],
            sceneId: hotspot.target,
            clickHandlerFunc: () => handleHotspotClick(hotspot.target),
            className: 'vr-hotspot'
          }))
        });

        // Événement de chargement terminé
        viewerRef.current.on('load', () => {
          setIsLoading(false);
        });

        // Événement d'erreur
        viewerRef.current.on('error', (error: any) => {
          console.error('Erreur Pannellum:', error);
          setIsLoading(false);
        });
      }
    };

    loadPannellum();

    // Cleanup
    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [activeScene, language]);

  const handleSceneChange = (sceneIndex: number) => {
    setIsLoading(true);
    setActiveScene(sceneIndex);
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
        {/* Container Pannellum */}
        <div 
          ref={panoramaRef}
          className="w-full h-full"
          id="panorama-container"
        />

        {/* Overlay de chargement */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-40">
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
