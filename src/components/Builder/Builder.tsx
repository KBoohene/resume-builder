import React from 'react';
import ResumeBoard from '../ResumeBoard/ResumeBoard';
import ResumeSections from '../ResumeSections/ResumeSections';
import SectionsNavbar from '../SectionsNavbar/SectionsNavbar';

const Builder = () => {
  return (
    <div>
      <div className="resume-builder">
        <SectionsNavbar />
        <ResumeSections />
        <ResumeBoard />
      </div>
    </div>);
}

export default Builder;