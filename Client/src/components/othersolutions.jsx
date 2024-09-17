import React from "react";
import { Row, Col, Card, Typography } from "antd";
import "../components/component-css-files/othersolutions.css";

const { Title } = Typography;
const OtherSolutions = () => (
  
  <div class="othersolutions">
    
    <Title level={1} className="othersolutions-title">
     Other Solutions Offered 
     </Title>

    <Row gutter={16}>
      <Col span={8}>
        <Card title="Fuel Card Services" bordered={false}>
          <img alt="example" src="/fuelcards.jpg" />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="ATM Solutions" bordered={false}>
          <img alt="example" src="/atms.jpg" />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="ACH Solutions" bordered={false}>
          <img alt="example" src="/achtransactions.jpg" />
        </Card>
      </Col>
    </Row>
  </div>
);

export default OtherSolutions;
