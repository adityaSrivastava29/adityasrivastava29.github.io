// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Aditya Kumar</h3>
            <p>Software Engineer with a passion for creating innovative, scalable, and high-performance solutions.</p>
          </div>
          
          <div className="footer-section">
            <h3>Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.linkedin.com/in/adityakumar29" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/adityaSrivastava29" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="mailto:adityasrivastava.niet@gmail.com">
                  <FaEnvelope />
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