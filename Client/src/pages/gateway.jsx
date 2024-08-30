import React, { Routes, Route } from "react";
import GatewayFeatures from "../components/SolutionsGateway/GatewayFeatures";
import FormlessEmbed from "../components/formlessai";
import GatewayInfo from "../components/SolutionsGateway/GatewayInfo";

function Gateway() {

  return (
    <div>
      <h2>Gateway Services</h2>
    <GatewayInfo />
    <GatewayFeatures />
    <FormlessEmbed />
    </div>
  );
};

export default Gateway;