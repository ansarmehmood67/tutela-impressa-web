import React from 'react';
import Cappuccino from '../assets/food/cappuccino.png';
import Croissant from '../assets/food/croissant.png';
import Muffin from '../assets/food/muffin.png';
import Danish from '../assets/food/Danish pastry.png';
import Pain from '../assets/food/Pain au chocolat (1).png';

const PricingCTASection = () => {
  const foodItems = [
    { img: Croissant, price: '€2.50' },
    { img: Muffin, price: '€3.20' },
    { img: Cappuccino, price: '€4.10' },
    { img: Danish, price: '€3.80' },
    { img: Pain, price: '€2.90' },
  ];

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

          {/* Food cards: compact and inline */}
          <div className="pt-6 flex justify-center flex-wrap gap-4">
            {foodItems.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 w-24 sm:w-28 hover:scale-105 transition text-center">
                <img
                  src={item.img}
                  alt="Food"
                  className="rounded-lg w-full h-20 object-contain"
                />
                <p className="mt-1 text-xs font-semibold text-yellow-300">{item.price}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingCTASection;
