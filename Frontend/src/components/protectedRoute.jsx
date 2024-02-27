import React, { useState, useEffect } from 'react';
import HomePage from './homepage';
import ProtectedRoute from './protectedRoute';
import Dashboard from './dashboard'; // Make sure to import Dashboard component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []); // Run this effect only once when component mounts

  return (
    <>
      <ProtectedRoute
        path="/api/v1/dashboard"
        isAuthenticated={isAuthenticated}
        component={Dashboard}
      />
      {!isAuthenticated && <HomePage />}
    </>
  );
}

export default App;
