import { useState, useCallback } from 'react';
import type { ContactForm } from '../types';

const initialFormState: ContactForm = {
  name: '',
  email: '',
  phone: '',
  country: '',
  projectType: '',
  budget: '',
  villaType: '',
  message: ''
};

export const useContact = () => {
  const [formData, setFormData] = useState<ContactForm>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  // Mettre à jour un champ du formulaire
  const updateField = useCallback((field: keyof ContactForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Effacer l'erreur du champ modifié
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  }, [errors]);

  // Validation du formulaire
  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Le pays est requis';
    }

    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Le type de projet est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Soumettre le formulaire (mock - pas d'API)
  const submitForm = useCallback(async (): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }

    setIsSubmitting(true);

    try {
      // Simulation d'appel API avec délai
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock success - en réalité, ici on ferait l'appel API
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData(initialFormState);
      
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  // Réinitialiser le formulaire
  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setErrors({});
    setIsSubmitted(false);
  }, []);

  // Pré-remplir le formulaire pour une villa spécifique
  const prefillForVilla = useCallback((villaType: string) => {
    setFormData(prev => ({
      ...prev,
      villaType,
      projectType: 'Achat villa'
    }));
  }, []);

  return {
    // État du formulaire
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    
    // Actions
    updateField,
    submitForm,
    resetForm,
    prefillForVilla,
    
    // Validation
    validateForm,
    isValid: Object.keys(errors).length === 0,
    
    // État dérivé
    hasErrors: Object.keys(errors).length > 0
  };
};
