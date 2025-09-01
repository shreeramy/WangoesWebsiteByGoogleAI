
import React from 'react';
import ServicePageHero from '../components/ServicePageHero';
import ProblemSolutionBlock from '../components/ProblemSolutionBlock';
import FeaturesGrid from '../components/FeaturesGrid';
import SuccessStories from '../components/SuccessStories';
import ProcessSteps from '../components/ProcessSteps';
import TechStack from '../components/TechStack';
import WhyWangoes from '../components/WhyWangoes';
import LeadMagnet from '../components/LeadMagnet';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import { CodeBracketIcon, DevicePhoneMobileIcon, ServerStackIcon, PuzzlePieceIcon } from '../components/icons';

const features = [
  {
    icon: <CodeBracketIcon className="h-8 w-8 text-white" />,
    title: 'Custom Web Applications',
    description: 'Scalable and secure web apps built with modern frameworks like MERN and Django.',
  },
  {
    icon: <DevicePhoneMobileIcon className="h-8 w-8 text-white" />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for iOS and Android using React Native for fast time-to-market.',
  },
  {
    icon: <ServerStackIcon className="h-8 w-8 text-white" />,
    title: 'SaaS Product Development',
    description: 'End-to-end development of multi-tenant SaaS platforms, from concept to launch and scaling.',
  },
  {
    icon: <PuzzlePieceIcon className="h-8 w-8 text-white" />,
    title: 'API Development & Integrations',
    description: 'Robust RESTful APIs to connect your software and integrate with third-party services.',
  },
];

const processSteps = [
    { id: '1', title: 'Discovery & Strategy', description: 'We dive deep into your vision, requirements, and user personas to create a detailed project plan.' },
    { id: '2', title: 'UI/UX Design', description: 'Our designers create intuitive and engaging interfaces that deliver an exceptional user experience.' },
    { id: '3', title: 'Agile Development', description: 'We build your application in iterative sprints, providing regular updates and incorporating your feedback.' },
    { id: '4', title: 'Quality Assurance', description: 'Rigorous testing is performed at every stage to ensure a bug-free, reliable, and secure product.' },
    { id: '5', title: 'Deployment & Support', description: 'We handle the full deployment process and provide ongoing maintenance and support to ensure success.' },
];

const faqs = [
    { question: 'What is your typical project timeline?', answer: 'A Minimum Viable Product (MVP) for a web or mobile application typically takes 3-4 months. More complex enterprise-level projects can range from 6 to 12 months.' },
    { question: 'How much does custom software development cost?', answer: 'Costs vary based on project complexity, features, and team size. We provide a detailed, transparent proposal after our initial discovery call. Contact us for a free estimate.' },
    { question: 'Do you provide ongoing maintenance and support?', answer: 'Yes, we offer flexible support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally post-launch.' },
    { question: 'Can you integrate AI into my existing application?', answer: 'Absolutely. We specialize in integrating custom AI/ML models and AI agents into existing software to enhance functionality and provide intelligent features.' },
];

const ServiceAIAppsPage: React.FC = () => {
  return (
    <>
      <ServicePageHero
        title={<>Build Scalable, Intelligent <span className="text-red-500">Software Solutions</span></>}
        subtitle="We design, build, and scale enterprise-grade web, mobile, and SaaS applications tailored to your unique business needs."
        ctaText="Book a Free Consultation"
        ctaLink="#/contact"
      />
      <ProblemSolutionBlock
        problemTitle="The Problem: Off-the-Shelf Isn't Enough"
        problemDescription="Generic software often fails to address your specific workflows, integration needs, and scaling challenges, limiting your potential and forcing you to adapt your processes to the software."
        solutionTitle="Our Solution: Technology Built for You"
        solutionDescription={
          <p>
            We build custom software from the ground up, ensuring it perfectly aligns with your business objectives. Our solutions are scalable, secure, and built with an AI-first approach to future-proof your investment.
          </p>
        }
      />
      <FeaturesGrid
        title="Custom Development Services"
        subtitle="From initial concept to final deployment, we provide end-to-end software engineering."
        features={features}
      />
      <SuccessStories limit={2} />
      <ProcessSteps title="Our Development Process" steps={processSteps} />
      <TechStack
        title="Our Technology Stack"
        techs={['React.js', 'Node.js', 'Python', 'Django', 'React Native', 'MongoDB', 'PostgreSQL', 'AWS']}
      />
      <WhyWangoes />
      <LeadMagnet />
      <FAQ title="Frequently Asked Questions" faqs={faqs} />
      <FinalCTA
        title="Ready to Build Your Custom Application?"
        cta1Text="Book a Free Consultation"
        cta1Link="#/contact"
        cta2Text="View Our Case Studies"
        cta2Link="#/case-studies"
      />
    </>
  );
};

export default ServiceAIAppsPage;
