import React from 'react';
import Education from './Sections/Education';
import Profile from './Sections/Profile';
import { SectionInterface, SectionType } from '../ResumeSections/Types';

const ResumeBoard = ({ section = SectionType.education }: SectionInterface) => {
  return (
    <div>
      {(section === SectionType.profile) && (
        <Profile />
      )}
      {(section === SectionType.education) && (
        <Education />
      )}
    </div>);
}

export default ResumeBoard;