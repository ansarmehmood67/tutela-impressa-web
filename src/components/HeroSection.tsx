
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className={`text-white space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Tutela Impresa
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Soluzioni Sicure
            </h2>
            <h3 className="text-2xl lg:text-3xl font-medium">
              Sempre Protetti
            </h3>
          </div>
          
          <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
            Assicurazione aziendale completa e soluzioni innovative 
            per la tua azienda con una piattaforma moderna.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-white text-brand-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Watch How It Works
            </button>
          </div>
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className={`${isVisible ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
          <div className="relative">
            {/* Dashboard Container */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Audit e controlli</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Performance</p>
                      <div className="flex items-center mt-2">
                        <span className="text-2xl font-bold text-green-600">98%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">Formazione e documenti</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-brand-red rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Simple Chart Representation */}
                <div className="flex items-end space-x-2 h-24">
                  <div className="bg-brand-red w-4 h-16 rounded-t"></div>
                  <div className="bg-blue-500 w-4 h-20 rounded-t"></div>
                  <div className="bg-brand-red w-4 h-12 rounded-t"></div>
                  <div className="bg-blue-500 w-4 h-24 rounded-t"></div>
                  <div className="bg-brand-red w-4 h-8 rounded-t"></div>
                  <div className="bg-blue-500 w-4 h-18 rounded-t"></div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="text-center">
                <p className="text-sm text-gray-500">Trusted by industry leaders</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-brand-red text-white p-3 rounded-full shadow-lg animate-pulse-glow">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
