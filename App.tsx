
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceAIAgentsPage from './pages/ServiceAIAgentsPage';
import ServiceAIModelsPage from './pages/ServiceAIModelsPage';
import ServiceAIAppsPage from './pages/ServiceAIAppsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial route
    handleHashChange();
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    if (route.startsWith('#/case-studies/')) {
        const slug = route.split('/')[2];
        return <CaseStudyDetailPage slug={slug} />;
    }

    switch (route) {
      case '#/about':
        return <AboutPage />;
      case '#/services':
        return <ServicesPage />;
      case '#/service-ai-agents':
        return <ServiceAIAgentsPage />;
      case '#/service-ai-models':
        return <ServiceAIModelsPage />;
      case '#/service-ai-apps':
        return <ServiceAIAppsPage />;
      case '#/case-studies':
        return <CaseStudiesPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-slate-900 text-gray-200 antialiased">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
