import React, { useContext } from 'react';
import { ResumeContext } from '../../contexts/ResumeContext';
import { InputInterface, InputType } from './Types';

const Input = ({ type, label, path }: InputInterface) => {
  const { dispatch } = useContext(ResumeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'on_input',
      payload: {
        value: e.currentTarget.value,
        path
      }
    });
  };

  return (
    <div>
      <label htmlFor="">{label}</label>
      {(type === InputType.text) && (
        <div>
          <input type="text" onChange={handleChange} />
        </div>
      )}
      {(type === InputType.date) && (
        <div>
          <input type="date" />
        </div>
      )}
      {(type === InputType.textarea) && (
        <textarea name="" id="" />
      )}
      {(type === InputType.dropdown) && (
        <select>
          <option value=""></option>
        </select>
      )}
    </div>);
}


export default Input;