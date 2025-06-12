
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-red rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-red rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-red rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl">
        {/* Left Content */}
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-red bg-opacity-10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
              <span>Soluzione Completa per la Sicurezza</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              <span className="gradient-text">Tutela</span><br />
              <span className="text-gray-800">Impresa</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
              La tua sicurezza aziendale<br />
              <span className="gradient-text">sempre sotto controllo</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Gestisci tutti gli aspetti della sicurezza aziendale con una piattaforma moderna, intuitiva e conforme alle normative vigenti.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Inizia Gratis
            </button>
            <button className="border-2 border-brand-red text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-red hover:text-white transition-all duration-300">
              Richiedi Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red">10K+</div>
              <div className="text-gray-600 text-sm">Aziende Clienti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red">24/7</div>
              <div className="text-gray-600 text-sm">Supporto</div>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Image */}
        <div className={`relative ${isVisible ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Dashboard Sicurezza Aziendale" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-brand-red to-brand-red-light text-white p-4 rounded-2xl shadow-xl animate-pulse-glow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-xl shadow-lg">
              <div className="text-sm font-bold">98% Conformità</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
