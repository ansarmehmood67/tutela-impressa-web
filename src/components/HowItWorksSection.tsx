
const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "UPLOAD DATA",
      description: "Simplified uploading and management of company documents",
      icon: "📊",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      number: "2", 
      title: "COMPLIANCE STRUCTURE",
      description: "Complete process organization and regulatory compliance",
      icon: "📋",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      number: "3",
      title: "RECEIVE ALERTS", 
      description: "Timely notifications and automatic reminders",
      icon: "⚠️",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      number: "4",
      title: "ARCHIVE AND REPORT",
      description: "Advanced documentation and reporting for controls",
      icon: "📈",
      color: "from-green-500 to-green-600", 
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-brand-red rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <span>⚡ Simplified Process</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
              HOW IT WORKS
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tutela Impresa automates every corporate security process with an intelligent and 
            intuitive system that simplifies regulatory management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgColor} rounded-3xl p-8 relative group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100`}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-red text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                {step.icon}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-black text-gray-800 mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>
                <button className={`bg-gradient-to-r ${step.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full group-hover:animate-pulse`}>
                  Find out more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
