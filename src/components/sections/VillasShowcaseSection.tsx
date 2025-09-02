import React, { useState, useEffect } from "react";
import { useAppLanguage } from "../../context/AppContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const VillasShowcaseSection: React.FC = () => {
  const { language } = useAppLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animations au scroll - répétables
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % sectionData[language].experiences.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === 0 ? sectionData[language].experiences.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

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
    <section
      className="relative"
      ref={titleRef as React.RefObject<HTMLDivElement>}
    >
      {/* Header de section */}
      <div className="relative z-20 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div
            className={`text-center transition-all duration-1000 ${
              titleVisible
                ? "showcase-slide-in-up visible"
                : "showcase-slide-in-up"
            }`}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-700 mb-4 tracking-wide">
              {sectionData[language].title}
            </h2>
          </div>
        </div>
      </div>

      {/* Carousel Fullscreen Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slides Container */}
        {sectionData[language].experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={experience.image}
              alt={experience.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white space-y-8 px-4">
                {/* Tag */}
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium text-sm tracking-wide">
                  {experience.tag}
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                  <h3 className="text-6xl lg:text-8xl font-bold leading-tight tracking-wide">
                    {experience.title}
                  </h3>
                  <h4 className="text-3xl lg:text-4xl font-light text-white/90">
                    {experience.subtitle}
                  </h4>
                </div>

                {/* Decorative Line */}
                <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center z-20"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center z-20"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Progress Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
          {sectionData[language].experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white shadow-lg scale-125"
                  : "bg-white/40 hover:bg-white/60"
              } disabled:cursor-not-allowed`}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 pointer-events-none z-20">
          <svg className="w-20 h-20 text-white/20" viewBox="0 0 80 80">
            <g fill="currentColor" className="opacity-60">
              <rect
                x="5"
                y="25"
                width="3"
                height="10"
                className="animate-pulse delay-100"
              />
              <rect
                x="10"
                y="20"
                width="3"
                height="20"
                className="animate-pulse delay-200"
              />
              <rect
                x="15"
                y="15"
                width="3"
                height="30"
                className="animate-pulse delay-300"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Call to action */}
      <div className="relative z-20 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
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
      </div>
    </section>
  );
};

export default VillasShowcaseSection;
