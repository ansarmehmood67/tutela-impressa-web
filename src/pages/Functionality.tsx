const Functionality = () => {
  const features = [
    {
      title: "Valutazione dei Rischi Digitale",
      description: "Sistema avanzato per la creazione e gestione del DVR con template personalizzabili, valutazioni automatiche e aggiornamenti in tempo reale.",
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: [
        "Template DVR pre-configurati per settore",
        "Calcolo automatico degli indici di rischio",
        "Aggiornamenti normativi automatici",
        "Report conformi alle normative vigenti"
      ]
    },
    {
      title: "Gestione Formazione e Training",
      description: "Piattaforma completa per pianificare, erogare e tracciare la formazione sulla sicurezza con contenuti multimediali e verifiche di apprendimento.",
      icon: "🎓",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: [
        "Corsi e-learning interattivi",
        "Tracciamento automatico delle scadenze",
        "Certificazioni digitali",
        "Statistiche di apprendimento avanzate"
      ]
    },
    {
      title: "Controlli e Ispezioni Smart",
      description: "Strumenti digitali per effettuare controlli periodici, ispezioni e audit con checklist personalizzabili e reportistica automatica.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: [
        "Checklist personalizzabili per settore",
        "App mobile per ispezioni offline",
        "Photo-documentation automatica",
        "Dashboard di monitoraggio KPI"
      ]
    },
    {
      title: "Gestione Documentale Avanzata",
      description: "Repository centralizzato per tutti i documenti HSE con controllo versioni, scadenze automatiche e accesso controllato.",
      icon: "📋",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: [
        "Archiviazione cloud sicura",
        "Controllo versioni automatico",
        "Notifiche di scadenza",
        "Ricerca avanzata e tagging"
      ]
    },
    {
      title: "Analytics e Reporting",
      description: "Dashboard avanzate con KPI personalizzabili, trend analysis e report automatici per il management e gli enti di controllo.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: [
        "Dashboard real-time personalizzabili",
        "Report automatici per enti",
        "Analisi predittiva dei rischi",
        "KPI e metriche avanzate"
      ]
    },
    {
      title: "Workflow Automation",
      description: "Automazione completa dei processi HSE con notifiche intelligenti, escalation automatiche e integrazione con sistemi aziendali.",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: [
        "Workflow personalizzabili",
        "Notifiche smart multicanale",
        "Integrazione API avanzata",
        "Escalation automatiche"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="pt-14 pb-14 relative overflow-hidden">
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
              <span>⚡ Funzionalità Avanzate</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-10 text-gray-900 leading-tight">
              Tecnologia che
              <br />
              <span className="relative gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                trasforma
                <div className="absolute -bottom-6 left-0 right-0 h-4 bg-gradient-to-r from-brand-red/20 via-brand-red-light/30 to-brand-red/20 rounded-full blur-sm"></div>
              </span>
            </h1>
            <p className="text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Scopri come le nostre funzionalità avanzate rivoluzionano la gestione della sicurezza aziendale
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
              >
                {/* Content */}
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                      {feature.icon}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800">{feature.title}</h2>
                  </div>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Scopri di Più
                  </button>
                </div>
                
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-red-light rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="relative w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Risultati che parlano da soli</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le nostre funzionalità avanzate generano risultati misurabili per le aziende che le utilizzano
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl font-bold">85%</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Riduzione Incidenti</h3>
              <p className="text-gray-600">grazie alla prevenzione</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl font-bold">70%</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Tempo Risparmiato</h3>
              <p className="text-gray-600">in attività amministrative</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl font-bold">95%</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Conformità Normativa</h3>
              <p className="text-gray-600">sempre aggiornata</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl font-bold">60%</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Riduzione Costi</h3>
              <p className="text-gray-600">di gestione HSE</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto a trasformare la tua sicurezza aziendale?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Scopri come le nostre funzionalità possono rivoluzionare la gestione della sicurezza nella tua azienda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Richiedi Demo Live
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Prova Gratuita
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Functionality;