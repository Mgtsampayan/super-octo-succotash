import api from './api';

const getRequestStatus = async (studentId) => {
  try {
    const response = await api.get(`/requests/status/${studentId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get request status');
  }
};

const submitRequest = async (requestData) => {
  try {
    const response = await api.post('/requests', requestData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request submission failed');
  }
};

export default {
  getRequestStatus,
  submitRequest,
};
