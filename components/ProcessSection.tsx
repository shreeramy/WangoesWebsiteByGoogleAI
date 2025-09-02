
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Audit',
    description: 'We analyze your current workflows to identify the best opportunities for AI automation.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create a custom blueprint for your AI solution, tailored to your specific goals.',
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'Our team builds and integrates the AI system into your business with minimal disruption.',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'We continuously monitor and refine the system to ensure peak performance and ROI.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate fade-in-up">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Our Process</h2>
          <p className="mt-2 text-3xl lg:text-5xl font-extrabold text-white tracking-tighter">
            Our Simple 4-Step Path to AI Success
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
            From initial idea to full-scale deployment and beyond, we make the process of integrating AI seamless and transparent.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-8 text-center scroll-animate fade-in-up group" 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {index < steps.length - 1 && (
                 <div className="hidden lg:block absolute top-1/2 -right-1/2 h-px w-full bg-slate-700" aria-hidden="true"></div>
              )}
              <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-slate-800 mx-auto mb-6 border-2 border-slate-700 transition-colors duration-300 group-hover:border-red-500">
                <span className="text-xl font-bold text-red-500">{step.number}</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;