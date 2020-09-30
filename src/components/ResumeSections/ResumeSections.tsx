import React, { useContext } from 'react';
import { SectionType } from '../../data/Types';
import EducationForm from './Education/EducationForm';
import AchievementsForm from './Achievements/AchievementsForm';
import ProfileForm from './Profile/ProfileForm';
import ProjectsForm from './Projects/ProjectsForm';
import SkillsForm from './Skills/SkillsForm';
import RelevantCoursesForm from './RelevantCourses/RelevantCoursesForm';
import WorkForm from './WorkExperience/WorkForm';
import { BuilderAppContext } from '../../contexts/BuilderAppContext';

const ResumeSections = () => {
  const { sections } = useContext(BuilderAppContext);
  return (
    <div>
      {sections.section === SectionType.profile && <ProfileForm />}
      {sections.section === SectionType.education && <EducationForm />}
      {sections.section === SectionType.projects && <ProjectsForm />}
      {sections.section === SectionType.achievements && <AchievementsForm />}
      {sections.section === SectionType.skills && <SkillsForm />}
      {sections.section === SectionType.relevantCourses && (
        <RelevantCoursesForm />
      )}
      {sections.section === SectionType.work && <WorkForm />}
    </div>
  );
};

export default ResumeSections;
