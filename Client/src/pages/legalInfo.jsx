import React from "react";
import { Layout, Menu, Typography, Anchor } from "antd";
import '../components/component-css-files/legalinfo.css'
import CookiePolicy from "../components/legal/cookie";
import LegalPolicy from "../components/legal/legalpolicy";
import PrivPolicy from "../components/legal/privpolicy";


const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Link } = Anchor;

const LegalInfo = () => {
  return (
    <Layout className="legal-info-page">
      {/* Header with Navigation
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["legal"]}>
          <Menu.Item key="legal">Legal Info</Menu.Item>
          <Menu.Item key="privacy">Privacy Policy</Menu.Item>
          <Menu.Item key="cookie">Cookie Policy</Menu.Item>
        </Menu>
      </Header> */}

      {/* Main Content */}
      <Content style={{ padding: "50px 50px" }}>
        <div
          className="site-layout-content"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <Title level={0} style={{ textAlign: "center" }}>
            Legal Information
          </Title>
          <div className="title-underline"></div>
        </div>

        {/* Legal Info Section */}
        <div>
          <section id="legal-info" style={{ marginBottom: "40px" }}>
            <LegalPolicy />
          </section>
          <div className="title-underline"></div>
        </div>
        {/* Privacy Policy Section */}
        <div>
          <section id="privacy-policy" style={{ marginBottom: "40px" }}>
            <PrivPolicy />
          </section>
          <div className="title-underline"></div>
        </div>
        <div>
          {/* Cookie Policy Section */}
          <section id="cookie-policy" style={{ marginBottom: "40px" }}>
            <CookiePolicy />
          </section>
        </div>
      </Content>
    </Layout>
  );
};

export default LegalInfo;
