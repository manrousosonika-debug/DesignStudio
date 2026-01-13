
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Features from './components/Features';
import AssessmentForm from './components/AssessmentForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Features />
        <Testimonials />
        <section id="assessment" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Get Your Free <span className="gradient-text">Website Audit</span>
              </h2>
              <p className="text-lg text-slate-600">
                Stop losing customers to a slow, outdated website. We'll show you exactly how to double your conversions.
              </p>
            </div>
            <AssessmentForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
