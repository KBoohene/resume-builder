import React, { useContext } from 'react';
import { ResumeContext } from '../../../contexts/ResumeContext';

const Profile = () => {
  const { resume } = useContext(ResumeContext);
  return (
    <div>
      <h2>Firstname</h2>
      {resume.profile.firstName}

      <h2>Lastname</h2>
      {resume.profile.lastName}
    </div>
  );
}

export default Profile;