import React from 'react';

const industries = [
  'Healthcare',
  'Education',
  'Retail',
  'Fintech',
  'Real Estate',
  'Telecom',
  'E-learning',
  'Business Intelligence'
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate fade-in-up">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl lg:text-5xl font-extrabold text-white tracking-tighter">
            Serving Visionaries Across Industries
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <div key={industry} className="bg-slate-800 border border-slate-700 text-gray-300 font-medium py-3 px-6 rounded-full transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-500 hover:scale-105 transform scroll-animate fade-in-up" style={{ transitionDelay: `${index * 75}ms` }}>
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;