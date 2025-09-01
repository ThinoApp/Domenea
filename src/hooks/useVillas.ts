import { useState, useCallback, useMemo } from 'react';
import { villas } from '../data/mockData';
import type { Villa, VillaType } from '../types';

export const useVillas = () => {
  const [selectedVillaId, setSelectedVillaId] = useState<string | null>(null);
  const [filterByType, setFilterByType] = useState<VillaType | null>(null);

  // Obtenir toutes les villas
  const allVillas = useMemo(() => villas, []);

  // Villas filtrées
  const filteredVillas = useMemo(() => {
    if (!filterByType) return allVillas;
    return allVillas.filter(villa => villa.type === filterByType);
  }, [allVillas, filterByType]);

  // Villa sélectionnée
  const selectedVilla = useMemo(() => {
    if (!selectedVillaId) return null;
    return allVillas.find(villa => villa.id === selectedVillaId) || null;
  }, [allVillas, selectedVillaId]);

  // Sélectionner une villa
  const selectVilla = useCallback((villaId: string) => {
    setSelectedVillaId(villaId);
  }, []);

  // Désélectionner
  const clearSelection = useCallback(() => {
    setSelectedVillaId(null);
  }, []);

  // Obtenir une villa par ID
  const getVillaById = useCallback((id: string): Villa | undefined => {
    return allVillas.find(villa => villa.id === id);
  }, [allVillas]);

  // Obtenir les villas par type
  const getVillasByType = useCallback((type: VillaType): Villa[] => {
    return allVillas.filter(villa => villa.type === type);
  }, [allVillas]);

  // Obtenir la villa suivante
  const getNextVilla = useCallback((currentId: string): Villa | null => {
    const currentIndex = allVillas.findIndex(villa => villa.id === currentId);
    if (currentIndex === -1 || currentIndex === allVillas.length - 1) return null;
    return allVillas[currentIndex + 1];
  }, [allVillas]);

  // Obtenir la villa précédente
  const getPreviousVilla = useCallback((currentId: string): Villa | null => {
    const currentIndex = allVillas.findIndex(villa => villa.id === currentId);
    if (currentIndex <= 0) return null;
    return allVillas[currentIndex - 1];
  }, [allVillas]);

  return {
    // État
    allVillas,
    filteredVillas,
    selectedVilla,
    selectedVillaId,
    filterByType,
    
    // Actions
    selectVilla,
    clearSelection,
    setFilterByType,
    
    // Utilitaires
    getVillaById,
    getVillasByType,
    getNextVilla,
    getPreviousVilla,
    
    // État dérivé
    hasSelection: selectedVillaId !== null,
    villasCount: allVillas.length,
    filteredCount: filteredVillas.length
  };
};
