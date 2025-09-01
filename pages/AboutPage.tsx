
import React from 'react';
import WhyWangoes from '../components/WhyWangoes';
import LeadMagnet from '../components/LeadMagnet';
import WangoesLogo from '../components/WangoesLogo';

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Pioneering AI-Driven Transformation
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Wangoes Technologies is a global IT services and AI automation company, founded in Indore, India. We are dedicated to building intelligent solutions that empower businesses to scale and innovate.
            </p>
          </div>
          
          <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-left">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400">
                To be a global leader in AI-driven automation and intelligent software solutions, helping businesses save time, scale faster, and unlock new opportunities.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400">
                Deliver high-quality, scalable, and intelligent digital solutions that empower businesses to stay ahead in a rapidly evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyWangoes />

      <LeadMagnet />
    </>
  );
};

export default AboutPage;
