
const LogosSection = () => {
  const logos = [
    { name: 'Google', icon: '🔍', subtitle: 'Tech Giant' },
    { name: 'Atlassian', icon: '⚡', subtitle: 'Software' },
    { name: 'Amazon', icon: '📦', subtitle: 'E-commerce' },
    { name: 'Canon', icon: '📷', subtitle: 'Imaging' },
    { name: 'Walmart', icon: '🏪', subtitle: 'Retail' },
    { name: 'Microsoft', icon: '🖥️', subtitle: 'Technology' },
    { name: 'Apple', icon: '🍎', subtitle: 'Innovation' },
    { name: 'Samsung', icon: '📱', subtitle: 'Electronics' },
    { name: 'Tesla', icon: '🚗', subtitle: 'Automotive' },
    { name: 'Netflix', icon: '🎬', subtitle: 'Streaming' },
    { name: 'Adobe', icon: '🎨', subtitle: 'Creative' },
    { name: 'Intel', icon: '💻', subtitle: 'Processors' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-red rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-brand-red rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-red rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-semibold">Attualmente utilizzato da</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Trusted by Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oltre 10,000+ aziende si fidano di Tutela Impresa per la loro sicurezza aziendale
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-logos">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-6 group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-gray-100 min-w-[280px]">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-all duration-300">
                    {logo.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-brand-red transition-colors duration-300">
                      {logo.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{logo.subtitle}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Partner dal</span>
                    <span className="text-sm font-semibold text-gray-600">2020</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-6 group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-gray-100 min-w-[280px]">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-all duration-300">
                    {logo.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-brand-red transition-colors duration-300">
                      {logo.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{logo.subtitle}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Partner dal</span>
                    <span className="text-sm font-semibold text-gray-600">2020</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Statistics */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-red mb-2">10,000+</div>
            <div className="text-gray-600">Aziende Clienti</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-red mb-2">50M+</div>
            <div className="text-gray-600">Dipendenti Protetti</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-red mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Garantito</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-red mb-2">24/7</div>
            <div className="text-gray-600">Supporto Dedicato</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
