import React, { Routes, Route } from "react";
import MerchantServices from "../pages/merchantservices.jsx";
import Gateway from "../pages/gateway.jsx";
import Consulting from "../pages/consulting.jsx";
import OtherSolutions from "../components/othersolutions.jsx";

const spacingStyle = {
  height: "150px",
  width: "",
  padding: "",
};

function solutionsPage() {
  return (
    <>
      <Consulting />
      <div style={spacingStyle} />

      <MerchantServices />
      <div style={spacingStyle} />

      <OtherSolutions />
      <div style={spacingStyle} />
      
      <Gateway />
      <div style={spacingStyle} />
      
    </>
  );
}

export default solutionsPage;
