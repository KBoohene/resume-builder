import React, { useContext, ChangeEvent } from 'react';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';
import { InputType, MultipleInputInterface } from '../Types';

const MultipleInput = ({ type, path }: MultipleInputInterface) => {
  const { tempInput, dispatch } = useContext(MultipleInputContext);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({
      type: 'on_input',
      payload: {
        value: e.currentTarget.value,
        path,
      },
    });
  };

  return (
    <div>
      {type === InputType.text && (
        <div>
          <input type='text' value={tempInput[path]} onChange={handleChange} />
        </div>
      )}
      {type === InputType.date && (
        <div>
          <input type='date' value={tempInput[path]} onChange={handleChange} />
        </div>
      )}
      {type === InputType.textarea && (
        <textarea
          name=''
          value={tempInput[path]}
          id=''
          onChange={handleChange}
        />
      )}
      {type === InputType.dropdown && (
        <select>
          <option value=''></option>
        </select>
      )}
    </div>
  );
};

export default MultipleInput;
