import React from 'react';
import DocumentIcon from '../assets/icons/document (1).svg';
import CertificateIcon from '../assets/icons/training certificate.svg';
import DeadlinesIcon from '../assets/icons/deadlines.svg';
import SupportIcon from '../assets/icons/support.svg';
import ResourcesIcon from '../assets/icons/resources.svg';
import ReportsIcon from '../assets/icons/reports.svg';
import PlatformIcon from '../assets/icons/dedicated platform.svg';
import CloudIcon from '../assets/icons/cloud.svg';
import SecurityIcon from '../assets/icons/security.svg';

const OnePlatformSection = () => {
  const features = [
    {
      title: "Documenti",
      description:
        "Verifica completa, zero rischi. Controlliamo ogni documento obbligatorio per la sicurezza sul lavoro, così tu puoi concentrarti sul far crescere la tua impresa.",
      icon: DocumentIcon,
    },
    {
      title: "Attestati di Formazione",
      description:
        "Formazione a norma, team protetto. Ci assicuriamo che ogni tuo collaboratore sia in regola con i corsi obbligatori.",
      icon: CertificateIcon,
    },
    {
      title: "Scadenze",
      description:
        "Teniamo sotto controllo tutte le scadenze e gli aggiornamenti di documenti e corsi obbligatori, assicurando il rispetto delle normative vigenti.",
      icon: DeadlinesIcon,
    },
    {
      title: "Hotline 24/7",
      description:
        "La piattaforma ti collega in tempo reale con i nostri esperti, pronti a supportarti su ogni aspetto della sicurezza aziendale.",
      icon: SupportIcon,
    },
    {
      title: "Report operativi",
      description:
        "Controlliamo costantemente la situazione della tua azienda con report dettagliati, per offrirti una gestione precisa, proattiva e aggiornata.",
      icon: ReportsIcon,
    },
    {
      title: "Centro Risorse",
      description:
        "Webinar, guide pratiche e materiali per aiutarti a costruire e rafforzare una solida cultura della sicurezza interna.",
      icon: ResourcesIcon,
    },
    {
      title: "Piattaforma Dedicata",
      description:
        "Una piattaforma su misura per la tua azienda: carichi i tuoi dati, gestisci documenti, organizzi call, tutto in uno spazio protetto e accessibile.",
      icon: PlatformIcon,
    },
    {
      title: "100% Cloud",
      description:
        "Accedi in ogni momento ai tuoi dati da qualsiasi dispositivo. Sicurezza, velocità e operatività ovunque ti trovi.",
      icon: CloudIcon,
    },
    {
      title: "100% Sicura",
      description:
        "Crittografia SSL avanzata per proteggere le informazioni. Tutti i tuoi dati sono protetti da tecnologie affidabili e moderne.",
      icon: SecurityIcon,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-red text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
            📌 Piattaforma All-in-One
          </div>
          <h2 className="text-5xl font-black leading-tight mb-4">
            Una piattaforma,<br />
            <span className="text-brand-red">Molte funzionalità</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tutela Impresa gestisce ogni aspetto—assolutamente tutto. Una soluzione completa per ogni aspetto della sicurezza aziendale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[1.25rem] border border-gray-200 p-10 text-center transition-all duration-300 transform hover:scale-[1.05] group hover:bg-brand-red hover:border-brand-red hover:shadow-[0_15px_40px_rgba(200,16,46,0.3)] shadow-[4px_4px_0_rgba(0,0,0,0.06)]"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnePlatformSection;
