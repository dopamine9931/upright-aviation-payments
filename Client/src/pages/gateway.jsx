import React, { Routes, Route } from "react";
import { Typography } from "antd";
import GatewayFeatures from "../components/SolutionsGateway/GatewayFeatures";
import FormlessEmbed from "../components/formlessai";
import GatewayInfo from "../components/SolutionsGateway/GatewayInfo";

const { Title } = Typography;
function Gateway() {

  return (
    <div>
      <div>
        <Title
          level={1}
          style={{
            textDecoration: "underline",
          }}
        >
          Gateway Services
        </Title>
      </div>
      <GatewayInfo />
      <GatewayFeatures />
      <FormlessEmbed />
    </div>
  );
};

export default Gateway;