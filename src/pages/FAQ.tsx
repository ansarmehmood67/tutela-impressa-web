
import CustomCursor from '../components/CustomCursor';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Cos\'è Tutela Impresa?',
      answer: 'Tutela Impresa è una piattaforma completa per la gestione della sicurezza aziendale che aiuta le aziende a rimanere conformi alle normative e a proteggere i propri dipendenti.'
    },
    {
      question: 'Quanto tempo ci vuole per implementare la piattaforma?',
      answer: 'L\'implementazione tipica richiede tra 1-2 settimane, inclusa la formazione del personale e la migrazione dei dati esistenti.'
    },
    {
      question: 'La piattaforma è conforme alle normative italiane?',
      answer: 'Sì, la nostra piattaforma è completamente conforme a tutte le normative italiane ed europee in materia di sicurezza sul lavoro.'
    },
    {
      question: 'Offrite supporto tecnico?',
      answer: 'Sì, offriamo supporto tecnico 24/7 attraverso chat, email e telefono. Il nostro team di esperti è sempre disponibile ad aiutarti.'
    },
    {
      question: 'Posso personalizzare la piattaforma per la mia azienda?',
      answer: 'Assolutamente sì. La piattaforma è altamente personalizzabile e può essere adattata alle specifiche esigenze della tua azienda.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">FAQ</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trova le risposte alle domande più frequenti sulla nostra piattaforma.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <div className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
