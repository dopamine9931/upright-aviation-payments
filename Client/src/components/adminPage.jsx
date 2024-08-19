import React from "react";
import { useState } from "react";
import LoginForm from "./loginForm";
import UserCreateDelete from "./userCreateDelete";

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
          <div>Placeholder content, replace with leads</div>
          {isAdmin && <UserCreateDelete />}
        </>
      )}
    </>
  );
};

export default AdminPage;
