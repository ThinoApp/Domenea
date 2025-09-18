import React from "react";
import { useAppLanguage } from "../../context/AppContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ResidenceShowcaseSection: React.FC = () => {
  const { language } = useAppLanguage();

  // Animations au scroll - répétables
  const { elementRef: backgroundRef, isVisible: backgroundVisible } =
    useScrollAnimation({
      threshold: 0.1,
      triggerOnce: false,
    });
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation({
      threshold: 0.3,
      triggerOnce: false,
    });
  const { elementRef: logoRef, isVisible: logoVisible } = useScrollAnimation({
    threshold: 0.4,
    triggerOnce: false,
  });

  const sectionData = {
    fr: {
      title: "SÉCURISÉ TAO PASSOT RÉSIDENCE",
      highlight: "20 000",
      unit: "SQM",
      subtitle: "with Green spaces",
      // description:
      //   "Une résidence d'exception où l'architecture contemporaine s'harmonise parfaitement avec la nature luxuriante de Nosy Be.",
      // features: [
      //   "Architecture bioclimatique",
      //   "Espaces verts préservés",
      //   "Sécurité 24h/24",
      //   "Piscines privatives",
      // ],
      description:
        "Résidence TAO Passot Sécurisée sur 20 000 m2 avec Espaces Verts ",
      features: [],
    },
    en: {
      title: "SECURE TAO PASSOT RESIDENCE",
      highlight: "20 000",
      unit: "SQM",
      subtitle: "with Green spaces",
      description:
        "An exceptional residence where contemporary architecture harmoniously blends with the lush nature of Nosy Be.",
      features: [
        "Bioclimatic architecture",
        "Preserved green spaces",
        "24/7 security",
        "Private pools",
      ],
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image avec parallax et animation */}
      <div
        ref={backgroundRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0"
      >
        <div
          className={`absolute inset-0 transition-all duration-2000 ${
            backgroundVisible ? "bg-showcase-zoom visible" : "bg-showcase-zoom"
          }`}
        >
          <img
            src="/assets/Photo 8-1.jpeg"
            alt="TAO PASSOT Residence Pool View"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay sophistiqué */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40 transition-opacity duration-1500 ${
              backgroundVisible ? "opacity-100" : "opacity-80"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-2000 delay-300 ${
              backgroundVisible ? "opacity-100" : "opacity-60"
            }`}
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Colonne gauche - Contenu textuel */}
            <div
              ref={contentRef as React.RefObject<HTMLDivElement>}
              className={`space-y-8 transition-all duration-1500 ${
                contentVisible
                  ? "showcase-slide-in-left visible"
                  : "showcase-slide-in-left"
              }`}
            >
              {/* Title avec effet typographique */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  <span className="block">
                    {sectionData[language].title
                      .split(" ")
                      .slice(0, -1)
                      .join(" ")}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                    {sectionData[language].title.split(" ").slice(-1)[0]}
                  </span>
                </h2>

                {/* Metric highlight avec animation */}
                <div className="flex items-baseline space-x-3">
                  <span className="text-8xl lg:text-8xl font-black text-white/95 tracking-tight">
                    {sectionData[language].highlight}
                  </span>
                  <div className="space-y-1">
                    <span className="block text-2xl font-bold text-blue-300">
                      {sectionData[language].unit}
                    </span>
                    <span className="block text-lg text-white/80 font-medium">
                      {sectionData[language].subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                {sectionData[language].description}
              </p>

              {/* Features avec animations décalées */}
              <div className="grid grid-cols-2 gap-4">
                {sectionData[language].features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-800 delay-${
                      index * 100
                    } ${
                      contentVisible
                        ? "showcase-fade-in-up visible"
                        : "showcase-fade-in-up"
                    }`}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-300 rounded-full shadow-lg"></div>
                    <span className="text-white/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div
                className={`pt-6 transition-all duration-1000 delay-600 ${
                  contentVisible
                    ? "showcase-slide-in-up visible"
                    : "showcase-slide-in-up"
                }`}
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 overflow-hidden">
                  <span className="relative z-10">
                    {language === "fr"
                      ? "Découvrir la Résidence"
                      : "Discover the Residence"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>

            {/* Colonne droite - Logo floating avec animations */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                ref={logoRef as React.RefObject<HTMLDivElement>}
                className={`relative transition-all duration-2000 delay-800 ${
                  logoVisible
                    ? "showcase-float-in visible"
                    : "showcase-float-in"
                }`}
              >
                {/* Logo container avec effet glassmorphism */}
                <div className="relative p-12 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 hover:scale-105">
                  {/* Cercles décoratifs animés */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-teal-300/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-teal-400/20 to-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

                  {/* Logo principal */}
                  <img
                    src="/assets/Logo 2.png"
                    alt="TAO PASSOT Logo"
                    className="w-64 h-auto relative z-10 drop-shadow-2xl"
                  />

                  {/* Effet de brillance qui traverse */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>

                {/* Floating elements décoratifs */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
                  <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-8 left-4 w-2 h-2 bg-teal-300 rounded-full animate-bounce delay-700"></div>
                  <div className="absolute top-16 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div> */}
    </section>
  );
};

export default ResidenceShowcaseSection;
