import React from 'react';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Navbar from './components/Navbar/Navbar';
import Certifications from './components/Certifications/Certifications';
import './App.css';

export default function App() {
  return (
    <div className="root-container">
      <Navbar />
      <main className="main-content">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <SocialLinks />
      </main>
    </div>
  );
}