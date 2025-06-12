
const OnePlatformSection = () => {
  const features = [
    {
      title: "INTEGRATED PERSONNEL MANAGEMENT",
      description: "Complete control of staff and skills",
      icon: "👤",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      buttonText: "YOU DISCOVER"
    },
    {
      title: "MANAGEMENT OF WORKERS' MACHINERY", 
      description: "Monitoring and maintenance of all machinery",
      icon: "🏭",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      buttonText: "YOU DISCOVER"
    },
    {
      title: "ACCIDENT ACCIDENT MANAGEMENT",
      description: "Tracking and prevention of accidents at work", 
      icon: "🩹",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      buttonText: "YOU DISCOVER"
    },
    {
      title: "HEALTH SURVEILLANCE MANAGEMENT",
      description: "Health checks and medical certifications",
      icon: "🩺", 
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      buttonText: "YOU DISCOVER"
    },
    {
      title: "TRAINING MANAGEMENT",
      description: "Complete training programs and certifications",
      icon: "🎓",
      color: "from-orange-500 to-orange-600", 
      bgColor: "bg-orange-50",
      buttonText: "YOU DISCOVER"
    },
    {
      title: "DOCUMENT MANAGEMENT",
      description: "Advanced tools for document organization",
      icon: "🗂️",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50", 
      buttonText: "YOU DISCOVER"
    },
    {
      title: "AUDIT MANAGEMENT",
      description: "Comprehensive audit and compliance tracking",
      icon: "📋",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      buttonText: "YOU DISCOVER"
    },
    {
      title: "ANALYTICS DASHBOARD",
      description: "Real-time insights and reporting tools",
      icon: "📊", 
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      buttonText: "YOU DISCOVER"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <span>🔒 All-in-One Platform</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            One platform,<br />
            <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
              MANY FEATURES
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tutela Impresa thinks of everything, absolutely everything. A complete solution for 
            every aspect of corporate security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-6 group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-sm font-black text-gray-800 mb-3 tracking-tight leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <button className={`bg-gradient-to-r ${feature.color} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full`}>
                {feature.buttonText} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnePlatformSection;
