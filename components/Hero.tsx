import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 opacity-50 z-0"></div>
      <div 
        className="absolute inset-0 z-[-1] animated-gradient"
        style={{ 
            backgroundImage: 'radial-gradient(circle at 25% 30%, rgba(239, 68, 68, 0.1), transparent 40%), radial-gradient(circle at 75% 70%, rgba(59, 130, 246, 0.1), transparent 40%)',
        }}
      ></div>
       <div className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[bottom_1px_center] z-[-1]" 
        style={{ maskImage: 'linear-gradient(to bottom, transparent, black 80%)' }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter scroll-animate fade-in-up">
          Build, Automate, & Scale with
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400 mt-2">Intelligent AI Solutions</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 scroll-animate fade-in-up" style={{ transitionDelay: '200ms' }}>
          As a premier AI automation company, we empower businesses worldwide with intelligent AI agents, custom enterprise-grade applications, and scalable cloud solutions to unlock new opportunities and drive growth.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 scroll-animate fade-in-up" style={{ transitionDelay: '400ms' }}>
          <a href="#contact" className="group w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-red-500/40 flex items-center justify-center gap-2">
            Book a Free AI Consultation
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a href="#services" className="w-full sm:w-auto bg-slate-700/80 hover:bg-slate-700 border border-slate-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;