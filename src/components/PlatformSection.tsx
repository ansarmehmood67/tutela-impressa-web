
const PlatformSection = () => {
  const features = [
    {
      title: 'Dashboard Intelligente',
      description: 'Visualizza tutti i dati di sicurezza in un colpo d\'occhio con grafici e metriche in tempo reale.',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Gestione Certificazioni',
      description: 'Mantieni traccia di tutte le certificazioni aziendali con scadenze e rinnovi automatici.',
      icon: '🏆',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Controllo Accessi',
      description: 'Gestisci permessi e accessi del personale con sistemi di autenticazione avanzati.',
      icon: '🔐',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Audit e Ispezioni',
      description: 'Programma e gestisci audit interni ed esterni con checklist personalizzabili.',
      icon: '🔍',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red bg-opacity-10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Tante Funzionalità</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Piattaforma Completa</span><br />
            per ogni esigenza
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri tutte le funzionalità avanzate che rendono unica la nostra piattaforma
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-full">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-semibold">{feature.title}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Scopri di Più
                </button>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl">
                  {feature.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
