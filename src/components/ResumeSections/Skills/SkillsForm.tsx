import React from 'react';
import { SkillPaths } from '../../../data/AppPaths';
import MultipleInput from '../../Shared/Components/MultipleInput';
import TempSubmit from '../../Shared/Components/TempSubmit';
import { InputType } from '../../Shared/Types';

const SkillsForm = () => {
  return (
    <div>
      <h2>Skills</h2>
      <MultipleInput type={InputType.text} label={'Skills'} value={''} placeholder={''} path={SkillPaths.Skills} />
      <TempSubmit path={SkillPaths.Skills} />
    </div>
  );
}

export default SkillsForm;