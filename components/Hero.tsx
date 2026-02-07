
import React from 'react';
import { SITE_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-12 h-[1px] bg-legal-brown"></div>
            <span className="text-legal-brown text-xs font-bold tracking-[0.3em] uppercase">{SITE_CONTENT.tagline}</span>
          </div>
          <h1 className="text-6xl md:text-8xl text-gray-900 font-serif font-semibold leading-[1.1] mb-8">
            Superior <span className="text-legal-brown">Legal</span> <br />Counsel.
          </h1>
          <p className="text-lg text-gray-500 mb-12 max-w-xl leading-relaxed font-light">
            {SITE_CONTENT.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-legal-brown text-white font-semibold text-sm tracking-widest uppercase transition-all hover:bg-[#3d2d21] shadow-xl shadow-legal-brown/10"
            >
              Request Consultation
            </a>
            <a 
              href="#practice" 
              className="px-10 py-5 border border-gray-200 text-gray-900 font-semibold text-sm tracking-widest uppercase transition-all hover:bg-gray-50"
            >
              Practice Areas
            </a>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="relative z-10 w-full h-[700px] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1507679799987-c73774573b09?auto=format&fit=crop&q=80&w=1200" 
               alt="Professional Advocate Alexander Sterling" 
               className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-legal-brown/5 -z-10"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-legal-brown/20 -z-10"></div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-legal-brown to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
