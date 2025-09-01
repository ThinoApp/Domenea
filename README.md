# TAO Passot - Frontend

Site vitrine pour la résidence TAO Passot à Nosy Be, Madagascar développé par DOMENEA.

## 🏗️ Architecture du Projet

### Stack Technique
- **React 19** avec TypeScript
- **Vite** comme bundler
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations (à implémenter)

### Structure des Dossiers
```
src/
├── components/          # Composants UI réutilisables
│   ├── layout/         # Header, Footer
│   ├── sections/       # HeroSection, VillasSection, ContactSection
│   ├── villa/          # VillaCard et composants liés aux villas
│   ├── contact/        # ContactForm
│   ├── roi/            # ROICalculatorWidget
│   └── downloads/      # DownloadsCenter
├── hooks/              # Hooks personnalisés (logique métier)
│   ├── useLanguage.ts  # Gestion multilingue
│   ├── useVillas.ts    # Gestion des villas
│   ├── useFavorites.ts # Système de favoris
│   ├── useContact.ts   # Formulaire de contact
│   ├── useROICalculator.ts # Calculateur ROI
│   └── useDownloads.ts # Centre de téléchargement
├── context/            # Context React pour le state global
│   └── AppContext.tsx  # Provider principal
├── data/              # Données mock
│   └── mockData.ts    # Données JSON centralisées
├── types/             # Types TypeScript
│   └── index.ts       # Définitions des interfaces
└── App.tsx           # Composant principal
```

## 🎯 Fonctionnalités Implémentées

### ✅ Séparation UI/Logique
- **Hooks personnalisés** pour toute la logique métier
- **Composants purement UI** sans logique complexe
- **Context centralisé** pour le state management

### ✅ Gestion des Données
- **Mock data JSON** pour les villas, contact, projets
- **Pas d'appels API** - tout en local pour l'instant
- **Types TypeScript** stricts pour la sécurité

### ✅ Fonctionnalités Métier
- **Multilingue** FR/EN avec détection automatique
- **Système de favoris** avec localStorage
- **Calculateur ROI** interactif
- **Centre de téléchargement** avec simulation
- **Formulaire de contact** complet avec validation

## 🚀 Démarrage Rapide

### Installation
```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build
```

### Structure des Villas
Trois types de villas sont configurés :
- **Villa Intimité** (Type A) - 2 chambres
- **Villa Harmonie** (Type B) - 3 chambres  
- **Villa Prestige** (Type C) - 4 chambres

### Données Mock
Toutes les données sont centralisées dans `src/data/mockData.ts` :
- Informations du projet TAO Passot
- Catalogue des 3 villas avec prix, ROI, caractéristiques
- Informations de contact DOMENEA
- Messages émotionnels et call-to-actions
- Ressources téléchargeables

## 🛠️ Hooks Disponibles

### `useLanguage()`
Gestion du multilingue FR/EN :
```typescript
const { language, setLanguage, toggleLanguage, getText } = useLanguage();
```

### `useVillas()`
Gestion du catalogue de villas :
```typescript
const { allVillas, selectedVilla, selectVilla, getVillaById } = useVillas();
```

### `useFavorites()`
Système de favoris persistant :
```typescript
const { favorites, addToFavorites, isFavorite, toggleFavorite } = useFavorites();
```

### `useContact()`
Formulaire de contact avec validation :
```typescript
const { formData, updateField, submitForm, errors, isSubmitting } = useContact();
```

### `useROICalculator()`
Calculateur de rentabilité :
```typescript
const { calculation, setInvestmentAmount, calculateForVilla } = useROICalculator();
```

### `useDownloads()`
Centre de téléchargement :
```typescript
const { allResources, downloadResource, isDownloading } = useDownloads();
```

## 🎨 Composants Principaux

- **HeroSection** - Section d'accueil avec messages émotionnels
- **VillasSection** - Catalogue des villas avec VillaCard
- **ContactSection** - Formulaire de contact + infos
- **ROICalculatorWidget** - Calculateur interactif
- **DownloadsCenter** - Ressources téléchargeables

## 📱 Responsive Design
- **Mobile First** avec Tailwind CSS
- **Breakpoints** : mobile (320px+), tablette (768px+), desktop (1024px+)
- **Navigation mobile** avec menu hamburger

## 🔧 Configuration

### Tailwind CSS
Déjà configuré avec Tailwind 4.x dans `vite.config.ts`

### TypeScript
Configuration stricte pour la sécurité des types

### ESLint
Règles configurées pour React 19 + TypeScript

## 📋 Prochaines Étapes

1. **Ajouter Framer Motion** pour les animations
2. **Intégrer les vraies images** des villas (actuellement placeholders)
3. **Connecter les API** quand le backend sera disponible
4. **Optimiser les performances** avec lazy loading
5. **Ajouter les tests** unitaires et d'intégration

## 🏢 Données de Contact

- **Email** : info@domenea.com  
- **Téléphone** : +33 7 71 14 02 91
- **Instagram** : [@domenea_invest](https://www.instagram.com/domenea_invest)
- **Facebook** : [Page officielle](https://www.facebook.com/profile.php?id=61579184197302)

---

**Développé selon le cahier des charges TAO Passot v2.0**
