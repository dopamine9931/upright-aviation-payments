import React, { useState } from "react";
// import { Menu } from "antd";
import "./navbar.css";

// Navbar
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

// Footer
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Aviation Payments. Loren Ipsum etc... </p>
    </footer>
  );
};
