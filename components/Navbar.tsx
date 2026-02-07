
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Scale } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Practice Areas', id: 'practice-areas' },
    { name: 'About', id: 'about' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => handleLinkClick('home')}>
            <Scale className={`h-8 w-8 mr-2 ${scrolled ? 'text-[#0a192f]' : 'text-white'}`} />
            <div>
              <span className={`text-xl font-bold tracking-tight serif uppercase ${scrolled ? 'text-[#0a192f]' : 'text-white'}`}>Vidhyaan Law</span>
              <p className={`text-[10px] uppercase tracking-[0.2em] font-medium leading-none ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>Integrity & Justice</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-semibold hover:text-blue-600 transition-colors uppercase tracking-wider ${scrolled ? (activePage === link.id ? 'text-blue-700' : 'text-[#0a192f]') : (activePage === link.id ? 'text-blue-300' : 'text-white')}`}
              >
                {link.name}
              </button>
            ))}
            <a 
              href="tel:+919876543210" 
              className={`flex items-center px-4 py-2 rounded-md text-sm font-bold transition-all ${scrolled ? 'bg-[#0a192f] text-white hover:bg-slate-800' : 'bg-white text-[#0a192f] hover:bg-slate-100'}`}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-[#0a192f]' : 'text-white'} hover:text-blue-500`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left px-3 py-4 text-base font-medium text-[#0a192f] hover:bg-slate-50 border-b border-slate-100 last:border-none ${activePage === link.id ? 'text-blue-700 bg-slate-50' : ''}`}
              >
                {link.name}
              </button>
            ))}
            <div className="p-3">
              <a 
                href="tel:+919876543210" 
                className="flex items-center justify-center w-full px-4 py-3 bg-[#0a192f] text-white rounded-md font-bold"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
