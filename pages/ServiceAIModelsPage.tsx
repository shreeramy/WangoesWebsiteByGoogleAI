
import React from 'react';
import LeadMagnet from '../components/LeadMagnet';
import { ChartBarIcon } from '../components/icons';

const features = [
  'Predictive Analytics',
  'Natural Language Processing (NLP)',
  'Computer Vision Solutions',
  'Recommendation Engines',
  'Anomaly Detection',
  'Data-driven Forecasting'
];

const ServiceAIModelsPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                Custom AI Model Development
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-300">
                Unlock the hidden potential in your data. We build and train bespoke Machine Learning and Deep Learning models designed to solve your most complex business problems and create a competitive edge.
              </p>
              <a href="#/contact" className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-transform duration-200 hover:scale-105">
                Discuss Your Model Idea
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <ChartBarIcon className="w-64 h-64 text-slate-700" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Tailored Intelligence for Your Unique Data
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Off-the-shelf solutions don't always fit. Our custom models are fine-tuned to your specific datasets and goals, delivering superior accuracy and performance.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {features.map(feature => (
              <div key={feature} className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnet />
    </>
  );
};

export default ServiceAIModelsPage;
