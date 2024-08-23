import React from "react";
import { Row, Col, Typography, Button } from "antd";
import "./aboutus.css"; // You will create this CSS file for styling
import LeadCapture from "./components/leadCapture";
const { Title, Paragraph } = Typography;

const AboutUsHero = () => {
  return (
    <div className="about-us-container">
      <Row align="middle" justify="center">
        <Col xs={24} md={12} className="text-col">
          <Title level={1}>
            Welcome to Aviation Payments - Simplifying Transactions for You
          </Title>
          <Paragraph>
            At Aviation Payments, we specialize in providing tailored payment
            solutions for businesses within the aviation industry. Our expertise
            and advanced technology ensure smooth and secure transactions,
            allowing you to focus on what you do best.
          </Paragraph>
          <div className="buttons">
            <Button type="primary" style={{ marginRight: "10px" }}>
              Get in Touch
            </Button>
            <Button>Learn More</Button>
          </div>
        </Col>
        <Col xs={24} md={12} className="image-col">
          <div className="image-placeholder">
            <img src="/path-to-your-image.jpg" alt="About Us" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsHero;
