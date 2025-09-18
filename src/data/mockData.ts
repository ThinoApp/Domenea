// Mock Data pour TAO Passot
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
  type: "A" | "B" | "C";
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

// Données du projet
export const projectInfo: ProjectInfo = {
  name: "TAO PASSOT",
  landArea: "20 000 m²",
  projectType: "Résidence sécurisée + Villas individuelles",
  location: "Mont Passot, Nosy Be, Madagascar",
  status: "En commercialisation",
  villaTypes: 3,
  nearbyAttractions: [
    "Plages paradisiaques",
    "Lacs sacrés de Mont Passot",
    "Restaurants gastronomiques",
    "Sites naturels préservés",
    "Marchés locaux authentiques",
  ],
};

// Données des villas
export const villas: Villa[] = [
  {
    id: "villa-intimite",
    type: "A",
    name: "VILLA INTIMITÉ",
    title: "Villa 2 chambres - Cocon de sérénité",
    bedrooms: 2,
    surface: "95 m²",
    price: "À partir de 180 000€",
    description: {
      fr: "Un havre de paix conçu pour les couples ou petites familles. Cette villa allie intimité et confort avec une piscine privée et vue panoramique sur les lacs sacrés.",
      en: "A peaceful haven designed for couples or small families. This villa combines intimacy and comfort with a private pool and panoramic views of the sacred lakes.",
    },
    features: [
      "2 chambres avec climatisation",
      "Piscine à débordement privée",
      "Terrasse panoramique 30m²",
      "Cuisine équipée premium",
      "Parking privé",
      "Jardin tropical privatif",
    ],
    images: [
      "/images/villa-intimite-1.jpg",
      "/images/villa-intimite-2.jpg",
      "/images/villa-intimite-3.jpg",
    ],
    floorPlan: "/plans/villa-intimite-plan.pdf",
    roi: {
      annualReturn: "8-12%",
      rentabilityRate: "10.5%",
    },
  },
  {
    id: "villa-harmonie",
    type: "B",
    name: "VILLA HARMONIE",
    title: "Villa 3 chambres - Équilibre parfait",
    bedrooms: 3,
    surface: "125 m²",
    price: "À partir de 235 000€",
    description: {
      fr: "L'équilibre parfait entre espace de vie et intimité familiale. Cette villa offre des volumes généreux et une connexion harmonieuse avec la nature environnante.",
      en: "The perfect balance between living space and family intimacy. This villa offers generous volumes and a harmonious connection with the surrounding nature.",
    },
    features: [
      "3 chambres dont suite parentale",
      "Piscine à débordement 60m²",
      "Terrasse et pergola 45m²",
      "Cuisine américaine équipée",
      "Bureau/espace de travail",
      "2 parkings couverts",
      "Jardin paysager 200m²",
    ],
    images: [
      "/images/villa-harmonie-1.jpg",
      "/images/villa-harmonie-2.jpg",
      "/images/villa-harmonie-3.jpg",
    ],
    floorPlan: "/plans/villa-harmonie-plan.pdf",
    roi: {
      annualReturn: "9-13%",
      rentabilityRate: "11.2%",
    },
  },
  {
    id: "villa-prestige",
    type: "C",
    name: "VILLA PRESTIGE",
    title: "Villa 4 chambres - Excellence absolue",
    bedrooms: 4,
    surface: "165 m²",
    price: "À partir de 320 000€",
    description: {
      fr: "Le summum du raffinement et de l'art de vivre à Madagascar. Cette villa d'exception offre des prestations haut de gamme et une vue imprenable sur l'océan.",
      en: "The pinnacle of refinement and lifestyle in Madagascar. This exceptional villa offers high-end services and breathtaking ocean views.",
    },
    features: [
      "4 chambres avec salles de bain privatives",
      "Suite parentale avec dressing",
      "Piscine à débordement 80m²",
      "Terrasse multi-niveaux 70m²",
      "Cuisine gastronomique équipée",
      "Salon et salle à manger séparés",
      "Bureau et bibliothèque",
      "Garage 2 voitures",
      "Jardin tropical 300m²",
      "Vue mer panoramique 180°",
    ],
    images: [
      "/images/villa-prestige-1.jpg",
      "/images/villa-prestige-2.jpg",
      "/images/villa-prestige-3.jpg",
      "/images/villa-prestige-4.jpg",
    ],
    floorPlan: "/plans/villa-prestige-plan.pdf",
    roi: {
      annualReturn: "10-15%",
      rentabilityRate: "12.8%",
    },
  },
];

// Informations de contact
export const contactInfo: ContactInfo = {
  email: "info@domenea.com",
  phone: "+33 7 71 14 02 91",
  whatsapp: "+33 7 71 14 02 91",
  address: "Bureau commercial Mont Passot, Nosy Be, Madagascar",
  hours: {
    weekdays: "9h-18h (GMT+3, heure Madagascar)",
    weekends: "Sur rendez-vous",
    emergency: "WhatsApp 24h/24",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/domenea_invest",
    facebook: "https://www.facebook.com/profile.php?id=61579184197302",
  },
};

// Messages émotionnels
// export const emotionalMessages = {
//   fr: [
//     "À l'abri du bruit, face à l'extraordinaire",
//     "Réveillez-vous au murmure des lacs sacrés",
//     "Partagez des couchers de soleil inoubliables avec ceux que vous aimez"
//   ],
//   en: [
//     "Away from the noise, facing the extraordinary",
//     "Wake up to the whispers of sacred lakes",
//     "Share unforgettable sunsets with those you love"
//   ]
// };

export const emotionalMessages = {
  fr: ["", "", ""],
  en: ["", "", ""],
};

// Call-to-actions
export const callToActions = {
  primary: {
    fr: "Obtenez la brochure complète, plans & projections ROI (en un clic)",
    en: "Get the complete brochure, plans & ROI projections (in one click)",
  },
  secondary: {
    fr: "Réservez votre visite privée de TAO Passot",
    en: "Book your private visit to TAO Passot",
  },
};
