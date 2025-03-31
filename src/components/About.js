//  


// src/components/About.js
// src/components/About.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import adityaPic from '../Assets/aditya-kumar-pic.jpeg';

const About = () => {
  return (
    <section id="about" className="container">
      <div className="about" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <div className="about-content" style={{ flex: 2.5 }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>Aditya Kumar</h1>
          <h3 style={{ fontSize: '1.8rem', color: '#666', marginBottom: '20px' }}>Software Engineer</h3>
          <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '15px' }}>
            Dynamic Software Engineer with over <strong>2.5 years</strong> of experience delivering innovative, scalable, and high-performance
            solutions in fast-paced environments. Proficient in full-stack development with expertise in <strong>JavaScript</strong>, <strong>React</strong>, 
            <strong>Node.js</strong>, and Spring Boot, as well as hands-on experience with cloud technologies like <strong>AWS</strong>.
          </p>
          <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '15px' }}>
            Adept at developing robust <strong>REST APIs</strong>, optimizing system performance, and ensuring code quality with tools such as&nbsp;
            <strong>SonarQube</strong> and <strong>Jest</strong>. Known for collaborating within Agile teams, streamlining workflows, and driving
            projects to successful on-time completion.
          </p>
          <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '20px' }}>
            Passionate about leveraging cutting-edge technologies to solve complex problems and contribute to impactful projects.
          </p>
          <div className="social-links" style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
            fontSize: '1.8rem',
          }}>
            <a href="mailto:adityasrivastava.niet@gmail.com" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#007BFF',
              color: '#fff',
              textDecoration: 'none',
              transition: 'transform 0.3s',
            }} aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+918840591937" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#28a745',
              color: '#fff',
              textDecoration: 'none',
              transition: 'transform 0.3s',
            }} aria-label="Phone">
              <FaPhone />
            </a>
            <a href="https://www.linkedin.com/in/adityakumar29" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#2867B2',
              color: '#fff',
              textDecoration: 'none',
              transition: 'transform 0.3s',
            }} aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/adityaSrivastava29" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#333',
              color: '#fff',
              textDecoration: 'none',
              transition: 'transform 0.3s',
            }} aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="about-image">
          <img src={adityaPic} alt="Aditya Kumar" />
        </div>
      </div>
    </section>
  );
};

export default About;
