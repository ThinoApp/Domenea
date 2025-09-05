import React from 'react';
import { useAppLanguage } from '../../context/AppContext';

interface VRLoaderProps {
  isVisible: boolean;
}

const VRLoader: React.FC<VRLoaderProps> = ({ isVisible }) => {
  const { language } = useAppLanguage();

  const content = {
    fr: {
      title: "Préparation de l'Expérience Immersive",
      subtitle: "Nous créons votre environnement virtuel...",
      message: "Patientez quelques instants pour une expérience de visite virtuelle exceptionnelle",
      tip: "Activez le son pour une immersion complète"
    },
    en: {
      title: "Preparing Immersive Experience",
      subtitle: "We're creating your virtual environment...",
      message: "Please wait a few moments for an exceptional virtual tour experience",
      tip: "Enable sound for full immersion"
    }
  };

  const currentContent = content[language];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-900 via-blue-900 to-black flex items-center justify-center">
      {/* Background avec particules animées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">
        {/* Logo ou icône VR */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Cercle principal avec rotation */}
            <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            
            {/* Cercle intérieur avec pulsation */}
            <div className="absolute inset-2 w-16 h-16 border-2 border-blue-400/40 border-b-blue-400 rounded-full animate-spin"
                 style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
            </div>
            
            {/* Point central */}
            <div className="absolute inset-6 w-8 h-8 bg-white rounded-full animate-pulse flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Messages de chargement */}
        <div className="space-y-6">
          {/* Titre principal */}
          <h1 className="text-3xl md:text-4xl font-extralight tracking-wide animate-fade-in-up">
            {currentContent.title}
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-blue-200 font-light animate-fade-in-up"
             style={{ animationDelay: '0.3s' }}>
            {currentContent.subtitle}
          </p>

          {/* Message descriptif */}
          <p className="text-white/80 max-w-lg mx-auto leading-relaxed animate-fade-in-up"
             style={{ animationDelay: '0.6s' }}>
            {currentContent.message}
          </p>

          {/* Conseil utilisateur */}
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 animate-fade-in-up"
               style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9.879 16.121A3 3 0 1012.015 11L11 14H9c-1.1 0-2-.9-2-2 0-.53.211-1.039.586-1.414z" />
              </svg>
              <span className="text-sm font-medium">{currentContent.tip}</span>
            </div>
          </div>
        </div>

        {/* Barre de progression animée */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full animate-pulse"
                 style={{
                   background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                   animation: 'loading-bar 2s infinite',
                 }}>
            </div>
          </div>
          
          {/* Texte de progression */}
          <p className="text-xs text-white/60 mt-3 tracking-wide">
            {language === 'fr' ? 'Initialisation...' : 'Initializing...'}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default VRLoader;
