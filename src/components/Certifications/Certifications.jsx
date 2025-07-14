import React from 'react';
import './Certifications.css';
import { FaAws, FaGoogle, FaMicrosoft,FaCertificate } from 'react-icons/fa';
import { SiCisco, SiOracle, SiRedhat } from 'react-icons/si';

const certifications = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    icon: <FaAws />,
    year: '2024',
    link: 'https://www.credly.com/badges/df806ff3-d2f0-4330-bbb6-001c857e18f6/linked_in_profile',
    credentialId: 'df806ff3-d2f0-4330-bbb6-001c857e18f6'
  },
  {
    title: 'AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services',
    icon: <FaAws />,
    year: '2024',
    link: 'https://drive.google.com/file/d/1PJr_ixokS9ZFZ_QQq8IAMlvi9gVjO44M/view?usp=sharing',
    credentialId: 'df61e10e-d728-4869-a90a-7c05240e0a58'
  },
  {
    title: 'Android Developer Certification',
    issuer: 'Imarticus',
    icon: <FaCertificate/>,
    year: '2024',
    link: 'https://drive.google.com/file/d/1aAlZzOfOTUOxv7WGQKDARW4Qlaa5yqp9/view?usp=sharing',
    credentialId: 'MS-345678'
  },
  {
    title: 'Oracle Cloud database services',
    issuer: 'Oracle',
    icon: <SiOracle />,
    year: '2025',
    link: 'https://drive.google.com/file/d/1hE8pFn1AvrqVLIt-orH-_gLr37o_1hn0/view?usp=sharing',
    credentialId: 'RH-901234'
  },
  {
    title: 'Generative AI Professional Certificate',
    issuer: 'Oracle',
    icon: <SiOracle />,
    year: '2025',
    link: 'https://drive.google.com/file/d/1rc9upyuh9H_DgMbnQ0K06-AsOrMwYh39/view?usp=sharing',
    credentialId: 'gl235280kL67d'
  },
  {
    title: 'Full Stack Developer',
    issuer: 'Apna College',
    icon: <FaCertificate />,
    year: '2025',
    link: 'https://www.credly.com/badges/YOUR_CISCO_BADGE_ID',
    credentialId: 'CCNA-123789'
  }
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container-narrow">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-card"
              key={idx}
            >
              <div className="certification-icon">
                {cert.icon}
              </div>
              <div className="certification-details">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <div className="certification-meta">
                  <span className="certification-year">{cert.year}</span>
                  <span className="certification-id">{cert.credentialId}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}