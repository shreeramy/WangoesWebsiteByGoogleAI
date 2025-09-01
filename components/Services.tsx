
import React from 'react';
import { CpuChipIcon, CodeBracketIcon, CloudIcon } from './icons';

const servicesData = [
  {
    icon: <CpuChipIcon className="h-10 w-10 text-red-500" />,
    title: 'AI & Automation Services',
    description: 'Leverage the power of AI to automate processes, enhance customer engagement, and drive business efficiency.',
    items: ['AI Agent Development', 'No-Code/Low-Code Automations', 'Business Process Automation', 'Custom ML/DL Models'],
    link: '#/service-ai-agents',
  },
  {
    icon: <CodeBracketIcon className="h-10 w-10 text-red-500" />,
    title: 'Custom Software Development',
    description: 'We build robust, scalable, and secure web and mobile applications tailored to your specific business needs.',
    items: ['Web & Mobile Apps (MERN, Django)', 'SaaS Products & Marketplaces', 'CRM/ERP Platforms', 'API Development & Integrations'],
    link: '#/service-ai-apps',
  },
  {
    icon: <CloudIcon className="h-10 w-10 text-red-500" />,
    title: 'DevOps & Cloud Solutions',
    description: 'Ensure your applications are reliable, scalable, and secure with our end-to-end DevOps and cloud services.',
    items: ['Docker, Kubernetes & AWS/GCP', 'CI/CD Pipelines & Cloud Security', 'Database Scaling (PostgreSQL, MongoDB)', 'Cloud Cost Optimization'],
    link: '#/services',
  },
];

const ServiceCard: React.FC<{ service: typeof servicesData[0] }> = ({ service }) => (
  <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-red-500/10 flex flex-col">
    <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-700 mb-6">
        {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-400 mb-6">{service.description}</p>
    </div>
    <div className="flex-grow">
        <ul className="space-y-2">
        {service.items.map((item, index) => (
            <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{item}</span>
            </li>
        ))}
        </ul>
    </div>
    <div className="mt-8">
        <a href={service.link} className="font-semibold text-red-500 hover:text-red-400 transition-colors duration-200">
            Learn More &rarr;
        </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Our Core Offerings</h2>
          <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Tech Solutions for Growth
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
