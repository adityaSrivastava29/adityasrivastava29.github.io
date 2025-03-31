import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Hibernate", icon: "https://hibernate.org/images/hibernate-logo.svg" },
        { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Azure DevOps", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
        { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
        </div>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: space-between;
        }
        
        .skill-category {
          flex: 1;
          min-width: 250px;
          background-color: white;
          border-radius: var(--border-radius);
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        
        .skill-category:hover {
          transform: translateY(-5px);
        }
        
        .skill-category h3 {
          color: var(--primary-color);
          margin-bottom: 15px;
          position: relative;
          padding-bottom: 10px;
        }
        
        .skill-category h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 3px;
          background-color: var(--primary-color);
        }
        
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 15px;
        }
        
        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .skill-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }
        
        .skill-icon img {
          max-width: 100%;
          max-height: 100%;
        }
        
        .skill-name {
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        @media (max-width: 992px) {
          .skill-grid {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .skills-container {
            flex-direction: column;
          }
          
          .skill-category {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;