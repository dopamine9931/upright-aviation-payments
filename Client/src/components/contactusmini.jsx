import React from "react";
import { Row, Col, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./component-css-files/contactusmini.css";

const { Title, Text } = Typography;

const ContactUsMini = () => {
  return (
    <div className="contact-us-mini">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8} className="contact-item">
          <MailOutlined className="contact-icon" />
          <Title level={3}>Email</Title>
          <Text>
            Please feel free to reach out to us with any inquiries or further
            communication.
          </Text>
          <a href="mailto:hello@aviationpayments.com">
            hello@aviationpayments.com
          </a>
        </Col>
        <Col xs={24} md={8} className="contact-item">
          <PhoneOutlined className="contact-icon" />
          <Title level={3}>Phone</Title>
          <Text>We're here to assist you with any questions or concerns.</Text>
          <a href="tel:+15551234567">+1 (555) 123-4567</a>
        </Col>
        <Col xs={24} md={8} className="contact-item">
          <EnvironmentOutlined className="contact-icon" />
          <Title level={3}>Office</Title>
          <Text>Contact us today for more information or to get started.</Text>
          <a
            href="https://www.google.com/maps/place/123+Main+St,+Anytown,+USA"
            target="_blank"
            rel="noopener noreferrer"
          >
            123 Main St, Anytown, USA
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUsMini;
