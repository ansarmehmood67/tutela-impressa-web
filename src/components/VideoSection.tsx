
import { useEffect, useState } from 'react';

const VideoSection = () => {
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

    const section = document.getElementById('video-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="video-section" className="py-20 gradient-bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold mb-16">
            Guarda il video
          </h2>
          
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-scale-in animate-delay-200' : 'opacity-0'}`}>
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                
                {/* Video Thumbnail */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-brand-red-light transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Come Gestire le Scarpe Antinfortunistiche</h3>
                  <p className="text-gray-300">Manuel Villanova - Esperto di Sicurezza</p>
                </div>
                
                {/* YouTube Branding */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black bg-opacity-75 px-3 py-2 rounded">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-white text-sm">Guarda su YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
