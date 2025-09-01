import React from 'react';
import { useAppLanguage, useAppFavorites } from '../../context/AppContext';
import type { Villa } from '../../types';

interface VillaCardProps {
  villa: Villa;
  onSelect: (villaId: string) => void;
  className?: string;
}

const VillaCard: React.FC<VillaCardProps> = ({ villa, onSelect, className = '' }) => {
  const { language, getText } = useAppLanguage();
  const { isFavorite, toggleFavorite } = useAppFavorites();

  const isVillaFavorite = isFavorite(villa.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(villa.id);
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${className}`}
      onClick={() => onSelect(villa.id)}
    >
      {/* Image principale */}
      <div className="relative h-64 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-500">
          {/* Placeholder image - en production, utiliser villa.images[0] */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
            📷 {villa.name}
          </div>
        </div>
        
        {/* Badge type */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
          Type {villa.type}
        </div>
        
        {/* Bouton favori */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            isVillaFavorite 
              ? 'bg-red-500 text-white scale-110' 
              : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-red-50 hover:text-red-500'
          }`}
        >
          {isVillaFavorite ? '❤️' : '🤍'}
        </button>

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white px-6 py-2 rounded-full font-medium transform scale-95 group-hover:scale-100 transition-transform">
            {language === 'fr' ? 'Voir les détails' : 'View details'}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Nom et titre */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {villa.name}
          </h3>
          <p className="text-gray-600">
            {villa.title}
          </p>
        </div>

        {/* Caractéristiques */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span>🛏️ {villa.bedrooms} ch.</span>
            <span>📐 {villa.surface}</span>
          </div>
          <div className="text-right">
            <div className="font-semibold text-blue-600">
              ROI {villa.roi.rentabilityRate}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {getText(villa.description)}
        </p>

        {/* Prix et CTA */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">
            {villa.price}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            {language === 'fr' ? 'Découvrir' : 'Discover'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillaCard;
