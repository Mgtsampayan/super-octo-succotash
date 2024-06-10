import api from './api';

export const getRequestsService = () => {
  return api.get('/requests');
};

export const createRequestService = (request) => {
  return api.post('/requests', request);
};
