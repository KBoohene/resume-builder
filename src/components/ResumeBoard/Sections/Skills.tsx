import React, { useContext } from 'react';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';
import { ResumeContext } from '../../../contexts/ResumeContext';

const Skills = () => {
  const { resume } = useContext(ResumeContext);
  const { tempInput } = useContext(MultipleInputContext);

  return (
    <div>
      <h2>Skills</h2>
      <div>
        {resume.skills.map((skill: string, index: number) => (
          <p key={index}>{skill}</p>
        ))}
        {tempInput.skill}
      </div>

    </div>
  );
}

export default Skills;