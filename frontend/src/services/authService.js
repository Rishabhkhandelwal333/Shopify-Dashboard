import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Register User
const register = async (email, password) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  localStorage.setItem("token",response.data.token);
  return response.data;
};

// Login User
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Logout User
const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
