import React from 'react';
import Navbar from '../common/Navbar';
// import Dashboard from '../components/student/Dashboard'; if applicable import it

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default StudentDashboard;
