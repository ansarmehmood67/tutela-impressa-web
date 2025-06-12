
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
      text: 'Tutela Impresa ha rivoluzionato il modo in cui gestiamo la sicurezza aziendale. La piattaforma è intuitiva, completa e ci ha permesso di essere sempre conformi alle normative.',
      gradient: 'from-brand-red to-brand-red-light'
    },
    {
      name: 'Giulia Rossini',
      role: 'HSE Manager',
      company: 'TechBuild Corporation',
      avatar: 'GR',
      rating: 5,
      text: 'Incredibile come una singola piattaforma possa gestire tutti gli aspetti della sicurezza. Il supporto clienti è eccezionale e sempre disponibile.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Alessandro Bianchi',
      role: 'Direttore Operativo',
      company: 'IndustrialMax SpA',
      avatar: 'AB',
      rating: 5,
      text: 'Da quando usiamo Tutela Impresa, abbiamo ridotto i tempi di gestione documentale del 75%. Un investimento che ha ripagato fin dal primo giorno.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'Francesca Marinelli',
      role: 'Responsabile Sicurezza',
      company: 'SafeWork Industries',
      avatar: 'FM',
      rating: 5,
      text: 'La funzione di alert automatici ci ha salvato da diverse non conformità. È come avere un assistente di sicurezza sempre attivo.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Roberto Verdi',
      role: 'Plant Manager',
      company: 'MegaFactory Ltd',
      avatar: 'RV',
      rating: 5,
      text: 'Perfetto per aziende con multiple sedi. Il controllo centralizzato ci permette di monitorare tutto in tempo reale da un unico dashboard.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Elena Santoro',
      role: 'HR Director',
      company: 'Global Manufacturing',
      avatar: 'ES',
      rating: 5,
      text: 'La gestione della formazione del personale non è mai stata così semplice. Tracciamento automatico e certificazioni sempre aggiornate.',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="testimonials-section" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-brand-red to-brand-red-light opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-teal-500 opacity-5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Cosa dicono i nostri clienti</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            <span className="gradient-text">testimonial</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Migliaia di aziende hanno già trasformato la loro sicurezza aziendale con Tutela Impresa
          </p>
        </div>
        
        {/* Enhanced Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-testimonials">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 mx-4 ${isVisible ? `animate-scale-in animate-delay-${(index + 1) * 100}` : 'opacity-0'}`}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 w-96 h-auto">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-8 text-center">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-brand-red font-semibold">{testimonial.role}</p>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Company Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">Cliente verificato</span>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-green-600 font-semibold">Verificato</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 w-96 h-auto">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-8 text-center">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-brand-red font-semibold">{testimonial.role}</p>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Company Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">Cliente verificato</span>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-green-600 font-semibold">Verificato</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl p-8 max-w-2xl mx-auto text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Unisciti a migliaia di aziende soddisfatte
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Scopri perché scegliendo Tutela Impresa non sbagli mai
            </p>
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Leggi altre recensioni
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
