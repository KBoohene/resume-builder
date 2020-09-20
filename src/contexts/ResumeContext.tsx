import React, { createContext, useReducer } from 'react';
import { InitialState } from '../data/initialState';
import { BuilderAppState, ResumeReducer } from '../reducers/ResumeReducer';

type Props = {
  children: React.ReactNode
};

export const ResumeContext = createContext<BuilderAppState | any>(InitialState);

const ResumeContextProvider = ({ children }: Props) => {
  const [resume, dispatch] = useReducer(ResumeReducer, InitialState);
  return (
    <ResumeContext.Provider value={{ resume, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export default ResumeContextProvider;