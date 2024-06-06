import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import RegistrarDashboard from './pages/RegistrarDashboard';
import CashierDashboard from './pages/CashierDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoutes';
import StudentRoutes from './routes/StudentRoutes';
import RegistrarRoutes from './routes/RegistrarRoutes';
import CashierRoutes from './routes/CashierRoutes';
import FacultyRoutes from './routes/FacultyRoutes';
import { AuthProvider } from './context/AuthContext';
import { RequestProvider } from './context/RequestContext';
import { NotificationProvider } from './context/NotificationContext';
import './styles/main.css';

const App = () => {
  return (
    <AuthProvider>
      <RequestProvider>
        <NotificationProvider>
          <Router>
            <div>
              <Navbar />
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/student/*" element={<PrivateRoute element={<StudentRoutes />} />} />
                  <Route path="/registrar/*" element={<PrivateRoute element={<RegistrarRoutes />} />} />
                  <Route path="/cashier/*" element={<PrivateRoute element={<CashierRoutes />} />} />
                  <Route path="/faculty/*" element={<PrivateRoute element={<FacultyRoutes />} />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </Router>
        </NotificationProvider>
      </RequestProvider>
    </AuthProvider>
  );
};

export default App;
