import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#fff1f2] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-brand-red">
            Tutela Impresa 100%
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Un software gestionale in cloud che centralizza tutti gli adempimenti HSE:
            formazione, DVR, DPI, scadenze, audit e documentazione.&nbsp;
            <span className="font-semibold">
              Accessibile ovunque, sempre aggiornato, sicuro e intuitivo.
            </span>
          </p>
          <button className="bg-brand-red text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            RICHIEDI LA DEMO
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
