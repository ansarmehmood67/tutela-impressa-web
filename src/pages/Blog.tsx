
import CustomCursor from '../components/CustomCursor';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Come implementare un sistema di sicurezza aziendale efficace',
      excerpt: 'Scopri le migliori pratiche per implementare un sistema di sicurezza che protegga la tua azienda.',
      date: '15 Marzo 2024',
      category: 'Sicurezza',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Nuove normative sulla sicurezza sul lavoro 2024',
      excerpt: 'Tutte le novità legislative che le aziende devono conoscere per rimanere conformi.',
      date: '12 Marzo 2024',
      category: 'Normative',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'L\'importanza della formazione continua in azienda',
      excerpt: 'Perché investire nella formazione dei dipendenti è cruciale per la sicurezza aziendale.',
      date: '08 Marzo 2024',
      category: 'Formazione',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resta aggiornato sulle ultime novità in materia di sicurezza aziendale e normative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-brand-red transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-brand-red font-semibold hover:underline">
                    Leggi di più →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
