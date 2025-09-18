import React from "react";
import { useAppLanguage } from "../../context/AppContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const FeaturesGridSection: React.FC = () => {
  const { language } = useAppLanguage();

  // Animations au scroll
  const { elementRef: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation({
      threshold: 0.2,
      triggerOnce: true,
    });

  const sectionData = {
    fr: {
      title: "NOS ATOUTS",
      features: [
        {
          id: "feature-1",
          image: "/assets/Photo 8-1.jpeg",
          title: "INSPIRATION DE LA COMPOSITION DES COULEURS",
          description: `Utilisant des nuances botaniques luxuriantes et des couleurs élémentaires de blanc, de marron et de gris, cette fusion design apporte vie, émotion et sens à la maison, créant une connexion harmonieuse avec l'environnement.`,
          subtitle: "TAO se fond avec art dans la nature.",
        },
        {
          id: "feature-2",
          image: "/assets/Photo 8-2.jpg",
          title: "CONCEPT",
          description:
            "TAO intègre le paysage époustouflant des collines et des forêts tropicales dans sa conception architecturale.",
          subtitle: "Pour se fondre harmonieusement dans la nature",
        },
        {
          id: "feature-3",
          image: "/assets/Photo 8-3.jpeg",
          title: "AMBIANCE ET ART DE VIVRE",
          description: `
          Chez DOMENEA, chaque villa que nous construisons est bien plus qu'un lieu de vie : c'est un véritable cocon de sérénité. Nous concevons nos intérieurs pour offrir à nos clients un quotidien apaisant, où chaque détail contribue à leur bien-être.
            
            Lumière naturelle généreuse, volumes ouverts, matériaux nobles et couleurs douces. nos espaces sont pensés pour respirer, pour apaiser, pour inspirer. Le choix d'aménagements épurés, alliés à une circulation fluide et intuitive, crée une atmosphère harmonieuse, idéale pour se ressourcer

            Parce que le bien-vivre commence chez soi, nous placons le
confort, l'élégance et la sérénité au cœur de chaque projet. Vivre
dans une villa TAO, c'est choisir un intérieur où il fait bon vivre
naturellement
            `,
        },
      ],
    },
    en: {
      title: "OUR ASSETS",
      features: [
        {
          id: "feature-1",
          image: "/assets/Photo 8-1.jpeg",
          title: "INSPIRATION OF THE COLOR COMPOSITION",
          description:
            "Using lush botanical shades and elemental colors of white, brown, and gray, this design fusion brings life, emotion, and meaning to the home, creating a harmonious connection with the environment.",
          subtitle: "TAO blends artfully into nature.",
        },
        {
          id: "feature-2",
          image: "/assets/Photo 8-2.jpg",
          title: "CONCEPT",
          description:
            "TAO integrates the breathtaking landscape of the mountains and tropical forests into its architectural design.",
          subtitle: "To blend harmoniously into nature.",
        },
        {
          id: "feature-3",
          image: "/assets/Photo 8-3.jpeg",
          title: "ATMOSPHERE AND ART OF LIVING",
          description: `At DOMENEA, each villa we build is much more than a place to live: it's a true cocoon of serenity. We design our interiors to offer our clients a peaceful daily life, where every detail contributes to their well-being.
            
          Generous natural light, open spaces, high-quality materials, and soft colors. Our spaces are designed to breathe, to soothe, to inspire. The choice of refined layouts, combined with a fluid and intuitive flow, creates a harmonious atmosphere, ideal for recharging your batteries.
            
          Because well-being begins at home, we place comfort, elegance, and serenity at the heart of every project. Living in a TAO villa means choosing a home where life is naturally good.
            `,
        },
      ],
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* <h2 className="text-5xl lg:text-7xl font-bold text-gray-700 mb-6 tracking-wide">
            {sectionData[language].title}
          </h2> */}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Column 1 - Image on top, text below */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white  transition-all duration-500 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={sectionData[language].features[0].image}
                  alt={sectionData[language].features[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {sectionData[language].features[0].title}
                </h3>
                <h4 className="text-xl font-semibold text-gray-600 mb-2">
                  {sectionData[language].features[0].subtitle}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {sectionData[language].features[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 - Text on top, image below */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-400 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white  transition-all duration-500 overflow-hidden">
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {sectionData[language].features[1].title}
                </h3>
                <h4 className="text-xl font-semibold text-gray-600 mb-2">
                  {sectionData[language].features[1].subtitle}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {sectionData[language].features[1].description}
                </p>
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src={sectionData[language].features[1].image}
                  alt={sectionData[language].features[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Column 3 - Image background with overlay text - Larger */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-600 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white  transition-all duration-500 overflow-hidden h-full min-h-[500px] relative">
              {/* Background Image */}
              <img
                src={sectionData[language].features[2].image}
                alt={sectionData[language].features[2].title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12">
                <div className="text-white space-y-8">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    {sectionData[language].features[2].title}
                  </h3>

                  {/* Key Points */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-sky-400 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Un cocon de sérénité
                        </h4>
                        <p className="text-white/90 leading-relaxed">
                          Chaque villa est bien plus qu'un lieu de vie, c'est un
                          véritable havre de paix.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Design harmonieux
                        </h4>
                        <p className="text-white/90 leading-relaxed">
                          Lumière naturelle, volumes ouverts, matériaux nobles
                          pour respirer et apaiser.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-sky-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Art de vivre
                        </h4>
                        <p className="text-white/90 leading-relaxed">
                          Confort, élégance et sérénité au cœur de chaque projet
                          pour un intérieur où il fait bon vivre.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="mt-8">
                    <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 pointer-events-none opacity-30">
          <svg className="w-24 h-24 text-sky-200" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="2"
              fill="currentColor"
              className="animate-pulse delay-100"
            />
            <circle
              cx="30"
              cy="30"
              r="1.5"
              fill="currentColor"
              className="animate-pulse delay-200"
            />
            <circle
              cx="70"
              cy="30"
              r="1.5"
              fill="currentColor"
              className="animate-pulse delay-300"
            />
            <circle
              cx="30"
              cy="70"
              r="1.5"
              fill="currentColor"
              className="animate-pulse delay-400"
            />
            <circle
              cx="70"
              cy="70"
              r="1.5"
              fill="currentColor"
              className="animate-pulse delay-500"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;
