import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ element: Component, ...rest }) => { // Use 'element' instead of 'component'
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      element={user ? <Component {...rest} /> : <Navigate to="/login" />} // Use Navigate instead of Redirect
    />
  );
};

export default PrivateRoute;
