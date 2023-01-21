import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="container" data-testid="Navigation">
    <h1>Bookstore CMS</h1>
    <div className="navbar">
      <div className="navitem">
        <Link className="item" to="/">
          BOOKS
        </Link>
        <Link className="item" to="/Category">
          CATEGORIES
        </Link>
      </div>
    </div>
  </div>
);

export default Navigation;
