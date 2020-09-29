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

      <h2>Email</h2>
      {resume.profile.email}

      <h2>LinkedIn</h2>
      {resume.profile.linkedIn}

      <h1>Address</h1>

      <h2>Street</h2>
      {resume.profile.address.street}

      <h2>City</h2>
      {resume.profile.address.city}

      <h2>Country</h2>
      {resume.profile.address.country}

      <h2>Zip</h2>
      {resume.profile.address.zip}

      <h2>Apt</h2>
      {resume.profile.address.apt}

      <h2>State</h2>
      {resume.profile.address.state}
    </div>
  );
};

export default Profile;
