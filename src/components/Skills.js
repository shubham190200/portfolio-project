import React from 'react';
import './skills.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'Javascript', percentage: 95 },
  { name: 'Reactjs', percentage: 90 },
  { name: 'Nodejs', percentage: 90 },
  { name: 'Javascript', percentage: 95 },
  { name: 'Reactjs', percentage: 90 },
  { name: 'Nodejs', percentage: 90 },
 
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h2>Skills</h2>
      <p>thisdsgggggggf jfsdwhfwewl wfwewi wkewien jhdsi shubja kdsun fronwy</p>
      <div className="skillsGrid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <CircularProgressbar value={skill.percentage} text={`${skill.percentage}%`} />
            <span className="skillName">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
