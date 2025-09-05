import React, { useState } from "react";
import { useAppLanguage } from "../../context/AppContext";
import { contactInfo } from "../../data/mockData";
import VRTourButton from "../navigation/VRTourButton";

interface HeaderProps {
  onOpenVRTour?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenVRTour }) => {
  const { language, toggleLanguage } = useAppLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = {
    fr: ["PROGRAMMES", "CONCEPT", "CONTACT"],
    en: ["PROGRAMS", "CONCEPT", "CONTACT"],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect-dark border-0 shadow-lg/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/assets/Logo 1.png"
              alt="TAO PASSOT - Domenea"
              className="h-8 sm:h-10 md:h-12 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Navigation principale */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation[language].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 drop-shadow-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* VR Tour Button - Always visible but responsive */}
            {onOpenVRTour && (
              <VRTourButton onOpenVRTour={onOpenVRTour} />
            )}
            
            {/* Sélecteur de langue - Compact on mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-xs sm:text-sm font-medium text-white">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Contact rapide - Hidden on mobile and tablet */}
            <div className="hidden xl:flex items-center space-x-2 text-sm text-white/90">
              <span>📞</span>
              <span className="drop-shadow-sm">{contactInfo.phone}</span>
            </div>

            {/* Menu mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              <span className="sr-only">Menu</span>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-white drop-shadow-sm transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-full h-0.5 bg-white drop-shadow-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 bg-white drop-shadow-sm transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect-dark border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {/* VR Tour Button in mobile menu if not visible in header */}
              {onOpenVRTour && (
                <div className="pb-2">
                  <button
                    onClick={() => {
                      onOpenVRTour();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2zM7 9h4v6H7V9z" />
                    </svg>
                    <span className="text-white font-medium">
                      {language === 'fr' ? 'Visite VR' : 'VR Tour'}
                    </span>
                  </button>
                </div>
              )}
              
              {/* Navigation mobile */}
              {navigation[language].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/90 hover:text-white font-medium py-3 px-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
              
              {/* Séparateur */}
              <div className="border-t border-white/20 my-3"></div>
              
              {/* Contact mobile */}
              <div className="flex items-center space-x-2 text-sm text-white/90 px-2">
                <span>📞</span>
                <span className="drop-shadow-sm">{contactInfo.phone}</span>
              </div>
              
              {/* Langue mobile */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-1 px-4 py-3 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-white">
                  {language === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
