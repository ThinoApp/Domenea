import { useState, useCallback, useEffect } from 'react';
import type { Language } from '../types';

const LANGUAGE_STORAGE_KEY = 'tao-passot-language';

export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Récupérer la langue sauvegardée ou détecter automatiquement
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
    if (saved) return saved;
    
    // Détection automatique basée sur le navigateur
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  });

  const setLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  }, [language, setLanguage]);

  // Fonction utilitaire pour obtenir du contenu multilingue
  const getText = useCallback(<T extends Record<Language, string>>(textObj: T): string => {
    return textObj[language];
  }, [language]);

  useEffect(() => {
    // Mettre à jour l'attribut lang du document
    document.documentElement.lang = language;
  }, [language]);

  return {
    language,
    setLanguage,
    toggleLanguage,
    getText,
    isfrench: language === 'fr',
    isEnglish: language === 'en'
  };
};
