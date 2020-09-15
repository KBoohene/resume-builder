import React from 'react';
import { SectionInterface, SectionType } from './Types';
import EducationForm from './Education/EducationForm';
import AchievementsForm from './Achievements/AchievementsForm';
import ProfileForm from './Profile/ProfileForm';
import ProjectsForm from './Projects/ProjectsForm';
import SkillsForm from './Skills/SkillsForm';
import RelevantCoursesForm from './RelevantCourses/RelevantCoursesForm';

const ResumeSections = ({ section }: SectionInterface) => {
  return (
    <div>
      {(section === SectionType.profile) && (
        <ProfileForm />
      )}
      {(section === SectionType.education) && (
        <EducationForm />
      )}
      {(section === SectionType.projects) && (
        <ProjectsForm />
      )}
      {(section === SectionType.achievements) && (
        <AchievementsForm />
      )}
      {(section === SectionType.skills) && (
        <SkillsForm />
      )}
      {(section === SectionType.relevantCourses) && (
        <RelevantCoursesForm />
      )}
    </div>);
}

export default ResumeSections;