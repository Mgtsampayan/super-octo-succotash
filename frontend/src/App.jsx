import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import RegistrarDashboard from './pages/RegistrarDashboard';
import CashierDashboard from './pages/CashierDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/student" component={StudentDashboard} />
        <PrivateRoute path="/registrar" component={RegistrarDashboard} />
        <PrivateRoute path="/cashier" component={CashierDashboard} />
        <PrivateRoute path="/faculty" component={FacultyDashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
