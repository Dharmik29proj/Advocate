
import React from 'react';
import { Scale, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import { OFFICE_DETAILS } from '../constants';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0a192f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Scale className="h-8 w-8 mr-2 text-blue-400" />
              <div>
                <span className="text-xl font-bold tracking-tight serif uppercase">Vidhyaan Law</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium leading-none text-slate-400">Integrity & Justice</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing premium legal representation across Civil, Criminal, and Family Courts in India. Founded on the principles of integrity, research, and client-centric justice.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 serif">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About the Advocate</button></li>
              <li><button onClick={() => onNavigate('practice-areas')} className="hover:text-white transition-colors">Practice Areas</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">Legal Articles</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">Frequently Asked Questions</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Book an Appointment</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 serif">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 shrink-0" />
                <span>{OFFICE_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 shrink-0" />
                <span>{OFFICE_DETAILS.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 shrink-0" />
                <span>{OFFICE_DETAILS.email}</span>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h4 className="text-lg font-bold mb-6 serif">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('disclaimer')} className="hover:text-white transition-colors">Legal Disclaimer</button></li>
              <li><p className="italic text-xs mt-4">Member of the Bar Council of India. Registered No: MAH/123/2010</p></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2024 Vidhyaan Law Associates. All Rights Reserved.</p>
          <p>The Bar Council of India rules prohibit lawyers from advertising and soliciting work through communication in the public domain.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
