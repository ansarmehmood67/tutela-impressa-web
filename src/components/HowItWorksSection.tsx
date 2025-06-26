import { useEffect, useRef } from 'react';

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const steps = [
    {
      number: "1",
      title: "Ricevi Consulenza",
      description: "Consulenza personalizzata per identificare le tue esigenze specifiche e definire la strategia migliore per la tua azienda.",
      icon: "💬",
    },
    {
      number: "2", 
      title: "Carica i Dati",
      description: "Caricamento semplificato e sicuro di tutti i tuoi documenti aziendali in un ambiente protetto e organizzato.",
      icon: "📊",
    },
    {
      number: "3",
      title: "Verifica Conformità", 
      description: "Analisi automatica della conformità normativa con controlli intelligenti e identificazione delle aree di miglioramento.",
      icon: "✅",
    },
    {
      number: "4",
      title: "Attiva Piattaforma",
      description: "Configurazione completa della piattaforma con tutti gli strumenti personalizzati per le tue necessità operative.",
      icon: "🚀",
    },
    {
      number: "5",
      title: "Pensiamo a Tutto",
      description: "Non devi più fare nulla. La piattaforma ti avviserà al momento opportuno.",
      icon: "🧘‍♂️",
      special: true
    }
  ];

  useEffect(() => {
  const shownCards = new Set<number>(); // Track already-animated cards
  const observers: IntersectionObserver[] = [];

  cardsRef.current.forEach((card, index) => {
    if (card) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !shownCards.has(index)) {
              const cardElement = entry.target as HTMLElement;
              cardElement.classList.remove('card-hidden');
              cardElement.classList.add('card-visible');
              shownCards.add(index); // Mark this card as shown
              observer.unobserve(cardElement); // Stop observing this card
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '0px 0px -20px 0px',
        }
      );

      observer.observe(card);
      observers.push(observer);
    }
  });

  return () => {
    observers.forEach((observer) => observer.disconnect());
  };
}, []);


  return (
    <section 
    id="vantaggi"
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-red-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl animate-pulse-glow">
            <span>✨ Processo Innovativo</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
            Come Funziona
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Un processo semplice e automatizzato che trasforma la gestione della sicurezza aziendale in un'esperienza fluida e senza stress.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red opacity-20 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group card-hidden"
              >
                {/* Step Card */}
                <div className={`
                  relative bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 text-center h-full
                  shadow-lg shadow-brand-red/10
                  hover:shadow-2xl hover:shadow-brand-red/30 
                  transition-all duration-700 transform hover:scale-105 hover:-translate-y-2
                  border border-brand-red/10
                  ${step.special ? 'ring-2 ring-brand-red ring-opacity-30' : ''}
                `}>
                  
                  {/* Base Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-red/10 to-brand-red-light/10 opacity-100"></div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-red/20 to-brand-red-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* Step Number */}
                  <div className="relative w-16 h-16 bg-gradient-to-r from-brand-red to-brand-red-light text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg mx-auto mb-6 group-hover:shadow-brand-red/40 transition-shadow duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-black text-gray-800 mb-4 group-hover:text-brand-red transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Special Badge for Last Step */}
                  {step.special && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      Finale
                    </div>
                  )}
                </div>

                {/* Step Connector Arrow (Hidden on Mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center items-center absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        
      </div>

      <style>{`
        .card-hidden {
          opacity: 0;
          transform: translateX(100px);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .card-visible {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        @media (max-width: 1023px) {
          .card-hidden {
            transform: translateX(150px);
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;