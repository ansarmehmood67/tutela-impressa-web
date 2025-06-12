
const InspectionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-60 h-60 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Magnifying Glass Icon */}
      <div className="absolute top-16 right-1/2 transform translate-x-1/2">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-cyan-400 rounded-full relative">
            <div className="absolute -bottom-2 -right-2 w-3 h-1 bg-cyan-400 rounded-full transform rotate-45"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
            Inspection? No problem.
          </h2>
          
          <p className="text-xl lg:text-2xl mb-12 leading-relaxed opacity-95 max-w-4xl mx-auto">
            With one click you always have everything under control and you can verify the data, 
            required documents, SOA, agency registrations, ORI specific training for construction 
            sites, health registrations, agency inspections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
              Find out more →
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute bottom-0 left-1/2 transform translate-x-1/2 translate-y-1/2">
        <div className="w-24 h-24 border-4 border-white border-opacity-30 rounded-full"></div>
      </div>
    </section>
  );
};

export default InspectionSection;
