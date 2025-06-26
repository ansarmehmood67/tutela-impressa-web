import { useEffect, useState } from 'react';

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const embedUrl = 'https://www.youtube.com/embed/HrZKCyKTY4o?si=SVhfOSWJbCZQ02MW';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('video-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="video-section"
      className="py-20 bg-white text-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-brand-red mb-10 leading-tight tracking-tight">
            Guarda il video
          </h2>

          <div
            className={`max-w-4xl mx-auto ${
              isVisible ? 'animate-scale-in animate-delay-200' : 'opacity-0'
            }`}
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={embedUrl}
                  title="Client Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
