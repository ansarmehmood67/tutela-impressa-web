import React, { useEffect, useRef, useState } from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Carica Dati",
      description: "Semplice caricamento e gestione dei documenti aziendali",
      icon: "📁",
    },
    {
      number: "2",
      title: "Struttura Conformità",
      description: "Organizzazione completa dei processi e conformità normativa",
      icon: "📋",
    },
    {
      number: "3",
      title: "Ricevi Avvisi",
      description: "Notifiche tempestive e promemoria automatici",
      icon: "🔔",
    },
    {
      number: "4",
      title: "Archivia & Report",
      description: "Documentazione avanzata e reportistica per i controlli",
      icon: "📊",
    }
  ];

  const [visible, setVisible] = useState<number[]>([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');
          if (entry.isIntersecting && !visible.includes(Number(index))) {
            setVisible((prev) => [...prev, Number(index)]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visible]);

  return (
    <section id="vantaggi" className="py-24 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-red text-white px-5 py-2 rounded-full font-semibold mb-4 shadow-md">
            ⚡ Processo Semplificato
          </span>
          <h2 className="text-6xl font-black text-gray-900 mb-4">
            Come Funziona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tutela Impresa automatizza ogni processo di sicurezza aziendale con un sistema 
            intelligente e intuitivo che semplifica la gestione normativa.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`
                bg-brand-red/15 rounded-2xl p-8 border border-brand-red/20 shadow
                transform transition-all duration-300
                hover:scale-[1.05] hover:shadow-xl
                ${visible.includes(index) ? 'animate-fade-in-left' : 'opacity-0'}
              `}
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-red text-white rounded-full font-bold mb-6">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-24 h-24 text-4xl flex items-center justify-center mx-auto mb-6 bg-brand-red text-white rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-gray-700 mb-6 text-sm text-center">
                {step.description}
              </p>

              {/* CTA */}
              <button className="w-full bg-brand-red text-white py-3 rounded-full font-semibold hover:bg-brand-red-light transition-colors text-sm">
                Scopri di più →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
