
import React from 'react';

const stories = [
  {
    title: 'AI-Powered Healthcare App',
    description: 'Automated cancer histology identification, improving diagnostic accuracy and speed for medical professionals.',
    tags: ['AI/ML', 'Healthcare', 'Python'],
    imageUrl: 'https://picsum.photos/seed/healthcare/600/400',
  },
  {
    title: 'Modern Aging (US Client)',
    description: 'Developed an AI-driven cognitive & physical health tracking system for seniors, enhancing quality of life.',
    tags: ['AI', 'Wellness', 'React Native'],
    imageUrl: 'https://picsum.photos/seed/aging/600/400',
  },
  {
    title: 'KidsHub (Education SaaS)',
    description: 'A comprehensive e-learning platform deployed on AWS with Docker, SSL, and mobile apps for seamless access.',
    tags: ['SaaS', 'Education', 'AWS', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/education/600/400',
  },
  {
    title: 'Smart Crowd & Lost-and-Found',
    description: 'A scalable AI + drone-based monitoring solution for large events, recognized at the Simhastha Tech Hackathon.',
    tags: ['AI', 'Drones', 'Public Safety'],
    imageUrl: 'https://picsum.photos/seed/drones/600/400',
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section id="success-stories" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Success Stories</h2>
          <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Delivering Impactful Solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-red-500/50 transition-all duration-300">
              <div className="overflow-hidden">
                <img src={story.imageUrl} alt={story.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                <p className="text-gray-400 mb-4">{story.description}</p>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-slate-700 text-gray-300 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
