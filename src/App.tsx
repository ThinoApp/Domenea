import { AppProvider } from './context/AppContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import LocationSection from './components/sections/LocationSection';
import ProgramsPreviewSection from './components/sections/ProgramsPreviewSection';
import VillasSection from './components/sections/VillasSection';
import ContactSection from './components/sections/ContactSection';
import ROICalculatorWidget from './components/roi/ROICalculatorWidget';
import DownloadsCenter from './components/downloads/DownloadsCenter';
import "./App.css";

function App() {
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

          {/* Section Programmes - Villas */}
          <VillasSection />

          {/* Section Concept avec calculateur ROI */}
          <section id="concept" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  L'Art de Vivre TAO
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                  Le bien-être n'est pas un simple luxe, c'est un mode de vie. 
                  Matériaux, espaces privés et partagés favorisent la connexion, le mouvement et la quiétude.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Calculateur ROI */}
                <ROICalculatorWidget />

                {/* Centre de téléchargement */}
                <DownloadsCenter />
              </div>
            </div>
          </section>

          {/* Section Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
