
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🛡️',
      title: 'Sicurezza Totale',
      description: 'Protezione completa per ogni aspetto aziendale'
    },
    {
      icon: '📊',
      title: 'Analytics Avanzati',
      description: 'Monitoraggio real-time e reportistica dettagliata'
    },
    {
      icon: '⚡',
      title: 'Automazione Smart',
      description: 'Processi automatizzati per massima efficienza'
    }
  ];

  return (
    <section id="about-section" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-brand-red to-brand-red-light opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-r from-brand-red to-brand-red-light opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-brand-red opacity-5 rounded-full"></div>
        
        {/* Geometric Elements */}
        <div className="absolute top-16 left-16 w-4 h-4 bg-brand-red opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-6 h-6 bg-brand-red opacity-20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-brand-red opacity-30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <span>✨</span>
              <span>Innovazione e Sicurezza</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
              <span className="gradient-text">Cos'è</span><br />
              <span className="text-gray-800">Tutela Impresa</span>
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Un software gestionale che si rivolge alle aziende per gli adempimenti 
                legislativi SSL (Sicurezza, Igiene, Audit e Documentario). Fornisce 
                supporti completi per il controllo della sicurezza aziendale.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-scale-in animate-delay-300' : 'opacity-0'}`}>
              <button className="group relative overflow-hidden bg-gradient-to-r from-brand-red to-brand-red-light text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Richiedi la Demo</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red-light to-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
          
          {/* Right Content - Enhanced Visual */}
          <div className={`${isVisible ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Container */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 transform hover:scale-105 transition-all duration-700">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-red to-brand-red-light rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Sistema SSL</h3>
                      <p className="text-gray-500 text-sm">Controllo Completo</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Attivo
                  </div>
                </div>
                
                {/* Progress Indicators */}
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Documentazione</span>
                      <span className="text-sm text-brand-red font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-red to-brand-red-light h-full rounded-full w-[95%] shadow-inner animate-pulse-glow"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Formazione</span>
                      <span className="text-sm text-blue-600 font-bold">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full w-[87%] shadow-inner"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Controlli</span>
                      <span className="text-sm text-green-600 font-bold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full w-[92%] shadow-inner"></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-brand-red">247</div>
                    <div className="text-xs text-gray-600">Dipendenti</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-600">15</div>
                    <div className="text-xs text-gray-600">Sedi</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-xs text-gray-600">Conformità</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center shadow-xl animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white border-4 border-brand-red rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
