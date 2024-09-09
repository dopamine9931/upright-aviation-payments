import React, { Routes, Route } from "react";
import MerchantServices from "../pages/merchantservices.jsx";
import Gateway from "../pages/gateway.jsx";
import Consulting from "../pages/consulting.jsx";
import OtherSolutions from "../components/othersolutions.jsx";

function solutionsPage() {
  return (
    <>
      <Consulting />

      <MerchantServices />

      <OtherSolutions />
      
      <Gateway />
    </>
  );
}

export default solutionsPage;
