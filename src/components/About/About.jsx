import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container-narrow">
        <h2>About Me</h2>
        <div className="about-content glass-effect">
          <p className="lead">
            Hi, I'm <strong className="accent-name">Sai Krishna Reddy</strong> — a Computer Science Engineering student at <strong>VIT-AP University</strong>.
            I'm passionate about building impactful tech solutions and continuously learning through real-world projects.
            My interests span across 
            <span className="accent-text"> full-stack development</span>, 
            <span className="accent-text"> deep learning</span>, 
            <span className="accent-text"> competitive programming</span>, and 
            <span className="accent-text"> system design</span>.
          </p>
          <p className="lead">
            I’ve interned as an Android Developer, worked on MERN stack projects, and enjoy solving algorithmic problems on platforms like LeetCode and GFG. Currently, I’m preparing for SDE roles and refining my core CS concepts.
          </p>
        </div>
      </div>
    </section>
  );
}
