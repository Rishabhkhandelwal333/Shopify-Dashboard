import axios from 'axios';

const API_URL = 'http://localhost:5000/api/shopify';

const getOrders = async () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.get(`${API_URL}/orders`, config);
  console.log("response",response);
  return response.data;
};

export default { getOrders };
