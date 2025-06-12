
import { useEffect, useState } from 'react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('features-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '📤',
      title: 'CARICA I DATI',
      description: 'Upload e gestione semplificata dei documenti aziendali',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: '📋',
      title: 'STRUTTURA ADEMPIMENTI',
      description: 'Organizzazione completa dei processi e conformità normative',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      icon: '🔔',
      title: 'RICEVI ALERT',
      description: 'Notifiche tempestive e promemoria automatici',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      icon: '📊',
      title: 'ARCHIVIA E REPORT',
      description: 'Documentazione e reportistica avanzata per controlli',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section id="features-section" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-brand-red to-brand-red-light opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-blue-500 opacity-5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Processo Semplificato</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
            <span className="gradient-text">COME FUNZIONA</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tutela Impresa automatizza ogni processo di sicurezza aziendale con un sistema 
            intelligente e intuitivo che semplifica la gestione normativa.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
            <div className="h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent"></div>
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-4 h-4 bg-brand-red rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-2/4 transform -translate-y-1/2 w-4 h-4 bg-brand-red rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-3/4 transform -translate-y-1/2 w-4 h-4 bg-brand-red rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative ${isVisible ? `animate-scale-in animate-delay-${(index + 1) * 100}` : 'opacity-0'}`}
              >
                {/* Enhanced Card */}
                <div className={`bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 border-2 ${feature.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="text-center mb-6 relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    
                    <h3 className="text-lg font-black text-gray-800 mb-3 tracking-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Enhanced Bottom Section */}
                  <div className="mt-6 pt-6 border-t border-gray-200 relative z-10">
                    <button className={`w-full bg-gradient-to-r ${feature.color} text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}>
                      <span>Scopri di più</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-brand-red to-brand-red-light rounded-3xl p-12 max-w-5xl mx-auto text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="text-6xl">🔍</div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-6">
                Ispezione? Nessun problema.
              </h3>
              
              <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Con un click hai sempre tutto sotto controllo e verifichi i dati, 
                documenti richiesti, SOA, registrazioni enti, ORI formazione 
                specifica per cantieri, Registrazioni sanitarie, Ispezioni Enti.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
                  <span>Scopri di più</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
                  Richiedi Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
