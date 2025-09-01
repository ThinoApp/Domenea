import React from 'react';
import { useAppLanguage, useAppVillas } from '../../context/AppContext';
import VillaCard from '../villa/VillaCard';

const VillasSection: React.FC = () => {
  const { language } = useAppLanguage();
  const { allVillas, selectVilla } = useAppVillas();

  const sectionTitle = {
    fr: 'Nos Villas TAO Passot',
    en: 'Our TAO Passot Villas'
  };

  const sectionSubtitle = {
    fr: 'Découvrez notre collection exclusive de villas conçues pour l\'art de vivre à Madagascar',
    en: 'Discover our exclusive collection of villas designed for the art of living in Madagascar'
  };

  return (
    <section id="programmes" className="py-20 bg-gradient-to-b from-gray-900 via-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {sectionTitle[language]}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle[language]}
          </p>
        </div>

        {/* Grille des villas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allVillas.map((villa) => (
            <VillaCard
              key={villa.id}
              villa={villa}
              onSelect={selectVilla}
              className="transform hover:scale-105"
            />
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'fr' ? 'Intéressé par nos villas ?' : 'Interested in our villas?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'fr' 
                ? 'Obtenez votre brochure complète avec plans détaillés et projections ROI personnalisées.' 
                : 'Get your complete brochure with detailed plans and personalized ROI projections.'
              }
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
              {language === 'fr' 
                ? 'Télécharger la brochure complète' 
                : 'Download complete brochure'
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillasSection;
