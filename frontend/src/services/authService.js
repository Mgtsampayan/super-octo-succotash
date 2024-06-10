import api from './api';

export const loginService = (credentials) => {
  return api.post('/auth/login', credentials);
};

export const registerService = (credentials) => {
  return api.post('/auth/register', credentials);
};

export const logoutService = () => {
  return api.post('/auth/logout');
};
