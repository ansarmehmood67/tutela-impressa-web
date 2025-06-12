
const LogosSection = () => {
  const logos = [
    { name: 'Google', icon: '🔍' },
    { name: 'Atlassian', icon: '⚡' },
    { name: 'Amazon', icon: '📦' },
    { name: 'Canon', icon: '📷' },
    { name: 'Walmart', icon: '🏪' },
    { name: 'Microsoft', icon: '🖥️' },
    { name: 'Apple', icon: '🍎' },
    { name: 'Samsung', icon: '📱' },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-gray-600 font-medium">
          Trusted by industry leaders
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-logos">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-semibold text-gray-800 whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-semibold text-gray-800 whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
