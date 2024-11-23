import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://nongdam.store/api', 
  headers: {
    'Content-Type': 'multipart/form-data', 
  },
  withCredentials: true, 
});

export default apiClient;