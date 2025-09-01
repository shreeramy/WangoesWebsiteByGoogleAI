
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  faqs: FAQItem[];
}

const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-5"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{item.question}</h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="pb-5 text-gray-300 leading-relaxed">
            {item.answer}
            </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ title, faqs }) => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItemComponent key={index} item={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
