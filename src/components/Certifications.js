// src/components/Certifications.js
import React from 'react';
import { FaAws, FaGithub } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
        </div>
        
        <div className="certifications-grid">
          <div className="certification-card">
            <FaAws size={40} color="#FF9900" style={{ marginBottom: '15px' }} />
            <h3>AWS Certified Developer - Associate</h3>
            <p>Issued By: Amazon Web Services</p>
            <p>September 2024 - September 2027</p>
          </div>
          
          <div className="certification-card">
            <FaAws size={40} color="#FF9900" style={{ marginBottom: '15px' }} />
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>Issued By: Amazon Web Services</p>
            <p>May 2023 - September 2027</p>
          </div>
          
          <div className="certification-card">
            <FaGithub size={40} color="#333" style={{ marginBottom: '15px' }} />
            <h3>GitHub Foundations</h3>
            <p>Issued By: GitHub</p>
            <p>May 2025 - March 2028</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;