import React from 'react';
import BuilderContextProvider from '../../contexts/BuilderAppContext';
import MultipleInputContextProvider from '../../contexts/MultipleInputContext';
import ResumeContextProvider from '../../contexts/ResumeContext';
import ResumeBoard from '../ResumeBoard/ResumeBoard';
import ResumeSections from '../ResumeSections/ResumeSections';
import SectionsNavbar from '../SectionsNavbar/SectionsNavbar';

const Builder = () => {
  return (
    <div>
      <div className='resume-builder'>
        <BuilderContextProvider>
          <ResumeContextProvider>
            <MultipleInputContextProvider>
              <SectionsNavbar />
              <ResumeSections />
              <ResumeBoard />
            </MultipleInputContextProvider>
          </ResumeContextProvider>
        </BuilderContextProvider>
      </div>
    </div>
  );
};

export default Builder;
