
import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

function Navbar() {
  const [openMENU, setOpenMENU] = useState(false);

  return (
    <div style={{ height: "15vh", backgroundColor: "black" }}>
      <div
        style={{
          positioning: "sticky",
          backgroundColor: "black",
          height: 60,
          paddingLeft: 12,
          paddingTop: 12,
        }}
        className="menuIcon"
      >
        <MenuOutlined
          style={{ color: "white", fontSize: 30 }}
          onClick={() => setOpenMENU(true)}
        />
      </div>
      <span className="headerMenu">
        <AppMenu />
      </span>

      <Drawer
        placement="left"
        open={openMENU}
        onClose={() => {
          setOpenMENU(false);
        }}
        closable={false}
        bodyStyle ={{ backgroundColor: "darkgray", color: "white" }}
      >
        <AppMenu isInline />
      </Drawer>
    </div>
  );
}


function AppMenu({ isInline = false }) {
  return (
    <Menu
      style={{
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        fontSize: 24,
        border: "none",
      }}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        { label: "Home", key: "home" },
        { label: "Services", key: "services" },
        { label: "Contact Us", key: "contact" },
        { label: "About Us", key: "about" },
      ]}
    />
  );
}

//export default App;

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

// revised ant design Navbar -LE
// includes drawer but can delete if necessary -LE


export default Navbar;

