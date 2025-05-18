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
              <h3 className="project-title">AI-Powered Chatbot</h3>   
              <p><strong>Period:</strong> April 2025 - May 2025</p>
              <ul>
                <li>Constructed an AI chatbot using MERN stack and Gemini API for dynamic conversation flow.</li>
                <li>Crafted responsive UI in React with real-time Socket.io communication.</li>
                <li>Powered backend with Node.js, Express, and integrated MongoDB for scalable session tracking.</li>
                <li>Utilized Gemini API for natural interactions with contextual memory, enhancing user engagement.</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/adityaSrivastava29/AI-Powered-Chatbot" className="btn" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                {/* <a href="https://adityasrivastava29.github.io/" className="btn" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a> */}
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Movie Mahal</h3>
              <p><strong>Period:</strong> January 2023 - June 2023</p>
              <ul>
                <li>Developed a movie discovery platform using React, Redux, and The Movie Database API.</li>
                <li>Implemented responsive design with CSS Grid and Flexbox for optimal user experience across devices.</li>
                <li>Integrated user authentication and personalized watchlists using Firebase.</li>
                <li>Optimized performance with lazy loading and code splitting techniques.</li>
                <li>Admin panel allows movie, showtime, and booking management. </li>
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
              <p><strong>Period:</strong> May 2025 - Present</p>
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

         
        </div>
      </div>
    </section>
  );
};

export default Projects;
