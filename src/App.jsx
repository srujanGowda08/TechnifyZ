import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Features />
      <Testimonials />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;