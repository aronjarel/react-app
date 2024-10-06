// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("form Submitted");

    try {
      const response = await axios.post(`${REACT_APP_API_URL}/auth/login`, {
        email,
        password,
      });

      console.log("API response: ", response.data);
      // Store the JWT token in localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect to the dashboard after successful login
      navigate('/dashboard');
    } catch (err) {
      console.log('error logging in...');
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Learning Management Systems Login</h1>
      </div>
      <div className="login-right">
        <form onSubmit={handleLogin}>
        <div className="login-box">
          <div className="input-group">
            <span className="icon">&#x1F464;</span> {/* User Icon */}
            <input
              type="text"
              placeholder="Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="icon">&#x1F512;</span> {/* Lock Icon */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
