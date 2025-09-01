
import React from 'react';
import { CpuChipIcon, CodeBracketIcon } from '../components/icons';
import LeadMagnet from '../components/LeadMagnet';

const services = [
  {
    icon: <CpuChipIcon className="h-8 w-8 text-white" />,
    title: 'AI Agent Development',
    description: 'We design and build intelligent AI agents for customer service, sales, marketing, and internal operations to automate tasks and improve efficiency.',
    href: '#/service-ai-agents',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M15.75 21v-1.5M12 4.5v-1.5m0 18v-1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>,
    title: 'AI Model Development',
    description: 'Our experts develop custom Machine Learning and Deep Learning models, including NLP and Vision-based AI, to solve unique business challenges.',
    href: '#/service-ai-models',
  },
  {
    icon: <CodeBracketIcon className="h-8 w-8 text-white" />,
    title: 'AI-Powered Applications',
    description: 'We build enterprise-grade web and mobile applications with AI at their core, creating intelligent and responsive user experiences.',
    href: '#/service-ai-apps',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Our AI & Automation Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              We specialize in creating intelligent systems that automate processes, provide valuable insights, and drive business growth. Explore our core AI offerings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a href={service.href} key={service.title} className="block p-8 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                 <div className="mt-6 font-semibold text-red-500">
                    Learn More &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <LeadMagnet />
    </>
  );
};

export default ServicesPage;
