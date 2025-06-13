import React from 'react';

const InspectionSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-visible">
      {/* Centered red box: wider (max-w-4xl) and shorter padding */}
      <div className="mx-auto w-full max-w-4xl bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red text-white rounded-xl overflow-hidden relative px-12 py-12">
        
        {/* Background blobs (inside the box) */}
        <div className="absolute top-8 right-8 w-20 h-20 bg-white rounded-full blur-2xl opacity-10 animate-float" />
        <div
          className="absolute bottom-8 left-8 w-28 h-28 bg-white rounded-full blur-3xl opacity-10 animate-float"
          style={{ animationDelay: '1.5s' }}
        />

        {/* Magnifying glass icon */}
        <div className="absolute top-6 right-6">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-4 border-cyan-400 rounded-full relative">
              <div className="absolute -bottom-1 -right-1 w-1 h-0.5 bg-cyan-400 rounded transform rotate-45" />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
            Inspection? No problem.
          </h2>
          <p className="text-lg lg:text-xl mb-6 leading-relaxed opacity-95 mx-auto max-w-3xl">
            With one click you always have everything under control and you can
            verify the data, required documents, SOA, agency registrations, ORI
            specific training for construction sites, health registrations,
            agency inspections.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-red px-8 py-3 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
              Find out more →
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>

        {/* Bottom decorative circle */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-10 h-10 border-4 border-white border-opacity-30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default InspectionSection;
