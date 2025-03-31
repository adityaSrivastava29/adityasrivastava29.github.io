import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about-section">
            <h3 className="footer-heading">Aditya Kumar Srivastava</h3>
            <p className="footer-description">Software Engineer with a passion for creating innovative, scalable, and high-performance solutions.</p>
          </div>
          
          <div className="footer-section links-section">
            <h3 className="footer-heading">Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
          
          <div className="footer-section connect-section">
            <h3 className="footer-heading">Connect</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.linkedin.com/in/adityakumar29" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="https://github.com/adityaSrivastava29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a href="mailto:adityasrivastava.niet@gmail.com" aria-label="Email">
                  <FaEnvelope size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Aditya Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;