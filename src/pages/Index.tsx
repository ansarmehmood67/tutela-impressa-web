
import CustomCursor from '../components/CustomCursor';
import HeroSection from '../components/HeroSection';
import LogosSection from '../components/LogosSection';
import AboutSection from '../components/AboutSection';
import ManagementSection from '../components/ManagementSection';
import FeaturesSection from '../components/FeaturesSection';
import PlatformSection from '../components/PlatformSection';
import TestimonialsSection from '../components/TestimonialsSection';
import VideoSection from '../components/VideoSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TI</span>
              </div>
              <span className="font-bold text-xl text-gray-800">TUTELA IMPRESA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-brand-red transition-colors">Caratteristiche</a>
              <a href="#" className="text-gray-600 hover:text-brand-red transition-colors">Prezzi</a>
              <a href="#" className="text-gray-600 hover:text-brand-red transition-colors">Blog</a>
              <a href="#" className="text-gray-600 hover:text-brand-red transition-colors">Contatti</a>
              <button className="bg-brand-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-red-dark transition-all duration-300 transform hover:scale-105">
                Prova Gratis
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <LogosSection />
        <AboutSection />
        <ManagementSection />
        <FeaturesSection />
        <PlatformSection />
        <TestimonialsSection />
        <VideoSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TI</span>
                </div>
                <span className="font-bold text-xl">TUTELA IMPRESA</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                La soluzione completa per la gestione della sicurezza aziendale e degli adempimenti normativi.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Prodotto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Caratteristiche</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prezzi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sicurezza</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Supporto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentazione</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Formazione</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contatti</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contatti</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@tutelaimpresa.com</p>
                <p>📞 +39 02 1234 5678</p>
                <p>📍 Milano, Italia</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tutela Impresa. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
