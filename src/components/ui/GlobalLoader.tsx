import React, { useState, useEffect } from "react";
import { useAppLanguage } from "../../context/AppContext";

interface GlobalLoaderProps {
  onLoadingComplete: () => void;
}

const GlobalLoader: React.FC<GlobalLoaderProps> = ({ onLoadingComplete }) => {
  const { language } = useAppLanguage();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = {
    fr: [
      "Initialisation de l'expérience...",
      "Chargement des architectures...",
      "Préparation des villas...",
      "Finalisation du paradis...",
    ],
    en: [
      "Initializing experience...",
      "Loading architectures...",
      "Preparing villas...",
      "Finalizing paradise...",
    ]
  };

  useEffect(() => {
    const totalDuration = 3000; // 3 secondes
    const stepDuration = totalDuration / 100;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        
        // Update step based on progress
        if (newProgress <= 25) setCurrentStep(0);
        else if (newProgress <= 50) setCurrentStep(1);
        else if (newProgress <= 75) setCurrentStep(2);
        else setCurrentStep(3);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
        }
        
        return newProgress;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden">
      {/* Ocean waves background */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full h-full opacity-30">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          {/* Animated waves */}
          <path 
            d="M0,150 Q100,120 200,150 T400,150 L400,300 L0,300 Z"
            fill="url(#waveGradient)"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <path 
            d="M0,180 Q150,160 300,180 T600,180 L600,300 L0,300 Z"
            fill="url(#waveGradient)"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Floating clouds */}
      <div className="absolute top-10 left-10 opacity-40">
        <div className="w-16 h-8 bg-white/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
      </div>
      <div className="absolute top-20 right-20 opacity-30">
        <div className="w-12 h-6 bg-white/20 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>
      <div className="absolute top-32 left-1/3 opacity-20">
        <div className="w-20 h-10 bg-white/25 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo/Brand Area */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2 tracking-wide">
            TAO PASSOT
          </h1>
          <p className="text-blue-200 text-lg lg:text-xl font-light tracking-wider">
            RÉSIDENCE
          </p>
        </div>

        {/* Tropical Villa Animation */}
        <div className="mb-8 flex items-center justify-center">
          <div className="relative w-40 h-40">
            {/* Island Base */}
            <svg viewBox="0 0 140 140" className="w-full h-full">
              {/* Sand Island */}
              <ellipse 
                cx="70" 
                cy="110" 
                rx="65" 
                ry="25" 
                fill="currentColor" 
                className="text-amber-200"
                style={{
                  opacity: progress >= 5 ? 1 : 0,
                  transform: progress >= 5 ? 'scale(1)' : 'scale(0.3)',
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transformOrigin: 'center'
                }}
              />
              
              {/* Villa Foundation */}
              <rect 
                x="25" 
                y="85" 
                width="90" 
                height="25" 
                rx="3"
                fill="currentColor" 
                className="text-stone-300"
                style={{
                  opacity: progress >= 15 ? 1 : 0,
                  transform: progress >= 15 ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.8)',
                  transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transformOrigin: 'center bottom'
                }}
              />
              
              {/* Main Villa Structure */}
              <rect 
                x="35" 
                y="55" 
                width="70" 
                height="30" 
                rx="2"
                fill="currentColor" 
                className="text-stone-100"
                style={{
                  opacity: progress >= 30 ? 1 : 0,
                  transform: progress >= 30 ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.9)',
                  transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transformOrigin: 'center bottom'
                }}
              />
              
              {/* Tropical Roof */}
              <path 
                d="M25,55 Q70,20 115,55 L105,50 Q70,25 35,50 Z" 
                fill="currentColor" 
                className="text-amber-700"
                style={{
                  opacity: progress >= 45 ? 1 : 0,
                  transform: progress >= 45 ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0)',
                  transition: 'all 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  transformOrigin: 'center bottom'
                }}
              />
              
              {/* Terrace */}
              <rect 
                x="20" 
                y="80" 
                width="100" 
                height="8" 
                rx="4"
                fill="currentColor" 
                className="text-teal-200"
                style={{
                  opacity: progress >= 55 ? 1 : 0,
                  transform: progress >= 55 ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transformOrigin: 'center'
                }}
              />
              
              {/* Windows with glow */}
              <rect 
                x="45" 
                y="65" 
                width="10" 
                height="12" 
                rx="1"
                fill="currentColor" 
                className="text-yellow-200"
                style={{
                  opacity: progress >= 65 ? 1 : 0,
                  transform: progress >= 65 ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.6s ease-out',
                  filter: progress >= 65 ? 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.3))' : 'none'
                }}
              />
              <rect 
                x="85" 
                y="65" 
                width="10" 
                height="12" 
                rx="1"
                fill="currentColor" 
                className="text-yellow-200"
                style={{
                  opacity: progress >= 70 ? 1 : 0,
                  transform: progress >= 70 ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.6s ease-out',
                  transformOrigin: 'center',
                  filter: progress >= 70 ? 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.3))' : 'none'
                }}
              />
              
              {/* Front Door */}
              <rect 
                x="65" 
                y="70" 
                width="10" 
                height="15" 
                rx="5"
                fill="currentColor" 
                className="text-amber-600"
                style={{
                  opacity: progress >= 75 ? 1 : 0,
                  transform: progress >= 75 ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transformOrigin: 'center bottom'
                }}
              />
              
              {/* Palm Trees */}
              <g style={{
                opacity: progress >= 85 ? 1 : 0,
                transform: progress >= 85 ? 'scale(1)' : 'scale(0)',
                transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transformOrigin: 'bottom'
              }}>
                {/* Left Palm */}
                <line x1="15" y1="105" x2="15" y2="75" stroke="currentColor" strokeWidth="3" className="text-amber-800"/>
                <path d="M15,75 Q10,70 5,75 M15,75 Q20,70 25,75 M15,75 Q12,68 8,72 M15,75 Q18,68 22,72" 
                      stroke="currentColor" strokeWidth="2" fill="none" className="text-green-500"/>
                
                {/* Right Palm */}
                <line x1="125" y1="105" x2="125" y2="78" stroke="currentColor" strokeWidth="3" className="text-amber-800"/>
                <path d="M125,78 Q120,73 115,78 M125,78 Q130,73 135,78 M125,78 Q122,71 118,75 M125,78 Q128,71 132,75" 
                      stroke="currentColor" strokeWidth="2" fill="none" className="text-green-500"/>
              </g>
              
              {/* Coconuts falling */}
              <circle 
                cx="22" 
                cy="72" 
                r="2" 
                fill="currentColor" 
                className="text-amber-600"
                style={{
                  opacity: progress >= 90 ? 1 : 0,
                  transform: progress >= 90 ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
              <circle 
                cx="118" 
                cy="75" 
                r="2" 
                fill="currentColor" 
                className="text-amber-600"
                style={{
                  opacity: progress >= 95 ? 1 : 0,
                  transform: progress >= 95 ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
            </svg>
            
            {/* Floating tropical particles */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${
                    i % 3 === 0 ? 'bg-yellow-300' : i % 3 === 1 ? 'bg-green-300' : 'bg-blue-300'
                  }`}
                  style={{
                    left: `${15 + i * 10}%`,
                    top: `${20 + (i % 3) * 15}%`,
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: `${i * 0.3}s`,
                    opacity: 0.7
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
        `}</style>

        {/* Progress Bar */}
        <div className="mb-6 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-blue-200 mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-blue-900/50 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <div className="text-center">
          <p className="text-white text-lg font-medium mb-2">
            {loadingSteps[language][currentStep]}
          </p>
          <p className="text-blue-200 text-sm">
            {language === 'fr' 
              ? 'Préparation de votre expérience immersive...' 
              : 'Preparing your immersive experience...'
            }
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 opacity-20">
          <div className="w-16 h-16 border-2 border-blue-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}>
            <div className="w-full h-full border-2 border-transparent border-t-blue-300 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 opacity-20">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-6 bg-blue-400 rounded animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default GlobalLoader;
