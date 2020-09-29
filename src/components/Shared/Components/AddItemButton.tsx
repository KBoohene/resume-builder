import React, { useContext } from 'react';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';
import { ResumeContext } from '../../../contexts/ResumeContext';
import { AddItemButtonInterface } from '../Types';

const MultipleInput = ({ childPath, parentPath, label }: AddItemButtonInterface) => {
  const { tempInput, dispatch } = useContext(MultipleInputContext);
  const { submitChange } = useContext(ResumeContext);

  const onSubmit = () => {
    submitChange({
      type: 'on_add_item',
      payload: {
        value: tempInput[childPath],
        path: parentPath
      }
    });
    dispatch({ type: 'clear' });
  };

  return (
    <div>
      <button onClick={onSubmit}>{label}</button>
    </div >);
}


export default MultipleInput;