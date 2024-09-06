import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { BulbOutlined } from "@ant-design/icons"; 
import LeadCapture from "./leadCapture";
import "./component-css-files/threeFeature.css";

const { Title, Text } = Typography;

const ThreeFeatures = ({ features }) => {
  return (
    <div className="three-column-feature">
      <Row gutter={[16, 16]}>
        {features.map((feature, index) => (
          <Col xs={24} md={8} key={index} className="feature-item">
            <BulbOutlined className="feature-icon" />{" "}
            <Title level={3}>{feature.title}</Title>
            <Text>{feature.description}</Text>
          </Col>
        ))}
      </Row>
      <div className="lead-capture-container">
        <LeadCapture isModal={true} />{" "}
      </div>
    </div>
  );
};

export default ThreeFeatures;
