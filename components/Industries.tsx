
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
    <section id="industries" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Serving Visionaries Across Industries
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <div key={industry} className="bg-slate-700/50 border border-slate-600 text-gray-300 font-medium py-3 px-6 rounded-full transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
