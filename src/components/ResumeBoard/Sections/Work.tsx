import React, { useContext } from 'react';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';
import { ResumeContext } from '../../../contexts/ResumeContext';
import { WorkType } from '../../../data/Interfaces';

const Work = () => {
  const { resume } = useContext(ResumeContext);
  const { tempInput } = useContext(MultipleInputContext);

  return (
    <div>
      <h2>Projects</h2>
      <div>
        {resume.work.map((work: WorkType, index: number) => (
          <WorkItem key={index} {...work} />
        ))}
        <WorkItem {...tempInput.work} />
      </div>
    </div>
  );
};

const WorkItem = (item: WorkType) => {
  return (
    <div>
      <h2>Role</h2>
      {item.role}

      <h2>Company</h2>
      {item.company}

      <h2>Duration</h2>

      <h3>From</h3>
      {item.duration ? item.duration.from : ''}

      <h3>To</h3>
      {item.duration ? item.duration.to : ''}

      <h2>Description</h2>
      {item.description}

      <h2>Location</h2>

      <h3>City</h3>
      {item.address ? item.address.city : ''}

      <h3>Country</h3>
      {item.address ? item.address.country : ''}
    </div>
  );
};

export default Work;
