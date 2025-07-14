import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Airbnb Clone - WonderLust',
    desc: 'A full-featured Airbnb clone built using the MERN stack, featuring listings, authentication, and dynamic UI.',
    github: 'https://github.com/krishnareddy756/Airbnb_Clone-WonderLust-.git',
    live: 'https://airbnb-clone-wonderlust.onrender.com/listings',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS']
  },
  {
    title: 'FeastExpress',
    desc: 'A food delivery platform backend system built with Node.js and Express. Focuses on modular APIs and order flow management.',
    github: 'https://github.com/krishnareddy756/FeastExpress.git',
    live: '',
    tags: ['Node.js', 'Express', 'REST API', 'MongoDB']
  },
  {
    title: 'Emotion Classification',
    desc: 'A deep learning project that classifies human emotions from text using NLP and machine learning techniques.',
    github: 'https://github.com/krishnareddy756/emotion-classification.git',
    live: '',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Machine Learning']
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container-narrow">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="project-card glass-effect" key={idx}>
              <div className="project-content">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tags">
                  {proj.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={proj.github} 
                    className="project-link github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {proj.live && (
                    <a 
                      href={proj.live} 
                      className="project-link live-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
