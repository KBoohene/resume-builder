import React, { useContext } from 'react';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';
import { MultipleInputPath, WorkPaths } from '../../../data/AppPaths';
import AddItemButton from '../../Shared/Components/AddItemButton';
import MultipleInput from '../../Shared/Components/MultipleInput';
import { InputType } from '../../Shared/Types';

const WorkForm = () => {
  const { tempInput } = useContext(MultipleInputContext);

  return (
    <div>
      <h1>Work Experience</h1>
      <h2>Role</h2>
      <MultipleInput
        type={InputType.text}
        path={WorkPaths.Role}
        inputValue={tempInput['work']['role']}
      />
      <h2>Company</h2>
      <MultipleInput
        type={InputType.text}
        path={WorkPaths.Company}
        inputValue={tempInput['work']['company']}
      />

      <h2>Duration</h2>
      <h3>From</h3>
      <MultipleInput
        type={InputType.date}
        path={WorkPaths.DurationFrom}
        inputValue={tempInput['work']['duration']['from']}
      />
      <h3>To</h3>
      <MultipleInput
        type={InputType.date}
        path={WorkPaths.DurationTo}
        inputValue={tempInput['work']['duration']['to']}
      />
      <h2>Description</h2>
      <MultipleInput
        type={InputType.textarea}
        path={WorkPaths.Description}
        inputValue={tempInput['work']['description']}
      />
      <h2>Location</h2>
      <h3>City</h3>
      <MultipleInput
        type={InputType.text}
        path={WorkPaths.City}
        inputValue={tempInput['work']['address']['city']}
      />
      <h3>Country</h3>
      <MultipleInput
        type={InputType.text}
        path={WorkPaths.Country}
        inputValue={tempInput['work']['address']['country']}
      />
      <AddItemButton
        label={'Add Item'}
        childPath={MultipleInputPath.Work}
        parentPath={MultipleInputPath.Work}
      />
    </div>
  );
};

export default WorkForm;
