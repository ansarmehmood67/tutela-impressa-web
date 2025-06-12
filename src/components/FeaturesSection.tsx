
const FeaturesSection = () => {
  const features = [
    {
      title: 'Gestione Documentale',
      description: 'Organizza tutti i documenti di sicurezza in un unico posto sicuro e accessibile.',
      icon: '📄',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Monitoraggio Real-time',
      description: 'Controlla lo stato di sicurezza della tua azienda in tempo reale con dashboard avanzate.',
      icon: '📊',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Conformità Automatica',
      description: 'Rimani sempre conforme alle normative con aggiornamenti automatici e alert personalizzati.',
      icon: '✅',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Formazione Dipendenti',
      description: 'Gestisci corsi di formazione e certificazioni per tutto il personale aziendale.',
      icon: '🎓',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Risk Assessment',
      description: 'Valuta e gestisci i rischi aziendali con strumenti di analisi avanzati.',
      icon: '⚠️',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Reportistica Avanzata',
      description: 'Genera report dettagliati e personalizzati per ogni aspetto della sicurezza aziendale.',
      icon: '📈',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-brand-red rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red bg-opacity-10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Come Funziona</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Tutto quello che serve</span><br />
            per la tua sicurezza aziendale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una piattaforma completa che semplifica la gestione della sicurezza aziendale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-brand-red transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Esplora Tutte le Funzionalità
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
