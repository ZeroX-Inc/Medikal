import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
  const userRole = localStorage.getItem('userRole');

  if (userRole !== allowedRole && userRole !== '/superadmin') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;