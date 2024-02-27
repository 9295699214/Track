// NavigationBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    if (isLoggedOut) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      setIsLoggedOut(false); // Reset isLoggedOut state
    }
  }, [isLoggedOut]); // Run when isLoggedOut state changes

  const handleLogout = () => {
    setIsLoggedOut(true);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex justify-between items-center">
        {isLoggedIn ? (
          <button className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/api/v1/user/login" className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              Login
            </Link>
            <Link to="/api/v1/user/signup" className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
