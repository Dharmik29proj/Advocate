
import React from 'react';
import { SITE_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?auto=format&fit=crop&q=80&w=1000" 
                alt="Advocate Work Process" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-12 -left-12 w-64 h-64 border-l-2 border-t-2 border-legal-brown/20 -z-0"></div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-legal-brown text-[10px] font-bold tracking-[0.4em] uppercase block mb-8">Personal Narrative</span>
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-12 leading-tight">
              {SITE_CONTENT.aboutTitle}
            </h2>
            <div className="space-y-8 text-lg font-light leading-relaxed text-gray-600">
              <p className="text-gray-900 font-serif italic text-2xl border-l-4 border-legal-brown pl-8 mb-10">
                "Discretion is the soul of advocacy."
              </p>
              <p>{SITE_CONTENT.aboutContent}</p>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-200">
              {SITE_CONTENT.aboutStats.slice(0, 4).map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-serif font-bold text-legal-brown mb-1">{stat.value}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
