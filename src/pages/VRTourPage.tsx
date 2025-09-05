import React, { useState, useRef } from "react";
import { useAppLanguage } from "../context/AppContext";
import VRLoader from "../components/ui/VRLoader";

interface VRTourPageProps {
  onBackToHome: () => void;
}

const VRTourPage: React.FC<VRTourPageProps> = ({ onBackToHome }) => {
  const { language } = useAppLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // URL vers le projet Pano2VR autonome
  const pano2vrUrl = "https://vr.domenea.com";
  //   const pano2vrUrl = "http://localhost:63327/nWyxHYz7~1ja9kxk/index.html";

  const content = {
    fr: {
      title: "Visite Virtuelle TAO",
      subtitle: "Explorez votre future résidence",
      fullscreen: "Plein écran",
      close: "Fermer",
      experience: "Expérience immersive en réalité virtuelle",
      loading: "Chargement...",
    },
    en: {
      title: "TAO Virtual Tour",
      subtitle: "Explore your future residence",
      fullscreen: "Fullscreen",
      close: "Close",
      experience: "Immersive virtual reality experience",
      loading: "Loading...",
    },
  };

  const currentContent = content[language];

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  };

  const handleIframeLoad = () => {
    // Délai minimum pour montrer le loader et éviter un flash
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5s minimum pour l'expérience
  };

  const handleIframeError = () => {
    console.warn('Erreur lors du chargement de la visite virtuelle');
    // Continuer même en cas d'erreur après un délai
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Loader VR */}
      <VRLoader isVisible={isLoading} />
      
      {/* Header VR */}
      <header className={`absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-6 transition-opacity duration-500 ${
        isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
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
            <button
              onClick={toggleFullscreen}
              className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {currentContent.fullscreen}
            </button>
          </div>
        </div>
      </header>

      {/* Viewer VR principal avec iframe Pano2VR */}
      <div className={`w-full h-screen relative transition-opacity duration-500 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        <iframe
          ref={iframeRef}
          src={pano2vrUrl}
          className="w-full h-full border-0"
          title="TAO Virtual Tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </div>

      {/* Footer VR */}
      <footer className={`pointer-events-none absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-500 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
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
