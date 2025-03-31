import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import adityaPic  from '../Assets/aditya-kumar-pic.jpeg';
const About = () => {
  return (
    <section id="about" className="container">
      <div className="about">
        <div className="about-content">
          <h1>Aditya Kumar</h1>
          <h3>Software Engineer</h3>
          <p>
            Dynamic Software Engineer with over 2 years of experience delivering innovative, scalable, and high-performance
            solutions in fast-paced environments. Proficient in full-stack development with expertise in JavaScript, React,
            Node.js, and Spring Boot, as well as hands-on experience with cloud technologies like AWS.
          </p>
          <p>
            Adept at developing robust REST APIs, optimizing system performance, and ensuring code quality with tools such as
            SonarQube and Jest. Known for collaborating within Agile teams, streamlining workflows, and driving
            projects to successful on-time completion.
          </p>
          <p>
            Passionate about leveraging cutting-edge technologies to solve complex problems and contribute to impactful projects.
          </p>
          <div className="social-links" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <a href="mailto:adityasrivastava.niet@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+918840591937" aria-label="Phone">
              <FaPhone />
            </a>
            <a href="https://www.linkedin.com/in/adityakumar29" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/adityaSrivastava29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
          <div style={{ marginBottom: '25px' }}>
            <a href="#contact" className="btn">Contact Me</a>
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