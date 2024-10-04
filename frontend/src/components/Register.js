import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css'; 
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.register(email, password);
      if (response && response.message) { 
        toast.success('Signup Success!');
        navigate('/dashboard'); 
      } else {
        toast.error('Signup failed! Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed! Please try again.'); 
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Shopify SignUp</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
