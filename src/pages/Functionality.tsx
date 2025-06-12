
import CustomCursor from '../components/CustomCursor';

const Functionality = () => {
  const functionalities = [
    {
      category: 'Gestione Documentale',
      items: [
        'Archiviazione sicura documenti',
        'Versionamento automatico',
        'Firma digitale integrata',
        'Ricerca avanzata',
        'Backup automatico'
      ]
    },
    {
      category: 'Monitoraggio e Controllo',
      items: [
        'Dashboard in tempo reale',
        'Alert personalizzati',
        'Monitoraggio continuo',
        'Reportistica automatica',
        'Analytics avanzati'
      ]
    },
    {
      category: 'Formazione e Certificazioni',
      items: [
        'Corsi online integrati',
        'Tracking formazione',
        'Certificazioni automatiche',
        'Scadenzario intelligente',
        'Quiz e valutazioni'
      ]
    },
    {
      category: 'Conformità Normativa',
      items: [
        'Aggiornamenti automatici',
        'Check conformità',
        'Audit digitali',
        'Template normativi',
        'Supporto legale'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Funzionalità</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Scopri tutte le funzionalità avanzate della nostra piattaforma per la sicurezza aziendale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {functionalities.map((functionality, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{functionality.category}</h3>
                <ul className="space-y-3">
                  {functionality.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Richiedi Demo Personalizzata
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
