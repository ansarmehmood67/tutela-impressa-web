
import CustomCursor from '../components/CustomCursor';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      {/* Navigation placeholder */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Contattaci</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Siamo qui per aiutarti. Contattaci per qualsiasi domanda o richiesta di informazioni.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Invia un messaggio</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Cognome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Azienda"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
                <textarea
                  placeholder="Messaggio"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-brand-red to-brand-red-light text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300">
                  Invia Messaggio
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Informazioni di Contatto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@tutelaimpresa.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white">
                      📞
                    </div>
                    <div>
                      <div className="font-semibold">Telefono</div>
                      <div className="text-gray-600">+39 02 1234 5678</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold">Sede</div>
                      <div className="text-gray-600">Via Roma 123, 20121 Milano, Italia</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Orari di Lavoro</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lunedì - Venerdì</span>
                    <span className="font-semibold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato</span>
                    <span className="font-semibold">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span className="font-semibold">Chiuso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
