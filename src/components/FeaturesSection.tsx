
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
      description: 'Upload e gestione semplificata'
    },
    {
      icon: '📋',
      title: 'STRUTTURA ADEMPIMENTI',
      description: 'Organizzazione completa dei processi'
    },
    {
      icon: '🔔',
      title: 'RICEVI ALERT',
      description: 'Notifiche tempestive e promemoria'
    },
    {
      icon: '📊',
      title: 'ARCHIVIA E REPORT',
      description: 'Documentazione e reportistica avanzata'
    }
  ];

  return (
    <section id="features-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">COME FUNZIONA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tutela Impresa pensa a tutto, assolutamente a tutto.
          </p>
        </div>

        {/* Features Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center ${isVisible ? `animate-scale-in animate-delay-${(index + 1) * 100}` : 'opacity-0'}`}
              >
                {/* Icon Container */}
                <div className="relative mx-auto mb-6">
                  <div className="w-24 h-24 bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 mx-auto">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
          <div className="bg-brand-red text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🔍 Ispezione? Nessun problema.
            </h3>
            <p className="text-lg opacity-90">
              Con un click hai sempre tutto sotto controllo e verifichi i dati, 
              documenti richiesti, SOA, registrazioni enti, ORI formazione 
              specifica per cantieri, Registrazioni sanitarie, Ispezioni Enti, etc.
            </p>
            <button className="mt-6 bg-white text-brand-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Scopri di più
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
