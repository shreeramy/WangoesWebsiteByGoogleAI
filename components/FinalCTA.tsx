
import React from 'react';

interface FinalCTAProps {
  title: string;
  cta1Text: string;
  cta1Link: string;
  cta2Text: string;
  cta2Link: string;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ title, cta1Text, cta1Link, cta2Text, cta2Link }) => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {title}
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={cta1Link} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 transform">
              {cta1Text}
            </a>
            <a href={cta2Link} className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 transform">
              {cta2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
