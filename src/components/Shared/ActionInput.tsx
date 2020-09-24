import React, { useContext, useState } from 'react';
import { ResumeContext } from '../../contexts/ResumeContext';
import { ActionTypeInteface, InputType } from './Types';

// TODO: Convert to use context instead of state
const ActionInput = ({ path, type }: ActionTypeInteface) => {
  const { dispatch } = useContext(ResumeContext);
  const [itemValue, setItemValue] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemValue(e.currentTarget.value)
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  return (
    <div>
      {(type === InputType.textarea) && (
        <textarea rows={4} cols={15} onChange={handleTextAreaChange} />
      )}
      {(type === InputType.text) && (
        <input type="text" onChange={handleTextChange} />
      )}
      <button onClick={onAddItem}>Add</button>
    </div>
  );
}

export default ActionInput;