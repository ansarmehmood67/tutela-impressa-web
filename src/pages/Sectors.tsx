
import CustomCursor from '../components/CustomCursor';

const Sectors = () => {
  const sectors = [
    {
      title: 'Manifatturiero',
      description: 'Soluzioni specializzate per l\'industria manifatturiera con focus su sicurezza dei macchinari e processi produttivi.',
      icon: '🏭',
      features: ['Controllo Macchinari', 'Sicurezza Processi', 'Gestione Incidenti']
    },
    {
      title: 'Sanitario',
      description: 'Conformità alle normative sanitarie specifiche con gestione dei dispositivi medici e protocolli di sicurezza.',
      icon: '🏥',
      features: ['Dispositivi Medici', 'Protocolli Sanitari', 'Conformità Normative']
    },
    {
      title: 'Edilizia',
      description: 'Gestione completa della sicurezza nei cantieri con monitoraggio dei rischi e formazione specifica.',
      icon: '🏗️',
      features: ['Sicurezza Cantieri', 'Gestione DPI', 'Formazione Operatori']
    },
    {
      title: 'Logistica',
      description: 'Ottimizzazione della sicurezza nelle operazioni di trasporto e magazzino con tracciamento in tempo reale.',
      icon: '🚛',
      features: ['Sicurezza Trasporti', 'Gestione Magazzini', 'Tracciamento Merci']
    },
    {
      title: 'Alimentare',
      description: 'Controlli HACCP e sicurezza alimentare con monitoraggio della catena del freddo e qualità prodotti.',
      icon: '🍎',
      features: ['Controlli HACCP', 'Catena del Freddo', 'Qualità Prodotti']
    },
    {
      title: 'Chimico',
      description: 'Gestione avanzata dei rischi chimici con monitoraggio sostanze pericolose e protocolli di emergenza.',
      icon: '⚗️',
      features: ['Sostanze Pericolose', 'Protocolli Emergenza', 'Controllo Emissioni']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Settori che Serviamo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluzioni specializzate per ogni settore industriale con expertise dedicata.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-6 text-center">{sector.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{sector.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {sector.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-red">Caratteristiche principali:</h4>
                  <ul className="space-y-1">
                    {sector.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-brand-red to-brand-red-light text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Scopri di Più
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;
