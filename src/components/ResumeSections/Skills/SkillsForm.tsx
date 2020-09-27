import React from 'react';
import { InputType } from '../../Shared/Types'
import { SkillPaths } from '../../../data/paths';
import ActionInput from '../../Shared/Components/ActionInput';

const SkillsForm = () => {
  return (
    <div>
      <h2>Skills</h2>
      <ActionInput type={InputType.text} path={SkillPaths.Skills} />
    </div>
  );
}

export default SkillsForm;