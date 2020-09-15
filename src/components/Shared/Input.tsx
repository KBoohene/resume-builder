import React from 'react';
import { InputInterface, InputType } from './Types';

const Input = ({ type, label }: InputInterface) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      {(type === InputType.text) && (
        <TextInput />
      )}
      {(type === InputType.textarea) && (
        <TextArea />
      )}
      {(type === InputType.dropdown) && (
        <DropDown />
      )}
    </div>);
}

const TextInput = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
}

const TextArea = () => {
  return (
    <textarea name="" id="" />
  );
}

const DropDown = () => {
  return (
    <div>
      <select>
        <option value=""></option>
      </select>
    </div>
  )
}

export default Input;