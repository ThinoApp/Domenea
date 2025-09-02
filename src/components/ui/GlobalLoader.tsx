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
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Elegant geometric background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="elegantGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="20" cy="20" r="1" fill="#ffffff" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#elegantGrid)" />
        </svg>
      </div>

      {/* Subtle ambient particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: 'drift 8s ease-in-out infinite',
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo/Brand Area */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-3 tracking-widest">
            TAO PASSOT
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-3"></div>
          <p className="text-gray-300 text-sm lg:text-base font-light tracking-[0.3em] uppercase">
            RÉSIDENCE
          </p>
        </div>

        {/* Minimalist Architectural Animation */}
        <div className="mb-12 flex items-center justify-center">
          <div className="relative w-32 h-32">
            {/* Modern Villa Outline */}
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <defs>
                <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4"/>
                </linearGradient>
              </defs>
              
              {/* Base Platform */}
              <rect 
                x="15" 
                y="85" 
                width="90" 
                height="6" 
                rx="3"
                fill="url(#buildingGradient)" 
                style={{
                  opacity: progress >= 10 ? 0.8 : 0,
                  transform: progress >= 10 ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'all 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
                  transformOrigin: 'center'
                }}
              />
              
              {/* Main Structure - Clean lines */}
              <rect 
                x="30" 
                y="50" 
                width="60" 
                height="35" 
                rx="2"
                fill="none"
                stroke="url(#buildingGradient)"
                strokeWidth="1.5"
                style={{
                  opacity: progress >= 25 ? 0.9 : 0,
                  strokeDasharray: progress >= 25 ? '0' : '200',
                  strokeDashoffset: progress >= 25 ? '0' : '200',
                  transition: 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
              
              {/* Roof Line - Geometric */}
              <path 
                d="M25,50 L60,25 L95,50" 
                fill="none"
                stroke="url(#buildingGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: progress >= 45 ? 1 : 0,
                  strokeDasharray: progress >= 45 ? '0' : '150',
                  strokeDashoffset: progress >= 45 ? '0' : '150',
                  transition: 'all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
              
              {/* Window Frames */}
              <rect 
                x="40" 
                y="60" 
                width="12" 
                height="12" 
                rx="1"
                fill="none"
                stroke="url(#buildingGradient)"
                strokeWidth="1"
                style={{
                  opacity: progress >= 65 ? 0.7 : 0,
                  transform: progress >= 65 ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transformOrigin: 'center'
                }}
              />
              <rect 
                x="68" 
                y="60" 
                width="12" 
                height="12" 
                rx="1"
                fill="none"
                stroke="url(#buildingGradient)"
                strokeWidth="1"
                style={{
                  opacity: progress >= 70 ? 0.7 : 0,
                  transform: progress >= 70 ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transformOrigin: 'center'
                }}
              />
              
              {/* Door Frame */}
              <rect 
                x="55" 
                y="65" 
                width="10" 
                height="20" 
                rx="1"
                fill="none"
                stroke="url(#buildingGradient)"
                strokeWidth="1"
                style={{
                  opacity: progress >= 80 ? 0.8 : 0,
                  transform: progress >= 80 ? 'scale(1)' : 'scale(0)',
                  transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transformOrigin: 'center bottom'
                }}
              />
              
              {/* Architectural Details */}
              <line 
                x1="30" 
                y1="45" 
                x2="90" 
                y2="45" 
                stroke="url(#buildingGradient)"
                strokeWidth="0.5"
                style={{
                  opacity: progress >= 90 ? 0.6 : 0,
                  strokeDasharray: progress >= 90 ? '0' : '60',
                  strokeDashoffset: progress >= 90 ? '0' : '60',
                  transition: 'all 1.2s ease-out'
                }}
              />
            </svg>
            
            {/* Elegant rotating ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-36 h-36 border border-white/20 rounded-full"
                style={{
                  animation: 'rotate 6s linear infinite',
                  opacity: 0.4
                }}
              >
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 max-w-lg mx-auto">
          <div className="flex justify-between text-xs text-gray-400 mb-3 font-light tracking-wider">
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-800/50 rounded-sm h-px overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-white via-gray-300 to-white rounded-sm transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Message */}
        <div className="text-center">
          <p className="text-white text-base font-light mb-2 tracking-wide">
            {loadingSteps[language][currentStep]}
          </p>
          <p className="text-gray-400 text-xs font-light tracking-widest uppercase">
            {language === 'fr' 
              ? 'Expérience Premium' 
              : 'Premium Experience'
            }
          </p>
        </div>

        {/* Minimal Corner Elements */}
        <div className="absolute top-8 left-8 opacity-30">
          <div className="w-8 h-8 border-l border-t border-white/40"></div>
        </div>
        <div className="absolute top-8 right-8 opacity-30">
          <div className="w-8 h-8 border-r border-t border-white/40"></div>
        </div>
        <div className="absolute bottom-8 left-8 opacity-30">
          <div className="w-8 h-8 border-l border-b border-white/40"></div>
        </div>
        <div className="absolute bottom-8 right-8 opacity-30">
          <div className="w-8 h-8 border-r border-b border-white/40"></div>
        </div>

        {/* Elegant center accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div 
            className="w-96 h-96 border border-white/5 rounded-full"
            style={{ animation: 'rotate 20s linear infinite' }}
          >
            <div 
              className="absolute inset-4 border border-white/3 rounded-full"
              style={{ animation: 'rotate 15s linear infinite reverse' }}
            />
          </div>
        </div>
      </div>

      {/* Professional CSS Animations */}
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes drift {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default GlobalLoader;
