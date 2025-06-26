import { useEffect, useRef } from 'react';

const InspectionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const keywordsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate left content
            if (leftContentRef.current) {
              leftContentRef.current.style.animation = 'none';
              leftContentRef.current.offsetHeight;
              leftContentRef.current.style.animation = 'slide-in-right 0.6s ease-out forwards';
            }

            // Animate right content
            if (rightContentRef.current) {
              rightContentRef.current.style.animation = 'none';
              rightContentRef.current.offsetHeight;
              rightContentRef.current.style.animation = 'slide-in-right 0.6s ease-out 0.2s forwards';
            }

            // Animate keywords
            keywordsRef.current.forEach((keyword, index) => {
              if (keyword) {
                keyword.style.animation = 'none';
                keyword.offsetHeight;
                keyword.style.animation = `slide-in-right 0.6s ease-out ${0.3 + index * 0.2}s forwards`;
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left justify-center">
          {/* Left Content */}
          <div
            ref={leftContentRef}
            className="space-y-8 opacity-0 translate-x-full flex flex-col items-center lg:items-start"
          >
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Ispezione in arrivo?
            </h2>

            <div className="space-y-4">
              <div
                ref={(el) => {
                  if (el) keywordsRef.current[0] = el;
                }}
                className="opacity-0 translate-x-full"
              >
                <span className="inline-block text-6xl lg:text-7xl font-black text-yellow-300 drop-shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-default">
                  Respira
                </span>
              </div>

              <div
                ref={(el) => {
                  if (el) keywordsRef.current[1] = el;
                }}
                className="opacity-0 translate-x-full"
              >
                <span className="inline-block text-6xl lg:text-7xl font-black text-yellow-300 drop-shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-default">
                  Clicca
                </span>
              </div>

              <div
                ref={(el) => {
                  if (el) keywordsRef.current[2] = el;
                }}
                className="opacity-0 translate-x-full"
              >
                <span className="inline-block text-6xl lg:text-7xl font-black text-yellow-300 drop-shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-default">
                  Risolto
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            ref={rightContentRef}
            className="space-y-6 opacity-0 translate-x-full flex flex-col items-center lg:items-start"
          >
            <p className="text-xl leading-relaxed">
              Con Tutela Impresa, anche <strong>il controllo più improvviso diventa un non-evento.</strong>
            </p>

            <p className="text-lg leading-relaxed opacity-95">
              Ti basta un clic sulla piattaforma per avere subito tutta la documentazione aggiornata 
              e pronta da mostrare: niente panico, niente fogli sparsi, tutto perfettamente in ordine.
            </p>

            <p className="text-lg leading-relaxed opacity-95">
              <strong>Hai tutto lì. In tempo reale. E puoi condividerlo immediatamente con l'ispettore.</strong>
            </p>

            <div className="pt-6">
              <a href="#contact">
                <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  richiedi la demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectionSection;
