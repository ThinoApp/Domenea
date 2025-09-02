import React, { useState } from "react";
import { useAppLanguage } from "../../context/AppContext";
import { contactInfo } from "../../data/mockData";

const Header: React.FC = () => {
  const { language, toggleLanguage } = useAppLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = {
    fr: ["PROGRAMMES", "CONCEPT", "CONTACT"],
    en: ["PROGRAMS", "CONCEPT", "CONTACT"],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect-dark border-0 shadow-lg/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/Logo 1.png"
              alt="TAO PASSOT - Domenea"
              className="h-12 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
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
          <div className="flex items-center space-x-4">
            {/* Sélecteur de langue */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-4 py-2 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-white">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Contact rapide */}
            <div className="hidden lg:flex items-center space-x-2 text-sm text-white/90">
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
            <div className="px-4 py-6 space-y-4">
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
              <div className="border-t border-white/20 my-4"></div>
              
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
