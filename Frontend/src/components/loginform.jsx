import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const formData = { username, password };
      const response = await axios.post('http://localhost:3002/api/v1/user/login', formData);
      
      // Handle successful login response
      console.log('Login successful:', response.data);
      
      // Store token and expiry time in localStorage
      localStorage.setItem('token', response.data.token);
      const expiryTime = new Date().getTime() + 3600000; // 1 hour
      localStorage.setItem('tokenExpiry', expiryTime);

      // Redirect to dashboard
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-input mt-1 block w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input mt-1 block w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleLogin}
      >
        Log in
      </button>
    </div>
  );
};

export default LoginForm;
