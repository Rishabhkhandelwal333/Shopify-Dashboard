import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/dashboard');
      toast.success('Logged In  '); 
    } catch (error) {
      toast.error('Login failed! Please check your credentials.'); 
      console.error('Login error:', error);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    
      navigate('/register');
   
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Shopify Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        Not a user ? <button onClick={handleRegister}>Signup</button>
      </form>
    </div>
  );
};

export default Login;
