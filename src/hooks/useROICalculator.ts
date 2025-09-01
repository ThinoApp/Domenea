import { useState, useCallback, useMemo } from 'react';
import type { ROICalculation } from '../types';

export const useROICalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(0);
  const [expectedReturn, setExpectedReturn] = useState<number>(10); // Pourcentage
  const [monthlyRental, setMonthlyRental] = useState<number>(0);
  const [annualCharges, setAnnualCharges] = useState<number>(0);

  // Calculs dérivés
  const calculation = useMemo((): ROICalculation => {
    if (investmentAmount <= 0) {
      return {
        investmentAmount: 0,
        annualReturn: 0,
        monthlyRental: 0,
        annualCharges: 0,
        netROI: 0,
        breakEvenYears: 0
      };
    }

    const annualRental = monthlyRental * 12;
    const grossReturn = annualRental - annualCharges;
    const netROI = (grossReturn / investmentAmount) * 100;
    const breakEvenYears = investmentAmount / Math.max(grossReturn, 1);

    return {
      investmentAmount,
      annualReturn: grossReturn,
      monthlyRental,
      annualCharges,
      netROI: parseFloat(netROI.toFixed(2)),
      breakEvenYears: parseFloat(breakEvenYears.toFixed(1))
    };
  }, [investmentAmount, monthlyRental, annualCharges]);

  // Calculer ROI pour une villa spécifique avec valeurs par défaut
  const calculateForVilla = useCallback((
    villaPrice: string,
    villaType: 'A' | 'B' | 'C'
  ) => {
    // Extraire le prix numérique (format: "À partir de 180 000€")
    const priceMatch = villaPrice.match(/(\d+(?:\s+\d+)*)/);
    const price = priceMatch ? parseInt(priceMatch[1].replace(/\s+/g, '')) : 0;

    // Estimations par défaut selon le type de villa
    const estimates = {
      A: { monthlyRent: 1500, charges: 2000 }, // Villa Intimité
      B: { monthlyRent: 2000, charges: 2500 }, // Villa Harmonie  
      C: { monthlyRent: 2800, charges: 3200 }  // Villa Prestige
    };

    setInvestmentAmount(price);
    setMonthlyRental(estimates[villaType].monthlyRent);
    setAnnualCharges(estimates[villaType].charges);
  }, []);

  // Réinitialiser le calculateur
  const resetCalculator = useCallback(() => {
    setInvestmentAmount(0);
    setExpectedReturn(10);
    setMonthlyRental(0);
    setAnnualCharges(0);
  }, []);

  // Obtenir des recommandations basées sur le ROI
  const getROIRecommendation = useCallback((roi: number) => {
    if (roi >= 12) return { level: 'excellent', color: 'green' };
    if (roi >= 8) return { level: 'bon', color: 'blue' };
    if (roi >= 5) return { level: 'correct', color: 'yellow' };
    return { level: 'faible', color: 'red' };
  }, []);

  return {
    // État
    investmentAmount,
    expectedReturn,
    monthlyRental,
    annualCharges,
    
    // Actions
    setInvestmentAmount,
    setExpectedReturn,
    setMonthlyRental,
    setAnnualCharges,
    calculateForVilla,
    resetCalculator,
    
    // Calculs
    calculation,
    
    // Utilitaires
    getROIRecommendation,
    
    // État dérivé
    isValidCalculation: calculation.investmentAmount > 0,
    isExcellentROI: calculation.netROI >= 12,
    isGoodROI: calculation.netROI >= 8
  };
};
