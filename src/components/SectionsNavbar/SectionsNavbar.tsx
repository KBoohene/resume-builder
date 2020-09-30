import React, { useContext } from 'react';
import { BuilderAppContext } from '../../contexts/BuilderAppContext';
import { SectionType } from '../../data/Types';

const SectionsNavbar = () => {
  const { changeSection } = useContext(BuilderAppContext);

  const handleChange = (section: string) => {
    changeSection({
      type: 'change_section',
      payload: {
        value: section,
      },
    });
  };
  return (
    <div>
      <ul>
        <li onClick={() => handleChange(SectionType.profile)}>Profile</li>
        <li onClick={() => handleChange(SectionType.education)}>Education</li>
        <li onClick={() => handleChange(SectionType.skills)}>Skills</li>
        <li onClick={() => handleChange(SectionType.projects)}>Projects</li>
        <li onClick={() => handleChange(SectionType.relevantCourses)}>
          Relevant Courses
        </li>
        <li onClick={() => handleChange(SectionType.work)}>Work</li>
        <li onClick={() => handleChange(SectionType.achievements)}>
          Achievements
        </li>
      </ul>
    </div>
  );
};

export default SectionsNavbar;
