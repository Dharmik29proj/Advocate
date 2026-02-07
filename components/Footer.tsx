
import React from 'react';
import { SITE_CONTENT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <span className="text-2xl font-serif font-bold tracking-tight mb-8 block uppercase">
              {SITE_CONTENT.name}
            </span>
            <p className="text-gray-500 leading-relaxed font-light text-lg mb-10 max-w-sm">
              Providing elite legal strategies with absolute discretion since 2002. Your trusted advocate for high-stakes litigation and advisory.
            </p>
            <div className="flex gap-8">
              {Object.entries(SITE_CONTENT.socialLinks).map(([key, url]) => (
                <a key={key} href={url} className="text-gray-600 hover:text-white transition-colors uppercase text-[10px] tracking-[0.2em] font-bold">
                  {key}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-legal-brown">Areas</h4>
            <ul className="space-y-4 text-gray-500 font-light">
              {SITE_CONTENT.services.slice(0, 4).map(s => (
                <li key={s.id}><a href="#practice" className="hover:text-white transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-legal-brown">Engagement</h4>
            <div className="space-y-6 text-gray-500 font-light">
              <p className="leading-relaxed">{SITE_CONTENT.contactInfo.address}</p>
              <p className="text-xl text-white font-serif">{SITE_CONTENT.contactInfo.phone}</p>
              <a href={`mailto:${SITE_CONTENT.contactInfo.email}`} className="block border-b border-gray-800 pb-2 hover:border-white transition-all w-fit">
                {SITE_CONTENT.contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest text-gray-700 uppercase">
          <p>© {new Date().getFullYear()} {SITE_CONTENT.name}.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
