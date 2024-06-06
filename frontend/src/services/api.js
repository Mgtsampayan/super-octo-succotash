import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Update with your API base URL
});

export default api;