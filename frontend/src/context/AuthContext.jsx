import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types'
import { login, logout, getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = getCurrentUser();
        setUser(user);
    }, []);

    const handleLogin = async (email, password) => {
        const user = await login(email, password);
        setUser(user);
        navigate('/dashboard');
    };

    const handleLogout = () => {
        logout();
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropType.node.isRequired,
};

export default AuthProvider;