
import React from 'react';
import WangoesLogo from './WangoesLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook"><path d="M22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h11.6v-9.1H9.9v-3.6h3.5V8.4c0-3.5 2.1-5.4 5.2-5.4 1.5 0 2.8.1 3.2.2v3.2h-1.9c-1.7 0-2 .8-2 2v2.6h3.6l-.5 3.6h-3.1V24h6.2c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z"/></svg> },
    { name: 'Twitter', href: '#', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.21 0-.42-.015-.63.961-.689 1.799-1.56 2.463-2.548z"/></svg> },
    { name: 'LinkedIn', href: '#', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg> },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <a href="#/" className="mb-4 inline-block">
              <WangoesLogo />
            </a>
            <p className="text-gray-400 max-w-md mt-4">
              A global IT services and AI automation company, dedicated to delivering intelligent solutions that empower businesses to scale and innovate.
            </p>
            <div className="flex space-x-4 mt-6">
                {socialLinks.map(social => (
                     <a key={social.name} href={social.href} className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                        {social.icon}
                        <span className="sr-only">{social.name}</span>
                     </a>
                ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-1"></div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#/services" className="text-gray-400 hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#/about" className="text-gray-400 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#/case-studies" className="text-gray-400 hover:text-red-500 transition-colors">Case Studies</a></li>
              <li><a href="#/contact" className="text-gray-400 hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    <a href="mailto:contact@wangoes.com" className="hover:text-red-500">contact@wangoes.com</a>
                </li>
                <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                    <span>Indore, India</span>
                </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-700/50 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Wangoes Technologies Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;