
const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-red bg-opacity-10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span>Chi Siamo</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                La tua <span className="gradient-text">sicurezza aziendale</span> è la nostra priorità
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Siamo leader nel settore della sicurezza aziendale con oltre 15 anni di esperienza. 
                La nostra piattaforma innovativa aiuta le aziende a gestire tutti gli aspetti della sicurezza 
                in modo semplice ed efficace.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-brand-red mb-2">15+</div>
                <div className="text-gray-600">Anni di Esperienza</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-brand-red mb-2">50M+</div>
                <div className="text-gray-600">Dipendenti Protetti</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Scopri di Più
            </button>
          </div>

          {/* Right Content - Company Logo Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 text-center shadow-xl">
              <div className="w-48 h-48 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Company Logo Placeholder" 
                  className="w-32 h-32 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Il Tuo Logo Qui</h3>
              <p className="text-gray-600">Personalizza completamente la piattaforma con il tuo brand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
