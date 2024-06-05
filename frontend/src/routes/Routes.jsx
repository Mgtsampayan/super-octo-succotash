import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import StudentPage from '../pages/StudentPage';
import RegistrarPage from '../pages/RegistrarPage';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    return (
        <Route 
            {...rest} 
            render={(props) => 
                auth ? (
                    <Component {...props} />
                ) : (
                    navigate('/login')
                )
            }
        />
    );
};

const Routed = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/student" element={<PrivateRoute component={StudentPage} />} />
                <Route path="/registrar" element={<PrivateRoute component={RegistrarPage} />} />
                <Route path="*" element={<RedirectToLogin />} />
            </Routes>
        </Router>
    );
};

const RedirectToLogin = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate('/login');
    }, [navigate]);
    return null;
};


PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default Routed;
