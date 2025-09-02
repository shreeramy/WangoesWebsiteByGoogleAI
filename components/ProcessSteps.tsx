import React from 'react';

interface Step {
  id: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  steps: Step[];
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ title, steps }) => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 w-0.5 h-full bg-slate-700 hidden md:block" aria-hidden="true"></div>
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.id} className="md:grid md:grid-cols-2 md:gap-x-16 items-center scroll-animate fade-in-up">
                <div className={`md:order-${index % 2 === 0 ? 1 : 2} text-center md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                <div className="hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;