import React from 'react';
import Education from './Sections/Education';
import Profile from './Sections/Profile';
import Skills from './Sections/Skills';
import Course from './Sections/Course';
import { SectionInterface, SectionType } from '../../data/Types';
import Projects from './Sections/Projects';
import Work from './Sections/Work';

const ResumeBoard = ({ section = SectionType.projects }: SectionInterface) => {
  return (
    <div>
      {section === SectionType.profile && <Profile />}
      {section === SectionType.education && <Education />}
      {section === SectionType.skills && <Skills />}
      {section === SectionType.work && <Work />}
      {section === SectionType.projects && <Projects />}
      {section === SectionType.relevantCourses && <Course />}
    </div>
  );
};

export default ResumeBoard;
