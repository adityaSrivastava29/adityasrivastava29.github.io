// // src/components/Certifications.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaAws, FaGithub } from 'react-icons/fa';
import awsCCP from '../Assets/aws-ccp.png';
import awsCDP from '../Assets/aws-cda.png';
import githubFoundations from '../Assets/github-foundations.png';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({
    awsDev: false,
    awsCloud: false,
    github: false,
  });

  const handleFlip = (key) => {
    setIsFlipped((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <section id="certifications" style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div className="section-title" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>Certifications</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Recognized achievements in the field of technology.</p>
        </div>

        <div className="certifications-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* AWS Developer Certification */}
          <ReactCardFlip isFlipped={isFlipped.awsDev} flipDirection="horizontal">
            {/* Front Side */}
            <div className="certification-card-front" style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              cursor: 'pointer'
            }} onClick={() => handleFlip('awsDev')}>
              <FaAws size={40} color="#FF9900" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#333' }}>AWS Certified Developer - Associate</h3>
              <p style={{ fontSize: '1rem', color: '#666' }}>Issued By: Amazon Web Services</p>
              <p style={{ fontSize: '1rem', color: '#666' }}>September 2024 - September 2027</p>
              <a href="https://www.credly.com/badges/7db7a116-798b-4143-b5d3-4bc650ccc019/linked_in_profile" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                marginTop: '1rem',
                fontSize: '1rem',
                color: '#007BFF',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="certification-card-back" style={{
              backgroundColor: '#FF9900',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              color: '#fff',
              cursor: 'pointer'
            }} onClick={() => handleFlip('awsDev')}>
              <img src={awsCDP} alt="AWS Certified Developer Certificate" style={{
                maxWidth: '100%',
                borderRadius: '8px'
              }} />
            </div>
          </ReactCardFlip>

          {/* AWS Cloud Practitioner Certification */}
          <ReactCardFlip isFlipped={isFlipped.awsCloud} flipDirection="horizontal">
            {/* Front Side */}
            <div className="certification-card-front" style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              cursor: 'pointer'
            }} onClick={() => handleFlip('awsCloud')}>
              <FaAws size={40} color="#FF9900" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#333' }}>AWS Certified Cloud Practitioner</h3>
              <p style={{ fontSize: '1rem', color: '#666' }}>Issued By: Amazon Web Services</p>
              <p style={{ fontSize: '1rem', color: '#666' }}>May 2023 - September 2027</p>
              <a href="https://www.credly.com/badges/ec72467a-91a3-4a89-9551-e2ad94ed9327/linked_in_profile" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                marginTop: '1rem',
                fontSize: '1rem',
                color: '#007BFF',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="certification-card-back" style={{
              backgroundColor: '#FF9900',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              color: '#fff',
              cursor: 'pointer'
            }} onClick={() => handleFlip('awsCloud')}>
              <img src={awsCCP} alt="AWS Certified Cloud Practitioner Certificate" style={{
                maxWidth: '100%',
                borderRadius: '8px'
              }} />
            </div>
          </ReactCardFlip>

          {/* GitHub Foundations Certification */}
          <ReactCardFlip isFlipped={isFlipped.github} flipDirection="horizontal">
            {/* Front Side */}
            <div className="certification-card-front" style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              cursor: 'pointer'
            }} onClick={() => handleFlip('github')}>
              <FaGithub size={40} color="#333" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#333' }}>GitHub Foundations</h3>
              <p style={{ fontSize: '1rem', color: '#666' }}>Issued By: GitHub</p>
              <p style={{ fontSize: '1rem', color: '#666' }}>May 2025 - March 2028</p>
              <a href="https://www.credly.com/badges/20576d85-9b88-464f-acc6-ccfbaf247027/linked_in_profile" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                marginTop: '1rem',
                fontSize: '1rem',
                color: '#007BFF',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="certification-card-back" style={{
              backgroundColor: '#333',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              color: '#fff',
              cursor: 'pointer'
            }} onClick={() => handleFlip('github')}>
              <img src={githubFoundations} alt="GitHub Foundations Certificate" style={{
                maxWidth: '100%',
                borderRadius: '8px'
              }} />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
