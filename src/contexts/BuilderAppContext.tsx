import React, { createContext, useReducer } from 'react';
import {
  BuilderAppInterface,
  BuilderReducer,
} from '../reducers/BuilderReducer';

type Props = {
  children: React.ReactNode;
};

const initState: BuilderAppInterface = { section: 'profile' };

export const BuilderAppContext = createContext<BuilderAppInterface | any>(
  initState
);

const BuilderAppContextProvider = ({ children }: Props) => {
  const [sections, changeSection] = useReducer(BuilderReducer, initState);
  return (
    <BuilderAppContext.Provider value={{ sections, changeSection }}>
      {children}
    </BuilderAppContext.Provider>
  );
};

export default BuilderAppContextProvider;
