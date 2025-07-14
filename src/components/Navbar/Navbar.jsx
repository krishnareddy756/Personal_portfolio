import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled (for optional shadow effect)
      setScrolled(window.scrollY > 10);
      
      // Detect active section
      const sections = ['about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      <div className="navbar-container">
        <a className="navbar-brand" href="#home">Sai Krishna Reddy</a>
        
        <div className="navbar-links">
          <a 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
            href="#about"
          >
            About
          </a>
          <a 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} 
            href="#skills"
          >
            Skills
          </a>
          <a 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
            href="#projects"
          >
            Projects
          </a>
          <a 
            className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`} 
            href="#certifications"
          >
            Certifications
          </a>
          <a 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
            href="#contact"
          >
            Contact
          </a>
        </div>

        <button 
          className={`navbar-toggler ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a 
          className={`mobile-link ${activeSection === 'about' ? 'active' : ''}`} 
          href="#about" 
          onClick={closeMobileMenu}
        >
          About
        </a>
        <a 
          className={`mobile-link ${activeSection === 'skills' ? 'active' : ''}`} 
          href="#skills" 
          onClick={closeMobileMenu}
        >
          Skills
        </a>
        <a 
          className={`mobile-link ${activeSection === 'projects' ? 'active' : ''}`} 
          href="#projects" 
          onClick={closeMobileMenu}
        >
          Projects
        </a>
        <a 
          className={`mobile-link ${activeSection === 'certifications' ? 'active' : ''}`} 
          href="#certifications" 
          onClick={closeMobileMenu}
        >
          Certifications
        </a>
        <a 
          className={`mobile-link ${activeSection === 'contact' ? 'active' : ''}`} 
          href="#contact" 
          onClick={closeMobileMenu}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;