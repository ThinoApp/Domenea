import React from 'react';
import { useAppLanguage } from '../../context/AppContext';

const LocationSection: React.FC = () => {
  const { language } = useAppLanguage();

  const sectionData = {
    fr: {
      title: "Là où la vie insulaire semble sans effort",
      description: "À l'abri du bruit, mais parfaitement relié aux sites les plus extraordinaires, aux plages, aux restaurants, aux masseuses et aux lieux nocturnes, les emplacements résidentiels TAO équilibrent le calme avec l'accès.",
      secondDescription: "Le cadre à flanc de colline garantit des températures plus fraîches, des vues durables et une valeur à long terme, ce qui en fait l'une des enclaves d'investissement les plus prisées de Nosy Be.",
      stats: [
        { value: "5", label: "Aquaplanes privées de la résidence" },
        { value: "3", label: "Minutes du Mont Passot et de ses lacs" },
        { value: "15", label: "À quelques centaines d'autres aéroports" },
        { value: "25", label: "À quelques centaines fabriquées" }
      ]
    },
    en: {
      title: "Where island life seems effortless",
      description: "Away from the noise, but perfectly connected to the most extraordinary sites, beaches, restaurants, masseuses and nightlife venues, TAO residential locations balance calm with access.",
      secondDescription: "The hillside setting guarantees cooler temperatures, lasting views and long-term value, making it one of the most sought-after investment enclaves in Nosy Be.",
      stats: [
        { value: "5", label: "Private residence aquaplanes" },
        { value: "3", label: "Minutes from Mont Passot and its lakes" },
        { value: "15", label: "A few hundred other airports" },
        { value: "25", label: "A few hundred manufactured" }
      ]
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/assets/photo-2-plage.jpg" 
          alt="Plage paradisiaque de Nosy Be"
          className="w-full h-full object-cover"
        />
        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent drop-shadow-lg">
                  {sectionData[language].title}
                </span>
              </h2>
              
              <div className="space-y-6 text-white/95 text-lg lg:text-xl leading-relaxed">
                <p className="animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
                  {sectionData[language].description}
                </p>
                <p className="animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.4s' }}>
                  {sectionData[language].secondDescription}
                </p>
              </div>
            </div>

            {/* Statistiques avec design moderne adaptées au background */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {sectionData[language].stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group relative glass-effect rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-scale"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
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
          <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
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
                  
                  {/* Markers de localisation animés */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      {/* Pulse marker principal - plus visible */}
                      <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-2xl border-2 border-white">
                        <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping" />
                      </div>
                      
                      {/* Label TAO avec meilleur contraste */}
                      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border border-white/50">
                        <span className="text-sm font-bold text-gray-900 whitespace-nowrap">TAO PASSOT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Label moderne pour la carte avec contraste */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-gray-900">
                      {language === 'fr' ? 'Localisation Premium' : 'Premium Location'}
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
                <span>{language === 'fr' ? 'Explorer la Localisation' : 'Explore Location'}</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll transition effect optimisé */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/20 to-white pointer-events-none" />
      
      {/* Parallax scroll effect subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    </section>
  );
};

export default LocationSection;
