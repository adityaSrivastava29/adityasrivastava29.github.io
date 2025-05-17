import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import adityaPic from '../Assets/aditya-kumar-pic.jpeg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="container">
      <div className="about">
        <div className="about-content">
          {/* <h1>Aditya Kumar</h1> */}
          <h3>
            <ReactTyped
              strings={[
                'Software Engineer',
                'Full Stack Developer',
                'AI Enthusiast'
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={2000}
              loop
              className="typed-text"
            />
          </h3>
          <p>
            Dynamic Software Engineer with over <strong>2.5 years</strong> of experience delivering innovative, scalable, and high-performance
            solutions in fast-paced environments. Proficient in full-stack development with expertise in <strong>JavaScript</strong>, <strong>React</strong>, 
            <strong>Node.js</strong>, and Spring Boot, as well as hands-on experience with cloud technologies like <strong>AWS</strong>.
          </p>
          <p>
            Adept at developing robust <strong>REST APIs</strong>, optimizing system performance, and ensuring code quality with tools such as&nbsp;
            <strong>SonarQube</strong> and <strong>Jest</strong>. Known for collaborating within Agile teams, streamlining workflows, and driving
            projects to successful on-time completion.
          </p>
          <p>
            Passionate about leveraging cutting-edge technologies to solve complex problems and contribute to impactful projects.
          </p>
          <div className="social-links">
            <a href="mailto:adityasrivastava.niet@gmail.com" className="social-link email" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+918840591937" className="social-link phone" aria-label="Phone">
              <FaPhone />
            </a>
            <a href="https://www.linkedin.com/in/adityakumar29" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/adityaSrivastava29" target="_blank" rel="noopener noreferrer" className="social-link github" aria-label="GitHub">
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
