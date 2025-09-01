
import React from 'react';
import { GlobeAltIcon, PuzzlePieceIcon, LightBulbIcon, ChartBarIcon } from './icons';

const features = [
  {
    icon: <GlobeAltIcon className="h-8 w-8 text-white" />,
    title: 'Global Experience',
    description: 'Proven success with clients across 50+ countries, delivering solutions that meet international standards.',
  },
  {
    icon: <PuzzlePieceIcon className="h-8 w-8 text-white" />,
    title: 'Tech Diversity',
    description: 'Expertise in a wide range of modern technologies including Python, Django, MERN, and ML/AI frameworks.',
  },
  {
    icon: <LightBulbIcon className="h-8 w-8 text-white" />,
    title: 'Innovation-Focused',
    description: 'A strong commitment to leveraging AI Agents and automation to solve complex business challenges.',
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-white" />,
    title: 'Proven Results',
    description: 'Delivered scalable products used by thousands of users daily, driving tangible business outcomes.',
  },
];

const WhyWangoes: React.FC = () => {
  return (
    <section id="why-wangoes" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Your Partner in Digital Transformation
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600 mx-auto mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWangoes;
