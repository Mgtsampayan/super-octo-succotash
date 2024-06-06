import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const FacultyRoutes = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      element={user && user.role === 'faculty' ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default FacultyRoutes;
