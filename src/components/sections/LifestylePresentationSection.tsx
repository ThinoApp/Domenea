import React, { useEffect, useRef, useState } from "react";
import { useAppLanguage } from "../../context/AppContext";

const LifestylePresentationSection: React.FC = () => {
  const { language } = useAppLanguage();

  // Refs pour les animations
  const headerRef = useRef<HTMLDivElement>(null);
  const serenityRef = useRef<HTMLDivElement>(null);
  const eleganceRef = useRef<HTMLDivElement>(null);

  // States pour les animations
  const [headerVisible, setHeaderVisible] = useState(false);
  const [serenityVisible, setSerenityVisible] = useState(false);
  const [eleganceVisible, setEleganceVisible] = useState(false);

  // Intersection Observer pour les animations d'entrée
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-50px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) {
            setTimeout(() => setHeaderVisible(true), 100);
          } else if (entry.target === serenityRef.current) {
            setTimeout(() => setSerenityVisible(true), 200);
          } else if (entry.target === eleganceRef.current) {
            setTimeout(() => setEleganceVisible(true), 300);
          }
        }
      });
    }, observerOptions);

    const refs = [headerRef.current, serenityRef.current, eleganceRef.current];
    refs.forEach((ref) => ref && observer.observe(ref));

    return () => {
      refs.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const content = {
    fr: {
      mainTitle: "VIVEZ PLEINEMENT. VIVEZ VERT",
      subTitle: "LIVE",
      residenceName: "TAO RESIDENCE",
      serenityTitle: "Sérénité durable",
      serenityText:
        "Chaque maison TAO réponde\npar la nature. Du sol au concept.\nEcosystem partage sur l'ensemble côtière,\nfort pour une puissance comportement\nécologique.",
      eleganceTitle: "Élégance côtière",
      eleganceText:
        "L'architecture minimaliste de TAO se\nfond dans le paysage de Nosy Be.\nLes lignes épurées et les matériaux\nnaturels créent une harmonie parfaite\navec l'environnement tropical.",
      location: "Nosy Be",
    },
    en: {
      mainTitle: "LIVE FULLY. LIVE GREEN",
      subTitle: "LIVE",
      residenceName: "TAO RESIDENCE",
      serenityTitle: "Sustainable Serenity",
      serenityText:
        "Each TAO house responds\nthrough nature. From ground to concept.\nEcosystem sharing across the coastal\narea, strong for ecological\nbehavior power.",
      eleganceTitle: "Coastal Elegance",
      eleganceText:
        "TAO's minimalist architecture\nblends into Nosy Be's landscape.\nClean lines and natural materials\ncreate perfect harmony\nwith the tropical environment.",
      location: "Nosy Be",
    },
  };

  const currentContent = content[language];

  return (
    <section className="relative">
      {/* Header Section - Beige background avec le titre principal */}
      <div
        ref={headerRef}
        className="relative bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 py-24 overflow-hidden"
      >
        {/* Patterns de fond subtils */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-slate-300 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-amber-200 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ease-out ${
              headerVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extralight tracking-[0.2em] text-slate-800 mb-12 leading-tight">
              <span
                className="inline-block animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {currentContent.mainTitle.split(" ")[0]}
              </span>
              <br />
              <span
                className="inline-block animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {currentContent.mainTitle.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div
              className={`flex items-center justify-center space-x-6 transition-all duration-800 delay-300 ${
                headerVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="text-3xl md:text-4xl font-extralight text-slate-600 tracking-wider">
                {currentContent.subTitle}
              </span>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-800 rounded opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                <div className="relative border-0 border-slate-800 bg-white/50 backdrop-blur-sm px-8 py-3 hover:bg-white/70 transition-all duration-300">
                  <span className="text-xl md:text-2xl font-light text-slate-800 tracking-[0.15em]">
                    {currentContent.residenceName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Photo 12 - Vue aérienne verte */}
      <div ref={serenityRef} className="relative h-screen group">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/Photo 12.jpg"
            alt="Vue aérienne de TAO Residence"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30"></div>

          {/* Effet de particules subtil */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            {/* Badge "TAO" en haut à droite avec animation */}
            {/* <div
              className={`absolute top-12 right-8 transition-all duration-800 delay-500 ${
                serenityVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-lg opacity-20 group-hover:opacity-40 transition-all duration-300 blur"></div>
                <div className="relative bg-black/60 backdrop-blur-md border border-white/20 px-6 py-3 rounded-lg shadow-2xl group-hover:bg-black/70 transition-all duration-300">
                  <span className="text-xl font-light text-white tracking-wider">
                    TAO
                  </span>
                </div>
              </div>
            </div> */}

            {/* Contenu principal à gauche avec animation */}
            <div
              className={`max-w-lg ml-8 md:ml-16 transition-all duration-1000 ease-out ${
                serenityVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-8 leading-tight tracking-wide">
                  {currentContent.serenityTitle}
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mb-8 opacity-80"></div>
                <p className="text-white/90 text-xl leading-relaxed whitespace-pre-line font-light tracking-wide">
                  {currentContent.serenityText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Photo 8-2 - Architecture moderne avec piscine */}
      <div ref={eleganceRef} className="relative h-screen group">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/Photo 8-2.jpg"
            alt="Architecture élégante de TAO Residence"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-black/40"></div>

          {/* Effet de lumière subtil */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-radial from-blue-400/20 to-transparent rounded-full animate-pulse"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-radial from-cyan-400/15 to-transparent rounded-full animate-pulse"
              style={{ animationDelay: "1.5s", animationDuration: "4s" }}
            ></div>
          </div>
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            {/* Badge "Nosy Be" en bas à droite avec animation */}
            {/* <div
              className={`absolute bottom-12 right-8 transition-all duration-800 delay-500 ${
                eleganceVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-lg opacity-20 group-hover:opacity-40 transition-all duration-300 blur"></div>
                <div className="relative bg-white/90 backdrop-blur-md border border-slate-200 px-6 py-3 rounded-lg shadow-2xl group-hover:bg-white transition-all duration-300">
                  <span className="text-xl font-light text-slate-800 tracking-wider">
                    {currentContent.location}
                  </span>
                </div>
              </div>
            </div> */}

            {/* Contenu principal à droite avec animation */}
            <div
              className={`ml-auto max-w-lg mr-8 md:mr-16 transition-all duration-1000 ease-out ${
                eleganceVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative text-right">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-8 leading-tight tracking-wide">
                  {currentContent.eleganceTitle}
                </h2>
                <div className="ml-auto w-20 h-0.5 bg-gradient-to-l from-blue-400 to-cyan-400 mb-8 opacity-80"></div>
                <p className="text-white/90 text-xl leading-relaxed whitespace-pre-line font-light tracking-wide">
                  {currentContent.eleganceText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestylePresentationSection;
