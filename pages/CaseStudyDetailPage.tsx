import React from 'react';
import { caseStudies } from '../data/caseStudies';
import LeadMagnet from '../components/LeadMagnet';

interface CaseStudyDetailPageProps {
  slug: string;
}

const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug }) => {
  const story = caseStudies.find(s => s.slug === slug);

  if (!story) {
    return (
      <section className="pt-32 pb-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Case Study Not Found</h1>
          <p className="mt-4 text-gray-300">The case study you are looking for does not exist.</p>
          <a href="#/case-studies" className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md">
            View All Case Studies
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-slate-900 relative">
        <div className="absolute inset-0 bg-grid-slate-800/[0.05]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animate fade-in-up">
            <p className="text-base font-semibold text-red-500 tracking-wider uppercase">{story.industry}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {story.title}
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                {story.description}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-900 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <img src={story.imageUrl} alt={story.title} className="w-full h-auto object-cover rounded-xl shadow-2xl shadow-slate-950/50 scroll-animate fade-in-up" style={{ transitionDelay: '200ms' }} />
                
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-slate-800/50 p-6 rounded-lg border border-slate-700 scroll-animate fade-in-up" style={{ transitionDelay: '400ms' }}>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Client</h3>
                        <p className="mt-1 text-lg font-bold text-white">{story.client}</p>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Industry</h3>
                        <p className="mt-1 text-lg font-bold text-white">{story.industry}</p>
                    </div>
                     <div className="col-span-2">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies</h3>
                        <p className="mt-1 text-lg font-bold text-white">{story.technologies.join(', ')}</p>
                    </div>
                </div>

                <div className="mt-16 text-left space-y-12 scroll-animate fade-in-up" style={{ transitionDelay: '600ms' }}>
                    <div>
                        <h2 className="text-3xl font-bold text-white border-l-4 border-red-500 pl-4">The Challenge</h2>
                        <p className="mt-4 text-lg text-gray-300 leading-relaxed">{story.challenge}</p>
                    </div>
                     <div>
                        <h2 className="text-3xl font-bold text-white border-l-4 border-red-500 pl-4">Our Solution</h2>
                        <p className="mt-4 text-lg text-gray-300 leading-relaxed">{story.solution}</p>
                    </div>
                     <div>
                        <h2 className="text-3xl font-bold text-white border-l-4 border-red-500 pl-4">Key Results</h2>
                        <ul className="mt-4 space-y-3">
                            {story.results.map((result, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-lg text-gray-300">{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 text-center scroll-animate fade-in-up" style={{ transitionDelay: '800ms' }}>
                     <a href="#/case-studies" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 transform">
                        View More Case Studies
                    </a>
                </div>

            </div>
        </div>
      </div>
      
      <LeadMagnet />
    </>
  );
};

export default CaseStudyDetailPage;