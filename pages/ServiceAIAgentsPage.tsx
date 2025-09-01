
import React from 'react';
import ServicePageHero from '../components/ServicePageHero';
import ProblemSolutionBlock from '../components/ProblemSolutionBlock';
import FeaturesGrid from '../components/FeaturesGrid';
import SuccessStories from '../components/SuccessStories';
import ProcessSteps from '../components/ProcessSteps';
import TechStack from '../components/TechStack';
import WhyWangoes from '../components/WhyWangoes';
import AIAuditForm from '../components/AIAuditForm';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import { ChatBubbleLeftRightIcon, CpuChipIcon, ArrowPathIcon, PuzzlePieceIcon } from '../components/icons';

const features = [
  {
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />,
    title: 'Autonomous AI Agents',
    description: 'Deploy intelligent agents for customer support, sales, and operations that work 24/7.',
  },
  {
    icon: <ArrowPathIcon className="h-8 w-8 text-white" />,
    title: 'Workflow Automation',
    description: 'Integrate your existing tools (like Slack, GSuite, CRMs) and automate repetitive business processes.',
  },
  {
    icon: <CpuChipIcon className="h-8 w-8 text-white" />,
    title: 'Custom AI Models',
    description: 'Develop bespoke Machine Learning models for predictive analytics, NLP, and computer vision tasks.',
  },
  {
    icon: <PuzzlePieceIcon className="h-8 w-8 text-white" />,
    title: 'No-Code / Low-Code',
    description: 'Build and deploy powerful automations quickly using platforms like n8n and Make.com.',
  },
];

const processSteps = [
    { id: '1', title: 'Discovery & Audit', description: 'We analyze your current workflows to identify the highest-impact automation opportunities.' },
    { id: '2', title: 'Strategy & Roadmap', description: 'We design a custom AI and automation strategy tailored to your business goals.' },
    { id: '3', title: 'Development & Integration', description: 'Our team builds your AI agents and integrates them seamlessly with your existing systems.' },
    { id: '4', title: 'Training & Deployment', description: 'We train the AI models and deploy the solution, ensuring a smooth transition for your team.' },
    { id: '5', title: 'Support & Scaling', description: 'We provide ongoing support and help you scale your automation efforts as your business grows.' },
];

const faqs = [
    { question: 'How long does it take to deploy an AI agent?', answer: 'Simple agents can be deployed in as little as 7-14 days. More complex, custom models may take 4-8 weeks, depending on data availability and integration requirements.' },
    { question: 'What kind of ROI can I expect from automation?', answer: 'Clients typically see a significant ROI within 3-6 months, with benefits including a 30-50% reduction in manual task hours, improved customer response times, and increased lead conversion rates.' },
    { question: 'Do we need to have a data science team?', answer: 'Not at all. We handle the entire process, from data analysis and model development to deployment and maintenance. We act as your extended AI team.' },
    { question: 'What industries do you specialize in?', answer: 'Our AI and automation solutions are industry-agnostic and have been successfully implemented in healthcare, e-commerce, real estate, education, and professional services.' },
];

const ServiceAIAgentsPage: React.FC = () => {
  return (
    <>
      <ServicePageHero
        title={<>Automate 40% of Your Business <span className="text-red-500">in 7 Days</span></>}
        subtitle="We build and deploy intelligent AI agents and automation workflows that cut costs, boost productivity, and scale your operations."
        ctaText="Get a Free AI Audit"
        ctaLink="#ai-audit"
      />
      <ProblemSolutionBlock
        problemTitle="The Problem: Manual Work Kills Productivity"
        problemDescription="Businesses waste up to 40% of employee time on repetitive, manual tasks like data entry, customer follow-ups, and report generation. This leads to burnout, human error, and missed growth opportunities."
        solutionTitle="Our Solution: An Intelligent Digital Workforce"
        solutionDescription={
          <p>
            Our AI Agents and automation solutions handle your repetitive tasks, freeing up your team to focus on high-value strategic work. We automate everything from customer support and lead generation to internal operations.
          </p>
        }
      />
      <FeaturesGrid
        title="AI & Automation Capabilities"
        subtitle="We offer a comprehensive suite of services to transform your business operations."
        features={features}
      />
      <SuccessStories limit={2} />
      <ProcessSteps title="Our 5-Step Automation Process" steps={processSteps} />
      <TechStack
        title="Tools & Technologies We Use"
        techs={['Python', 'TensorFlow', 'n8n', 'Make.com', 'Relevance AI', 'LangChain', 'GCP', 'AWS']}
      />
      <WhyWangoes />
      <section id="ai-audit" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <AIAuditForm />
        </div>
      </section>
      <FAQ title="Frequently Asked Questions" faqs={faqs} />
      <FinalCTA
        title="Ready to Scale with AI?"
        cta1Text="Get Your Free AI Audit"
        cta1Link="#ai-audit"
        cta2Text="Book a Consultation"
        cta2Link="#/contact"
      />
    </>
  );
};

export default ServiceAIAgentsPage;
