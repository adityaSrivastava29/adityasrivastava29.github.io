import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Software Engineer</h3>
              <h4>Cognizant, Noida</h4>
              <p className="timeline-date">September 2022 - Present</p>
              <ul>
                <li>Spearheaded the development of highly robust and scalable REST APIs utilizing Express.js, resulting in a 40% increase in API performance and reducing response time by 50 milliseconds on average.</li>
                <li>Designed and implemented reusable UI components in React.js, streamlining frontend development process and increasing developer productivity by 25% through code reusability and modular design.</li>
                <li>Utilized SonarQube for continuous inspection of code quality. Identified and fixed issues concerning code quality, maintainability and reliability, enhancing code-base health, and reducing technical debt.</li>
                <li>Juggled up to three concurrent software development projects, prioritizing tasks according to immediate business requirements and critical deadlines, resulting in on-time delivery of features with 98% adherence to specifications.</li>
                <li>Managed and monitored builds using AWS CodeBuild, ensuring seamless deployment to non-production and Production environments.</li>
                <li>Orchestrated the development of exhaustive unit test suites utilizing Mocha and Jest frameworks, achieving 95% code coverage and fortifying the reliability of critical application components pivotal to ensuring seamless user experience.</li>
              </ul>
            </div>
            <span className="timeline-dot"></span>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Software Engineer</h3>
              <h4>Apisero, Noida</h4>
              <p className="timeline-date">August 2022 - October 2022</p>
              <ul>
                <li>Worked on Spring Boot applications and relational databases such as MySQL.</li>
              </ul>
            </div>
            <span className="timeline-dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;