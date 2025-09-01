// Types globaux pour l'application TAO Passot

export type Language = 'fr' | 'en';

export type VillaType = 'A' | 'B' | 'C';

export interface ProjectInfo {
  name: string;
  landArea: string;
  projectType: string;
  location: string;
  status: string;
  villaTypes: number;
  nearbyAttractions: string[];
}

export interface Villa {
  id: string;
  type: VillaType;
  name: string;
  title: string;
  bedrooms: number;
  surface: string;
  price: string;
  description: {
    fr: string;
    en: string;
  };
  features: string[];
  images: string[];
  floorPlan: string;
  roi: {
    annualReturn: string;
    rentabilityRate: string;
  };
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  hours: {
    weekdays: string;
    weekends: string;
    emergency: string;
  };
  socialMedia: {
    instagram: string;
    facebook: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  budget: string;
  villaType?: string;
  message: string;
}

export interface FavoriteVilla {
  villaId: string;
  addedAt: Date;
}

export interface AppState {
  language: Language;
  favorites: FavoriteVilla[];
  selectedVilla: Villa | null;
  isLoading: boolean;
  showDownloadModal: boolean;
  showContactModal: boolean;
}

export interface DownloadableResource {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  type: 'brochure' | 'floorplan' | 'roi' | 'presentation';
  filename: string;
  size: string;
}

export interface ROICalculation {
  investmentAmount: number;
  annualReturn: number;
  monthlyRental: number;
  annualCharges: number;
  netROI: number;
  breakEvenYears: number;
}
