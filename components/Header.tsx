
import React, { useState, useEffect } from 'react';
import WangoesLogo from './WangoesLogo';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-wangoes' },
  { name: 'Case Studies', href: '#success-stories' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" aria-label="Homepage">
            <WangoesLogo />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-transform duration-200 hover:scale-105">
              Book a Consultation
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white" aria-label="Open menu">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-slate-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-700 hover:text-white">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-left bg-red-600 hover:bg-red-700 text-white font-bold mt-2 mx-3 my-3 py-2 px-3 rounded-md transition-transform duration-200 hover:scale-105">
              Book a Consultation
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
