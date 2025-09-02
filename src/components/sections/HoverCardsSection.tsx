import React, { useState } from "react";
import { useAppLanguage } from "../../context/AppContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const HoverCardsSection: React.FC = () => {
  const { language } = useAppLanguage();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Animations au scroll
  const { elementRef: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation({
      threshold: 0.1,
      triggerOnce: false,
    });

  const sectionData = {
    fr: {
      cards: [
        {
          id: "intimite",
          title: "INTIMITÉ",
          description: "Villa 2 chambres",
          image: "/assets/Photo 2.jpg",
          hoverEffect: "scale",
        },
        {
          id: "harmonie",
          title: "HARMONIE",
          description: "Villa 3 chambres",
          image: "/assets/Photo 8-1.jpeg",
          hoverEffect: "fade",
        },
        {
          id: "prestige",
          title: "PRESTIGE",
          description: "Villa 4 chambres",
          image: "/assets/Photo 13.jpg",
          hoverEffect: "fade",
        },
        {
          id: "concept",
          title: "CONCEPT",
          description: "Architecture unique",
          image: "/assets/Photo 14.jpg",
          hoverEffect: "brightness",
        },
      ],
    },
    en: {
      cards: [
        {
          id: "intimite",
          title: "INTIMACY",
          description: "2 bedroom villa",
          image: "/assets/Photo 2.jpg",
          hoverEffect: "scale",
        },
        {
          id: "harmonie",
          title: "HARMONY",
          description: "3 bedroom villa",
          image: "/assets/Photo 8-1.jpeg",
          hoverEffect: "fade",
        },
        {
          id: "prestige",
          title: "PRESTIGE",
          description: "4 bedroom villa",
          image: "/assets/Photo 13.jpg",
          hoverEffect: "brightness",
        },
        {
          id: "concept",
          title: "CONCEPT",
          description: "Unique architecture",
          image: "/assets/Photo 14.jpg",
          hoverEffect: "brightness",
        },
      ],
    },
  };

  const getHoverEffectClass = (effect: string, isHovered: boolean) => {
    if (!isHovered) return "";

    switch (effect) {
      case "scale":
        return "scale-110";
      case "fade":
        return "opacity-80";
      case "blur":
        return "blur-sm";
      case "brightness":
        return "brightness-75";
      default:
        return "";
    }
  };

  return (
    <section className=" bg-slate-100">
      <div className="w-full">
        {/* Vertical Cards Container */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className={`space-y-0 transition-all duration-1000 ${
            sectionVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {sectionData[language].cards.map((card, index) => (
            <div
              key={card.id}
              className="w-full h-[200px] relative overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image - Hidden by default, visible on hover */}
              <img
                src={card.image}
                alt={card.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  hoveredCard === card.id
                    ? `opacity-100 scale-100 ${getHoverEffectClass(
                        card.hoverEffect,
                        true
                      )}`
                    : "opacity-0 scale-125"
                }`}
              />

              {/* Background Color */}
              <div
                // className={`absolute inset-0 transition-all duration-500 ${
                //   hoveredCard === card.id
                //     ? "bg-black/40"
                //     : index % 2 === 0
                //     ? "bg-gray-100"
                //     : "bg-gray-200"
                // }`}
                className={`absolute inset-0 transition-all duration-500 border-b-2 border-gray-200`}
              ></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 lg:p-8">
                <div className="text-center space-y-3">
                  <h3
                    className={`text-2xl lg:text-3xl font-bold transition-all duration-500 ${
                      hoveredCard === card.id ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-base lg:text-lg transition-all duration-500 ${
                      hoveredCard === card.id
                        ? "text-white/90"
                        : "text-gray-600"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div
                  className={`mt-6 w-12 h-0.5 transition-all duration-500 ${
                    hoveredCard === card.id ? "bg-white/60" : "bg-gray-400"
                  }`}
                ></div>
              </div>

              {/* Hover Indicator */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                  hoveredCard === card.id
                    ? "bg-gradient-to-r from-sky-400 to-blue-500"
                    : "bg-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoverCardsSection;
