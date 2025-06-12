
import { useEffect, useState } from 'react';

const AboutSection = () => {
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

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-20 bg-brand-gray relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-brand-red rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-brand-red rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="gradient-text">Cos'è Tutela Impresa</span>
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Un software gestionale che si rivolge alle aziende per gli adempimenti 
            legislativi SSL (sia, Igienico, Sicurezza, Audit e Documentario). Fornisce 
            supporti per il controllo della sicurezza, fornendo Servizi.
          </p>
          
          <div className={`${isVisible ? 'animate-scale-in animate-delay-300' : 'opacity-0'}`}>
            <button className="bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-brand-red-dark transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Richiedi la Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
