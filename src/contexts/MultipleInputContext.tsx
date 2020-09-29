import React, { createContext, useReducer } from 'react';
import { InitMultipleInputState } from '../data/AppStates';
import { MultipleInputInterface } from '../data/Interfaces';
import { MultipleInputReducer } from '../reducers/MultipleInputReducer';

type Props = {
  children: React.ReactNode
};

export const MultipleInputContext = createContext<MultipleInputInterface | any>(InitMultipleInputState);

const MultipleInputContextProvider = ({ children }: Props) => {
  const [tempInput, dispatch] = useReducer(MultipleInputReducer, InitMultipleInputState);
  return (
    <MultipleInputContext.Provider value={{ tempInput, dispatch }}>
      {children}
    </MultipleInputContext.Provider>
  );
}

export default MultipleInputContextProvider;