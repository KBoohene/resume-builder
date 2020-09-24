import React, { useContext, useState } from 'react';
import { ResumeContext } from '../../contexts/ResumeContext';
import { ActionTypeInteface } from './Types';

const ActionInput = ({ path }: ActionTypeInteface) => {
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

  return (
    <div>
      <input type="text" onChange={onChangeItemValue} />
      <button onClick={onAddItem}>Add</button>
    </div>
  );
}

export default ActionInput;