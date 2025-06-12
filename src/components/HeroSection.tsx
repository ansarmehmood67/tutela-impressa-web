
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg-primary overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white opacity-10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-20 right-1/4 w-48 h-48 bg-white opacity-5 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-white opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-white opacity-30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-16 w-1 h-1 bg-white opacity-40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Enhanced Left Content */}
        <div className={`text-white space-y-10 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight tracking-tight">
                Tutela
              </h1>
              <div className="absolute -top-4 -right-8 w-16 h-16 border-4 border-white opacity-30 rounded-full"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Impresa
            </h2>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-1 bg-white"></div>
              <h3 className="text-2xl lg:text-3xl font-medium uppercase tracking-wider">
                Soluzioni Sicure
              </h3>
            </div>
            <h4 className="text-xl lg:text-2xl font-light italic">
              Sempre Protetti
            </h4>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
            <p className="text-xl lg:text-2xl leading-relaxed">
              Assicurazione aziendale completa e soluzioni innovative 
              per la tua azienda con una piattaforma moderna e all'avanguardia.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <button className="group relative overflow-hidden bg-white text-brand-red px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button className="group relative overflow-hidden border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Watch Demo</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h1m4 0h1M12 5V3m0 18v-2" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white bg-opacity-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Right Content - Premium Dashboard */}
        <div className={`${isVisible ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
          <div className="relative">
            {/* Main Dashboard Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-700 border border-gray-200">
              {/* Enhanced Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-red to-brand-red-light rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Dashboard Sicurezza</h3>
                    <p className="text-gray-500">Controllo Totale</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-500 p-3 rounded-xl shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-green-600">98%</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Conformità SSL</p>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full w-4/5 shadow-inner"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-purple-500 p-3 rounded-xl shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-brand-red">247</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Dipendenti Formati</p>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                    <div className="w-2 h-2 bg-brand-red-light rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Chart Section */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-gray-800 text-lg">Monitoraggio Real-time</h4>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Live</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Premium Chart */}
                <div className="flex items-end justify-between space-x-3 h-32 mb-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-gradient-to-t from-brand-red to-brand-red-light w-6 h-20 rounded-t-lg shadow-lg animate-pulse-glow"></div>
                    <span className="text-xs text-gray-500">Gen</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-gradient-to-t from-blue-500 to-blue-400 w-6 h-24 rounded-t-lg shadow-lg"></div>
                    <span className="text-xs text-gray-500">Feb</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-gradient-to-t from-brand-red to-brand-red-light w-6 h-16 rounded-t-lg shadow-lg"></div>
                    <span className="text-xs text-gray-500">Mar</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-gradient-to-t from-green-500 to-green-400 w-6 h-28 rounded-t-lg shadow-lg"></div>
                    <span className="text-xs text-gray-500">Apr</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-gradient-to-t from-brand-red to-brand-red-light w-6 h-12 rounded-t-lg shadow-lg"></div>
                    <span className="text-xs text-gray-500">Mag</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-gradient-to-t from-purple-500 to-purple-400 w-6 h-22 rounded-t-lg shadow-lg"></div>
                    <span className="text-xs text-gray-500">Giu</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600">Rendimento Sicurezza Mensile</p>
                </div>
              </div>

              {/* Bottom Section with Badge */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificato ISO 45001</span>
                </div>
              </div>
            </div>

            {/* Floating Security Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-brand-red to-brand-red-light text-white p-4 rounded-2xl shadow-2xl animate-pulse-glow transform hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            {/* Side Decorative Elements */}
            <div className="absolute -left-4 top-1/4 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
            <div className="absolute -right-2 bottom-1/4 w-6 h-6 bg-white bg-opacity-30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-white text-sm font-medium">Scorri per esplorare</span>
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
