
import React from 'react';
import { SITE_CONTENT } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-legal-brown text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Client Perspectives</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Proven Trust</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SITE_CONTENT.testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-8 relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-legal-brown/10 p-1 group-hover:border-legal-brown transition-all duration-500">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-legal-brown w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px]">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-8 text-lg font-light">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-serif font-bold text-gray-900 text-xl mb-1">{testimonial.name}</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
