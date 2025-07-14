import React from 'react';
import './Skills.css';
import { FaJava, FaPython, FaReact, FaNodeJs, FaDatabase, FaAws } from 'react-icons/fa';
import { SiKotlin, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGit, SiDocker } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'Kotlin', icon: <SiKotlin /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'AWS', icon: <FaAws /> }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container-narrow">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-icon">
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}