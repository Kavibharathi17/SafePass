import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🔐 SafePass
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;