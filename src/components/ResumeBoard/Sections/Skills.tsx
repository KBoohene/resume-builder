import React, { useContext } from 'react';
import { ResumeContext } from '../../../contexts/ResumeContext';

const Skills = () => {
  const { resume } = useContext(ResumeContext);
  return (
    <div>
      <h2>Skills</h2>
      <div>
        {resume.skills.map((skill: string, index: number) => (
          <p key={index}>{skill}</p>
        ))}
      </div>

    </div>
  );
}

export default Skills;