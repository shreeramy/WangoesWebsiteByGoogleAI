
import React from 'react';

const LeadMagnet: React.FC = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Get a free, no-obligation consultation with our AI experts. Let's discover your automation potential and outline a roadmap for growth.
          </p>
          <div className="mt-8">
            <a
              href="#/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 transform"
            >
              Automate Your Business in 7 Days
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
