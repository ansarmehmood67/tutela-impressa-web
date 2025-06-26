import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-red-50/30 to-pink-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-red-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-slide-in-right animate-delay-300">
          {/* Main Heading */}
          <h2 className="text-6xl lg:text-7xl font-black mb-12 bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent leading-tight">
            Tutela Impresa 100%
          </h2>

          {/* Description */}
          <div className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-16 max-w-4xl mx-auto">
            <p className="mb-4">
              Un <span className="font-bold text-brand-red">software gestionale in cloud</span> che centralizza tutti gli adempimenti HSE:
            </p>
            <p className="mb-4">
              formazione, DVR, DPI, scadenze, audit e documentazione.
            </p>
            <p className="font-semibold text-brand-red">
              Accessibile ovunque, sempre aggiornato, sicuro e intuitivo.
            </p>
          </div>

          {/* CTA Button */}
          <div className="inline-block">
            <a href="#contact">
            <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-12 py-6 rounded-full text-xl font-black hover:shadow-2xl hover:shadow-brand-red/40 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
              RICHIEDI LA DEMO
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
