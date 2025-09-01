
import React from 'react';
import SuccessStories from '../components/SuccessStories';
import LeadMagnet from '../components/LeadMagnet';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <div className="pt-32 pb-12 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                Our Success Stories
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                Explore how we've helped businesses across various industries implement cutting-edge AI and software solutions to achieve their goals.
            </p>
        </div>
      </div>
      <SuccessStories showHeading={false}/>
      <LeadMagnet />
    </>
  );
};

export default CaseStudiesPage;
