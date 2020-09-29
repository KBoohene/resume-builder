import React from 'react';
import Input from '../../Shared/Components/Input';
import { InputType } from '../../Shared/Types';

const ProjectsForm = () => {
  return (
    <div>
      <Input
        type={InputType.text}
        label={'Title'}
        value={''}
        placeholder={''}
      />
      <Input
        type={InputType.textarea}
        label={'Description'}
        value={''}
        placeholder={''}
      />
      <Input type={InputType.date} label={'From'} value={''} placeholder={''} />
      <Input type={InputType.date} label={'To'} value={''} placeholder={''} />
    </div>
  );
};

export default ProjectsForm;
