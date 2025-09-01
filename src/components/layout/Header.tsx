import React from "react";
import { useAppLanguage } from "../../context/AppContext";
import { contactInfo } from "../../data/mockData";

const Header: React.FC = () => {
  const { language, toggleLanguage } = useAppLanguage();

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
            <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
              <span className="sr-only">Menu</span>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white drop-shadow-sm"></div>
                <div className="w-full h-0.5 bg-white drop-shadow-sm"></div>
                <div className="w-full h-0.5 bg-white drop-shadow-sm"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
