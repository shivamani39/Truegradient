import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'https://truegradient-assignment-backend.onrender.com';

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
