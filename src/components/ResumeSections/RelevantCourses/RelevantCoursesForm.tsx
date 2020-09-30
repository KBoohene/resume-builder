import React from 'react';
import {
  RelevantCoursesPaths,
  MultipleInputPath,
} from '../../../data/AppPaths';
import MultipleInput from '../../Shared/Components/MultipleInput';
import AddItemButton from '../../Shared/Components/AddItemButton';
import { InputType } from '../../Shared/Types';

const RelevantCoursesForm = () => {
  return (
    <div>
      <h2>Course</h2>
      <MultipleInput type={InputType.text} path={MultipleInputPath.Course} />
      <AddItemButton
        label={'Add Item'}
        childPath={MultipleInputPath.Course}
        parentPath={RelevantCoursesPaths.Courses}
      />
    </div>
  );
};

export default RelevantCoursesForm;
