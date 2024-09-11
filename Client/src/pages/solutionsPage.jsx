import React, { Routes, Route } from "react";
import { Layout, Space } from "antd"; 
import MerchantServices from "../pages/merchantservices.jsx";
import Gateway from "../pages/gateway.jsx";
import Consulting from "../pages/consulting.jsx";
import OtherSolutions from "../components/othersolutions.jsx";


const { Content } = Layout;

//const spacingStyle = {
//  height: "150px"
 // padding: "100px"
//};

function solutionsPage() {
return (
  <Layout>
    <Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 60 }}>
    <Space
      direction="vertical"
      size="large"
      style={{ display: "flex", background: "#000000" }}>
      <Consulting />
      <MerchantServices />
      <OtherSolutions />
      <Gateway />
    </Space>
  </Content>
</Layout>
);
}


export default solutionsPage;
