
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyWangoes from './components/WhyWangoes';
import SuccessStories from './components/SuccessStories';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-200">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyWangoes />
        <SuccessStories />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
