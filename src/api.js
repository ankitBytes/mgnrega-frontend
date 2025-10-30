// API configuration and utility functions
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Generic API request function
export const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Failed:', error);
    throw error;
  }
};

// Get dashboard metrics
export const getDashboardMetrics = async () => {
  return apiRequest('/dashboard/metrics');
};

// Get MGNREGA job data
export const getJobData = async (filters = {}) => {
  const queryParams = new URLSearchParams(filters).toString();
  return apiRequest(`/jobs?${queryParams}`);
};

// Get accessibility data
export const getAccessibilityMetrics = async () => {
  return apiRequest('/accessibility/metrics');
};

export default { apiRequest, getDashboardMetrics, getJobData, getAccessibilityMetrics };
