import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <VideoSection />
      <About />
      
      <footer className="bg-[#644c78] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Contact Jack Carlson</p>
          <a href="mailto:jcarlson@unbridledwealth.com" className="text-lg font-semibold">Email: jcarlson@unbridledwealth.com</a>
          <div className="mt-8 text-sm text-gray-400">
            © {new Date().getFullYear()} Unbridled Wealth. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;