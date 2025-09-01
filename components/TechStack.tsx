
import React from 'react';

interface TechStackProps {
  title: string;
  techs: string[];
}

const TechStack: React.FC<TechStackProps> = ({ title, techs }) => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 max-w-4xl mx-auto">
          {techs.map((tech) => (
            <div key={tech} className="text-gray-400 font-semibold text-lg hover:text-white transition-colors">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
