import React from 'react';
import Input from '../../Shared/Input';
import { InputType } from '../../Shared/Types'
import { ProfilePaths, AddressPaths } from '../../../data/paths';

const ProfileForm = () => {
  return (
    <div>
      <Input type={InputType.text} label={'Firstname'} value={''} placeholder={''} path={ProfilePaths.FirstName} />
      <Input type={InputType.text} label={'Lastname'} value={''} placeholder={''} path={ProfilePaths.LastName} />
      <Input type={InputType.text} label={'Email'} value={''} placeholder={''} path={ProfilePaths.Email} />
      <Input type={InputType.text} label={'LinkedIn'} value={''} placeholder={''} path={ProfilePaths.LinkedIn} />
      <div>
        <h1>Address</h1>
        <Input type={InputType.text} label={'Street Address'} value={''} placeholder={''} path={AddressPaths.Street} />
        <Input type={InputType.text} label={'City'} value={''} placeholder={''} path={AddressPaths.City} />
        <Input type={InputType.text} label={'State'} value={''} placeholder={''} path={AddressPaths.State} />
        <Input type={InputType.text} label={'Zip'} value={''} placeholder={''} path={AddressPaths.Zip} />
        <Input type={InputType.text} label={'Apt#'} value={''} placeholder={''} path={AddressPaths.Apt} />
        <Input type={InputType.text} label={'Country'} value={''} placeholder={''} path={AddressPaths.Country} />
      </div>
    </div>);
}

export default ProfileForm;