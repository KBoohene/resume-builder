import React, { useContext } from 'react';
import { ResumeContext } from '../../../contexts/ResumeContext';
import { SkillType } from '../../../data/Interfaces';

const Skills = () => {
  const { resume } = useContext(ResumeContext);
  return (
    <div>
      <h2>Skills</h2>
      <div>
        {resume.temp !== {} ? resume.temp.skill : ''}
        {resume.skills.map((skills: SkillType, index: number) => (
          <p key={index}>{skills.skill}</p>
        ))}
      </div>

    </div>
  );
}

export default Skills;