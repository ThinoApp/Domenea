import React from "react";
import { useAppLanguage } from "../../context/AppContext";
import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
} from "../../hooks/useScrollAnimation";

const VillasShowcaseSection: React.FC = () => {
  const { language } = useAppLanguage();

  // Animations au scroll - répétables
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false,
  });
  const { containerRef: cardsRef, visibleItems: cardsVisible } =
    useStaggeredScrollAnimation(4, 200, false);

  const sectionData = {
    fr: {
      title: "VILLAS",
      experiences: [
        {
          id: "infinity-pool",
          image: "/assets/Photo 13.jpg",
          title: "60 SQM OF",
          subtitle: "Infinity Edge Pool",
          tag: "TAO PASSOT VILLA",
          textPosition: "right",
        },
        {
          id: "nature-lakes",
          image: "/assets/Photo 14.jpg",
          title: "Located Close to",
          subtitle: "Nature and its Lakes",
          tag: "TAO PASSOT VILLA",
          textPosition: "left",
        },
        {
          id: "panoramic-sunset",
          image: "/assets/Photo 16.jpg",
          title: "100%",
          subtitle: "Panoramic Sunset View",
          tag: "TAO PASSOT VILLA",
          textPosition: "right",
        },
        {
          id: "sea-view",
          image: "/assets/Photo 8-3.jpeg",
          title: "180°",
          subtitle: "Degree Sea View",
          tag: "TAO PASSOT VILLA",
          textPosition: "left",
        },
      ],
    },
    en: {
      title: "VILLAS",
      experiences: [
        {
          id: "infinity-pool",
          image: "/assets/Photo 13.jpg",
          title: "60 SQM OF",
          subtitle: "Infinity Edge Pool",
          tag: "TAO PASSOT VILLA",
          textPosition: "right",
        },
        {
          id: "nature-lakes",
          image: "/assets/Photo 14.jpg",
          title: "Located Close to",
          subtitle: "Nature and its Lakes",
          tag: "TAO PASSOT VILLA",
          textPosition: "left",
        },
        {
          id: "panoramic-sunset",
          image: "/assets/Photo 16.jpg",
          title: "100%",
          subtitle: "Panoramic Sunset View",
          tag: "TAO PASSOT VILLA",
          textPosition: "right",
        },
        {
          id: "sea-view",
          image: "/assets/Photo 8-3.jpeg",
          title: "180°",
          subtitle: "Degree Sea View",
          tag: "TAO PASSOT VILLA",
          textPosition: "left",
        },
      ],
    },
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header de section */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            titleVisible
              ? "showcase-slide-in-up visible"
              : "showcase-slide-in-up"
          }`}
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-700 mb-4 tracking-wide">
            {sectionData[language].title}
          </h2>
        </div>

        {/* Layout vertical avec superposition exacte selon référence */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="relative max-w-7xl mx-auto"
        >
          {/* Élément décoratif bleu top-left comme sur la référence */}
          <div className="absolute top-0 left-0 pointer-events-none z-10">
            <svg className="w-24 h-24 text-sky-400" viewBox="0 0 80 80">
              <g fill="currentColor" className="opacity-90">
                <rect
                  x="5"
                  y="25"
                  width="2.5"
                  height="12"
                  className="animate-pulse delay-100"
                />
                <rect
                  x="9"
                  y="20"
                  width="2.5"
                  height="22"
                  className="animate-pulse delay-200"
                />
                <rect
                  x="13"
                  y="15"
                  width="2.5"
                  height="32"
                  className="animate-pulse delay-300"
                />
                <rect
                  x="17"
                  y="23"
                  width="2.5"
                  height="16"
                  className="animate-pulse delay-400"
                />
                <rect
                  x="21"
                  y="18"
                  width="2.5"
                  height="26"
                  className="animate-pulse delay-500"
                />
                <rect
                  x="25"
                  y="28"
                  width="2.5"
                  height="12"
                  className="animate-pulse delay-600"
                />
              </g>
            </svg>
          </div>

          {/* 1ère expérience - Image large à gauche, texte à droite */}
          <div
            className={`relative mb-20 transition-all duration-800 ${
              cardsVisible[0] ? "concept-reveal-1 visible" : "concept-reveal-1"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <img
                    src={sectionData[language].experiences[0].image}
                    alt={sectionData[language].experiences[0].title}
                    className="w-full h-[300px] lg:h-[350px] object-cover rounded-xl shadow-2xl"
                  />
                  {/* Tag sur l'image */}

                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded text-white font-medium">
                    {sectionData[language].experiences[0].tag}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pt-8">
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    {sectionData[language].experiences[0].title}
                  </h3>
                  <h4 className="text-xl lg:text-2xl font-medium text-gray-700">
                    {sectionData[language].experiences[0].subtitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* 2ème expérience - Image plus large à droite avec chevauchement, texte à gauche */}
          <div
            className={`relative mb-20 lg:-mt-8 transition-all duration-1000 ${
              cardsVisible[1] ? "concept-reveal-2 visible" : "concept-reveal-2"
            }`}
          >
            <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12">
              <div className="w-full lg:w-3/5 lg:ml-8">
                <div className="relative">
                  <img
                    src={sectionData[language].experiences[1].image}
                    alt={sectionData[language].experiences[1].title}
                    className="w-full h-[320px] lg:h-[400px] object-cover rounded-xl shadow-2xl"
                  />
                  {/* Tag sur l'image */}

                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded text-white font-medium">
                    {sectionData[language].experiences[1].tag}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5 lg:pt-12">
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    {sectionData[language].experiences[1].title}
                  </h3>
                  <h4 className="text-xl lg:text-2xl font-medium text-gray-700">
                    {sectionData[language].experiences[1].subtitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* 3ème expérience - Image large à gauche avec chevauchement, texte à droite */}
          <div
            className={`relative mb-20 lg:-mt-12 transition-all duration-1200 ${
              cardsVisible[2] ? "concept-reveal-3 visible" : "concept-reveal-3"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
              <div className="w-full lg:w-3/5">
                <div className="relative">
                  <img
                    src={sectionData[language].experiences[2].image}
                    alt={sectionData[language].experiences[2].title}
                    className="w-full h-[300px] lg:h-[360px] object-cover rounded-xl shadow-2xl"
                  />
                  {/* Tag sur l'image */}

                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded text-white font-medium">
                    {sectionData[language].experiences[2].tag}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5 lg:pt-16">
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    {sectionData[language].experiences[2].title}
                  </h3>
                  <h4 className="text-xl lg:text-2xl font-medium text-gray-700">
                    {sectionData[language].experiences[2].subtitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* 4ème expérience - Image large à droite, texte à gauche */}
          <div
            className={`relative mb-16 lg:-mt-8 transition-all duration-1400 ${
              cardsVisible[3] ? "concept-reveal-4 visible" : "concept-reveal-4"
            }`}
          >
            <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12">
              <div className="w-full lg:w-3/5 lg:ml-8">
                <div className="relative">
                  <img
                    src={sectionData[language].experiences[3].image}
                    alt={sectionData[language].experiences[3].title}
                    className="w-full h-[320px] lg:h-[380px] object-cover rounded-xl shadow-2xl"
                  />
                  {/* Tag sur l'image */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-sm font-medium text-gray-700">
                    METTRE PHOTO 8
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded text-white font-medium">
                    {sectionData[language].experiences[3].tag}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5 lg:pt-20">
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    {sectionData[language].experiences[3].title}
                  </h3>
                  <h4 className="text-xl lg:text-2xl font-medium text-gray-700">
                    {sectionData[language].experiences[3].subtitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Élément décoratif bleu bottom-right comme sur la référence */}
          <div className="absolute bottom-0 right-0 pointer-events-none z-10">
            <svg className="w-32 h-24 text-sky-400" viewBox="0 0 100 80">
              <g fill="currentColor" className="opacity-90">
                <rect
                  x="70"
                  y="15"
                  width="3"
                  height="18"
                  className="animate-pulse delay-100"
                />
                <rect
                  x="75"
                  y="10"
                  width="3"
                  height="28"
                  className="animate-pulse delay-200"
                />
                <rect
                  x="80"
                  y="20"
                  width="3"
                  height="13"
                  className="animate-pulse delay-300"
                />
                <rect
                  x="85"
                  y="5"
                  width="3"
                  height="38"
                  className="animate-pulse delay-400"
                />
                <rect
                  x="90"
                  y="25"
                  width="3"
                  height="8"
                  className="animate-pulse delay-500"
                />
                <rect
                  x="95"
                  y="12"
                  width="3"
                  height="23"
                  className="animate-pulse delay-600"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 lg:mt-20">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-gray-500/25 transition-all duration-500 hover:scale-105">
            <span className="relative z-10">
              {language === "fr"
                ? "Découvrir le Concept"
                : "Discover the Concept"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VillasShowcaseSection;
