import PropType from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

// This is a placeholder. You should replace this with your actual method of getting the authenticated user's status.
const isAuthenticated = () => {
  // Your actual code here...
  return true; // return true if user is authenticated, false otherwise
};

const PrivateRoute = ({ children, ...props }) => {
  return isAuthenticated() ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

PrivateRoute.propTypes = {
  children: PropType.node.isRequired,
};

export default PrivateRoute;

