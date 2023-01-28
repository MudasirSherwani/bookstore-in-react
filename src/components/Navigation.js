import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const person = 'https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-User-users-those-icons-flat-those-icons-4.png';
const Navigation = () => (
  <nav className="nav-bar" data-testid="Navigation">
    <a className="nav-brand" href="#/">Bookstore CMS</a>
    <ul className="nav-links">
      <li><Link className="nav-link active-link" to="/" aria-current="page">BOOKS</Link></li>
      <li><Link className="nav-link" to="/Category">CATEGORIES</Link></li>
    </ul>
    <button className="ic-button" type="button">
      <img alt="person" className="material-icons primary-color" src={person} />
    </button>
  </nav>
);

export default Navigation;
