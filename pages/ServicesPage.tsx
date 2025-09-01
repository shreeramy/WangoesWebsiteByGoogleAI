
import React from 'react';
import { CpuChipIcon, CodeBracketIcon, CloudIcon } from '../components/icons';
import LeadMagnet from '../components/LeadMagnet';

const services = [
  {
    icon: <CpuChipIcon className="h-8 w-8 text-white" />,
    title: 'AI & Automation',
    description: 'We design and build intelligent AI agents and automation workflows to boost efficiency and drive growth for your business.',
    href: '#/service-ai-automation',
  },
  {
    icon: <CodeBracketIcon className="h-8 w-8 text-white" />,
    title: 'Custom Software Development',
    description: 'We build enterprise-grade web and mobile applications with AI at their core, creating intelligent and responsive user experiences.',
    href: '#/service-software-development',
  },
  {
    icon: <CloudIcon className="h-8 w-8 text-white" />,
    title: 'DevOps & Cloud Solutions',
    description: 'We provide robust, scalable, and secure cloud infrastructure to ensure your applications are reliable and performant.',
    href: '#/service-devops-cloud',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Our Core Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              We specialize in creating intelligent systems, robust applications, and scalable infrastructure to help you innovate and stay ahead of the curve.
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
