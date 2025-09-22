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

  const link = ["programs", "concept", "contact"];

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
            {navigation[language].map((item, index) => (
              <a
                key={item}
                href={`#${link[index]}`}
                className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 drop-shadow-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* VR Tour Button - Always visible but responsive */}
            {onOpenVRTour && <VRTourButton onOpenVRTour={onOpenVRTour} />}

            {/* Icônes réseaux sociaux */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <a
                href="https://www.facebook.com/domenea"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/domenea"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* <a
                href="https://wa.me/33612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
                </svg>
              </a> */}
            </div>

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
                <div
                  className={`w-full h-0.5 bg-white drop-shadow-sm transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-white drop-shadow-sm transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-white drop-shadow-sm transition-transform duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></div>
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
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2zM7 9h4v6H7V9z"
                      />
                    </svg>
                    <span className="text-white font-medium">
                      {language === "fr" ? "Visite VR" : "VR Tour"}
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

              {/* Réseaux sociaux mobile */}
              <div className="flex items-center justify-center space-x-4 py-2">
                <a
                  href="https://www.facebook.com/domenea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6 text-white/90 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/domenea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 text-white/90 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* <a
                  href="https://wa.me/33612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-white/10 rounded-lg transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-6 h-6 text-white/90 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                </a> */}
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
                  {language === "fr" ? "🇬🇧 English" : "🇫🇷 Français"}
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
