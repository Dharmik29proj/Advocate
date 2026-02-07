
import React from 'react';
import { SITE_CONTENT } from '../constants';

const PracticeAreas: React.FC = () => {
  const practiceImages = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa", // Real Estate
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f", // Civil Litigation
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744", // Criminal Defense
    "https://images.unsplash.com/photo-1589216532372-1c2a367900d9", // Intellectual Property
    "https://images.unsplash.com/photo-1450133064473-71024230f91b", // Corporate Law
    "https://images.unsplash.com/photo-1521791136064-7986c2923216"  // Family Law
  ];

  return (
    <section id="practice" className="bg-white">
      <div className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-legal-brown text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">Disciplines</span>
        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-10">Core Practice Areas</h2>
        <div className="w-20 h-[1px] bg-legal-brown mx-auto"></div>
      </div>

      <div className="divide-y divide-gray-50">
        {SITE_CONTENT.services.map((service, idx) => (
          <div key={service.id} className="group relative overflow-hidden transition-all duration-1000 hover:bg-legal-cream/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-32 items-center">
                <div className={`lg:col-span-5 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="mb-8 flex items-center gap-6">
                    <span className="text-5xl font-serif text-legal-brown/10">0{idx + 1}</span>
                    <div className="w-12 h-[1px] bg-legal-brown/20"></div>
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight group-hover:text-legal-brown transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-light mb-12">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-[10px] font-bold tracking-[0.3em] uppercase text-legal-brown group-hover:gap-4 transition-all">
                    Confidential Inquiry <i className="fa-solid fa-arrow-right-long ml-4"></i>
                  </a>
                </div>
                
                <div className={`hidden lg:block lg:col-span-7 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-video overflow-hidden shadow-2xl">
                     <img 
                       src={`${practiceImages[idx]}?auto=format&fit=crop&q=80&w=1200`}
                       alt={service.title}
                       className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                     />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
