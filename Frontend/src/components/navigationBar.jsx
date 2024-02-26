import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/api/v1/user/login" className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          Login
        </Link>
        <Link to="/api/v1/user/signup" className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
