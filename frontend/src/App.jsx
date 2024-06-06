import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import RegistrarDashboard from './pages/RegistrarDashboard';
import CashierDashboard from './pages/CashierDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';
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
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <PrivateRoute path="/student" component={StudentRoutes} />
                  <PrivateRoute path="/registrar" component={RegistrarRoutes} />
                  <PrivateRoute path="/cashier" component={CashierRoutes} />
                  <PrivateRoute path="/faculty" component={FacultyRoutes} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </NotificationProvider>
      </RequestProvider>
    </AuthProvider>
  );
};

export default App;
