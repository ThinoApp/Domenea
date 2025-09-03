import React, { useEffect, useRef, useState } from "react";
import { useAppLanguage } from "../../context/AppContext";

const InvestmentOpportunitySection: React.FC = () => {
  const { language } = useAppLanguage();

  // Refs pour les animations
  const spaRef = useRef<HTMLDivElement>(null);
  const investmentRef = useRef<HTMLDivElement>(null);
  const opportunityRef = useRef<HTMLDivElement>(null);

  // States pour les animations
  const [spaVisible, setSpaVisible] = useState(false);
  const [investmentVisible, setInvestmentVisible] = useState(false);
  const [opportunityVisible, setOpportunityVisible] = useState(false);
  const [diamondHovered, setDiamondHovered] = useState(false);

  // Intersection Observer pour les animations d'entrée
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-50px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === spaRef.current) {
            setTimeout(() => setSpaVisible(true), 100);
          } else if (entry.target === investmentRef.current) {
            setTimeout(() => setInvestmentVisible(true), 200);
          } else if (entry.target === opportunityRef.current) {
            setTimeout(() => setOpportunityVisible(true), 300);
          }
        }
      });
    }, observerOptions);

    const refs = [
      spaRef.current,
      investmentRef.current,
      opportunityRef.current,
    ];
    refs.forEach((ref) => ref && observer.observe(ref));

    return () => {
      refs.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const content = {
    fr: {
      spaTitle: "SPA/SAUNA",
      spaSubtitle: "Élégance",
      spaText:
        "Le bien-être est au cœur de la SPA.\nUn espace dédié aux Français reconceptualisé\nel gratifie l'esprit harmonieux du\nmouvement et de la détente.",
      investmentTitle: "Investissement",
      investmentSubtitle: "Intérieur",
      investmentText:
        "Avec des accès sur l'architecture,\nvous créez des opportunités\nd'impôt-revenu et de\npluralisation d'architecture sur deux.",
      opportunityMainTitle: "OPPORTUNITÉS D'INVESTISSEMENT",
      opportunitySubtitle: "ACCEPTEZ LES AVANTAGES DE COMPAGNIE",
      opportunityDescription: "DE LA NOBLE NATURE À VOTRE PORTE",
      opportunityFooter: "PREMIÈRE ÉDUCATION ET SANTÉ",
      taoLabel: "TAO",
    },
    en: {
      spaTitle: "SPA/SAUNA",
      spaSubtitle: "Elegance",
      spaText:
        "Wellness is at the heart of the SPA.\nA dedicated space for French reconceptualized\nand gratifies the harmonious spirit of\nmovement and relaxation.",
      investmentTitle: "Investment",
      investmentSubtitle: "Interior",
      investmentText:
        "With access to architecture,\nyou create opportunities\nfor tax-income and\narchitectural pluralization on two.",
      opportunityMainTitle: "INVESTMENT OPPORTUNITIES",
      opportunitySubtitle: "ACCEPT THE COMPANY ADVANTAGES",
      opportunityDescription: "FROM NOBLE NATURE TO YOUR DOOR",
      opportunityFooter: "PREMIER EDUCATION AND HEALTH",
      taoLabel: "TAO",
    },
  };

  const currentContent = content[language];

  return (
    <section className="relative">
      {/* Section SPA/SAUNA - Photo 14 avec effet bois */}
      <div ref={spaRef} className="relative h-screen group">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/Photo 14.jpg"
            alt="SPA et Sauna TAO Residence"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 via-amber-800/40 to-amber-900/50"></div>

          {/* Effet texture bois subtil */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            {/* Badge "METTRE PHOTO 14" en haut à gauche */}
            <div
              className={`absolute top-12 left-8 transition-all duration-800 delay-500 ${
                spaVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-600 rounded-lg opacity-20 group-hover:opacity-40 transition-all duration-300 blur"></div>
                <div className="relative bg-white/90 backdrop-blur-md border border-amber-200 px-6 py-3 rounded-lg shadow-2xl group-hover:bg-white transition-all duration-300">
                  <span className="text-sm font-medium text-amber-900 tracking-wider">
                    TAO
                  </span>
                </div>
              </div>
            </div>

            {/* Contenu principal centré avec animation */}
            <div
              className={`max-w-2xl mx-auto text-center transition-all duration-1000 ease-out ${
                spaVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 shadow-2xl">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-4 leading-tight tracking-wide">
                  {currentContent.spaTitle}
                </h2>
                <h3 className="text-2xl md:text-3xl font-light text-amber-200 mb-8 tracking-wider">
                  et {currentContent.spaSubtitle}
                </h3>
                <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mb-8 mx-auto opacity-80"></div>
                <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line font-light tracking-wide">
                  {currentContent.spaText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Investissement Intérieur - Photo 15 */}
      <div ref={investmentRef} className="relative h-screen group bg-slate-600">
        <div className="absolute inset-0 overflow-hidden">
          {/* Fond abstrait en attendant Photo 15 */}
          <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800"></div>
          
          {/* Image de fond au hover du losange */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
              diamondHovered ? "opacity-60" : "opacity-0"
            }`}
            style={{
              backgroundImage: "url('/assets/Photo 8-1.jpeg')",
              filter: "blur(3px) brightness(0.8)"
            }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>

          {/* Effet géométrique avec images de fond */}
          <div className="absolute inset-0 opacity-100">
            {/* Grande forme losange avec image */}
            <div
              className="absolute top-1/4 right-1/4 w-64 h-64 rotate-45 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110"
              style={{ animationDelay: "0s", animationDuration: "4s" }}
              onMouseEnter={() => setDiamondHovered(true)}
              onMouseLeave={() => setDiamondHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400/40 via-blue-500/30 to-slate-600/40"></div>
              <div
                className="absolute inset-0 bg-cover bg-center opacity-100 -rotate-45"
                style={{
                  backgroundImage: "url('/assets/Photo 8-1.jpeg')",
                  // filter: "blur(1px) contrast(1.2)",
                  transform: "scale(1.5)",
                }}
              ></div>
              <div className="absolute inset-0 border-2 border-white/40 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Petite forme avec texture */}
            {/* <div
              className="absolute bottom-1/3 left-1/3 w-32 h-32 rotate-12 rounded-lg animate-pulse overflow-hidden"
              style={{ animationDelay: "2s", animationDuration: "5s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-slate-500/50 via-cyan-400/30 to-slate-700/40"></div>
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 -rotate-12"
                style={{
                  backgroundImage: "url('/assets/Photo 12.jpg')",
                  filter: "blur(2px) brightness(1.1)",
                }}
              ></div>
              <div className="absolute inset-0 border border-white/30 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30"></div>
            </div> */}

            {/* Forme additionnelle pour plus de dynamisme */}
            {/* <div
              className="absolute top-2/3 right-1/3 w-20 h-20 rotate-[30deg] rounded-lg animate-pulse overflow-hidden"
              style={{ animationDelay: "4s", animationDuration: "6s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-teal-500/40"></div>
              <div className="absolute inset-0 border border-white/20 rounded-lg"></div>
            </div> */}
          </div>
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            {/* Badge "METTRE PHOTO 15" en haut à gauche */}
            {/* <div
              className={`absolute top-12 left-8 transition-all duration-800 delay-500 ${
                investmentVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-lg opacity-20 group-hover:opacity-40 transition-all duration-300 blur"></div>
                <div className="relative bg-white/90 backdrop-blur-md border border-slate-200 px-6 py-3 rounded-lg shadow-2xl group-hover:bg-white transition-all duration-300">
                  <span className="text-sm font-medium text-slate-800 tracking-wider">
                    METTRE PHOTO 15
                  </span>
                </div>
              </div>
            </div> */}

            {/* Badge "TAO" en bas à droite */}
            <div
              className={`absolute bottom-12 right-8 transition-all duration-800 delay-700 ${
                investmentVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-slate-600 rounded-lg opacity-20 group-hover:opacity-40 transition-all duration-300 blur"></div>
                <div className="relative bg-black/60 backdrop-blur-md border border-white/20 px-8 py-4 rounded-lg shadow-2xl group-hover:bg-black/70 transition-all duration-300">
                  <span className="text-2xl font-light text-white tracking-wider">
                    {currentContent.taoLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Contenu principal à droite avec animation */}
            <div
              className={`ml-auto max-w-lg mr-8 md:mr-16 transition-all duration-1000 ease-out ${
                investmentVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative text-right">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-8 leading-tight tracking-wide">
                  {currentContent.investmentTitle}
                </h2>
                <h3 className="text-2xl md:text-3xl font-light text-slate-300 mb-8 tracking-wider">
                  {currentContent.investmentSubtitle}
                </h3>
                <div className="ml-auto w-20 h-0.5 bg-gradient-to-l from-slate-400 to-blue-400 mb-8 opacity-80"></div>
                <p className="text-white/90 text-xl leading-relaxed whitespace-pre-line font-light tracking-wide">
                  {currentContent.investmentText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Opportunités - Fond vert avec grand X */}
      <div
        ref={opportunityRef}
        className="relative h-screen bg-gradient-to-br from-emerald-700 via-teal-600 to-emerald-800 overflow-hidden"
      >
        {/* Bandes décoratives modernes */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`transition-all duration-1500 ease-out ${
              opportunityVisible
                ? "scale-100 opacity-20 translate-y-0"
                : "scale-110 opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full h-full flex flex-col justify-center items-center space-y-16">
              {/* Bande principale horizontale */}
              <div className="relative w-[600px] h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 via-blue-500/60 to-teal-400/40 rounded-full animate-pulse"></div>
              </div>

              {/* Bandes secondaires décalées */}
              <div className="relative flex flex-col space-y-8">
                <div className="w-[400px] h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full transform -translate-x-12">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300/30 via-cyan-400/50 to-blue-300/30 rounded-full"
                    style={{ animation: "pulse 3s ease-in-out infinite" }}
                  ></div>
                </div>
                <div className="w-[450px] h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full transform translate-x-8">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-teal-300/30 via-blue-400/50 to-teal-300/30 rounded-full"
                    style={{
                      animation: "pulse 4s ease-in-out infinite",
                      animationDelay: "1s",
                    }}
                  ></div>
                </div>
              </div>

              {/* Éléments géométriques modernes */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div
                  className="w-3 h-3 bg-white/60 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div
                  className="w-2 h-2 bg-white/40 rounded-full animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Effets de particules */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-ping"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-3/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-3/4 w-2.5 h-2.5 bg-white rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Contenu textuel */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div
            className={`max-w-4xl transition-all duration-1000 ease-out ${
              opportunityVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 leading-tight tracking-[0.1em]">
              {currentContent.opportunityMainTitle}
            </h1>

            <div className="space-y-6 text-white/90">
              <p className="text-2xl md:text-3xl font-light tracking-wide">
                {currentContent.opportunitySubtitle}
              </p>

              <div className="w-32 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto opacity-80"></div>

              <p className="text-xl md:text-2xl font-light tracking-wide">
                {currentContent.opportunityDescription}
              </p>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-lg md:text-xl font-light tracking-wider text-white/80">
                  {currentContent.opportunityFooter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunitySection;
