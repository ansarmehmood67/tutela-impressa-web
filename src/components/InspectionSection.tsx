const InspectionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Ispezione in arrivo?<br />
              <span className="text-yellow-300">Respira</span><br />
              <span className="text-yellow-300">Clicca</span><br />
              <span className="text-yellow-300">Risolto</span>
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
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
              <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                richiedi la demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectionSection;