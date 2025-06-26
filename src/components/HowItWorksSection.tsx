const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Ricevi la Consulenza",
      description: "Una consulenza personalizzata per comprendere i tuoi bisogni e definire la strategia migliore.",
      icon: "💬",
      delay: "animate-delay-100"
    },
    {
      number: "2", 
      title: "Carica i Dati",
      description: "Carica in modo sicuro e veloce i tuoi documenti in un sistema cloud ordinato, protetto e sempre accessibile.",
      icon: "📊",
      delay: "animate-delay-200"
    },
    {
      number: "3",
      title: "Verifica Conformità", 
      description: "Controlli automatici sulla conformità normativa con analisi intelligenti e report di eventuali criticità.",
      icon: "✅",
      delay: "animate-delay-300"
    },
    {
      number: "4",
      title: "Attivazione Piattaforma",
      description: "Configuriamo la piattaforma con tutti gli strumenti necessari per iniziare subito a lavorare in sicurezza.",
      icon: "🚀",
      delay: "animate-delay-400"
    },
    {
      number: "5",
      title: "Pensiamo a Tutto Noi",
      description: "non devi più fare nulla.La piattaforma ti avviserà al momento opportuno",
      icon: "🧘‍♂️",
      delay: "animate-delay-500",
      special: true
    }
  ];

  return (
    <section id="vantaggi" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
                className={`group animate-slide-in-right ${step.delay} opacity-0`}
              >
                {/* Step Card */}
                <div className={`
                  relative bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 text-center
                  shadow-lg shadow-brand-red/10
                  hover:shadow-2xl hover:shadow-brand-red/30 
                  transition-all duration-700 transform hover:scale-105 hover:-translate-y-2
                  border border-brand-red/10
                  ${step.special ? 'ring-2 ring-brand-red ring-opacity-30' : ''}
                `}>
                  
                  {/* Base Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-red/5 to-brand-red-light/5 opacity-100"></div>
                  
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
                  <h3 className="text-xl font-black text-gray-800 mb-4 group-hover:text-brand-red transition-colors duration-300">
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
    </section>
  );
};

export default HowItWorksSection;