
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 shadow-2xl shadow-slate-900/50">
        <form action="#" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-1">First name</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full bg-slate-700/50 border-2 border-slate-600 rounded-lg shadow-sm py-2.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors" />
            </div>
            <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-1">Last name</label>
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full bg-slate-700/50 border-2 border-slate-600 rounded-lg shadow-sm py-2.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors" />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full bg-slate-700/50 border-2 border-slate-600 rounded-lg shadow-sm py-2.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors" />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                <input type="text" name="company" id="company" autoComplete="organization" className="block w-full bg-slate-700/50 border-2 border-slate-600 rounded-lg shadow-sm py-2.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors" />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">How can we help?</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your project or automation goals..." className="block w-full bg-slate-700/50 border-2 border-slate-600 rounded-lg shadow-sm py-2.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"></textarea>
            </div>
            </div>
            <div className="mt-8">
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-red-500/30">
                Send Message
            </button>
            </div>
        </form>
        </div>
    </div>
  );
};

export default ContactForm;