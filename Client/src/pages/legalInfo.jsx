import React from "react";
import { Layout, Menu, Typography, Anchor } from "antd";
import '../components/component-css-files/legalinfo.css'

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
          <Title level={1} style={{ textAlign: "center" }}>
            Legal Information
          </Title>


          {/* Legal Info Section */}
          <section id="legal-info" style={{ marginBottom: "40px" }}>
            <Title level={2}>Legal Info</Title>
            <Paragraph>
              This section contains the legal information of the company,
              including disclaimers, terms of service, and other legal notices.
            </Paragraph>
          </section>

          {/* Privacy Policy Section */}
          <section id="privacy-policy" style={{ marginBottom: "40px" }}>
            <Title level={2}>Privacy Policy</Title>
            <Paragraph>
              Our Privacy Policy explains how we handle your personal data, your
              privacy rights, and how the law protects you.
            </Paragraph>
          </section>

          {/* Cookie Policy Section */}
          <section id="cookie-policy" style={{ marginBottom: "40px" }}>
            <Title level={2}>Cookie Policy</Title>
            <Paragraph>
              Our Cookie Policy provides information about how we use cookies to
              improve your experience on our site.
            </Paragraph>
          </section>
        </div>
      </Content>
    </Layout>
  );
};

export default LegalInfo;
