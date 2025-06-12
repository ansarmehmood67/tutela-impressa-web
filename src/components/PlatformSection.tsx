
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
      color: 'bg-blue-500'
    },
    {
      icon: '🏭',
      title: 'GESTIONE MACCHINARI LAVORATORI',
      color: 'bg-red-500'
    },
    {
      icon: '🏥',
      title: 'GESTIONE INFORTUNI INCIDENTI',
      color: 'bg-green-500'
    },
    {
      icon: '🩺',
      title: 'GESTIONE SORVEGLIANZA SANITARIA',
      color: 'bg-purple-500'
    },
    {
      icon: '⚙️',
      title: 'GESTIONE APPARTI FORNITURE',
      color: 'bg-orange-500'
    },
    {
      icon: '🔧',
      title: 'MANUTENZIONE MACCHINE E IMPIANTI',
      color: 'bg-teal-500'
    },
    {
      icon: '📋',
      title: 'DVR ANALISI DI RISCHIO E MISURE PREVENTIVE',
      color: 'bg-indigo-500'
    },
    {
      icon: '🛡️',
      title: 'GESTIONE DISPOSITIVI DI PROTEZIONE',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section id="platform-section" className="py-20 gradient-bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Una piattaforma,<br />
            <span className="gradient-text">TANTE FUNZIONALITÀ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tutela Impresa pensa a tutto, assolutamente a tutto.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-l-4 border-brand-red ${
                isVisible ? `animate-fade-in animate-delay-${(index + 1) * 100}` : 'opacity-0'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm leading-tight">
                  {feature.title}
                </h3>
                <button className="text-brand-red font-semibold text-sm hover:text-brand-red-dark transition-colors">
                  SCOPRI →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-scale-in animate-delay-500' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border-2 border-brand-red">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🥐 Business Protection for the Price of a Cappuccino
            </h3>
            <p className="text-gray-600 mb-6">
              Protezione completa per la tua azienda a un prezzo incredibile
            </p>
            <button className="bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-brand-red-dark transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Inizia Ora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
