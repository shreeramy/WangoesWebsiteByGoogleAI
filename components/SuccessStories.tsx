import React from 'react';
import { caseStudies } from '../data/caseStudies';

interface SuccessStoriesProps {
    limit?: number;
    showHeading?: boolean;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ limit, showHeading = true }) => {
  const displayedStories = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section id="success-stories" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
            <div className="text-center mb-12 scroll-animate fade-in-up">
            <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Delivering Impactful Solutions
            </p>
            </div>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedStories.map((story, index) => (
            <div key={story.slug} className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-red-500/50 transition-all duration-300 flex flex-col scroll-animate fade-in-up" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="overflow-hidden">
                <img src={story.imageUrl} alt={story.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{story.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {story.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-slate-700 text-gray-300 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                 <a href={`#/case-studies/${story.slug}`} className="font-semibold text-red-500 hover:text-red-400 transition-colors duration-200 mt-auto">
                    Read Case Study &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
        {limit && caseStudies.length > limit && (
            <div className="text-center mt-12 scroll-animate fade-in-up">
                <a href="#/case-studies" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 transform">
                    View All Case Studies
                </a>
            </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStories;