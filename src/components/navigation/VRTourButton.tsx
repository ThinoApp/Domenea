import React, { useState } from "react";
import { useAppLanguage } from "../../context/AppContext";

interface VRTourButtonProps {
  onOpenVRTour: () => void;
}

const VRTourButton: React.FC<VRTourButtonProps> = ({ onOpenVRTour }) => {
  const { language } = useAppLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const content = {
    fr: {
      vrTour: "Visite VR",
      subtitle: "Expérience 360°",
      description: "Explorez TAO en réalité virtuelle"
    },
    en: {
      vrTour: "VR Tour",
      subtitle: "360° Experience", 
      description: "Explore TAO in virtual reality"
    }
  };

  const currentContent = content[language];

  return (
    <button
      onClick={onOpenVRTour}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Main Button */}
      <div className={`relative flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
        isHovered 
          ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25" 
          : "bg-white/10 backdrop-blur-md border border-white/20"
      }`}>
        {/* VR Icon */}
        <div className="relative">
          <svg 
            className={`w-6 h-6 transition-colors duration-300 ${
              isHovered ? "text-white" : "text-white/80"
            }`} 
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
          
          {/* Pulse animation on hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
          )}
        </div>

        {/* Text Content */}
        <div className="text-left">
          <div className={`font-medium transition-colors duration-300 ${
            isHovered ? "text-white" : "text-white/90"
          }`}>
            {currentContent.vrTour}
          </div>
          <div className={`text-xs transition-colors duration-300 ${
            isHovered ? "text-white/80" : "text-white/60"
          }`}>
            {currentContent.subtitle}
          </div>
        </div>

        {/* Arrow Icon */}
        <div className={`transform transition-all duration-300 ${
          isHovered ? "translate-x-1 text-white" : "text-white/60"
        }`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Tooltip on hover */}
      <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 pointer-events-none z-50 ${
        isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}>
        <div className="bg-black/90 backdrop-blur-md px-3 py-2 rounded-lg text-xs text-white whitespace-nowrap border border-white/20">
          {currentContent.description}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-white/20 rotate-45"></div>
        </div>
      </div>

      {/* Background glow effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl transition-opacity duration-300 -z-10 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`} />
    </button>
  );
};

export default VRTourButton;
