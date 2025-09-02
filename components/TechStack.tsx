import React from 'react';

interface TechStackProps {
  title: string;
  techs: string[];
}

const TechStack: React.FC<TechStackProps> = ({ title, techs }) => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          {techs.map((tech, index) => (
            <div key={tech} className="bg-slate-700/50 border border-slate-600 text-gray-300 font-medium py-2 px-5 rounded-lg transition-all duration-300 hover:bg-slate-700 hover:border-red-500/50 scroll-animate fade-in-up" style={{ transitionDelay: `${index * 50}ms` }}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;