import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
        </div>
        
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul className="skill-list">
              <li>JavaScript</li>
              <li>Java</li>
              <li>TypeScript</li>
              <li>SQL</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Backend Technologies</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Spring</li>
              <li>Spring Boot</li>
              <li>Spring MVC</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Hibernate</li>
              <li>Spring JPA</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Frontend Technologies</h3>
            <ul className="skill-list">
              <li>React</li>
              <li>Vue</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Developer Tools</h3>
            <ul className="skill-list">
              <li>Git</li>
              <li>GitHub</li>
              <li>Azure DevOps</li>
              <li>Jira</li>
              <li>AWS</li>
              <li>VS Code</li>
              <li>IntelliJ</li>
              <li>Eclipse</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;