import React from 'react';
import MultipleInputContextProvider from '../../contexts/MultipleInputContext';
import ResumeContextProvider from '../../contexts/ResumeContext';
import ResumeBoard from '../ResumeBoard/ResumeBoard';
import ResumeSections from '../ResumeSections/ResumeSections';
import SectionsNavbar from '../SectionsNavbar/SectionsNavbar';

const Builder = () => {
  return (
    <div>
      <div className="resume-builder">
        <ResumeContextProvider>
          <MultipleInputContextProvider>
            <SectionsNavbar />
            <ResumeSections />
            <ResumeBoard />
          </MultipleInputContextProvider>
        </ResumeContextProvider>
      </div>
    </div>);
}

export default Builder;