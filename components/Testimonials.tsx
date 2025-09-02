
import React from 'react';

const testimonials = [
  {
    quote: "Wangoes Technologies delivered an AI solution that automated 40% of our manual data entry, saving us hundreds of hours. Their expertise and dedication are unmatched.",
    name: 'Sarah Johnson',
    title: 'COO, Innovate Solutions',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: "The custom SaaS platform they built for us is scalable, robust, and has received fantastic feedback from our users. They are a true technology partner.",
    name: 'Michael Chen',
    title: 'Founder, Edutech Global',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: "Their DevOps team optimized our cloud infrastructure, resulting in a 30% reduction in our monthly AWS bills and a significant improvement in performance.",
    name: 'David Rodriguez',
    title: 'CTO, ScaleFast Inc.',
    avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200&auto=format&fit=crop',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-800/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate fade-in-up">
          <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl lg:text-5xl font-extrabold text-white tracking-tighter">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            We are proud to have partnered with innovative companies and leaders to achieve exceptional results.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-8 rounded-xl border border-slate-700/80 transition-all duration-300 transform hover:-translate-y-2 flex flex-col scroll-animate fade-in-up"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <svg className="w-12 h-12 text-slate-700 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"></path>
              </svg>
              <blockquote className="text-gray-300 text-lg leading-relaxed flex-grow italic">"{testimonial.quote}"</blockquote>
              <footer className="mt-8 flex items-center">
                <img className="h-14 w-14 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.name} />
                <div className="ml-4">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-sm text-red-400">{testimonial.title}</p>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;