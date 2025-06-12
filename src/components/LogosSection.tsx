
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
    <section className="py-16 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-md border border-gray-200 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-semibold">Attualmente utilizzato da</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Trusted by Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oltre 10,000+ aziende si fidano di noi per la loro sicurezza aziendale
          </p>
        </div>
      </div>
      
      {/* Logo Carousel with Fade Effects */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="flex animate-scroll-logos">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100 min-w-[200px] grayscale hover:grayscale-0">
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-2xl opacity-60">{logo.icon}</div>
                  <span className="font-bold text-gray-400 text-lg">{logo.name}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100 min-w-[200px] grayscale hover:grayscale-0">
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-2xl opacity-60">{logo.icon}</div>
                  <span className="font-bold text-gray-400 text-lg">{logo.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
