import React from 'react';
import Input from '../../Shared/Input';
import { InputType } from '../../Shared/Types'


const ProfileForm = () => {
  return (
    <div>
      <Input type={InputType.text} label={'Firstname'} value={''} placeholder={''} />
      <Input type={InputType.text} label={'Lastname'} value={''} placeholder={''} />
      <Input type={InputType.text} label={'Email'} value={''} placeholder={''} />
      <Input type={InputType.text} label={'LinkedIn'} value={''} placeholder={''} />
      <div>
        <h1>Address</h1>
        <Input type={InputType.text} label={'Street Address'} value={''} placeholder={''} />
        <Input type={InputType.text} label={'City'} value={''} placeholder={''} />
        <Input type={InputType.text} label={'State'} value={''} placeholder={''} />
        <Input type={InputType.text} label={'State'} value={''} placeholder={''} />
        <Input type={InputType.text} label={'Apt#'} value={''} placeholder={''} />
        <Input type={InputType.text} label={'Country'} value={''} placeholder={''} />
      </div>
    </div>);
}

export default ProfileForm;