import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RegistrarRoutes = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      element={user && user.role === 'registrar' ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default RegistrarRoutes;
