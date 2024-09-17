import React from "react";
import { Row, Col, Typography } from "antd";
import LeadCapture from "./leadCapture";
import "../components/component-css-files/infosection.css";
import "../components/component-css-files/lead-capture-homecontainer.css"; // Import the CSS file

const { Title } = Typography;

const InfoSection = () => {
  return (
    <div className="infosection">
      <Row align="middle" className="infosection-row">
        <Col span={12} className="infosection-col-left">
          <Title level={1} className="infosection-title">
            Welcome to Aviation Payments - Simplifying Transactions
          </Title>
          <p className="infosection-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis totam accusamus error vel labore libero deserunt ipsa.
            Molestias aliquid ratione voluptatum illo est porro delectus fuga
            quibusdam quo hic officiis magni totam, laudantium odio rem labore
            velit laborum atque iure pariatur minus magnam vitae quidem sint? Id
            maxime rerum sint.
          </p>
          <div className="lead-capture-homecontainer">
            <LeadCapture isModal={true} 
             /> {" "}
          </div>
        </Col>

        <Col span={12} className="infosection-col-right">
          <img
            src="/aviation_small.jpg"
            alt="Description"
            className="infosection-img"
          />
        </Col>
      </Row>
    </div>
  );
};

export default InfoSection;