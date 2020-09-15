import React from 'react';
import Input from '../../Shared/Input';
import { InputType } from '../../Shared/Types'

const SkillsForm = () => {
  return (
    <div>
      <h2>Skills</h2>
      <Input type={InputType.text} label={''} value={''} placeholder={''} />
      <Input type={InputType.text} label={''} value={''} placeholder={''} />
      <Input type={InputType.text} label={''} value={''} placeholder={''} />
      <Input type={InputType.text} label={''} value={''} placeholder={''} />
      <Input type={InputType.text} label={''} value={''} placeholder={''} />
    </div>
  );
}

export default SkillsForm;