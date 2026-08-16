import axios from 'axios';

const VERCEL_BACKEND_URL = 'https://arq-backend-p2nxrt5gt-lakshmi-de90.vercel.app/api';

const API_BASE_URL = import.meta.env.VITE_API_URL || VERCEL_BACKEND_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach Authorization token if stored
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('arqpulse_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
