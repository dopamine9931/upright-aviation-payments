import React from "react";
import { Layout, Typography, Space } from "antd";
// import "../header.css";

// new header component revised with ant design -LE

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = () => {
  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // pushing the logo to the left and title to the right -LE
        padding: "0 20px",
        background: "#001529",
      }}
    >
     
        <div className="logo" style={{ display: "flex", alignItems: "center" }}> 
          <img src="/logo/avipay_logo_no_text.png"
          alt="Aviation Payments Logo" 
          style={{ height: "32px", marginRight: "20px", color: "#fff" }} />
        </div>
        <Title level={3} style={{ margin: 0, color: "#fff" }}>
        Aviation Payments
        </Title>
    </Header>
  );
};

export default HeaderComponent;