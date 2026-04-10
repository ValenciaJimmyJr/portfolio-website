import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Scroll reveal animation logic
    const scrollReveal = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', scrollReveal);
    // Trigger once on mount
    scrollReveal();
    return () => window.removeEventListener('scroll', scrollReveal);
  }, []);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
