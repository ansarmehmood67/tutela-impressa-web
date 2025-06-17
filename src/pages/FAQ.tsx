import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Cos'è Tutela Impresa e come può aiutare la mia azienda?",
      answer: "Tutela Impresa è una piattaforma digitale completa per la gestione della sicurezza aziendale e della conformità normativa. Ti aiutiamo a digitalizzare e automatizzare tutti i processi HSE, dalla valutazione dei rischi alla formazione del personale, garantendo conformità alle normative vigenti e riducendo significativamente i costi di gestione."
    },
    {
      question: "Quanto tempo serve per implementare la piattaforma?",
      answer: "L'implementazione base richiede solitamente 2-4 settimane, a seconda delle dimensioni dell'azienda e della complessità dei processi. Il nostro team di esperti ti seguirà passo passo durante l'onboarding, garantendo una transizione fluida e la formazione completa del tuo team."
    },
    {
      question: "La piattaforma è conforme alle normative italiane ed europee?",
      answer: "Assolutamente sì. Tutela Impresa è sviluppata in piena conformità con tutte le normative italiane (D.Lgs. 81/08, etc.) ed europee (ISO 45001, GDPR, etc.). I nostri aggiornamenti automatici garantiscono che tu sia sempre allineato alle ultime modifiche normative."
    },
    {
      question: "Posso integrare Tutela Impresa con i miei sistemi esistenti?",
      answer: "Certamente. La nostra piattaforma offre API robuste e connettori pre-configurati per integrarsi facilmente con i principali ERP, sistemi HR e gestionali aziendali. Il nostro team tecnico può anche sviluppare integrazioni personalizzate per esigenze specifiche."
    },
    {
      question: "Che tipo di supporto offrite?",
      answer: "Offriamo supporto completo 24/7 attraverso chat, email e telefono. Ogni cliente ha accesso a un Customer Success Manager dedicato, documentazione dettagliata, video tutorial e sessioni di formazione periodiche. Per i piani Enterprise, includiamo anche supporto on-site."
    },
    {
      question: "I miei dati sono sicuri?",
      answer: "La sicurezza dei dati è la nostra priorità assoluta. Utilizziamo crittografia end-to-end, hosting su server certificati ISO 27001 in Europa, backup automatici e conformità completa al GDPR. Tutti i dati rimangono di tua proprietà e non vengono mai condivisi con terze parti."
    },
    {
      question: "Posso personalizzare la piattaforma per le mie esigenze specifiche?",
      answer: "Sì, la piattaforma è altamente personalizzabile. Puoi configurare workflow personalizzati, creare moduli custom, impostare notifiche specifiche e adattare l'interfaccia alle tue procedure aziendali. Per esigenze avanzate, offriamo anche sviluppo di funzionalità su misura."
    },
    {
      question: "Quali sono i costi e le modalità di pagamento?",
      answer: "Offriamo piani flessibili basati sul numero di dipendenti e funzionalità richieste, a partire da €3.50 al giorno. Include 30 giorni di prova gratuita, setup incluso e nessun costo nascosto. Accettiamo pagamenti mensili, annuali con sconto, e bonifici bancari."
    },
    {
      question: "Posso migrare i miei dati esistenti nella piattaforma?",
      answer: "Assolutamente. Il nostro team di migrazione dati ti aiuterà a trasferire tutti i tuoi documenti, registri e database esistenti nella piattaforma, mantenendo la cronologia e garantendo continuità operativa. Il servizio di migrazione è incluso nel setup."
    },
    {
      question: "La piattaforma funziona anche da mobile?",
      answer: "Sì, Tutela Impresa è completamente responsive e ottimizzata per dispositivi mobili. Abbiamo anche app native per iOS e Android che permettono di gestire ispezioni, segnalazioni e formazione anche offline, con sincronizzazione automatica quando torni online."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

      
      {/* Enhanced Hero Section */}
      <section className="pt-14 pb-14 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(196,30,58,0.08)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(224,53,85,0.06)_0%,transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-red/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-brand-red-light/6 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>❓ Domande Frequenti</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-8 text-gray-900 leading-tight">
              Tutto quello che devi
              <br />
              <span className="relative gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                sapere
                <div className="absolute -bottom-4 left-0 right-0 h-3 bg-gradient-to-r from-brand-red/20 via-brand-red-light/30 to-brand-red/20 rounded-full blur-sm"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Risposte chiare e dettagliate alle domande più comuni su Tutela Impresa
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left focus:outline-none p-6"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-brand-red transition-colors duration-300 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full flex items-center justify-center transform transition-all duration-300 ${
                          openFAQ === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                        }`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-light text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Non hai trovato la risposta che cercavi?</h2>
            <p className="text-xl mb-8 opacity-90">
              Il nostro team di esperti è sempre disponibile per rispondere alle tue domande specifiche e offrirti una consulenza personalizzata
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Contatta il Supporto
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
                Richiedi Demo
              </button>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Chat Live</h3>
                <p className="opacity-80">Risposta immediata</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="opacity-80">Risposta in 24h</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Telefono</h3>
                <p className="opacity-80">Supporto diretto</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;