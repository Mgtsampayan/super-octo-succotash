import { Route, Routes } from 'react-router-dom';
import StudentDashboard from '../pages/StudentDashboard';
import RequestDocumentPage from '../pages/RequestDocumentPage';
import ProfilePage from '../pages/ProfilePage';
import NotificationPage from '../pages/NotificationPage';

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/request-document" element={<RequestDocumentPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/notifications" element={<NotificationPage />} />
    </Routes>
  );
};

export default StudentRoutes;
