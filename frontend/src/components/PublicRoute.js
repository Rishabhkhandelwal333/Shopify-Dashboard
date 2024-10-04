import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('user'); 

  return isLoggedIn ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
