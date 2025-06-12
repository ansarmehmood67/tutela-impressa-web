
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

  return (
    <section id="testimonials-section" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-16">
            <span className="gradient-text">testimonial</span>
          </h2>
          
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-scale-in animate-delay-200' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-8 h-8 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-8">
                "Tutela Impresa ha rivoluzionato il modo in cui gestiamo la sicurezza 
                aziendale. La piattaforma è intuitiva, completa e ci ha permesso di 
                essere sempre conformi alle normative. Un investimento che ha ripagato 
                fin dal primo giorno."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MC
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-800">Marco Castelletti</h4>
                  <p className="text-gray-600">CEO, Innovative Solutions Srl</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-12 ${isVisible ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
            <button className="bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-red-dark transition-all duration-300 transform hover:scale-105">
              Leggi altre recensioni
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
