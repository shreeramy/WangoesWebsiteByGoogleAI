import React from 'react';
import ContactForm from '../components/Contact';
import { EnvelopeIcon, MapPinIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  return (
    <section id="contact" className="pt-32 pb-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Ready to Start Your AI Journey?
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
              Let's discuss how Wangoes can help you automate processes, build innovative products, and accelerate your growth. Fill out the form below or contact us directly.
            </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <div className="text-left md:pt-4">
                <h3 className="text-3xl font-bold text-white mb-6">Contact Details</h3>
                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="bg-slate-800 p-3 rounded-full">
                                <EnvelopeIcon className="w-6 h-6 text-red-500" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold text-white">Email Us</h4>
                            <p className="text-gray-400">Our team is ready to answer your questions.</p>
                            <a href="mailto:contact@wangoes.com" className="text-red-500 hover:text-red-400 font-medium transition-colors">contact@wangoes.com</a>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="bg-slate-800 p-3 rounded-full">
                                <MapPinIcon className="w-6 h-6 text-red-500" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold text-white">Our Location</h4>
                            <p className="text-gray-400">Based in the heart of India's tech scene.</p>
                            <p className="text-gray-300 font-medium">Indore, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;