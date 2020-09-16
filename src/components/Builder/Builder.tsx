import React from 'react';
import ResumeContextProvider from '../../contexts/ResumeContext';
import ResumeBoard from '../ResumeBoard/ResumeBoard';
import ResumeSections from '../ResumeSections/ResumeSections';
import SectionsNavbar from '../SectionsNavbar/SectionsNavbar';

const Builder = () => {
  return (
    <div>
      <div className="resume-builder">
        <ResumeContextProvider>
          <SectionsNavbar />
          <ResumeSections />
          <ResumeBoard />
        </ResumeContextProvider>
      </div>
    </div>);
}

export default Builder;