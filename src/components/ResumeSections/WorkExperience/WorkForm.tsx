import React from 'react';
import { WorkPaths } from '../../../data/paths';
import ActionInput from '../../Shared/ActionInput';
import { InputType } from '../../Shared/Types';

// TODO: Rethink how to properly structure array and state components
const WorkForm = () => {
  return (
    <div>
      <h1>Work Experience</h1>

      <h2>Description</h2>
      <ActionInput type={InputType.textarea} path={WorkPaths.Description} />
    </div>
  );
}

export default WorkForm;