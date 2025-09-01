import React, { createContext, useContext, type ReactNode } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useVillas } from "../hooks/useVillas";
import { useFavorites } from "../hooks/useFavorites";
import { useContact } from "../hooks/useContact";
import { useROICalculator } from "../hooks/useROICalculator";
import { useDownloads } from "../hooks/useDownloads";

// Type pour le contexte global
interface AppContextType {
  // Language
  language: ReturnType<typeof useLanguage>;

  // Villas
  villas: ReturnType<typeof useVillas>;

  // Favoris
  favorites: ReturnType<typeof useFavorites>;

  // Contact
  contact: ReturnType<typeof useContact>;

  // ROI Calculator
  roiCalculator: ReturnType<typeof useROICalculator>;

  // Downloads
  downloads: ReturnType<typeof useDownloads>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const language = useLanguage();
  const villas = useVillas();
  const favorites = useFavorites();
  const contact = useContact();
  const roiCalculator = useROICalculator();
  const downloads = useDownloads();

  const value: AppContextType = {
    language,
    villas,
    favorites,
    contact,
    roiCalculator,
    downloads,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Hook pour utiliser le contexte
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// Hooks spécialisés pour accéder aux différentes parties du contexte
export const useAppLanguage = () => useAppContext().language;
export const useAppVillas = () => useAppContext().villas;
export const useAppFavorites = () => useAppContext().favorites;
export const useAppContact = () => useAppContext().contact;
export const useAppROICalculator = () => useAppContext().roiCalculator;
export const useAppDownloads = () => useAppContext().downloads;
