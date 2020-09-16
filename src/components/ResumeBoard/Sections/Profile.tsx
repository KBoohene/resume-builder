import React, { useContext } from 'react';
import { ResumeContext } from '../../../contexts/ResumeContext';

const Profile = () => {
  const { state } = useContext(ResumeContext);
  return (
    <div>
      <h2>Firstname</h2>
      {state.profile.firstName}
    </div>
  );
}

export default Profile;