
import { useEffect, useState } from 'react';

const TestimonialsSection = () => {
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

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Marco Castelletti',
      role: 'CEO',
      company: 'Innovative Solutions Srl',
      avatar: 'MC',
      rating: 5,
      text: 'Tutela Impresa ha rivoluzionato il modo in cui gestiamo la sicurezza aziendale.',
      gradient: 'from-brand-red to-brand-red-light'
    },
    {
      name: 'Giulia Rossini',
      role: 'HSE Manager',
      company: 'TechBuild Corporation',
      avatar: 'GR',
      rating: 5,
      text: 'Incredibile come una singola piattaforma possa gestire tutti gli aspetti della sicurezza.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Alessandro Bianchi',
      role: 'Direttore Operativo',
      company: 'IndustrialMax SpA',
      avatar: 'AB',
      rating: 5,
      text: 'Abbiamo ridotto i tempi di gestione documentale del 75%. Un investimento ripagato.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'Francesca Marinelli',
      role: 'Responsabile Sicurezza',
      company: 'SafeWork Industries',
      avatar: 'FM',
      rating: 5,
      text: 'Gli alert automatici ci hanno salvato da diverse non conformità.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Roberto Verdi',
      role: 'Plant Manager',
      company: 'MegaFactory Ltd',
      avatar: 'RV',
      rating: 5,
      text: 'Perfetto per aziende con multiple sedi. Controllo centralizzato eccellente.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Elena Santoro',
      role: 'HR Director',
      company: 'Global Manufacturing',
      avatar: 'ES',
      rating: 5,
      text: 'La gestione della formazione del personale non è mai stata così semplice.',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-red rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-brand-red bg-opacity-10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Testimonianze</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Cosa dicono i nostri clienti</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Migliaia di aziende hanno trasformato la loro sicurezza con Tutela Impresa
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex animate-scroll-testimonials">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-80 h-64">
                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Text */}
                  <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 text-center line-clamp-3">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-bold text-gray-800 text-sm">{testimonial.name}</h4>
                      <p className="text-brand-red font-semibold text-xs">{testimonial.role}</p>
                      <p className="text-gray-600 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
