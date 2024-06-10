import PropType from 'prop-types'
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService, registerService, logoutService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (credentials) => {
    const response = await loginService(credentials);
    setUser(response.data);
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  const register = async (credentials) => {
    const response = await registerService(credentials);
    setUser(response.data);
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  const logout = () => {
    logoutService();
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropType.node.isRequired,
};