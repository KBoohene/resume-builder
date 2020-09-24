import React from 'react';
import Education from './Sections/Education';
import Profile from './Sections/Profile';
import Skills from './Sections/Skills';
import { SectionInterface, SectionType } from '../ResumeSections/Types';

const ResumeBoard = ({ section = SectionType.skills }: SectionInterface) => {
  return (
    <div>
      {(section === SectionType.profile) && (
        <Profile />
      )}
      {(section === SectionType.education) && (
        <Education />
      )}
      {(section === SectionType.skills) && (
        <Skills />
      )}
    </div>);
}

export default ResumeBoard;