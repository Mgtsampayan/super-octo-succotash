import { Route, Routes } from 'react-router-dom';
import StudentDashboard from '../pages/StudentDashboard';
import DocumentRequest from '../pages/DocumentRequest';
import RequestStatusPage from '../pages/RequestStatus';
import ProfilePage from '../pages/Profile';
import PrivateRoute from './PrivateRoutes';

const StudentRoutes = () => (
  <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route path="student/dashboard" element={<StudentDashboard />} />
      <Route path="student/request" element={<DocumentRequest />} />
      <Route path="student/request-status" element={<RequestStatusPage />} />
      <Route path="student/profile" element={<ProfilePage />} />
    </Route>
  </Routes>
);

export default StudentRoutes;
