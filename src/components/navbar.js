import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className='nav-bar'>
        <Link to='/' className='nav-brand'>BookStore</Link>
        <ul className='nav-links'>
          <li><Link to='/' className='nav-link'>BOOKS</Link></li>
          <li><Link to='/categories' className='nav-link'>CATEGORIES</Link></li>
        </ul>
      </nav>
    )
};

export default Navbar;