
import React, { useState, useEffect } from 'react';
import { SITE_CONTENT } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Expertise", href: "#practice" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-4 group cursor-pointer">
            <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-gray-900' : 'text-white md:text-gray-900'}`}>
              {SITE_CONTENT.name.toUpperCase()}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:text-legal-brown ${scrolled ? 'text-gray-600' : 'text-gray-900'}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-legal-brown text-white px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-[#3d2d21] transform hover:-translate-y-0.5 shadow-lg shadow-legal-brown/20"
              >
                Inquire
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white h-screen fixed inset-0 z-50 flex flex-col justify-center items-center space-y-12 p-8 animate-fadeIn">
           <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-gray-900">
             <i className="fa-solid fa-xmark text-3xl"></i>
           </button>
           {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif font-bold text-gray-900 hover:text-legal-brown transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-legal-brown text-white py-6 text-center text-xs font-bold tracking-[0.3em] uppercase"
          >
            Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
