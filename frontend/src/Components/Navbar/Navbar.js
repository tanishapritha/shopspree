// filepath: /C:/Users/tprit/Documents/GitHub/shopspree/frontend/src/Components/Navbar/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <FaBars className="menu-icon" onClick={toggleNavbar} />
      <nav ref={navbarRef} className={`navbar ${isOpen ? 'open' : ''}`}>
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