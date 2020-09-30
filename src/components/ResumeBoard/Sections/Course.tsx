import React, { useContext } from 'react';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';
import { ResumeContext } from '../../../contexts/ResumeContext';

const Course = () => {
  const { resume } = useContext(ResumeContext);
  const { tempInput } = useContext(MultipleInputContext);

  return (
    <div>
      <h2>Courses</h2>
      <div>
        {resume.courses.map((course: string, index: number) => (
          <p key={index}>{course}</p>
        ))}
        {tempInput.course}
      </div>
    </div>
  );
};

export default Course;
