const Sectors = () => {
  const sectors = [
    {
      title: "Manifatturiero",
      description: "Soluzioni complete per industrie manifatturiere, dalla gestione dei rischi alla conformità normativa.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Gestione macchine e impianti", "DPI e formazione operatori", "Controllo sostanze chimiche", "Audit di sicurezza"],
      icon: "🏭",
      color: "from-brand-red to-brand-red-light"
    },
    {
      title: "Edilizia",
      description: "Gestione completa della sicurezza nei cantieri, POS, coordinamento e formazione del personale.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["POS e PSC digitali", "Gestione ponteggi e DPI", "Coordinamento CSP/CSE", "Formazione cantieristi"],
      icon: "🏗️",
      color: "from-brand-red to-brand-red-light"
    },
    {
      title: "Alimentare",
      description: "Sicurezza alimentare e conformità HACCP con monitoraggio automatizzato e controllo qualità.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Sistema HACCP digitale", "Controllo temperature", "Gestione allergeni", "Audit BRC/IFS"],
      icon: "🍽️",
      color: "from-brand-red to-brand-red-light"
    },
    {
      title: "Chimico",
      description: "Gestione avanzata di sostanze pericolose, schede di sicurezza e protocolli di emergenza.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Registro sostanze chimiche", "Schede di sicurezza SDS", "Piani di emergenza", "Monitoraggio esposizioni"],
      icon: "⚗️",
      color: "from-brand-red to-brand-red-light"
    },
    {
      title: "Servizi",
      description: "Soluzioni flessibili per aziende di servizi, uffici e attività commerciali di ogni dimensione.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["DVR per uffici", "Gestione stress lavoro", "Formazione digitale", "Sorveglianza sanitaria"],
      icon: "💼",
      color: "from-brand-red to-brand-red-light"
    },
    {
      title: "Trasporti",
      description: "Sicurezza nel trasporto merci e persone, gestione flotte e conformità alle normative del settore.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Gestione autisti", "Controlli tecnici mezzi", "ADR e merci pericolose", "Tachigrafi digitali"],
      icon: "🚛",
      color: "from-brand-red to-brand-red-light"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(196,30,58,0.06)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(224,53,85,0.04)_0%,transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-red/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-brand-red-light/5 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-10 py-5 rounded-full text-lg font-bold mb-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              <span>🏢 Settori di Attività</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-10 text-gray-900 leading-tight">
              Soluzioni su misura per
              <br />
              <span className="relative gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                ogni settore
                <div className="absolute -bottom-6 left-0 right-0 h-4 bg-gradient-to-r from-brand-red/20 via-brand-red-light/30 to-brand-red/20 rounded-full blur-sm"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Expertise specializzata e soluzioni personalizzate per rispondere alle specifiche esigenze di sicurezza del tuo settore
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 group"
              >
                {/* Image Header */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${sector.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                      {sector.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{sector.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {sector.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${sector.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${sector.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Scopri le Soluzioni
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">La fiducia dei leader di settore</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Migliaia di aziende di ogni settore si affidano a Tutela Impresa per la loro sicurezza
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">50M+</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Dipendenti Protetti</h3>
              <p className="text-gray-600">in tutta Europa</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">99.9%</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Uptime Garantito</h3>
              <p className="text-gray-600">sempre disponibile</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">24/7</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Supporto Tecnico</h3>
              <p className="text-gray-600">sempre al tuo fianco</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">15+</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Anni di Esperienza</h3>
              <p className="text-gray-600">nel settore HSE</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Il tuo settore non è in lista?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contattaci per una consulenza personalizzata. Creiamo soluzioni su misura per ogni tipo di attività
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Consulenza Gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Richiedi Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;