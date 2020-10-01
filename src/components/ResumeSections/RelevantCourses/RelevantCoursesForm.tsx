import React, { useContext } from 'react';
import {
  RelevantCoursesPaths,
  MultipleInputPath,
} from '../../../data/AppPaths';
import MultipleInput from '../../Shared/Components/MultipleInput';
import AddItemButton from '../../Shared/Components/AddItemButton';
import { InputType } from '../../Shared/Types';
import { MultipleInputContext } from '../../../contexts/MultipleInputContext';

const RelevantCoursesForm = () => {
  const { tempInput } = useContext(MultipleInputContext);
  return (
    <div>
      <h2>Course</h2>
      <MultipleInput
        type={InputType.text}
        path={MultipleInputPath.Course}
        inputValue={tempInput['course']}
      />
      <AddItemButton
        label={'Add Item'}
        childPath={MultipleInputPath.Course}
        parentPath={RelevantCoursesPaths.Courses}
      />
    </div>
  );
};

export default RelevantCoursesForm;
