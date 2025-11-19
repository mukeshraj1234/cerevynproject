import axios from 'axios';

const API_BASE = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true
});

export default api;