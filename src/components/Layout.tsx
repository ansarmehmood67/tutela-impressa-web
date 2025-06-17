import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/tutela_logo.png";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoImg} alt="Tutela Impresa Logo" className="h-12 w-auto" />
              <div className="text-left">
                <span className="font-black text-2xl text-gray-800 block leading-none"></span>
                <span className="font-black text-xl text-brand-red block leading-none"></span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/functionality" className="text-gray-700 hover:text-brand-red font-semibold">Funzionalità</Link>
              <Link to="/sectors" className="text-gray-700 hover:text-brand-red font-semibold">Settori</Link>
              <Link to="/blog" className="text-gray-700 hover:text-brand-red font-semibold">Blog</Link>
              <Link to="/faq" className="text-gray-700 hover:text-brand-red font-semibold">FAQ</Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand-red font-semibold">Contatti</Link>
              <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                RICHIEDI LA DEMO
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-brand-red">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-24">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-white text-gray-800 py-20 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-8">
                <img src={logoImg} alt="Tutela Impresa Logo" className="h-12 sm:h-14 object-contain" />
              </Link>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                La soluzione completa per la gestione della sicurezza aziendale e degli adempimenti normativi.
                Protezione totale, conformità garantita, futuro sicuro.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-xl mb-6 text-brand-red">Prodotto</h3>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="/functionality" className="hover:text-brand-red transition-colors">Funzionalità</Link></li>
                <li><Link to="/sectors" className="hover:text-brand-red transition-colors">Settori</Link></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Sicurezza</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Integrazioni</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-xl mb-6 text-brand-red">Supporto</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-brand-red transition-colors">Documentazione</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Formazione</a></li>
                <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contatti</Link></li>
                <li><Link to="/faq" className="hover:text-brand-red transition-colors">FAQ</Link></li>
                <li><Link to="/blog" className="hover:text-brand-red transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0">
                &copy; 2024 Tutela Impresa. Tutti i diritti riservati.
              </p>
              <div className="flex space-x-6 text-gray-500">
                <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand-red transition-colors">Termini di Servizio</a>
                <a href="#" className="hover:text-brand-red transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
