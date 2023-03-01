import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">BookStore</Link>
      <ul className="nav-links">
        <li><NavLink to="/" className={({isActive}) => isActive ? 'active-link nav-link' : 'nav-link'}>BOOKS</NavLink></li>
        <li><NavLink to="/categories" className={({isActive}) => isActive ? 'active-link nav-link' : 'nav-link'}>CATEGORIES</NavLink></li>
      </ul>
      <img className="user-ico" alt="Icon of User" src="user.png"/>
    </nav>
  );
}

export default Navbar;
