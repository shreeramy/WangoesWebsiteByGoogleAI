import React from 'react';
import { CpuChipIcon, CodeBracketIcon, CloudIcon } from './icons';

const servicesData = [
  {
    icon: <CpuChipIcon className="h-10 w-10 text-white" />,
    title: 'AI & Automation Services',
    description: 'Leverage the power of artificial intelligence with our AI automation services. We build solutions to automate processes, enhance customer engagement, and drive business efficiency.',
    items: ['AI Agent Development', 'No-Code/Low-Code Automations', 'Business Process Automation', 'Custom ML/DL Models'],
    link: '#/service-ai-automation',
  },
  {
    icon: <CodeBracketIcon className="h-10 w-10 text-white" />,
    title: 'Custom Software Development',
    description: 'Our custom software development services deliver robust, scalable, and secure web and mobile applications tailored to your specific business needs.',
    items: ['Web & Mobile Apps (MERN, Django)', 'SaaS Products & Marketplaces', 'CRM/ERP Platforms', 'API Development & Integrations'],
    link: '#/service-software-development',
  },
  {
    icon: <CloudIcon className="h-10 w-10 text-white" />,
    title: 'DevOps & Cloud Solutions',
    description: 'Ensure your applications are reliable and scalable with our end-to-end DevOps and cloud solutions, covering CI/CD, security, and cost optimization.',
    items: ['Docker, Kubernetes & AWS/GCP', 'CI/CD Pipelines & Cloud Security', 'Database Scaling (PostgreSQL, MongoDB)', 'Cloud Cost Optimization'],
    link: '#/service-devops-cloud',
  },
];

const ServiceCard: React.FC<{ service: typeof servicesData[0] }> = ({ service }) => (
  <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-red-500/10 flex flex-col h-full group">
    <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 mb-6 transition-all duration-300 group-hover:scale-110">
        {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-400 mb-6">{service.description}</p>
    </div>
    <div className="flex-grow">
        <ul className="space-y-2.5">
        {service.items.map((item, index) => (
            <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{item}</span>
            </li>
        ))}
        </ul>
    </div>
    <div className="mt-8">
        <a href={service.link} className="font-semibold text-red-500 hover:text-red-400 transition-colors duration-200 inline-flex items-center gap-2">
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate fade-in-up">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Our Core Offerings</h2>
          <p className="mt-2 text-3xl lg:text-5xl font-extrabold text-white tracking-tighter">
            Comprehensive Tech Solutions for Growth
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="scroll-animate fade-in-up" style={{ transitionDelay: `${index * 150}ms` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;