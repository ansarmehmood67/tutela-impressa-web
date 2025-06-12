
import { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    azienda: '',
    settore: '',
    dipendenti: '',
    messaggio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-24 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contattaci Ora</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Pronto per<br />
              <span className="text-white opacity-90">trasformare</span><br />
              la tua azienda?
            </h2>

            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Compila il form e ricevi una demo personalizzata di Tutela Impresa. 
              I nostri esperti ti mostreranno come ottimizzare la sicurezza aziendale.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Chiamaci</p>
                  <p className="opacity-90">+39 02 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="opacity-90">info@tutelaimpresa.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Uffici</p>
                  <p className="opacity-90">Milano, Roma, Torino</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Richiedi Demo Gratuita
              </h3>
              <p className="text-gray-600">
                Compila tutti i campi per ricevere una demo personalizzata
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome e Cognome */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors duration-300"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="cognome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cognome *
                  </label>
                  <input
                    type="text"
                    id="cognome"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors duration-300"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>

              {/* Email e Telefono */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors duration-300"
                    placeholder="nome@azienda.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors duration-300"
                    placeholder="+39 123 456 7890"
                  />
                </div>
              </div>

              {/* Azienda e Settore */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="azienda" className="block text-sm font-semibold text-gray-700 mb-2">
                    Azienda *
                  </label>
                  <input
                    type="text"
                    id="azienda"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors duration-300"
                    placeholder="Nome azienda"
                  />
                </div>
                <div>
                  <label htmlFor="settore" className="block text-sm font-semibold text-gray-700 mb-2">
                    Settore
                  </label>
                  <select
                    id="settore"
                    name="settore"
                    value={formData.settore}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Seleziona settore</option>
                    <option value="manifatturiero">Manifatturiero</option>
                    <option value="costruzioni">Costruzioni</option>
                    <option value="logistica">Logistica</option>
                    <option value="alimentare">Alimentare</option>
                    <option value="chimico">Chimico</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
              </div>

              {/* Numero Dipendenti */}
              <div>
                <label htmlFor="dipendenti" className="block text-sm font-semibold text-gray-700 mb-2">
                  Numero Dipendenti
                </label>
                <select
                  id="dipendenti"
                  name="dipendenti"
                  value={formData.dipendenti}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors duration-300"
                >
                  <option value="">Seleziona range</option>
                  <option value="1-10">1-10 dipendenti</option>
                  <option value="11-50">11-50 dipendenti</option>
                  <option value="51-200">51-200 dipendenti</option>
                  <option value="201-500">201-500 dipendenti</option>
                  <option value="500+">500+ dipendenti</option>
                </select>
              </div>

              {/* Messaggio */}
              <div>
                <label htmlFor="messaggio" className="block text-sm font-semibold text-gray-700 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-red focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Descrivi le tue esigenze specifiche..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-red to-brand-red-light text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Richiedi Demo Gratuita
              </button>

              {/* Privacy */}
              <p className="text-sm text-gray-500 text-center">
                Cliccando "Richiedi Demo" accetti la nostra 
                <a href="#" className="text-brand-red hover:underline"> Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
