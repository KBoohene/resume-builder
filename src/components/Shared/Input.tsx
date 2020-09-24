import React, { useContext, useState } from 'react';
import { ResumeContext } from '../../contexts/ResumeContext';
import { InputInterface, InputType } from './Types';

const Input = ({ type, label, path }: InputInterface) => {
  const { dispatch } = useContext(ResumeContext);
  const [itemValue, setItemValue] = useState('');

  const onChangeItemValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemValue(e.currentTarget.value)
  }

  const onAddItem = (() => {
    dispatch({
      type: 'on_add_item',
      payload: {
        value: itemValue,
        path
      }
    })
  });

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
          <input type="date" onChange={handleChange} />
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
      {(type === InputType.action) && (
        <div>
          <input type="text" onChange={onChangeItemValue} />
          <button onClick={onAddItem}>Add</button>
        </div>
      )}
    </div>);
}


export default Input;