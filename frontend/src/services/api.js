import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://abc-company-gy7l.onrender.com/api' 
    : 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    
    if (error.response?.status === 404) {
      throw new Error('API endpoint not found');
    } else if (error.response?.status === 500) {
      throw new Error('Server error. Please try again later.');
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please check your connection.');
    } else if (!error.response) {
      throw new Error('Network error. Please check your connection.');
    }
    
    throw error.response?.data || error;
  }
);

// API functions
export const getHeading = async () => {
  try {
    const response = await api.get('/headings');
    return response;
  } catch (error) {
    console.error('Error fetching heading:', error);
    throw error;
  }
};

export const saveHeading = async (heading) => {
  try {
    const response = await api.post('/headings', { heading });
    return response;
  } catch (error) {
    console.error('Error saving heading:', error);
    throw error;
  }
};

export const getAllHeadings = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/headings/all?page=${page}&limit=${limit}`);
    return response;
  } catch (error) {
    console.error('Error fetching all headings:', error);
    throw error;
  }
};

// Health check function
export const checkServerHealth = async () => {
  try {
    const response = await api.get('/health');
    return response;
  } catch (error) {
    console.error('Server health check failed:', error);
    throw error;
  }
};

export default api;
