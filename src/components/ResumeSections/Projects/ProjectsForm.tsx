import React, { useContext } from 'react';
import MultipleInput from '../../Shared/Components/MultipleInput';
import AddItemButton from '../../Shared/Components/AddItemButton';
import { InputType } from '../../Shared/Types';
import {
  MultipleInputPath,
  ProjectPaths,
  ProjectsPath,
} from '../../../data/AppPaths';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';

const ProjectsForm = () => {
  const { tempInput } = useContext(MultipleInputContext);
  return (
    <div>
      <h1>Project</h1>

      <h2>Title</h2>
      <MultipleInput
        type={InputType.text}
        path={ProjectPaths.Title}
        inputValue={tempInput['project']['title']}
      />

      <h2>Description</h2>
      <MultipleInput
        type={InputType.textarea}
        path={ProjectPaths.Description}
        inputValue={tempInput['project']['description']}
      />

      <h2>From</h2>
      <MultipleInput
        type={InputType.date}
        path={ProjectPaths.DurationFrom}
        inputValue={tempInput['project']['duration']['from']}
      />

      <h2>To</h2>
      <MultipleInput
        type={InputType.date}
        path={ProjectPaths.DurationTo}
        inputValue={tempInput['project']['duration']['to']}
      />
      <AddItemButton
        label={'Add Item'}
        childPath={MultipleInputPath.Project}
        parentPath={ProjectsPath}
      />
    </div>
  );
};

export default ProjectsForm;
