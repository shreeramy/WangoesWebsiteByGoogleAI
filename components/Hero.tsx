
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
       <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
        <div 
        className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[bottom_1px_center] " 
        style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}
        ></div>
        <div 
        className="absolute inset-0"
        style={{ 
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(239, 68, 68, 0.1), transparent 30%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1), transparent 30%)',
            filter: 'blur(60px)'
        }}
        ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Build, Automate, & Scale with
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400 mt-2">Intelligent AI Solutions</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          We empower businesses worldwide with AI agents, enterprise-grade applications, and scalable cloud infrastructure to unlock new opportunities and drive growth.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 transform">
            Book a Free AI Consultation
          </a>
          <a href="#services" className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 transform">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
