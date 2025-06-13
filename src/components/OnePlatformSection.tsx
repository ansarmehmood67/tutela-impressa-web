import React from 'react';

const OnePlatformSection = () => {
  const features = [
    {
      title: "Gestione del personale integrata",
      description: "Controllo completo su personale, ruoli e competenze",
      icon: "👤",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      buttonText: "Scopri di più"
    },
    {
      title: "Gestione delle macchine",
      description: "Monitoraggio e manutenzione di tutte le attrezzature",
      icon: "🏭",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      buttonText: "Scopri di più"
    },
    {
      title: "Gestione degli incidenti",
      description: "Tracciamento e prevenzione degli infortuni sul lavoro",
      icon: "⚠️",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      buttonText: "Scopri di più"
    },
    {
      title: "Sorveglianza sanitaria",
      description: "Gestione delle visite mediche e certificazioni",
      icon: "🩺",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      buttonText: "Scopri di più"
    },
    {
      title: "Formazione e certificazione",
      description: "Programmi di formazione completi e registri",
      icon: "🎓",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      buttonText: "Scopri di più"
    },
    {
      title: "Gestione documentale",
      description: "Strumenti avanzati per organizzare i documenti",
      icon: "🗂️",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      buttonText: "Scopri di più"
    },
    {
      title: "Audit e conformità",
      description: "Tracciamento e reportistica di audit end-to-end",
      icon: "📋",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      buttonText: "Scopri di più"
    },
    {
      title: "Cruscotto analitico",
      description: "Insight in tempo reale e metriche di performance",
      icon: "📊",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      buttonText: "Scopri di più"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <span>🔒 Piattaforma All-in-One</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Una piattaforma,<br />
            <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
              Molte funzionalità
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tutela Impresa gestisce ogni aspetto—assolutamente tutto. Una soluzione completa per ogni aspetto della sicurezza aziendale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-6 group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-sm font-black text-gray-800 mb-3 tracking-tight leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Button */}
              <button className={`bg-gradient-to-r ${feature.color} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full`}>
                {feature.buttonText} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnePlatformSection;
