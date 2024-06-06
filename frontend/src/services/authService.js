import api from './api';

const login = async (studentcode, password) => {
  try {
    const response = await api.post('/auth/login', { studentcode, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

const logout = async () => {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
};

export default {
  login,
  register,
  logout,
};
