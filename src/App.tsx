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
import BrochureRequestSection from "./components/sections/BrochureRequestSection";
import GlobalLoader from "./components/ui/GlobalLoader";
import VRTourPage from "./pages/VRTourPage";
import { useAssetLoader } from "./hooks/useAssetLoader";
import { useVideoCache } from "./hooks/useVideoCache";
import { useState, useMemo, useEffect } from "react";
// import VillasSection from "./components/sections/VillasSection";
// import ContactSection from "./components/sections/ContactSection";
// import ROICalculatorWidget from "./components/roi/ROICalculatorWidget";
// import DownloadsCenter from "./components/downloads/DownloadsCenter";
import "./App.css";

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "vr-tour">("home");

  // Hook pour la gestion du cache vidéo
  const { preloadVideo } = useVideoCache();

  // Assets critiques à précharger (useMemo pour éviter la boucle infinie)
  const criticalImages = useMemo(
    () => [
      "/assets/hero-fallback-ocean.png", // Hero fallback PRIORITAIRE - doit être en premier
      "/assets/Logo 2.png", // INTIMITÉ card
      "/assets/Logo 1.png", // INTIMITÉ card
      "/assets/Logo 3.png", // INTIMITÉ card
      "/assets/Photo 8-3.jpeg", // Hero background (ancien)
      "/assets/Photo 8-1.jpeg", // HARMONIE card
      "/assets/Photo 8-2.jpg", // LifestylePresentationSection - Architecture moderne
      "/assets/Photo 14.jpg", // CONCEPT card
      "/assets/Photo 16.jpg", // CONCEPT card
      "/assets/photo-2-plage.jpg", // CONCEPT card
      "/assets/Photo 12.jpg", // LifestylePresentationSection - Vue aérienne
    ],
    []
  );

  // Préchargement unique de la vidéo hero avec Blob URL
  useEffect(() => {
    const preloadHeroVideo = async () => {
      try {
        console.log("Starting SINGLE hero video download...");
        const blobUrl = await preloadVideo("/assets/vide_hero.mp4");
        console.log(
          "Hero video downloaded once and cached as Blob URL:",
          blobUrl
        );
      } catch (error) {
        console.warn(
          "Hero video preload failed, components will fallback to normal loading:",
          error
        );
      }
    };

    preloadHeroVideo();
  }, [preloadVideo]);

  // Assets loader pour les images critiques
  const { isLoading } = useAssetLoader({
    images: criticalImages,
    minimumLoadTime: 2500, // 2.5s minimum pour l'expérience
  });

  const handleLoadingComplete = () => {
    setIsAppLoaded(true);
  };

  // Navigation handlers
  const handleOpenVRTour = () => {
    setCurrentPage("vr-tour");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
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

  // Afficher la page VR Tour
  if (currentPage === "vr-tour") {
    return (
      <AppProvider>
        <VRTourPage onBackToHome={handleBackToHome} />
      </AppProvider>
    );
  }

  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Header onOpenVRTour={handleOpenVRTour} />

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
          <BrochureRequestSection />

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
