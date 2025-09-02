import React from 'react';

interface ServicePageHeroProps {
    title: React.ReactNode;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
}

const ServicePageHero: React.FC<ServicePageHeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="pt-32 pb-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-grid-slate-800/[0.05]"></div>
        <div 
        className="absolute inset-0"
        style={{ 
            backgroundImage: 'radial-gradient(circle at 15% 30%, rgba(239, 68, 68, 0.1), transparent 30%), radial-gradient(circle at 85% 80%, rgba(59, 130, 246, 0.05), transparent 40%)',
            filter: 'blur(60px)'
        }}
        ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight scroll-animate fade-in-up">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 scroll-animate fade-in-up" style={{ transitionDelay: '200ms' }}>
          {subtitle}
        </p>
        <div className="mt-10 scroll-animate fade-in-up" style={{ transitionDelay: '400ms' }}>
          <a href={ctaLink} className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 transform">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHero;