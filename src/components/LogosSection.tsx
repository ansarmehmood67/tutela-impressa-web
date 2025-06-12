
const LogosSection = () => {
  const logos = [
    { name: 'Google', icon: '🔍' },
    { name: 'Microsoft', icon: '🖥️' },
    { name: 'Amazon', icon: '📦' },
    { name: 'Apple', icon: '🍎' },
    { name: 'Tesla', icon: '🚗' },
    { name: 'Netflix', icon: '🎬' },
    { name: 'Adobe', icon: '🎨' },
    { name: 'Samsung', icon: '📱' },
    { name: 'Intel', icon: '💻' },
    { name: 'Canon', icon: '📷' },
    { name: 'Sony', icon: '🎵' },
    { name: 'Oracle', icon: '🗄️' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
      {/* Enhanced Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-xl border border-gray-200 mb-8">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-gray-800 font-bold text-lg">Attualmente utilizzato da</span>
            <div className="w-4 h-4 bg-brand-red rounded-full animate-pulse shadow-lg"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Oltre <span className="text-brand-red font-bold">10,000+</span> aziende leader si fidano di noi per la loro sicurezza aziendale
          </p>
        </div>
      </div>
      
      {/* Enhanced Logo Carousel */}
      <div className="relative">
        {/* Enhanced Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-20"></div>
        
        <div className="flex animate-scroll-logos">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-100 min-w-[220px] grayscale hover:grayscale-0 group">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">{logo.icon}</div>
                  <span className="font-black text-gray-500 group-hover:text-gray-800 text-xl transition-colors duration-300">{logo.name}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-100 min-w-[220px] grayscale hover:grayscale-0 group">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">{logo.icon}</div>
                  <span className="font-black text-gray-500 group-hover:text-gray-800 text-xl transition-colors duration-300">{logo.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="container mx-auto px-4 mt-16">
        <div className="flex justify-center items-center space-x-12 text-gray-500">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="font-semibold">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 1z"/>
            </svg>
            <span className="font-semibold">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="font-semibold">5-Star Rated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
