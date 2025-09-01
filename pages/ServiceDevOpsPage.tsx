
import React from 'react';
import ServicePageHero from '../components/ServicePageHero';
import ProblemSolutionBlock from '../components/ProblemSolutionBlock';
import FeaturesGrid from '../components/FeaturesGrid';
import SuccessStories from '../components/SuccessStories';
import ProcessSteps from '../components/ProcessSteps';
import TechStack from '../components/TechStack';
import WhyWangoes from '../components/WhyWangoes';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import AIAuditForm from '../components/AIAuditForm';
import { CloudIcon, ServerStackIcon, WrenchScrewdriverIcon, PuzzlePieceIcon } from '../components/icons';

const features = [
  {
    icon: <CloudIcon className="h-8 w-8 text-white" />,
    title: 'Cloud Infrastructure & Migration',
    description: 'Design, deploy, and manage scalable infrastructure on AWS and GCP. Seamlessly migrate your legacy systems to the cloud.',
  },
  {
    icon: <WrenchScrewdriverIcon className="h-8 w-8 text-white" />,
    title: 'CI/CD & Automation',
    description: 'Implement automated pipelines for continuous integration and delivery, accelerating your development lifecycle.',
  },
  {
    icon: <ServerStackIcon className="h-8 w-8 text-white" />,
    title: 'Docker & Kubernetes',
    description: 'Containerize your applications for portability and orchestrate them at scale with Kubernetes for high availability.',
  },
  {
    icon: <PuzzlePieceIcon className="h-8 w-8 text-white" />,
    title: 'Security & Compliance',
    description: 'Implement best practices for cloud security, monitoring, and compliance to protect your data and applications.',
  },
];

const processSteps = [
    { id: '1', title: 'Infrastructure Audit', description: 'We assess your current cloud setup, identifying areas for improvement in cost, performance, and security.' },
    { id: '2', title: 'Strategy & Design', description: 'We design a scalable and resilient cloud architecture tailored to your application\'s specific needs.' },
    { id: '3', title: 'Implementation & Automation', description: 'Our DevOps engineers implement the infrastructure-as-code and set up automated CI/CD pipelines.' },
    { id: '4', title: 'Monitoring & Optimization', description: 'We establish comprehensive monitoring and logging to ensure performance and proactively optimize costs.' },
    { id: '5', title: 'Ongoing Management', description: 'We offer managed services to handle the day-to-day operations of your cloud environment.' },
];

const faqs = [
    { question: 'Which cloud providers do you support?', answer: 'We are experts in Amazon Web Services (AWS) and Google Cloud Platform (GCP). We can help you choose the right provider for your needs or work within your existing setup.' },
    { question: 'Can you help us reduce our cloud spending?', answer: 'Yes, cloud cost optimization is a core part of our service. We often help clients save 20-40% on their monthly cloud bills through resource optimization and strategic architecture changes.' },
    { question: 'How do you ensure the security of our infrastructure?', answer: 'We follow the principle of least privilege, implement robust identity and access management (IAM), encrypt data at rest and in transit, and set up continuous security monitoring.' },
    { question: 'Do you work with existing development teams?', answer: 'Absolutely. We collaborate closely with your developers to build and maintain a CI/CD process that empowers them to ship code faster and more reliably.' },
];

const ServiceDevOpsPage: React.FC = () => {
  return (
    <>
      <ServicePageHero
        title={<>Reliable, Scalable, and <span className="text-red-500">Secure Cloud</span></>}
        subtitle="We provide end-to-end DevOps and cloud solutions to ensure your applications are performant, highly available, and cost-effective."
        ctaText="Get a Free Infrastructure Audit"
        ctaLink="#infra-audit"
      />
      <ProblemSolutionBlock
        problemTitle="The Problem: Poor Infrastructure Hurts Growth"
        problemDescription="Downtime, security breaches, and ballooning cloud costs can cripple a business. Managing a complex cloud environment distracts your team from focusing on building your core product."
        solutionTitle="Our Solution: Expert-Managed Cloud Operations"
        solutionDescription={
          <p>
            We act as your dedicated DevOps team, implementing best practices for automation, security, and scalability. We build and manage a rock-solid foundation so you can innovate with confidence.
          </p>
        }
      />
      <FeaturesGrid
        title="DevOps & Cloud Services"
        subtitle="From architecture design to 24/7 management, we cover all aspects of your cloud infrastructure."
        features={features}
      />
      <SuccessStories limit={1} />
      <ProcessSteps title="Our DevOps & Cloud Process" steps={processSteps} />
      <TechStack
        title="Our DevOps Toolchain"
        techs={['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI', 'Prometheus']}
      />
      <WhyWangoes />
      <section id="infra-audit" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <AIAuditForm />
        </div>
      </section>
      <FAQ title="Frequently Asked Questions" faqs={faqs} />
      <FinalCTA
        title="Ready to Optimize Your Cloud Infrastructure?"
        cta1Text="Get Your Free Audit"
        cta1Link="#infra-audit"
        cta2Text="Book a Consultation"
        cta2Link="#/contact"
      />
    </>
  );
};

export default ServiceDevOpsPage;
