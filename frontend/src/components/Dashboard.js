import React, { useEffect, useState } from 'react';
import shopifyService from '../services/shopifyService';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css'; 
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [orders, setOrders] = useState({ totalOrders: 0, totalSales: 0, conversionRate: 0 });
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  // Fetch orders from Shopify API
  const fetchOrders = async () => {
    try {
      setLoading(true); 
      const data = await shopifyService.getOrders();
      setOrders(data);
      console.log(data);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('Log Out '); 
    navigate('/login');
  };

  useEffect(() => {
    fetchOrders();
  }, []); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchOrders(); // Automatically fetch orders every 3 minutes
    }, 180000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Shopify Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={fetchOrders} disabled={loading}>
        {loading ? 'Refreshing...' : 'Refresh Orders'}
      </button> 
      
      <div className="stats-container">
        <div className="stats">
          <p>Total Orders: {orders.totalOrders}</p>
        </div>
        <div className="stats">
          <p>Total Sales: ${orders.totalSales.toFixed(2)}</p>
        </div>
        <div className="stats">
          <p>Conversion Rate: {orders.conversionRate}%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
