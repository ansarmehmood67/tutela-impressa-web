import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Upload Data",
      description: "Simplified uploading and management of company documents",
      icon: "📁",
    },
    {
      number: "2",
      title: "Compliance Structure",
      description: "Complete process organization and regulatory compliance",
      icon: "📋",
    },
    {
      number: "3",
      title: "Receive Alerts",
      description: "Timely notifications and automatic reminders",
      icon: "🔔",
    },
    {
      number: "4",
      title: "Archive & Report",
      description: "Advanced documentation and reporting for controls",
      icon: "📊",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-red text-white px-4 py-2 rounded-full font-medium mb-4">
            ⚡ Simplified Process
          </span>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tutela Impresa automates every corporate security process with an
            intelligent, intuitive system that simplifies regulatory management.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-shadow"
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-red text-white rounded-full font-bold mb-6">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-brand-red to-brand-red-light text-white rounded-xl text-2xl">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                {step.description}
              </p>

              {/* CTA */}
              <button className="w-full bg-brand-red text-white py-2 rounded-full font-medium hover:bg-brand-red-light transition-colors">
                Find out more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
