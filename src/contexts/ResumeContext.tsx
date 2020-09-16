import React, { createContext, useReducer } from 'react';
import { BuilderAppState, ResumeReducer } from '../reducers/ResumeReducer';

const currentState: BuilderAppState = {
  profile: {
    firstName: '',
    lastName: '',
    email: ''
  }
}

type Props = {
  children: React.ReactNode
};

export const ResumeContext = createContext<BuilderAppState | any>(currentState);

const ResumeContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(ResumeReducer, currentState);
  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export default ResumeContextProvider;