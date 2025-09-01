
import React from 'react';
import LeadMagnet from '../components/LeadMagnet';
import { CodeBracketIcon } from '../components/icons';

const features = [
  'Intelligent SaaS Products',
  'AI-driven Mobile Apps (React Native)',
  'Smart Dashboards & Analytics',
  'Personalized User Journeys',
  'Automated Content Generation',
  'Robust, Scalable Architectures (MERN, Django)'
];

const ServiceAIAppsPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
            <div className="w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                AI-Powered Applications
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-300">
                Go beyond standard applications. We engineer intelligent, enterprise-grade web and mobile apps that learn from user interaction, automate features, and deliver unparalleled value.
              </p>
              <a href="#/contact" className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-transform duration-200 hover:scale-105">
                Build Your Intelligent App
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <CodeBracketIcon className="w-64 h-64 text-slate-700" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Infusing Intelligence into Every Interaction
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              We leverage modern frameworks like MERN, Django, and React Native to build a robust foundation, then empower it with custom AI integrations.
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

export default ServiceAIAppsPage;
