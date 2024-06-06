import api from './api';

// Define the fetchRequests function
export const fetchRequests = async (fetchReq) => {
  try {
    const response = await api.get('/requests', fetchReq);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request fetch failed');
  }
}
// Define the createRequest function
export const createRequest = async (requestData) => {
  try {
    const response = await api.post('/requests', requestData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request submission failed');
  }
};

// Define the updateRequest function
export const updateRequest = async (id, updatedData) => {
  try {
    const response = await api.put(`/requests/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Request update failed');
  }
};


// Export both functions
export default {
  createRequest,
  updateRequest,
  fetchRequests
};
