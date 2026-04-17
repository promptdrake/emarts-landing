import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

import AITraining from './components/AITraining';
import APIIntegration from './components/APIIntegration';
import ReadyToGo from './components/ReadyToGo';
import Terms from './components/Terms';
import Credit from './components/Credit';
import CookiePolicy from './components/CookiePolicy';

function App() {
  useEffect(() => {
    // Initializing AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main style={{ paddingTop: '56px' }}>
        <Routes>
          <Route path="/" element={
            <div className="home-section-wrapper">
              <div id="hero">
                <Hero />
              </div>
              <div id="features">
                <Features />
              </div>
              <div id="pricing">
                <Pricing />
              </div>
              <div id="ai-training">
                <AITraining />
              </div>
              <div id="api-integration">
                <APIIntegration />
              </div>
              <div id="ready">
                <ReadyToGo />
              </div>
            </div>
          } />
          <Route path="/terms" element={<Terms />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
