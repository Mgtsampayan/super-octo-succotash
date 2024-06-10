import PropType from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
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

RegistrarRoutes.propTypes = {
  component: PropType.elementType.isRequired,
};

export default RegistrarRoutes;
