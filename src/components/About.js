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
                "Software Engineer",
                "Full Stack Developer",
                "AI Enthusiast",
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={2000}
              loop
              className="typed-text"
            />
          </h3>
          <p>
            Experienced in{" "}
            <strong>JavaScript, React, Node.js, Spring Boot,</strong> and{" "}
            <strong>AWS</strong>, delivering high-performance applications in
            fast-paced environments.
          </p>

          <p>
            Skilled in{" "}
            <strong>REST APIs, system optimization, and code quality</strong>{" "}
            using <strong>SonarQube & Jest</strong>. Passionate about solving
            complex problems, collaborating in <strong>Agile teams</strong>, and
            driving impactful projects to successful completion.
          </p>
        </div>
        <div className="about-right">
          <div className="about-image">
            <img src={adityaPic} alt="Aditya Kumar" />
          </div>
          <div className="social-links">
            <a
              href="mailto:adityasrivastava.niet@gmail.com"
              className="social-link email"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+918840591937"
              className="social-link phone"
              aria-label="Phone"
            >
              <FaPhone />
            </a>
            <a
              href="https://www.linkedin.com/in/adityakumar29"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/adityaSrivastava29"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
