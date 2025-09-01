import React, { useRef, useEffect } from 'react';
import { useAppLanguage } from '../../context/AppContext';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';

const ProgramsPreviewSection: React.FC = () => {
  const { language } = useAppLanguage();
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  // Animations au scroll
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: cardsRef, visibleItems: cardsVisible } = useStaggeredScrollAnimation(3, 200);
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: passotBgRef, isVisible: passotBgVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: lake1BgRef, isVisible: lake1BgVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: lake2BgRef, isVisible: lake2BgVisible } = useScrollAnimation({ threshold: 0.2 });

  const sectionData = {
    fr: {
      title: "NOS PROGRAMMES RÉSIDENTIELS",
      subtitle: "Trois concepts uniques pour votre art de vivre",
      programs: [
        {
          id: "passot",
          name: "TAO PASSOT",
          subtitle: "RESIDENCE",
          status: "Disponible",
          description: "Le joyau de notre collection. Villa d'exception avec vue panoramique sur l'océan Indien.",
          features: ["Vue océan 180°", "Terrasse privée", "Piscine infinity", "Accès plage privé"],
          logo: "/assets/Logo 2.png",
          background: "/assets/Photo 8-1.jpeg",
          available: true
        }
      ],
      lake1: {
        name: "TAO LAKE 1",
        subtitle: "RESIDENCE", 
        status: "En développement",
        description: "Résidence exclusive au bord du lac sacré avec architecture bioclimatique.",
        features: ["Vue lac panoramique", "Architecture durable", "Spa naturel", "Jardins zen"],
        logo: "/assets/Logo 3.png",
        available: false
      },
      lake2: {
        name: "TAO LAKE 2", 
        subtitle: "RESIDENCE",
        status: "En développement", 
        description: "Collection premium de villas sur pilotis avec accès direct au lac.",
        features: ["Villas sur pilotis", "Accès lac privé", "Wellness center", "Marina privée"],
        logo: "/assets/Logo 4.png",
        available: false
      }
    },
    en: {
      title: "OUR RESIDENTIAL PROGRAMS",
      subtitle: "Three unique concepts for your lifestyle",
      programs: [
        {
          id: "passot",
          name: "TAO PASSOT",
          subtitle: "RESIDENCE",
          status: "Available",
          description: "The jewel of our collection. Exceptional villa with panoramic views of the Indian Ocean.",
          features: ["180° ocean view", "Private terrace", "Infinity pool", "Private beach access"],
          logo: "/assets/Logo 2.png",
          background: "/assets/Photo 8-1.jpeg",
          available: true
        }
      ],
      lake1: {
        name: "TAO LAKE 1",
        subtitle: "RESIDENCE",
        status: "In development",
        description: "Exclusive residence by the sacred lake with bioclimatic architecture.",
        features: ["Panoramic lake view", "Sustainable architecture", "Natural spa", "Zen gardens"],
        logo: "/assets/Logo 3.png",
        available: false
      },
      lake2: {
        name: "TAO LAKE 2",
        subtitle: "RESIDENCE", 
        status: "In development",
        description: "Premium collection of stilted villas with direct lake access.",
        features: ["Stilted villas", "Private lake access", "Wellness center", "Private marina"],
        logo: "/assets/Logo 4.png",
        available: false
      }
    }
  };

  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current];
    videos.forEach(video => {
      if (video) {
        video.play().catch(console.error);
      }
    });
  }, []);

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 via-gray-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Header de section */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            headerVisible ? 'scroll-hidden scroll-visible' : 'scroll-hidden'
          }`}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-green-700 bg-clip-text text-transparent">
              {sectionData[language].title}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            {sectionData[language].subtitle}
          </p>
        </div>

        {/* Grid des programmes */}
        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid lg:grid-cols-3 gap-8 lg:gap-12"
        >
          
          {/* TAO PASSOT - Card principale avec interaction */}
          <div className={`lg:col-span-1 group relative transition-all duration-1000 ${
            cardsVisible[0] ? 'scroll-zoom visible' : 'scroll-zoom'
          }`}>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] cursor-pointer">
              {/* Background Image avec animation */}
              <div 
                ref={passotBgRef as React.RefObject<HTMLDivElement>}
                className="absolute inset-0"
              >
                <img 
                  src={sectionData[language].programs[0].background}
                  alt="TAO PASSOT Villa"
                  className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                    passotBgVisible ? 'bg-zoom-in visible' : 'bg-zoom-in'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-800 ${
                  passotBgVisible ? 'opacity-100' : 'opacity-80'
                }`} />
                <div className={`absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 transition-opacity duration-1000 delay-200 ${
                  passotBgVisible ? 'opacity-100' : 'opacity-70'
                }`} />
              </div>

              {/* Contenu */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                {/* Status badge */}
                <div className="flex justify-between items-start">
                  <div className="bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {sectionData[language].programs[0].status}
                  </div>
                  <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-xl">
                    <img 
                      src={sectionData[language].programs[0].logo}
                      alt="TAO PASSOT Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {sectionData[language].programs[0].name}
                    </h3>
                    <p className="text-lg text-white/90 font-medium drop-shadow-md">
                      {sectionData[language].programs[0].subtitle}
                    </p>
                  </div>

                  <p className="text-white/95 leading-relaxed drop-shadow-md">
                    {sectionData[language].programs[0].description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {sectionData[language].programs[0].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        <span className="text-white/90 text-sm drop-shadow-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-white/95 backdrop-blur-sm hover:bg-white text-gray-900 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl group">
                    <span className="group-hover:tracking-wide transition-all duration-300">
                      {language === 'fr' ? 'Découvrir TAO PASSOT' : 'Discover TAO PASSOT'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* TAO LAKE 1 & 2 - Cards en développement */}
          {[sectionData[language].lake1, sectionData[language].lake2].map((project, index) => (
            <div 
              key={index}
              className={`lg:col-span-1 relative transition-all duration-1000 delay-${index * 200} ${
                cardsVisible[index + 1] ? 'scroll-slide-in-left visible' : 'scroll-slide-in-left'
              }`}
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
                {/* Background Video avec animation */}
                <div 
                  ref={index === 0 ? lake1BgRef as React.RefObject<HTMLDivElement> : lake2BgRef as React.RefObject<HTMLDivElement>}
                  className="absolute inset-0"
                >
                  <video
                    ref={index === 0 ? video1Ref : video2Ref}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1200 ${
                      index === 0 
                        ? (lake1BgVisible ? 'bg-fade-in visible' : 'bg-fade-in')
                        : (lake2BgVisible ? 'bg-fade-in visible' : 'bg-fade-in')
                    }`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src="/assets/vide_hero.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Overlay pour les projets en développement avec animation */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 transition-opacity duration-1000 ${
                  index === 0 
                    ? (lake1BgVisible ? 'opacity-100' : 'opacity-70')
                    : (lake2BgVisible ? 'opacity-100' : 'opacity-70')
                }`} />
                <div className={`absolute inset-0 bg-blue-900/20 transition-opacity duration-1200 delay-300 ${
                  index === 0 
                    ? (lake1BgVisible ? 'opacity-100' : 'opacity-50')
                    : (lake2BgVisible ? 'opacity-100' : 'opacity-50')
                }`} />

                {/* Badge développement */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-6">
                  <div className="flex justify-between items-start">
                    <div className="bg-yellow-500/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                      {project.status}
                    </div>
                    <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-xl">
                      <img 
                        src={project.logo}
                        alt={`${project.name} Logo`}
                        className="w-full h-full object-contain opacity-90"
                      />
                    </div>
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {project.name}
                    </h3>
                    <p className="text-lg text-white/90 font-medium drop-shadow-md">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-white/95 leading-relaxed drop-shadow-md text-sm lg:text-base">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-white/90 text-sm drop-shadow-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA désactivé pour développement */}
                  <button 
                    className="w-full bg-white/20 backdrop-blur-sm text-white/70 py-4 rounded-2xl font-semibold cursor-not-allowed border border-white/30"
                    disabled
                  >
                    {language === 'fr' ? 'Bientôt Disponible' : 'Coming Soon'}
                  </button>
                </div>

                {/* Effet de filtre pour indiquer développement */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Section info globale inspirée d'AYANA */}
        <div 
          ref={infoRef as React.RefObject<HTMLDivElement>}
          className={`mt-20 lg:mt-32 text-center transition-all duration-1000 ${
            infoVisible ? 'scroll-hidden scroll-visible' : 'scroll-hidden'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl p-12 lg:p-16 shadow-xl border border-gray-200/50">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {language === 'fr' ? 'INFORMATIONS PROGRAMME' : 'PROGRAM INFORMATION'}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  label: language === 'fr' ? 'SUPERFICIE TERRAIN' : 'LAND AREA', 
                  value: '20,000 m²' 
                },
                { 
                  label: language === 'fr' ? 'NOMBRE DE VILLAS' : 'TOTAL VILLAS', 
                  value: '25+' 
                },
                { 
                  label: language === 'fr' ? 'TYPE DE RÉSIDENCE' : 'RESIDENCE TYPE', 
                  value: language === 'fr' ? 'Villas Premium' : 'Premium Villas'
                },
                { 
                  label: language === 'fr' ? 'LOCALISATION' : 'LOCATION', 
                  value: 'Mont Passot, Nosy Be'
                }
              ].map((info, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl lg:text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {info.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-semibold tracking-wide">
                    {info.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA principal */}
            <div className="mt-12">
              <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                <span>{language === 'fr' ? 'Découvrir Tous Les Programmes' : 'Explore All Programs'}</span>
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default ProgramsPreviewSection;
