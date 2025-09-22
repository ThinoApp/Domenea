import React from "react";
import { useAppLanguage } from "../../context/AppContext";
import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
} from "../../hooks/useScrollAnimation";

const LocationSection: React.FC = () => {
  const { language } = useAppLanguage();

  // Animations au scroll - répétables
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false,
  });
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: false,
  });
  const { elementRef: mapRef, isVisible: mapVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: false,
  });
  const { containerRef: statsRef, visibleItems: statsVisible } =
    useStaggeredScrollAnimation(4, 150, false);
  const { elementRef: backgroundRef, isVisible: backgroundVisible } =
    useScrollAnimation({
      threshold: 0.1,
      rootMargin: "0px 0px -5% 0px",
      triggerOnce: false,
    });

  const sectionData = {
    fr: {
      title: "Là où la vie insulaire semble sans effort",
      description:
        "À l'abri du bruit, mais parfaitement relié aux sites les plus extraordinaires, aux plages, aux restaurants, aux masseuses et aux lieux nocturnes, les emplacements résidentiels TAO équilibrent le calme avec l'accès.",
      secondDescription:
        "Le cadre à flanc de colline garantit des températures plus fraîches, des vues durables et une valeur à long terme, ce qui en fait l'une des enclaves d'investissement les plus prisées de Nosy Be.",
      stats: [
        { value: "5", label: "À quelques minutes de la plage" },
        { value: "3", label: "Minutes du Mont Passot et de ses lacs" },
        { value: "15", label: "À quelques minutes des centres commerciaux" },
        { value: "25", label: "À quelques minutes de l'aéroport" },
      ],
    },
    en: {
      title: "Where island life seems effortless",
      description:
        "Away from the noise, but perfectly connected to the most extraordinary sites, beaches, restaurants, masseuses and nightlife venues, TAO residential locations balance calm with access.",
      secondDescription:
        "The hillside setting guarantees cooler temperatures, lasting views and long-term value, making it one of the most sought-after investment enclaves in Nosy Be.",
      stats: [
        { value: "5", label: "A few minutes from the beach" },
        { value: "3", label: "Minutes from Mont Passot and its lakes" },
        { value: "15", label: "A few minutes from the shopping centers" },
        { value: "25", label: "A few minutes from the airport" },
      ],
    },
  };

  return (
    <section
      ref={backgroundRef as React.RefObject<HTMLElement>}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Image avec animation */}
      <div className="absolute inset-0">
        <img
          src="/assets/photo-2-plage.jpg"
          alt="Plage paradisiaque de Nosy Be"
          className={`w-full h-full object-cover transition-all duration-1500 ease-out ${
            backgroundVisible ? "bg-slide-up visible" : "bg-slide-up"
          }`}
        />
        {/* Overlay pour lisibilité avec animation légère */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50 transition-opacity duration-1000 ${
            backgroundVisible ? "opacity-100" : "opacity-70"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 transition-opacity duration-1200 delay-300 ${
            backgroundVisible ? "opacity-100" : "opacity-80"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2
                ref={titleRef as React.RefObject<HTMLHeadingElement>}
                className={`text-4xl lg:text-6xl font-bold leading-tight transition-all duration-800 ${
                  titleVisible
                    ? "scroll-slide-left visible"
                    : "scroll-slide-left"
                }`}
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent drop-shadow-lg">
                  {sectionData[language].title}
                </span>
              </h2>

              <div
                ref={textRef as React.RefObject<HTMLDivElement>}
                className={`space-y-6 text-white/95 text-lg lg:text-xl leading-relaxed transition-all duration-800 delay-200 ${
                  textVisible ? "scroll-hidden scroll-visible" : "scroll-hidden"
                }`}
              >
                <p className="drop-shadow-md">
                  {sectionData[language].description}
                </p>
                <p className="drop-shadow-md">
                  {sectionData[language].secondDescription}
                </p>
              </div>
            </div>

            {/* Statistiques avec design moderne adaptées au background */}
            <div
              ref={statsRef as React.RefObject<HTMLDivElement>}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              {sectionData[language].stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative glass-effect rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    statsVisible[index] ? "scroll-zoom visible" : "scroll-zoom"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-blue-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="text-3xl lg:text-4xl font-black text-white drop-shadow-lg mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm lg:text-base text-white/90 font-medium leading-tight drop-shadow-sm">
                      {stat.label}
                    </div>
                  </div>

                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 animate-shimmer rounded-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carte interactive avec fond adapté */}
          <div
            ref={mapRef as React.RefObject<HTMLDivElement>}
            className={`relative transition-all duration-1000 ${
              mapVisible ? "scroll-slide-right visible" : "scroll-slide-right"
            }`}
          >
            <div className="relative group">
              {/* Container avec glassmorphism renforcé */}
              <div className="relative glass-effect rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/40 backdrop-blur-2xl">
                {/* Carte avec effets hover */}
                <div className="relative overflow-hidden rounded-2xl group bg-white/10 backdrop-blur-sm">
                  <img
                    src="/assets/carte_sans_fond.png"
                    alt="Carte de Nosy Be - TAO Passot Location"
                    className="w-full h-auto transform transition-all duration-700 group-hover:scale-110 mix-blend-multiply"
                  />

                  {/* Overlay interactif subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Markers de localisation modernes avec logos */}
                  
                  {/* Marqueur 1 - Logo 2.png - Position centrale */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group">
                      {/* Container moderne avec glassmorphism */}
                      <div className="relative w-12 h-12 glass-effect rounded-2xl border border-white/30 shadow-2xl backdrop-blur-lg hover:scale-110 transition-all duration-500 hover:border-white/50 hover:shadow-3xl">
                        {/* Logo avec effet hover */}
                        <img
                          src="/assets/Logo 2.png"
                          alt="TAO Location 1"
                          className="w-full h-full object-contain p-2 rounded-2xl filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                        />
                        {/* Effet de pulse subtil */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl animate-pulse opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                      </div>

                      {/* Label moderne avec design amélioré */}
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                        <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
                          TAO RESORT
                        </span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marqueur 2 - Logo 3.png - Position nord-est */}
                  <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group">
                      {/* Container moderne avec glassmorphism */}
                      <div className="relative w-10 h-10 glass-effect rounded-2xl border border-white/30 shadow-2xl backdrop-blur-lg hover:scale-110 transition-all duration-500 hover:border-white/50 hover:shadow-3xl">
                        {/* Logo avec effet hover */}
                        <img
                          src="/assets/Logo 3.png"
                          alt="TAO Location 2"
                          className="w-full h-full object-contain p-2 rounded-2xl filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                        />
                        {/* Effet de pulse subtil avec délai */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-2xl animate-pulse opacity-50 group-hover:opacity-80 transition-opacity duration-500" style={{animationDelay: '0.5s'}} />
                      </div>

                      {/* Label moderne */}
                      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl border border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                        <span className="text-xs font-bold text-gray-900 whitespace-nowrap">
                          TAO VILLAGE
                        </span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                          <div className="w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-white/95"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marqueur 3 - Logo 4.png - Position sud-ouest */}
                  <div className="absolute bottom-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group">
                      {/* Container moderne avec glassmorphism */}
                      <div className="relative w-10 h-10 glass-effect rounded-2xl border border-white/30 shadow-2xl backdrop-blur-lg hover:scale-110 transition-all duration-500 hover:border-white/50 hover:shadow-3xl">
                        {/* Logo avec effet hover */}
                        <img
                          src="/assets/Logo 4.png"
                          alt="TAO Location 3"
                          className="w-full h-full object-contain p-2 rounded-2xl filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                        />
                        {/* Effet de pulse subtil avec délai différent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-2xl animate-pulse opacity-50 group-hover:opacity-80 transition-opacity duration-500" style={{animationDelay: '1s'}} />
                      </div>

                      {/* Label moderne */}
                      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl border border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                        <span className="text-xs font-bold text-gray-900 whitespace-nowrap">
                          TAO BEACH
                        </span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                          <div className="w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-white/95"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lignes de connexion animées entre les marqueurs */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-70">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9"/>
                        <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.7"/>
                        <stop offset="100%" stopColor="#34D399" stopOpacity="0.9"/>
                      </linearGradient>
                      
                      {/* Effet de glow pour les lignes */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Ligne Centre vers Nord-Est (Marqueur 1 vers 2) */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2="66.67%"
                      y2="33.33%"
                      stroke="url(#connectionGradient)"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      filter="url(#glow)"
                      className="animate-pulse"
                      opacity="0.8"
                    />
                    
                    {/* Ligne Centre vers Sud-Ouest (Marqueur 1 vers 3) */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2="25%"
                      y2="66.67%"
                      stroke="url(#connectionGradient)"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      filter="url(#glow)"
                      className="animate-pulse"
                      style={{animationDelay: '0.7s'}}
                      opacity="0.8"
                    />
                    
                    {/* Ligne Nord-Est vers Sud-Ouest (Marqueur 2 vers 3) */}
                    <line
                      x1="66.67%"
                      y1="33.33%"
                      x2="25%"
                      y2="66.67%"
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      strokeDasharray="6,3"
                      filter="url(#glow)"
                      className="animate-pulse"
                      style={{animationDelay: '1.4s'}}
                      opacity="0.6"
                    />
                    
                    {/* Points de connexion lumineux */}
                    <circle cx="50%" cy="50%" r="2" fill="#60A5FA" className="animate-ping" opacity="0.8"/>
                    <circle cx="66.67%" cy="33.33%" r="1.5" fill="#A78BFA" className="animate-ping" style={{animationDelay: '0.5s'}} opacity="0.8"/>
                    <circle cx="25%" cy="66.67%" r="1.5" fill="#34D399" className="animate-ping" style={{animationDelay: '1s'}} opacity="0.8"/>
                  </svg>
                </div>

                {/* Label moderne pour la carte avec contraste */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-gray-900">
                      {language === "fr"
                        ? "Localisation Premium"
                        : "Premium Location"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Effet de flottement adapté */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700" />
            </div>

            {/* Call-to-action pour la carte avec meilleur contraste */}
            <div className="mt-8 text-center">
              <button className="group inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-white/50">
                <span>
                  {language === "fr"
                    ? "Explorer la Localisation"
                    : "Explore Location"}
                </span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
