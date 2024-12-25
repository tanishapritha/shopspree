// filepath: /C:/Users/tprit/Documents/GitHub/shopspree/frontend/src/Components/Navbar/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>  
           
      <FaBars className="menu-icon" onClick={toggleNavbar} />     
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#appliances">APPLIANCES</a></li>
          <li className="navbar-item"><a href="#clothes">CLOTHES</a></li>
          <li className="navbar-item"><a href="#shoes">SHOES</a></li>
          <li className="navbar-item"><a href="#edibles">EDIBLES</a></li>
        </ul>
      </nav>
      
      
        
      
    </div>
  );
};

export default Navbar;