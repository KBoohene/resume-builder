import React, { useContext } from 'react';
import Education from './Sections/Education';
import Profile from './Sections/Profile';
import Skills from './Sections/Skills';
import Course from './Sections/Course';
import { SectionType } from '../../data/Types';
import Projects from './Sections/Projects';
import Work from './Sections/Work';
import { BuilderAppContext } from '../../contexts/BuilderAppContext';

const ResumeBoard = () => {
  const { sections } = useContext(BuilderAppContext);
  return (
    <div>
      {sections.section === SectionType.profile && <Profile />}
      {sections.section === SectionType.education && <Education />}
      {sections.section === SectionType.skills && <Skills />}
      {sections.section === SectionType.work && <Work />}
      {sections.section === SectionType.projects && <Projects />}
      {sections.section === SectionType.relevantCourses && <Course />}
    </div>
  );
};

export default ResumeBoard;
