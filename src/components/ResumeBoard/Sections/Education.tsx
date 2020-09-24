import React, { useContext } from 'react';
import { ResumeContext } from '../../../contexts/ResumeContext';

const Education = () => {
  const { resume } = useContext(ResumeContext);
  return (
    <div>
      <h1>Education</h1>

      <h2>Name</h2>
      {resume.education.schoolName}

      <h2>Duration</h2>

      <h3>From</h3>
      {resume.education.duration.from}

      <h3>To</h3>
      {resume.education.duration.to}

      <h1>Location</h1>

      <h2>City</h2>
      {resume.education.city}

      <h2>Country</h2>
      {resume.education.country}

    </div>
  );
}

export default Education;
