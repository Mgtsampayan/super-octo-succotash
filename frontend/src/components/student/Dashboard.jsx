import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h1>Student Dashboard</h1>
    <ul>
      <li><Link to="/student/request">Request Document</Link></li>
      <li><Link to="/student/request-status">Request Status</Link></li>
      <li><Link to="/student/profile">Profile</Link></li>
    </ul>
  </div>
);

export default Dashboard;
