
import React, { useState } from 'react';
import { ChartBarIcon } from './icons';

const LeadMagnet: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get Your Free Ebook
            </h2>
             <p className="mt-2 text-xl font-semibold text-red-400">AI for Business Growth</p>
            <p className="mt-4 text-lg text-gray-300">
              Discover how to leverage AI agents and automation to cut costs, boost productivity, and unlock new revenue streams.
            </p>
          </div>
          <div>
            {submitted ? (
              <div className="text-center bg-slate-700/50 p-8 rounded-lg border border-green-500">
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-gray-300 mt-2">Your ebook is on its way to your inbox. The download will start shortly.</p>
              </div>
            ) : (
                <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">Full name</label>
                                <input type="text" name="name" id="name" required placeholder="Full name" className="block w-full bg-slate-600 border border-slate-500 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input type="email" name="email" id="email" required placeholder="Email address" className="block w-full bg-slate-600 border border-slate-500 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <div>
                                <label htmlFor="company" className="sr-only">Company</label>
                                <input type="text" name="company" id="company" placeholder="Company (Optional)" className="block w-full bg-slate-600 border border-slate-500 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition-transform duration-300 hover:scale-105 transform">
                                Download Now
                            </button>
                        </div>
                    </form>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
