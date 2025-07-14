import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="text-center py-5 bg-light">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Hi, I'm <span className="text-primary">Krishna</span> 👋</h1>
        <p className="lead mb-4">A passionate Computer Science student and Web Developer.</p>
        <div>
          <a href="/resume.pdf" className="btn btn-primary btn-lg me-3" download>
            Download Resume
          </a>
          <a href="#contact" className="btn btn-outline-dark btn-lg">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
