import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../components/component-css-files/navbar-mobile.css"; // Adjust the path as needed

// Navbar component
function Navbar({ currentPath = "" }) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Function to show the drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (

    <div className="navbar-container">
      {/* Hamburger Button (Mobile view) */}
      <div onClick={showDrawer} className="hamburger-button">
        <MenuOutlined />
      </div>

      {/* Centered Menu Items (Desktop view) */}
      <div className="menu-desktop">
        <AppMenu currentPath={currentPath} mode="horizontal" />
      </div>

      {/* Drawer Component */}
      <Drawer
        placement="left"
        closable={false}

        onClose={closeDrawer}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}

      >
        <AppMenu currentPath={currentPath} mode="vertical" />
      </Drawer>
    </div>
  );
}

// AppMenu component
function AppMenu({ currentPath, mode }) {
  return (
    <Menu
      style={{
        backgroundColor: "black",
        color: "white",
        fontSize: 30,
        border: "none",
        textAlign: "left",
        padding: "0 35px",
      }}
      mode={mode}
      selectedKeys={[currentPath]} // Highlight the selected menu item
    >
      <Menu.Item key="/">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="/solutions">
        <a href="/solutions">Solutions</a>
      </Menu.Item>
      <Menu.Item key="/contactus">
        <a href="/contactus">Contact Us</a>
      </Menu.Item>
      <Menu.Item key="/aboutus">
        <a href="/aboutus">About Us</a>
      </Menu.Item>
    </Menu>
  );
}



// Previous Navbar for deletion later -LE

// Navbar
//const Navbar = () => {
//    const [isOpen, setIsOpen

//    const toggleMenu = () => {
//      setIsOpen(!isOpen);
//    };

//      return (
//          <nav className="navbar">
//              <div className="logo">Aviation Payments</div>
//              <div className="navbar-links ${isOpen ? 'open' : ''}">
//                  <a href="#home">Home</a>
//                  <a href="#services">Services</a>
//                  <a href="#contact">Contact Us</a>
//                  <a href="#about">About Us</a>
//              </div>
//              <div className="menu-icon" onClick={toggleMenu}>
//                  <div className=""></div>
//                  <div className=""></div>
//                  <div className=""></div>
//             </div>
//         </nav>
//      );
//    };



