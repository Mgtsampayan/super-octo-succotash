import React from 'react';
import Navbar from '../components/common/Navbar';
import useAuth from '../hooks/useAuth';

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome, {user?.fname} {user?.lname}</p>
    </div>
  );
};

export default StudentDashboard;
