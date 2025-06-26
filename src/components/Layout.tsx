import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/tutela_logo.png";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoImg} alt="Tutela Impresa Logo" className="h-12 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#funzionalita" className="text-gray-700 hover:text-brand-red font-semibold">Funzionalità</a>
              <a href="#vantaggi" className="text-gray-700 hover:text-brand-red font-semibold">Vantaggi</a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                RICHIEDI LA DEMO
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                className="text-gray-600 hover:text-brand-red focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-4 shadow-md">
            <a href="#funzionalita" className="block text-gray-700 hover:text-brand-red font-semibold">Funzionalità</a>
            <a href="#vantaggi" className="block text-gray-700 hover:text-brand-red font-semibold">Vantaggi</a>
            <a href="#contact" className="block text-gray-700 hover:text-brand-red font-semibold">Contatti</a>
            <a
              href="#demo"
              className="block text-center w-full bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              RICHIEDI LA DEMO
            </a>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-24">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-white text-gray-800 py-16 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center justify-center mb-6">
            <img src={logoImg} alt="Tutela Impresa Logo" className="h-14 object-contain" />
          </Link>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            La soluzione completa per la gestione della sicurezza aziendale e degli adempimenti normativi.
            Protezione totale, conformità garantita, futuro sicuro.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            {/* Twitter */}
            <a href="#" className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 
                  1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195
                  -.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045
                  -4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 
                  1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 
                  1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 
                  2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 
                  2.179 1.397 4.768 2.212 7.548 2.212 
                  9.142 0 14.307-7.721 13.995-14.646 
                  .962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            {/* X */}
            <a href="#" className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69
                  .88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05
                  C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29
                  0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79
                  c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56
                  -.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21
                  a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98
                  8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06
                  C3.44 20.29 5.7 21 8.12 21c7.88 0 12.21-6.54 
                  12.21-12.21 0-.19 0-.37-.01-.56 
                  .84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569
                  c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939
                  v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 
                  3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 
                  7.433c-1.144 0-2.063-.926-2.063-2.065 
                  0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 
                  2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 
                  13.019H3.555V9h3.564v11.452zM22.225 
                  0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 
                  24 1.771 24h20.451C23.2 24 24 23.227 24 
                  22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center space-x-6 text-sm text-gray-500 mb-4">
            <Link to="/login" className="hover:text-brand-red transition-colors">Login</Link>
            <Link to="/register" className="hover:text-brand-red transition-colors">Register</Link>
            <Link to="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            &copy; 2024 Tutela Impresa. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
