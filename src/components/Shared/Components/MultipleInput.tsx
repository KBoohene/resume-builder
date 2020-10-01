import React, { useContext, ChangeEvent } from 'react';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';
import { InputType, MultipleInputInterface } from '../Types';

const MultipleInput = ({ type, path, inputValue }: MultipleInputInterface) => {
  const { dispatch } = useContext(MultipleInputContext);

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
          <input type='text' value={inputValue} onChange={handleChange} />
        </div>
      )}
      {type === InputType.date && (
        <div>
          <input type='date' value={inputValue} onChange={handleChange} />
        </div>
      )}
      {type === InputType.textarea && (
        <textarea name='' id='' value={inputValue} onChange={handleChange} />
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
