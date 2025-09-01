
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Get in Touch</h2>
            <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Ready to Start Your AI Journey?
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Let's discuss how Wangoes can help you automate processes, build innovative products, and accelerate your growth.
            </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 shadow-2xl shadow-slate-900/50">
            <form action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">First name</label>
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">Last name</label>
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company</label>
                  <input type="text" name="company" id="company" autoComplete="organization" className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"></textarea>
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition-transform duration-300 hover:scale-105 transform">
                  Automate Your Business in 7 Days
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
