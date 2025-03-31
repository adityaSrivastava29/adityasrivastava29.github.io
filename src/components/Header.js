import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <div className="logo">Aditya Kumar</div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a onClick={() => scrollToSection('certifications')}>Certifications</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li>
            <a 
              href="/resume.pdf" 
              download="Resume.pdf" 
              className="download-resume highlight"
            >
              Download Resume
            </a>
          </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;