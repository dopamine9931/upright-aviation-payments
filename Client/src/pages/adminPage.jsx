import React, { useState, useEffect } from "react";
import LoginForm from "../components/admin-components/loginForm";
import UserCreateDelete from "../components/admin-components/userCreateDelete";
import DisplayLeads from "../components/admin-components/displayLeads";
import MobileDisplayLeads from "../components/admin-components/mobileDisplayLeads"; // Import the mobile version

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1198); // Determine if the screen is mobile

  const handleTokenUpdate = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const handleAdminStatusUpdate = (status) => {
    setIsAdmin(status);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1198); // Update mobile state on resize
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <LoginForm
          onTokenUpdate={handleTokenUpdate}
          onAdminStatusUpdate={handleAdminStatusUpdate}
        />
      ) : (
        <>
          {isMobile ? <MobileDisplayLeads /> : <DisplayLeads />}
          {isAdmin && <UserCreateDelete />}
        </>
      )}
    </>
  );
};

export default AdminPage;
