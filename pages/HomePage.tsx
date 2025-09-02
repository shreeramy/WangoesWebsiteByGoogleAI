
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyWangoes from '../components/WhyWangoes';
import ProcessSection from '../components/ProcessSection';
import SuccessStories from '../components/SuccessStories';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import LeadMagnet from '../components/LeadMagnet';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyWangoes />
      <ProcessSection />
      <SuccessStories limit={2} />
      <Industries />
      <Testimonials />
      <LeadMagnet />
    </>
  );
};

export default HomePage;
