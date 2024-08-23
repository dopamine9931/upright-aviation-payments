import React from "react";
import { useState } from "react";
import LoginForm from "../components/loginForm";
import UserCreateDelete from "../components/userCreateDelete";
import DisplayLeads from "../components/displayLeads";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleTokenUpdate = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const handleAdminStatusUpdate = (status) => {
    setIsAdmin(status);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginForm
          onTokenUpdate={handleTokenUpdate}
          onAdminStatusUpdate={handleAdminStatusUpdate}
        />
      ) : (
        <>
          <DisplayLeads/>
          {isAdmin && <UserCreateDelete />}
        </>
      )}
    </>
  );
};

export default AdminPage;
