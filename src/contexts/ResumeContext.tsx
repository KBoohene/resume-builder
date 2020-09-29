import React, { createContext, useReducer } from 'react';
import { InitialBuilderState } from '../data/AppStates';
import { BuilderAppInterface } from '../data/Interfaces';
import { ResumeReducer } from '../reducers/ResumeReducer';

type Props = {
  children: React.ReactNode;
};

export const ResumeContext = createContext<BuilderAppInterface | any>(
  InitialBuilderState
);

const ResumeContextProvider = ({ children }: Props) => {
  const [resume, submitChange] = useReducer(ResumeReducer, InitialBuilderState);
  return (
    <ResumeContext.Provider value={{ resume, submitChange }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
