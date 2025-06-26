// React and asset imports
import { useEffect, useState } from 'react';
import managementImg from '../assets/management.svg';
import radiationIcon from '../assets/radiation.png';
import clipboardIcon from '../assets/shiled.svg';
import healthcareIcon from '../assets/healthcare.png';
import shieldIcon from '../assets/shield.png';

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
    <section
      id="management-section"
      className="py-20 gradient-bg-primary text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full blur-2xl animate-float" />
        <div
          className="absolute bottom-32 left-32 w-60 h-60 bg-white rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'} flex flex-col items-center text-center lg:items-start lg:text-left`}>
            <div className="space-y-1">
              <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Gestionale HSE
              </h2>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-yellow-300 leading-tight">Smart</h2>
              <h3 className="text-2xl font-semibold text-white">Semplice, sempre aggiornato</h3>
            </div>

            <p className="text-xl opacity-90 leading-relaxed">
              Tutto integrato in un unico sistema: formazione, scadenze, controlli,
              documentazione dei processi e valutazione degli indicatori con audit esterni
              per la certificazione della conformità.
            </p>

            <a href="#contact">
            <button className="bg-white text-brand-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Scopri di più
            </button>
            </a>
          </div>

          {/* Right Content - Central Circle and Icons */}
          <div className={`relative flex justify-center lg:justify-end ${isVisible ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
            <div className="relative w-72 h-72">
              {/* Central Circle */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl animate-float">
                <img
                  src={managementImg}
                  alt="Management Dashboard"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Icons Around the Circle */}
              <img src={clipboardIcon} alt="Clipboard" className="absolute top-0 left-8 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2" />
              <img src={shieldIcon} alt="Shield" className="absolute top-8 right-0 w-24 h-24 transform translate-x-1/2 -translate-y-1/2" />
              <img src={radiationIcon} alt="Radiation" className="absolute bottom-0 right-[-20px] w-24 h-24 transform -translate-x-1/2 translate-y-1/2" />
              <img src={healthcareIcon} alt="Healthcare" className="absolute bottom-10 left-0 w-24 h-24 transform -translate-x-1/2 translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
