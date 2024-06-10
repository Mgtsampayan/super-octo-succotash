// import './Student.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {user.fname} {user.lname}</p>
      <p><strong>Student Code:</strong> {user.studentcode}</p>
      <p><strong>Email:</strong> {user.email1}</p>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default Profile;

