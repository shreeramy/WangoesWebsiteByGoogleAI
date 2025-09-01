
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyWangoes from '../components/WhyWangoes';
import SuccessStories from '../components/SuccessStories';
import Industries from '../components/Industries';
import LeadMagnet from '../components/LeadMagnet';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyWangoes />
      <SuccessStories limit={2} />
      <Industries />
      <LeadMagnet />
    </>
  );
};

export default HomePage;
