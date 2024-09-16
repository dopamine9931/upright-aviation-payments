import React, { useState, useEffect } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../components/component-css-files/navbar-mobile.css"; // Adjust the path as needed
import { Link } from "react-router-dom";
// Navbar component
function Navbar({ currentPath = "" }) {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setDrawerVisible(false); // Close the drawer if returning to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
      {/* Logo on the left */}
      <div className="logo-container">
        <img
          src="/avipay_logo_nobackground.png"
          alt="Company Logo"
          className="logo"
        />
      </div>
      {/* Hamburger Button (Mobile view) */}
      {isMobile && (
        <div onClick={showDrawer} className="hamburger-button">
          <MenuOutlined />
        </div>
      )}
      {/* Centered Menu Items (Desktop view) */}
      {!isMobile && (
        <div className="menu-desktop">
          <AppMenu currentPath={currentPath} mode="horizontal" />
        </div>
      )}
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
        <a href="/solutionsPage">Solutions</a>
      </Menu.Item>
      <Menu.Item key="/aboutus">
        <a href="/aboutus">About Us / Contact</a>
      </Menu.Item>
      <Menu.Item key="/blog">
        <a href="/blog">Blog</a>
      </Menu.Item>
    </Menu>
  );
}


export default Navbar;
