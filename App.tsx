
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-legal-brown selection:text-white">
      <Navbar />
      
      <main>
        {/* Scroll 1: Hero */}
        <Hero />
        
        {/* Scroll 2: Narrative & Identity */}
        <About />

        {/* Scroll 3: Disciplines */}
        <PracticeAreas />

        {/* Scroll 4: Validation & Dialogue */}
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
