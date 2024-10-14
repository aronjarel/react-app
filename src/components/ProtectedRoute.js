// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/login" />;
  }

  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.role;

  // If a role is specified, check if the user's role matches
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />; // Redirect to an unauthorized page
  }

  return children;
};

export default ProtectedRoute;
