
import React, { useState } from 'react';

const AIAuditForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center bg-slate-700/50 p-8 rounded-lg border border-green-500">
        <h3 className="text-2xl font-bold text-white">Thank You!</h3>
        <p className="text-gray-300 mt-2">
          Your request for a Free AI Audit has been received. Our team will review your information and get in touch within 24 hours to schedule a call.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 shadow-2xl shadow-slate-900/50">
      <h3 className="text-2xl font-bold text-white text-center mb-1">Get Your Free AI Audit</h3>
      <p className="text-gray-400 text-center mb-6">Discover AI opportunities in your business.</p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="audit-name" className="sr-only">Full Name</label>
            <input type="text" name="audit-name" id="audit-name" required placeholder="Full Name" className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="audit-email" className="sr-only">Email</label>
            <input type="email" name="audit-email" id="audit-email" required autoComplete="email" placeholder="Business Email" className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="audit-company" className="sr-only">Company</label>
            <input type="text" name="audit-company" id="audit-company" placeholder="Company Name" className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="audit-challenge" className="sr-only">Biggest Challenge</label>
            <textarea id="audit-challenge" name="audit-challenge" rows={4} required placeholder="What is your biggest business challenge right now?" className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"></textarea>
          </div>
        </div>
        <div className="mt-8">
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition-transform duration-300 hover:scale-105 transform">
            Get My Free AI Audit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIAuditForm;
