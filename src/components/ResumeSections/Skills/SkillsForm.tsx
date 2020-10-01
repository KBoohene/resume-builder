import React, { useContext } from 'react';
import { MultipleInputPath, SkillsPath } from '../../../data/AppPaths';
import MultipleInput from '../../Shared/Components/MultipleInput';
import AddItemButton from '../../Shared/Components/AddItemButton';
import { InputType } from '../../Shared/Types';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';

const SkillsForm = () => {
  const { tempInput } = useContext(MultipleInputContext);
  return (
    <div>
      <h2>Skills</h2>
      <MultipleInput
        type={InputType.text}
        path={MultipleInputPath.Skill}
        inputValue={tempInput['skill']}
      />
      <AddItemButton
        label={'Add Item'}
        childPath={MultipleInputPath.Skill}
        parentPath={SkillsPath}
      />
    </div>
  );
};

export default SkillsForm;
