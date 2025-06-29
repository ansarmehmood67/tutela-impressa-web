import { useEffect, useState } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const ContactFormSection = () => {
  const [formHtml, setFormHtml] = useState('');

  // Step 1: Load the form HTML from public folder
  useEffect(() => {
    fetch('/mailerlite-form.html')
      .then(res => res.text())
      .then(html => {
        setFormHtml(html);
      });
  }, []);

  // Step 2: After form is loaded, inject reCAPTCHA script safely
  useEffect(() => {
    if (!formHtml) return;

    const scriptId = 'recaptcha-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, [formHtml]);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="text-white text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <span>📩 Contattaci Ora</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Pronto per <br />
              <span className="text-white opacity-90">trasformare</span><br />
              la tua azienda?
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Compila il form e ricevi una demo personalizzata di Tutela Impresa. 
              I nostri esperti ti mostreranno come ottimizzare la sicurezza aziendale.
            </p>
            <p className="text-lg">
              📞 +39 02 1234 5678<br />
              📧 info@tutelaimpresa.com
            </p>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div
            className="w-full bg-white rounded-3xl p-6 shadow-xl"
            dangerouslySetInnerHTML={{ __html: formHtml }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
