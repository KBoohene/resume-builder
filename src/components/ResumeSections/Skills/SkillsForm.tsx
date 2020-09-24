import React from 'react';
import Input from '../../Shared/Input';
import { InputType } from '../../Shared/Types'
import { SkillPaths } from '../../../data/paths';

const SkillsForm = () => {
  return (
    <div>
      <h2>Skills</h2>
      <Input type={InputType.action} label={''} value={''} placeholder={''} path={SkillPaths.Skills} />
    </div>
  );
}

export default SkillsForm;