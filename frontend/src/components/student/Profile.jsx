import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Student.css';

const Profile = () => {
  const { authData } = useContext(AuthContext);

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>Name: {authData?.fname} {authData?.lname}</p>
      <p>Email: {authData?.email1}</p>
      {/* Add more profile details here */}
    </div>
  );
};

export default Profile;
