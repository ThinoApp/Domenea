import { useState, useCallback, useMemo } from 'react';
import type { FavoriteVilla } from '../types';

const FAVORITES_STORAGE_KEY = 'tao-passot-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteVilla[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sauvegarder dans localStorage
  const saveFavorites = useCallback((newFavorites: FavoriteVilla[]) => {
    setFavorites(newFavorites);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
  }, []);

  // Ajouter aux favoris
  const addToFavorites = useCallback((villaId: string) => {
    const newFavorite: FavoriteVilla = {
      villaId,
      addedAt: new Date()
    };
    const updated = [...favorites, newFavorite];
    saveFavorites(updated);
  }, [favorites, saveFavorites]);

  // Retirer des favoris
  const removeFromFavorites = useCallback((villaId: string) => {
    const updated = favorites.filter(fav => fav.villaId !== villaId);
    saveFavorites(updated);
  }, [favorites, saveFavorites]);

  // Toggle favori
  const toggleFavorite = useCallback((villaId: string) => {
    const isFavorite = favorites.some(fav => fav.villaId === villaId);
    if (isFavorite) {
      removeFromFavorites(villaId);
    } else {
      addToFavorites(villaId);
    }
  }, [favorites, addToFavorites, removeFromFavorites]);

  // Vérifier si une villa est en favori
  const isFavorite = useCallback((villaId: string): boolean => {
    return favorites.some(fav => fav.villaId === villaId);
  }, [favorites]);

  // Obtenir les IDs des villas favorites
  const favoriteIds = useMemo(() => {
    return favorites.map(fav => fav.villaId);
  }, [favorites]);

  // Vider tous les favoris
  const clearAllFavorites = useCallback(() => {
    saveFavorites([]);
  }, [saveFavorites]);

  return {
    // État
    favorites,
    favoriteIds,
    favoritesCount: favorites.length,
    
    // Actions
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    clearAllFavorites,
    
    // Utilitaires
    isFavorite,
    hasFavorites: favorites.length > 0
  };
};
