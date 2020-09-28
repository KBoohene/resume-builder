import React, { useContext } from 'react';
import { ResumeContext } from '../../../contexts/ResumeContext';
import { ButtonInterface } from '../Types';

const TempSubmit = ({ path }: ButtonInterface) => {
  const { dispatch } = useContext(ResumeContext);

  const handleSubmit = () => {
    dispatch({
      type: 'on_add_item',
      payload: {
        path
      }
    });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>);
}


export default TempSubmit;