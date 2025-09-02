import React from 'react';

interface ProblemSolutionBlockProps {
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: React.ReactNode;
}

const ProblemSolutionBlock: React.FC<ProblemSolutionBlockProps> = ({ problemTitle, problemDescription, solutionTitle, solutionDescription }) => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-left">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 scroll-animate fade-in-up">
              <h2 className="text-2xl font-bold text-red-500 mb-4">{problemTitle}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {problemDescription}
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 scroll-animate fade-in-up" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-2xl font-bold text-green-400 mb-4">{solutionTitle}</h2>
              <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                {solutionDescription}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ProblemSolutionBlock;