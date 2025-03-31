import React from 'react';
import './style.css';

const Skills = () => {
  const technicalSkills = [
    'HTML5', 'CSS3', 'JavaScript', 
    'Bootstrap', 'jQuery', 
    'React', 'Redux', 'Node.js', 
    'Express.js', 'Firebase', 
    'MySQL', 'MongoDB', 
    'RESTful APIs', 'Version Control (Git)'
  ];

  const softSkills = [
    
    'Excellent Communication Skills', 
    'Problem Solving', 
    'Teamwork and Collaboration'
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Technical Skills</h2>
      <div className="skills-tags-container">
        {technicalSkills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
      
      <h2 className="skills-heading">Soft Skills</h2>
      <div className="skills-tags-container">
        {softSkills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;