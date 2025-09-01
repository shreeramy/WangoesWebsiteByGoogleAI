
import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ title, subtitle, features }) => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            {subtitle}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600 mb-5">
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

export default FeaturesGrid;
