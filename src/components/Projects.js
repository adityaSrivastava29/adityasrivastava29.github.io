import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">E-Commerce Platform</h3>
              <p><strong>Client:</strong> Self-Initiated</p>
              <p><strong>Role:</strong> Full-Stack Developer</p>
              <p><strong>Period:</strong> January 2023 - June 2023</p>
              <ul>
                <li>Developed a scalable e-commerce application using React, Redux, and Node.js, enabling seamless product browsing and checkout experiences.</li>
                <li>Implemented secure payment integration using Stripe API, achieving 100% error-free transactions during the testing phase.</li>
                <li>Designed and optimized MongoDB database schemas to manage customer accounts and product inventory efficiently.</li>
                <li>Enhanced performance through lazy loading and server-side rendering, reducing page load time by 35%.</li>
              </ul>
              <div className="project-links">
                <a href="https://adityasrivastava29.github.io/" className="btn" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                <a href="https://adityasrivastava29.github.io/" className="btn" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Task Management System</h3>
              <p><strong>Client:</strong> Team Collaboration Tool</p>
              <p><strong>Role:</strong> Full-Stack Developer</p>
              <p><strong>Period:</strong> July 2023 - December 2023</p>
              <ul>
                <li>Designed and developed a robust task management system using React, TypeScript, and Express.js, improving team collaboration by 30%.</li>
                <li>Implemented real-time updates with WebSocket for task assignments and progress tracking across team members.</li>
                <li>Utilized PostgreSQL for efficient data storage and retrieval, supporting thousands of simultaneous user interactions.</li>
                <li>Deployed the application on AWS with CI/CD pipelines, ensuring smooth delivery and consistent version control.</li>
              </ul>
              <div className="project-links">
                <a href="https://adityasrivastava29.github.io/" className="btn" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                <a href="https://adityasrivastava29.github.io/" className="btn" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 - AI Chatbot */}
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">AI-Powered Chatbot</h3>
              <p><strong>Client:</strong> ChatBot Assistant</p>
              <p><strong>Role:</strong> Full-Stack Developer</p>
              <p><strong>Period:</strong> January 2024 - March 2024</p>
              <ul>
                <li>Designed an AI chatbot using Python and TensorFlow, enabling users to ask questions and receive human-like responses.</li>
                <li>Integrated NLP capabilities using the SpaCy library for intent recognition and response generation.</li>
                <li>Developed a React-based frontend for seamless user interactions and implemented WebSocket for real-time chat functionality.</li>
                <li>Deployed the chatbot on Google Cloud Platform, ensuring scalability and reliability during peak usage times.</li>
              </ul>
              <div className="project-links">
                <a href="https://adityasrivastava29.github.io/" className="btn" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                <a href="https://adityasrivastava29.github.io/" className="btn" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
