import React, { useState, useEffect, useRef } from "react";
import { useAppLanguage } from "../context/AppContext";

// Déclaration des types pour Pano2VR
declare global {
  interface Window {
    pano2vrPlayer: any;
    pano2vrSkin: any;
    pano: any;
    skin: any;
    lottie: any;
  }
}

interface VRTourPageProps {
  onBackToHome: () => void;
}

const VRTourPage: React.FC<VRTourPageProps> = ({ onBackToHome }) => {
  const { language } = useAppLanguage();
  const [activeScene, setActiveScene] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const panoRef = useRef<any>(null);

  // Scènes VR basées sur le projet Pano2VR
  const vrScenes = [
    {
      id: "node1",
      name: {
        fr: "Lac TAO",
        en: "TAO Lake",
      },
      description: {
        fr: "Vue panoramique sur le lac",
        en: "Panoramic lake view",
      },
    },
    {
      id: "node2",
      name: {
        fr: "Espace Vert",
        en: "Green Space",
      },
      description: {
        fr: "Jardins et espaces verts",
        en: "Gardens and green areas",
      },
    },
    {
      id: "node3",
      name: {
        fr: "Vue Ville",
        en: "City View",
      },
      description: {
        fr: "Panorama urbain",
        en: "Urban panorama",
      },
    },
    {
      id: "node4",
      name: {
        fr: "Lac 2",
        en: "Lake 2",
      },
      description: {
        fr: "Deuxième vue sur le lac",
        en: "Second lake view",
      },
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

  // Mappage des indices vers les IDs Pano2VR
  const getNodeId = (sceneIndex: number) => {
    return vrScenes[sceneIndex]?.id || 'node1';
  };

  const getSceneIndexFromNodeId = (nodeId: string) => {
    const index = vrScenes.findIndex(scene => scene.id === nodeId);
    console.log('getSceneIndexFromNodeId:', nodeId, '->', index);
    return index;
  };

  // Initialisation de Pano2VR
  useEffect(() => {
    const loadPano2VR = () => {
      // Charger les scripts Pano2VR
      const loadScript = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
          if (document.querySelector(`script[src*="${src.split('/').pop()}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => resolve();
          script.onerror = reject;
          document.head.appendChild(script);
        });
      };

      // Charger les scripts séquentiellement et gérer Lottie
      loadScript('/pano2vr/3rdparty/lottie/lottie.min.js')
        .then(() => {
          console.log('Lottie chargé');
          // Configurer Lottie pour éviter les erreurs d'état
          if (window.lottie) {
            window.lottie.setQuality = window.lottie.setQuality || (() => {});
            window.lottie.setSpeed = window.lottie.setSpeed || (() => {});
          }
          return loadScript('/pano2vr/pano2vr_player.js');
        })
        .then(() => {
          console.log('Pano2VR Player chargé');
          return loadScript('/pano2vr/skin.js');
        })
        .then(() => {
          console.log('Pano2VR Skin chargé');
          
          // Patch pour éviter les erreurs Lottie onclick
          if (window.console && window.console.error) {
            const originalError = window.console.error;
            window.console.error = function(...args) {
              const message = args.join(' ');
              if (message.includes('_lottie_10.onclick') || message.includes('InvalidStateError')) {
                console.warn('Erreur Lottie interceptée et ignorée:', message);
                return;
              }
              originalError.apply(console, args);
            };
          }
          
          // Attendre un peu après le chargement des scripts
          setTimeout(() => {
            console.log('Classes disponibles:', {
              pano2vrPlayer: typeof window.pano2vrPlayer,
              pano2vrSkin: typeof window.pano2vrSkin,
              lottie: typeof window.lottie
            });
            waitForContainer();
          }, 500);
        })
        .catch((error) => {
          console.error('Erreur lors du chargement des scripts Pano2VR:', error);
          setIsLoading(false);
        });
    };

    const waitForContainer = () => {
      let attempts = 0;
      const maxAttempts = 50;
      
      const checkContainer = () => {
        attempts++;
        const container = document.getElementById('pano2vr-container');
        
        if (container && containerRef.current && window.pano2vrPlayer && window.pano2vrSkin) {
          console.log('Container trouvé, initialisation de Pano2VR...');
          initializePano2VR();
        } else if (attempts < maxAttempts) {
          console.log(`Container non trouvé, tentative ${attempts}/${maxAttempts}...`);
          setTimeout(checkContainer, 100);
        } else {
          console.error('Timeout: impossible de trouver le container après', maxAttempts, 'tentatives');
          setIsLoading(false);
        }
      };
      checkContainer();
    };

    const initializePano2VR = () => {
      const container = document.getElementById('pano2vr-container');
      if (!container) {
        console.error('Container pano2vr-container introuvable dans le DOM');
        setIsLoading(false);
        return;
      }

      try {
        console.log('Initialisation de Pano2VR avec container:', container);
        
        // Vérifier que les classes Pano2VR sont disponibles
        if (!window.pano2vrPlayer || !window.pano2vrSkin) {
          console.error('Classes Pano2VR non disponibles');
          setIsLoading(false);
          return;
        }
        
        // Créer le player Pano2VR avec l'ID du container (string)
        const pano = new window.pano2vrPlayer("pano2vr-container");
        
        // Vérifier que le player a été créé correctement
        if (!pano) {
          console.error('Échec de création du player Pano2VR');
          setIsLoading(false);
          return;
        }
        
        console.log('Player Pano2VR créé:', pano);
        console.log('Méthodes disponibles:', Object.getOwnPropertyNames(pano));
        
        // Configuration du player
        if (typeof pano.setQueryParameter === 'function') {
          pano.setQueryParameter("ts=90345204");
        }
        
        // Stocker les références globalement pour compatibilité
        window.pano = pano;
        panoRef.current = pano;
        
        // Attendre que Pano2VR soit complètement prêt avant de créer le skin
        setTimeout(() => {
          try {
            console.log('Création du skin Pano2VR...');
            const skin = new window.pano2vrSkin(pano);
            window.skin = skin;
            console.log('Skin créé avec succès');
          } catch (skinError) {
            console.error('Erreur lors de la création du skin:', skinError);
            // Continuer sans le skin si nécessaire
          }
        }, 200);
        
        // Écouter les changements de nœud avec gestion d'erreurs
        try {
          if (typeof pano.addListener === 'function') {
            pano.addListener('nodechange', (event: any) => {
              console.log('Node change event:', event);
              if (event && event.target) {
                const newNodeIndex = getSceneIndexFromNodeId(event.target);
                if (newNodeIndex !== -1 && newNodeIndex !== activeScene) {
                  setActiveScene(newNodeIndex);
                }
              }
            });
          }
        } catch (listenerError) {
          console.warn('Impossible d\'ajouter le listener nodechange:', listenerError);
        }
        
        // Charger la configuration - essayer avec et sans promise
        const loadConfig = () => {
          if (typeof pano.readConfigUrlAsync === 'function') {
            console.log('Utilisation de readConfigUrlAsync');
            const result = pano.readConfigUrlAsync('/pano2vr/pano.xml?ts=90345204');
            if (result && typeof result.then === 'function') {
              result.then(() => {
                console.log('Configuration Pano2VR chargée avec succès (async)');
                setIsInitialized(true);
                setIsLoading(false);
              }).catch((error: any) => {
                console.error('Erreur lors du chargement de la configuration (async):', error);
                setIsLoading(false);
              });
            } else {
              console.log('readConfigUrlAsync ne retourne pas une promise');
              setIsInitialized(true);
              setIsLoading(false);
            }
          } else if (typeof pano.readConfigUrl === 'function') {
            console.log('Utilisation de readConfigUrl (synchrone)');
            pano.readConfigUrl('/pano2vr/pano.xml?ts=90345204');
            setIsInitialized(true);
            setIsLoading(false);
          } else {
            console.error('Aucune méthode de chargement de config disponible');
            console.log('Méthodes disponibles sur pano:', Object.getOwnPropertyNames(pano));
            setIsLoading(false);
          }
        };
        
        // Attendre un peu que tout soit initialisé
        setTimeout(loadConfig, 1000);
        
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de Pano2VR:', error);
        setIsLoading(false);
      }
    };

    loadPano2VR();

    return () => {
      if (panoRef.current) {
        try {
          panoRef.current.dispose();
        } catch (e) {
          console.warn('Erreur lors de la destruction de Pano2VR:', e);
        }
        panoRef.current = null;
      }
      // Nettoyer les références globales
      if (window.pano) {
        window.pano = null;
      }
      if (window.skin) {
        window.skin = null;
      }
    };
  }, []);

  const handleSceneChange = (sceneIndex: number) => {
    if (!isInitialized || sceneIndex === activeScene || !panoRef.current) {
      console.log('Changement de scène ignoré:', { isInitialized, sceneIndex, activeScene, hasPano: !!panoRef.current });
      return;
    }

    const targetNodeId = getNodeId(sceneIndex);
    console.log('Changement vers la scène:', targetNodeId);
    
    try {
      // Vérifier que la méthode existe avant de l'appeler
      if (typeof panoRef.current.openNext === 'function') {
        panoRef.current.openNext(`{${targetNodeId}}`, '');
        setActiveScene(sceneIndex);
      } else {
        console.error('Méthode openNext non disponible sur le player Pano2VR');
      }
    } catch (error) {
      console.error('Erreur lors du changement de scène:', error);
    }
  };

  // Les hotspots sont gérés automatiquement par Pano2VR via pano.xml

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

      {/* Viewer VR principal avec Pano2VR */}
      <div className="w-full h-screen relative">
        {/* Container Pano2VR */}
        <div 
          ref={containerRef}
          className="w-full h-full"
          id="pano2vr-container"
          style={{ background: '#000' }}
        />

        {/* Overlay de chargement */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-50">
            <div className="text-center">
              <div className="animate-spin w-12 h-12 border-4 border-white/20 border-t-white rounded-full mb-4 mx-auto"></div>
              <p className="text-white/80 text-lg">{currentContent.loading}</p>
              <p className="text-white/60 text-sm mt-2">Initialisation du viewer 360°...</p>
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
