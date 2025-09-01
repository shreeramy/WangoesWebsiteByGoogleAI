
import React, { useState, useEffect } from 'react';
import WangoesLogo from './WangoesLogo';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
  { name: 'Case Studies', href: '#/case-studies' },
  { name: 'About Us', href: '#/about' },
];

const serviceLinks = [
    { name: 'AI & Automation', href: '#/service-ai-automation' },
    { name: 'Custom Software Development', href: '#/service-software-development' },
    { name: 'DevOps & Cloud Solutions', href: '#/service-devops-cloud' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      setIsOpen(false); // Close mobile menu on navigation
      setIsServicesOpen(false); // Close services dropdown on navigation
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial path
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const getLinkClass = (href: string) => {
    return currentPath === href
      ? 'text-red-500 font-semibold'
      : 'text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium';
  };
  
  const isServicesActive = currentPath.startsWith('#/service');

  return (
    <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
        onMouseLeave={() => setIsServicesOpen(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#/" aria-label="Homepage" onClick={() => setIsOpen(false)}>
            <WangoesLogo />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)}>
                <button
                    className={`flex items-center ${isServicesActive ? 'text-red-500 font-semibold' : 'text-gray-300 font-medium'} hover:text-red-500 transition-colors duration-200`}
                >
                    Services
                    <svg className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isServicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-slate-800 rounded-md shadow-lg border border-slate-700 py-1" onMouseLeave={() => setIsServicesOpen(false)}>
                        {serviceLinks.map((link) => (
                            <a key={link.name} href={link.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-red-500">
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={getLinkClass(link.href)}>
                {link.name}
              </a>
            ))}
            <a href="#/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-transform duration-200 hover:scale-105">
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
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-slate-900/95`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="px-3">
            <h3 className="text-gray-400 font-bold mt-2">Services</h3>
            {serviceLinks.map((link) => (
               <a key={link.name} href={link.href} className={`block pl-3 py-2 rounded-md text-base ${getLinkClass(link.href)}`}>
                {link.name}
              </a>
            ))}
          </div>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`block px-3 py-2 rounded-md text-base ${getLinkClass(link.href)}`}>
              {link.name}
            </a>
          ))}
          <div className="p-3">
            <a href="#/contact" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-md transition-transform duration-200 hover:scale-105">
                Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
