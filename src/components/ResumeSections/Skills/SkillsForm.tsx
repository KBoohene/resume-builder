import React from 'react';
import { SkillPath, SkillsPath } from '../../../data/AppPaths';
import MultipleInput from '../../Shared/Components/MultipleInput';
import AddItemButton from '../../Shared/Components/AddItemButton';
import { InputType } from '../../Shared/Types';

const SkillsForm = () => {
  return (
    <div>
      <h2>Skills</h2>
      <MultipleInput type={InputType.text} path={SkillPath} />
      <AddItemButton label={'Add Item'} childPath={SkillPath} parentPath={SkillsPath} />
    </div>
  );
}

export default SkillsForm;