import React, { Routes, Route } from "react";
import GatewayFeatures from "../components/SolutionsGateway/GatewayFeatures";
import FormlessEmbed from "../components/formlessai";


function Gateway() {

  return (
    <div>
      <h2>Gateway Services</h2>
    
    <GatewayFeatures />
    <FormlessEmbed />
    </div>
  );
};

export default Gateway;