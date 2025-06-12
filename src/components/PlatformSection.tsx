
import { useEffect, useState } from 'react';

const PlatformSection = () => {
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

    const section = document.getElementById('platform-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '👤',
      title: 'GESTIONE PERSONALE INTEGRATO',
      description: 'Controllo completo del personale e delle competenze',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: '🏭',
      title: 'GESTIONE MACCHINARI LAVORATORI',
      description: 'Monitoraggio e manutenzione di tutti i macchinari',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
      borderColor: 'border-red-200'
    },
    {
      icon: '🏥',
      title: 'GESTIONE INFORTUNI INCIDENTI',
      description: 'Tracciamento e prevenzione degli incidenti sul lavoro',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      icon: '🩺',
      title: 'GESTIONE SORVEGLIANZA SANITARIA',
      description: 'Controlli sanitari e certificazioni mediche',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      icon: '⚙️',
      title: 'GESTIONE APPARTI FORNITURE',
      description: 'Controllo di appalti e fornitori qualificati',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      icon: '🔧',
      title: 'MANUTENZIONE MACCHINE E IMPIANTI',
      description: 'Pianificazione e gestione della manutenzione',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-200'
    },
    {
      icon: '📋',
      title: 'DVR ANALISI DI RISCHIO',
      description: 'Valutazione rischi e misure preventive',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-200'
    },
    {
      icon: '🛡️',
      title: 'GESTIONE DISPOSITIVI DI PROTEZIONE',
      description: 'Controllo e distribuzione DPI aziendali',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-200'
    }
  ];

  return (
    <section id="platform-section" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-brand-red to-brand-red-light opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-teal-500 opacity-5 rounded-full blur-2xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-brand-red opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-6 h-6 bg-blue-500 opacity-20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-500 opacity-30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Piattaforma All-in-One</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
            Una piattaforma,<br />
            <span className="gradient-text">TANTE FUNZIONALITÀ</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tutela Impresa pensa a tutto, assolutamente a tutto. 
            Una soluzione completa per ogni aspetto della sicurezza aziendale.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group ${isVisible ? `animate-fade-in animate-delay-${(index + 1) * 50}` : 'opacity-0'}`}
            >
              <div className={`bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 border-2 ${feature.borderColor} relative overflow-hidden h-full`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                
                <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                  {/* Enhanced Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-black text-gray-800 text-sm leading-tight uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Enhanced Button */}
                  <button className={`group/btn w-full bg-gradient-to-r ${feature.color} text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}>
                    <span>SCOPRI</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className={`text-center ${isVisible ? 'animate-scale-in animate-delay-500' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto text-white border-4 border-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="text-7xl animate-bounce">🥐</div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-6">
                Business Protection for the Price of a Cappuccino
              </h3>
              
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Protezione completa per la tua azienda a un prezzo incredibile. 
                Inizia oggi stesso e trasforma la sicurezza aziendale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-white text-brand-red px-12 py-5 rounded-2xl font-black text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl flex items-center space-x-3">
                  <span>Inizia Ora</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </button>
                
                <button className="border-3 border-white text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-brand-red transition-all duration-500 transform hover:scale-110">
                  Scopri i Prezzi
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white border-opacity-30">
                <p className="text-sm opacity-75">
                  ✅ 30 giorni di prova gratuita • ✅ Nessun vincolo • ✅ Supporto 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
