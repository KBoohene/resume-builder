import React, { useContext } from 'react';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';
import { ResumeContext } from '../../../contexts/ResumeContext';
import { ProjectType } from '../../../data/Interfaces';

const Projects = () => {
  const { resume } = useContext(ResumeContext);
  const { tempInput } = useContext(MultipleInputContext);

  return (
    <div>
      <h2>Skills</h2>
      <div>
        {resume.Projects.map((project: ProjectType, index: number) => (
          <Project key={index} {...project} />
        ))}
        <Project {...tempInput.project} />
      </div>
    </div>
  );
};

const Project = (project: ProjectType) => {
  return (
    <div>
      <h1>Project</h1>

      <h2>Title</h2>
      {project.title}

      <h2>Description</h2>
      {project.description}

      <h2>From</h2>
      {project.durationFrom}

      <h2>To</h2>
      {project.durationTo}
    </div>
  );
};

export default Projects;
