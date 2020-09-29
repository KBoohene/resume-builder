import React, { createContext } from 'react';
type Props = {
  children: React.ReactNode;
};

const defaultTheme: string = 'white';
export const BuilderContext = createContext<string>(defaultTheme);

const BuilderContextProvider = ({ children }: Props) => {
  return (
    <BuilderContext.Provider value={defaultTheme}>
      {children}
    </BuilderContext.Provider>
  );
};

export default BuilderContextProvider;
