import { AppProvider } from "./context/AppContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import LocationSection from "./components/sections/LocationSection";
import ProgramsPreviewSection from "./components/sections/ProgramsPreviewSection";
import ResidenceShowcaseSection from "./components/sections/ResidenceShowcaseSection";
import VillasShowcaseSection from "./components/sections/VillasShowcaseSection";
import FeaturesGridSection from "./components/sections/FeaturesGridSection";
import HoverCardsSection from "./components/sections/HoverCardsSection";
import LifestylePresentationSection from "./components/sections/LifestylePresentationSection";
import InvestmentOpportunitySection from "./components/sections/InvestmentOpportunitySection";
import GlobalLoader from "./components/ui/GlobalLoader";
import { useAssetLoader } from "./hooks/useAssetLoader";
import { useState, useMemo } from "react";
// import VillasSection from "./components/sections/VillasSection";
// import ContactSection from "./components/sections/ContactSection";
// import ROICalculatorWidget from "./components/roi/ROICalculatorWidget";
// import DownloadsCenter from "./components/downloads/DownloadsCenter";
import "./App.css";

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  // Assets critiques à précharger (useMemo pour éviter la boucle infinie)
  const criticalImages = useMemo(() => [
    "/assets/Logo 2.png", // INTIMITÉ card
    "/assets/Logo 1.png", // INTIMITÉ card
    "/assets/Logo 3.png", // INTIMITÉ card
    "/assets/Photo 8-3.jpeg", // Hero background
    "/assets/Photo 8-1.jpeg", // HARMONIE card
    "/assets/Photo 8-2.jpg", // LifestylePresentationSection - Architecture moderne
    "/assets/Photo 14.jpg", // CONCEPT card
    "/assets/Photo 16.jpg", // CONCEPT card
    "/assets/photo-2-plage.jpg", // CONCEPT card
    "/assets/Photo 12.jpg", // LifestylePresentationSection - Vue aérienne
  ], []);

  // Pas de vidéos dans le loader global - HeroSection gère son propre chargement
  const { isLoading } = useAssetLoader({
    images: criticalImages,
    minimumLoadTime: 2500, // 2.5s minimum pour l'expérience
  });

  const handleLoadingComplete = () => {
    setIsAppLoaded(true);
  };

  // Afficher le loader pendant le chargement

  console.log(isLoading, isAppLoaded);
  if (isLoading || !isAppLoaded) {
    return (
      <AppProvider>
        <GlobalLoader onLoadingComplete={handleLoadingComplete} />
      </AppProvider>
    );
  }

  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Header />

        {/* Page d'accueil */}
        <main>
          {/* Hero Section avec vidéo et messages émotionnels */}
          <HeroSection />

          {/* Section Localisation avec carte interactive */}
          <LocationSection />

          {/* Section Programmes Preview */}
          <ProgramsPreviewSection />

          {/* Section Résidence Showcase */}
          <ResidenceShowcaseSection />

          {/* Section Villas Showcase */}
          <VillasShowcaseSection />

          {/* Section Features Grid */}
          <FeaturesGridSection />

          {/* Section Hover Cards */}
          <HoverCardsSection />
          <LifestylePresentationSection />
          <InvestmentOpportunitySection />

          {/* Calculateur ROI */}
          {/* <ROICalculatorWidget /> */}

          {/* Centre de téléchargement */}
          {/* <DownloadsCenter /> */}

          {/* Section Contact */}
          {/* <ContactSection /> */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
