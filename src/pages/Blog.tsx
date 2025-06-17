const Blog = () => {
  const blogPosts = [
    {
      title: "Le Nuove Normative HSE 2024: Cosa Cambia per le Aziende",
      excerpt: "Analisi completa delle modifiche normative in materia di sicurezza sul lavoro e ambiente per il 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Normative",
      readTime: "5 min",
      date: "15 Marzo 2024"
    },
    {
      title: "Digitalizzazione dei Processi HSE: Guida Completa",
      excerpt: "Come trasformare digitalmente i processi di Health, Safety & Environment nella tua azienda",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Tecnologia",
      readTime: "8 min",
      date: "12 Marzo 2024"
    },
    {
      title: "ROI della Sicurezza: Come Calcolare il Ritorno sull'Investimento",
      excerpt: "Metodologie e strumenti per quantificare i benefici economici degli investimenti in sicurezza",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Business",
      readTime: "6 min",
      date: "10 Marzo 2024"
    },
    {
      title: "Gestione delle Emergency Response: Best Practices",
      excerpt: "Strategie avanzate per la gestione delle emergenze e la continuità operativa aziendale",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Sicurezza",
      readTime: "7 min",
      date: "8 Marzo 2024"
    },
    {
      title: "Audit Interni HSE: Metodologie e Strumenti Digitali",
      excerpt: "Come condurre audit efficaci utilizzando le moderne tecnologie digitali",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Audit",
      readTime: "9 min",
      date: "5 Marzo 2024"
    },
    {
      title: "Training Digitale HSE: Il Futuro della Formazione",
      excerpt: "Innovazioni nella formazione digitale per la sicurezza sul lavoro e l'ambiente",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Formazione",
      readTime: "6 min",
      date: "2 Marzo 2024"
    }
  ];

  const categories = ["Tutti", "Normative", "Gestione", "Tecnologia", "Formazione", "Audit", "Innovation", "Emergenze"];

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
              <span>📝 Blog & Insights</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-8 text-gray-900 leading-tight">
              Scopri il mondo della
              <br />
              <span className="relative gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                sicurezza
                <div className="absolute -bottom-4 left-0 right-0 h-3 bg-gradient-to-r from-brand-red/20 via-brand-red-light/30 to-brand-red/20 rounded-full blur-sm"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Insights, guide e best practices per trasformare la sicurezza nella tua azienda
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-brand-red to-brand-red-light text-white shadow-lg' 
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-3xl border border-gray-100 mb-20 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red to-brand-red-light"></div>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-8 left-8">
                  <span className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                    ⭐ In Evidenza
                  </span>
                </div>
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">👨‍💼</span>
                    </div>
                    <span className="font-semibold">{blogPosts[0].author}</span>
                  </div>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="bg-gradient-to-r from-brand-red/10 to-brand-red-light/10 text-brand-red px-4 py-2 rounded-full text-sm font-bold border border-brand-red/20">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 font-medium">{blogPosts[0].date}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500 font-medium">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-4xl font-black text-gray-800 mb-8 leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed mb-10">
                  {blogPosts[0].excerpt}
                </p>
                <button className="group bg-gradient-to-r from-brand-red to-brand-red-light text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 self-start relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <span className="relative flex items-center space-x-3">
                    <span>Leggi l'articolo</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-red px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{post.date}</span>
                      <span>•</span>
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-brand-red transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">👨‍💼</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{post.author}</span>
                    </div>
                    
                    <button className="text-brand-red font-bold group-hover:text-brand-red-light hover:underline group-hover:translate-x-2 transition-all duration-300 flex items-center space-x-2">
                      <span>Leggi</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <div className="text-center mt-16 mb-6">
        <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Carica Altri Articoli
        </button>
      </div>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-light text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Rimani aggiornato sui trend HSE</h2>
            <p className="text-xl mb-8 opacity-90">
              Ricevi insights esclusivi, case studies e le ultime novità del settore direttamente nella tua inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input 
                type="email" 
                placeholder="La tua email aziendale"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Iscriviti
              </button>
            </div>
            
            <p className="text-sm opacity-75">Niente spam. Solo contenuti di valore. Cancellati quando vuoi.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;