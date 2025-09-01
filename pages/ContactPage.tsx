
import React from 'react';
import ContactForm from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <section id="contact" className="pt-32 pb-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Ready to Start Your AI Journey?
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Let's discuss how Wangoes can help you automate processes, build innovative products, and accelerate your growth. Fill out the form below or email us directly.
            </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
