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
        <Col xs={24} md={12} className="infosection-col-left">
          <Title level={1}>
            Welcome to Aviation Payments - Simplifying Transactions
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            pariatur eligendi quod, autem harum ut, dolorem similique
            perspiciatis aut nemo eos, ab tempora suscipit dignissimos!
          </p>
          <div className="lead-capture-homecontainer">
            <LeadCapture isModal={true} />{" "}
          </div>
        </Col>

        <Col xs={24} md={12} className="infosection-col-right">
          <div className="infosection-img">
            <img src="/aviation_small.jpg" alt="Description" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InfoSection;