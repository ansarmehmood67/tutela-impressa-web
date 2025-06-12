
import { useEffect, useState } from 'react';

const ManagementSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('management-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="management-section" className="py-20 gradient-bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-32 left-32 w-60 h-60 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Gestionale HSE semplice,{' '}
                <span className="text-yellow-300">smart</span>
              </h2>
              <h3 className="text-2xl lg:text-3xl font-semibold">
                e sempre con te.
              </h3>
            </div>
            
            <p className="text-xl opacity-90 leading-relaxed">
              Tutto integrato in un unico sistema: formazione, scadenze, controlli, 
              documentazione dei processi e valutazione degli indicatori con audit 
              esterni per la certificazione della conformità.
            </p>
            
            <button className="bg-white text-brand-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Scopri di più
            </button>
          </div>

          {/* Right Content - Logo/Icon */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Logo Container */}
              <div className="w-80 h-80 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30 animate-float">
                <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  {/* Stylized Logo */}
                  <div className="text-brand-red">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                      <path d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10Z" fill="currentColor" />
                      <path d="M60 25C41.8 25 25 41.8 25 60C25 78.2 41.8 95 60 95C78.2 95 95 78.2 95 60C95 41.8 78.2 25 60 25Z" fill="white" />
                      <path d="M45 45H75V55H65V75H55V55H45V45Z" fill="currentColor" />
                      <circle cx="60" cy="35" r="5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
