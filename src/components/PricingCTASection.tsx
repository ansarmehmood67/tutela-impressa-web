
const PricingCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-60 h-60 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Coffee Cup Icon */}
      <div className="absolute top-16 right-1/2 transform translate-x-1/2">
        <div className="w-20 h-20 relative">
          <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-b-3xl rounded-t-lg relative">
            <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-b from-orange-400 to-yellow-600 rounded-full"></div>
            <div className="absolute -right-3 top-6 w-6 h-8 border-4 border-orange-400 rounded-r-full border-l-0"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
            Business Protection for the Price of a 
            <br />Cappuccino
          </h2>
          
          <p className="text-xl lg:text-2xl mb-12 leading-relaxed opacity-95 max-w-4xl mx-auto">
            Complete protection for your business at an incredible price. Get started today and 
            transform your business security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 flex items-center justify-center space-x-2">
              <span>Start Now</span>
              <span>↗</span>
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Discover the Prices
            </button>
          </div>

          {/* Features List */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-lg">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>No strings attached</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTASection;
