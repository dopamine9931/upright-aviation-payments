// Navbar
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
      return (
          <nav className="navbar">
              <div className="logo">Aviation Payments</div>
              <div className="navbar-links ${isOpen ? 'open' : ''}">
                  <a href="#home">Home</a>
                  <a href="#services">Services</a>
                  <a href="#contact">Contact Us</a>
                  <a href="#about">About Us</a>
              </div>
              <div className="menu-icon" onClick={toggleMenu}>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
              </div>
          </nav>
      );
    };  

    export default Navbar;