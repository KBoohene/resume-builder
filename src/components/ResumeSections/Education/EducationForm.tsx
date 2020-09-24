import React from 'react';
import Input from '../../Shared/Input';
import { InputType } from '../../Shared/Types'
import { EducationPaths } from '../../../data/paths';

const EducationForm = () => {
  return (
    <div>
      <div>
        <h1>Education</h1>
        <Input type={InputType.text} label={'Name'} value={''} placeholder={''} path={EducationPaths.Name} />
        <Input type={InputType.text} label={'Duration'} value={''} placeholder={''} path={EducationPaths.Duration} />
      </div>
      <div>
        <h2>Location</h2>
        <Input type={InputType.text} label={'City'} value={''} placeholder={''} path={EducationPaths.City} />
        <Input type={InputType.text} label={'Country'} value={''} placeholder={''} path={EducationPaths.Country} />
      </div>

    </div>
  );
}

export default EducationForm;