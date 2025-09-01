import React, { useEffect, useRef } from 'react';
import { useAppLanguage } from '../../context/AppContext';
import { emotionalMessages, callToActions } from '../../data/mockData';

const HeroSection: React.FC = () => {
  const { language } = useAppLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroTitle = {
    fr: "OÙ LA VIE TROUVE SON RYTHME",
    en: "WHERE LIFE FINDS ITS RHYTHM"
  };

  const heroSubtitle = {
    fr: "Mont Passot, Nosy Be, Madagascar",
    en: "Mont Passot, Nosy Be, Madagascar"
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/assets/vide_hero.mp4" type="video/mp4" />
        {/* Fallback gradient si la vidéo ne charge pas */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800" />
      </video>

      {/* Overlay moderne avec gradient sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-green-800/20" />

      {/* Contenu principal avec design moderne */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Animation d'entrée progressive */}
        <div className="animate-fade-in-up">
          {/* Messages émotionnels avec typographie moderne */}
          <div className="mb-12 space-y-6">
            {emotionalMessages[language].slice(0, 2).map((message, index) => (
              <p
                key={index}
                className={`font-light leading-relaxed tracking-wide ${
                  index === 0 
                    ? 'text-lg md:text-xl lg:text-2xl opacity-90' 
                    : 'text-base md:text-lg lg:text-xl opacity-75'
                }`}
                style={{
                  animationDelay: `${index * 0.3}s`,
                  fontFamily: "'Inter', system-ui, sans-serif"
                }}
              >
                {message}
              </p>
            ))}
          </div>

          {/* Titre principal impact - selon la maquette */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight leading-none">
              <span className="bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
                {heroTitle[language]}
              </span>
            </h1>
            
            {/* Sous-titre avec style minimaliste */}
            <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 tracking-wide">
              {heroSubtitle[language]}
            </p>
          </div>

          {/* Call-to-action moderne avec glassmorphism */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="group relative overflow-hidden bg-white/95 backdrop-blur-sm text-gray-900 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl hover:shadow-3xl">
              <span className="relative z-10">{callToActions.primary[language]}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </button>
            
            <button className="group relative overflow-hidden border-2 border-white/80 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 hover:bg-white hover:text-gray-900 hover:scale-105 shadow-xl">
              <span className="relative z-10">{callToActions.secondary[language]}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          {/* Indicateurs visuels modernes avec glassmorphism */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "20 000m²", label: language === 'fr' ? 'Terrain Sécurisé' : 'Secured Land' },
              { value: "3", label: language === 'fr' ? 'Types de Villas' : 'Villa Types' },
              { value: "20+", label: language === 'fr' ? 'Parcelles Premium' : 'Premium Plots' },
              { value: "2025", label: language === 'fr' ? 'Livraison' : 'Delivery' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-sm md:text-base opacity-80 font-medium tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator moderne */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-4 bg-gradient-to-b from-white to-transparent rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Particles/effet de profondeur (optionnel) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
