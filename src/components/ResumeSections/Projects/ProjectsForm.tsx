import React from 'react';
import MultipleInput from '../../Shared/Components/MultipleInput';
import AddItemButton from '../../Shared/Components/AddItemButton';
import { InputType } from '../../Shared/Types';
import {
  MultipleInputPath,
  ProjectPaths,
  ProjectsPath,
} from '../../../data/AppPaths';

const ProjectsForm = () => {
  return (
    <div>
      <h1>Project</h1>

      <h2>Title</h2>
      <MultipleInput type={InputType.text} path={ProjectPaths.Title} />

      <h2>Description</h2>
      <MultipleInput
        type={InputType.textarea}
        path={ProjectPaths.Description}
      />

      <h2>From</h2>
      <MultipleInput type={InputType.date} path={ProjectPaths.DurationFrom} />

      <h2>To</h2>
      <MultipleInput type={InputType.date} path={ProjectPaths.DurationTo} />
      <AddItemButton
        label={'Add Item'}
        childPath={MultipleInputPath.Project}
        parentPath={ProjectsPath}
      />
    </div>
  );
};

export default ProjectsForm;
