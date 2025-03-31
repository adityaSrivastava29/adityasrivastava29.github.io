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
          <div className="logo" href="#about" onClick={() => scrollToSection('about')}>Aditya Kumar Srivastava</div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li>
              <a 
                href="https://drive.google.com/file/d/1fldTztMS-MU08XEVPBXLoe1RSHx5kZ7T/view?usp=sharing" 
                download="Resume.pdf" 
                className="download-resume highlight"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
