import React from 'react';
import { MultipleInputPath, WorkPaths } from '../../../data/AppPaths';
import AddItemButton from '../../Shared/Components/AddItemButton';
import MultipleInput from '../../Shared/Components/MultipleInput';
import { InputType } from '../../Shared/Types';

const WorkForm = () => {
  return (
    <div>
      <h1>Work Experience</h1>

      <h2>Role</h2>
      <MultipleInput type={InputType.text} path={WorkPaths.Role} />

      <h2>Company</h2>
      <MultipleInput type={InputType.text} path={WorkPaths.Company} />

      <h2>Duration</h2>

      <h3>From</h3>
      <MultipleInput type={InputType.date} path={WorkPaths.DurationFrom} />

      <h3>To</h3>
      <MultipleInput type={InputType.date} path={WorkPaths.DurationTo} />

      <h2>Description</h2>
      <MultipleInput type={InputType.textarea} path={WorkPaths.Description} />

      <h2>Location</h2>

      <h3>City</h3>
      <MultipleInput type={InputType.text} path={WorkPaths.City} />

      <h3>Country</h3>
      <MultipleInput type={InputType.text} path={WorkPaths.Country} />

      <AddItemButton
        label={'Add Item'}
        childPath={MultipleInputPath.Work}
        parentPath={MultipleInputPath.Work}
      />
    </div>
  );
};

export default WorkForm;
