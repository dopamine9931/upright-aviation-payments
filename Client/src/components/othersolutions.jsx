import React from "react";
import { Row, Col, Card } from "antd";

const OtherSolutions = () => (
    
    <div>
    <h2> Other Solutions Offered </h2>
    
  <Row gutter={16}>
    <Col span={8} >
      <Card title="Fuel Card Services" bordered={false} >
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          asperiores ipsa saepe sint, rem, nisi omnis dolorum aperiam delectus
          aliquid quia! Neque impedit blanditiis ratione!
        </p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="ATM Solutions" bordered={false}>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          asperiores ipsa saepe sint, rem, nisi omnis dolorum aperiam delectus
          aliquid quia! Neque impedit blanditiis ratione!
        </p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="ACH Solutions" bordered={false}>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          asperiores ipsa saepe sint, rem, nisi omnis dolorum aperiam delectus
          aliquid quia! Neque impedit blanditiis ratione!
        </p>
      </Card>
    </Col>
  </Row>
  </div>
);

export default OtherSolutions;
