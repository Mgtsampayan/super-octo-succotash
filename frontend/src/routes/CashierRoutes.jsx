import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const CashierRoutes = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      element={user && user.role === 'cashier' ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default CashierRoutes;