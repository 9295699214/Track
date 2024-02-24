// NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="api/v1/login">Login</Link>
        </li>
        <li>
          <Link to="api/v1//signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};
