import React from 'react';
import Input from '../../Shared/Components/Input';
import { InputType } from '../../Shared/Types'
import { EducationPaths } from '../../../data/AppPaths';

const EducationForm = () => {
  return (
    <div>
      <div>
        <h1>Education</h1>
        <Input type={InputType.text} label={'Name'} value={''} placeholder={''} path={EducationPaths.Name} />

        <h2>Duration</h2>
        <Input type={InputType.date} label={'From'} value={''} placeholder={''} path={EducationPaths.DurationFrom} />
        <Input type={InputType.date} label={'To'} value={''} placeholder={''} path={EducationPaths.DurationTo} />
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