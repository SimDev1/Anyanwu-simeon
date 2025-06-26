import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Jobs from './components/Jobs'
import Preloader from './components/Preloader'; // Ensure this path matches your folder structure

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Delay the loader for 3.5 seconds before showing main content
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Show the animated Preloader until the timer ends
  if (loading) return <Preloader />;

  // Main site content
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Jobs />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
