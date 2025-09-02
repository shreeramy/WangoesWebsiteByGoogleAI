
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceAIAgentsPage from './pages/ServiceAIAgentsPage';
import ServiceAIAppsPage from './pages/ServiceAIAppsPage';
import ServiceDevOpsPage from './pages/ServiceDevOpsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import { caseStudies } from './data/caseStudies';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);

    // SEO Management
    const setMeta = (name: string, content: string, isProperty: boolean = false) => {
        const attr = isProperty ? 'property' : 'name';
        let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attr, name);
            document.head.appendChild(element);
        }
        element.content = content;
    };

    const setCanonical = (url: string) => {
        let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!element) {
            element = document.createElement('link');
            element.setAttribute('rel', 'canonical');
            document.head.appendChild(element);
        }
        element.href = url;
    };
    
    const setSchema = (schema: object | null) => {
        const existingSchema = document.getElementById('page-schema');
        if (existingSchema) {
            existingSchema.remove();
        }
        if (schema) {
            const script = document.createElement('script');
            script.id = 'page-schema';
            script.type = 'application/ld+json';
            script.innerHTML = JSON.stringify(schema);
            document.head.appendChild(script);
        }
    };

    const baseUrl = window.location.origin + window.location.pathname.replace(/\/$/, '');
    const currentUrl = baseUrl + '/' + route;
    const siteImage = 'https://images.unsplash.com/photo-1620712943543-95fc69614534?q=80&w=1200&auto=format&fit=crop';
    
    let title = 'Wangoes Technologies | AI Automation & Custom Software';
    let description = 'Wangoes Technologies is a global IT services and AI automation company specializing in AI Agents, custom software development, and cloud solutions to help businesses scale and innovate.';
    let schema: object | null = null;

    if (route.startsWith('#/case-studies/')) {
        const slug = route.split('/')[2];
        const story = caseStudies.find(s => s.slug === slug);
        if (story) {
            title = `${story.title} | Wangoes Case Study`;
            description = story.description;
            schema = {
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": story.title,
              "description": story.description,
              "image": story.imageUrl,
              "author": { "@type": "Organization", "name": "Wangoes Technologies" },
              "publisher": {
                "@type": "Organization",
                "name": "Wangoes Technologies",
              },
            };
        }
    } else {
        switch (route) {
            case '#/about':
                title = 'About Wangoes Technologies | Our Mission & Vision';
                description = 'Learn about Wangoes Technologies, a global IT and AI automation company. Discover our mission to deliver high-quality, scalable, and intelligent digital solutions.';
                break;
            case '#/services':
                title = 'Our Services | AI, Software Development, DevOps & Cloud';
                description = 'Explore our core services: AI & Automation, Custom Software Development, and DevOps & Cloud Solutions. We build intelligent systems to help your business innovate.';
                break;
            case '#/service-ai-automation':
                title = 'AI & Automation Services | Intelligent AI Agents & Workflows';
                description = 'Automate up to 40% of your business with our AI & Automation services. We build intelligent AI agents and workflows to cut costs and boost productivity.';
                schema = {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "AI & Automation Services",
                  "serviceType": "Artificial Intelligence Automation",
                  "description": "We build and deploy intelligent AI agents and automation workflows that cut costs, boost productivity, and scale your operations.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Wangoes Technologies",
                    "url": baseUrl
                  },
                  "url": currentUrl
                };
                break;
            case '#/service-software-development':
                title = 'Custom Software Development | Web, Mobile & SaaS Apps';
                description = 'Build scalable and intelligent software solutions with Wangoes. We specialize in custom web, mobile, and SaaS application development tailored to your business.';
                schema = {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Custom Software Development",
                  "serviceType": "Software Application Development",
                  "description": "We design, build, and scale enterprise-grade web, mobile, and SaaS applications tailored to your unique business needs.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Wangoes Technologies",
                    "url": baseUrl
                  },
                  "url": currentUrl
                };
                break;
            case '#/service-devops-cloud':
                title = 'DevOps & Cloud Solutions | AWS & GCP Experts';
                description = 'Ensure your applications are reliable, scalable, and secure with our DevOps and cloud solutions. We are experts in AWS, GCP, Docker, and Kubernetes.';
                schema = {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "DevOps & Cloud Solutions",
                  "serviceType": "Cloud Computing and DevOps Consulting",
                  "description": "We provide end-to-end DevOps and cloud solutions to ensure your applications are performant, highly available, and cost-effective.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Wangoes Technologies",
                    "url": baseUrl
                  },
                  "url": currentUrl
                };
                break;
            case '#/case-studies':
                title = 'Case Studies | Success Stories in AI & Software Development';
                description = 'Explore our success stories and see how Wangoes Technologies has helped businesses implement cutting-edge AI and software solutions to achieve their goals.';
                break;
            case '#/contact':
                title = 'Contact Wangoes Technologies | Book a Consultation';
                description = 'Ready to start your AI journey? Contact Wangoes Technologies to discuss your project. Book a free consultation today.';
                schema = {
                  "@context": "https://schema.org",
                  "@type": "ContactPage",
                  "name": "Contact Wangoes Technologies",
                  "description": "Contact Wangoes for AI automation and custom software development services.",
                  "url": currentUrl,
                };
                break;
            case '#/':
            default:
                // Uses the default title and description
                break;
        }
    }

    document.title = title;
    setMeta('description', description);
    setCanonical(currentUrl);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', currentUrl, true);
    setMeta('og:type', route.startsWith('#/case-studies/') ? 'article' : 'website', true);
    setMeta('og:image', siteImage, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', siteImage);
    setSchema(schema);

    // Scroll Animation Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.scroll-animate').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [route]);

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
      case '#/service-ai-automation':
        return <ServiceAIAgentsPage />;
      case '#/service-software-development':
        return <ServiceAIAppsPage />;
      case '#/service-devops-cloud':
        return <ServiceDevOpsPage />;
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
