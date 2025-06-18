import React from 'react';
import CroissantCoffeeImg from '../assets/food/croissant-coffee.png';

const PricingCTASection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red rounded-3xl p-10 shadow-2xl text-center text-white space-y-6 relative overflow-hidden">

          {/* Decorative circle */}
          <div className="absolute top-0 right-0 mt-4 mr-4 w-10 h-10 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>

          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Protezione aziendale al prezzo di un cappuccino
          </h2>

          <p className="text-lg opacity-90">
            Protezione completa per la tua azienda a un prezzo incredibile.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-brand-red px-6 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
              Parti Ora
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-brand-red transition transform hover:scale-105">
              Scopri i Prezzi
            </button>
          </div>

          <div className="flex justify-center flex-wrap gap-6 text-sm opacity-80">
            <span>✔ Prova gratuita di 30 giorni</span>
            <span>✔ Senza vincoli</span>
            <span>✔ Supporto 24/7</span>
          </div>

          {/* Single image at the bottom */}
          <div className="pt-4 flex justify-center">
            <img
              src={CroissantCoffeeImg}
              alt="Cappuccino e Croissant"
              className="max-w-[400px] w-full h-auto object-contain"
              style={{ background: 'transparent', boxShadow: 'none', borderRadius: 0 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingCTASection;
