import React from "react";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

function MerchantServices() {
  return (
   
   <div>
    <h2> Merchant Services </h2>

    <Row align="middle" style={{ height: "50vh", margin: 0 }}>
      <Col span={12} style={{ textAlign: "center", padding: "0 20px" }}>
        <Title level={1} style={{ textAlign: "center" }}>
          Process Payments - Hassle Free.
        </Title>
        <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          totam accusamus error vel labore libero deserunt ipsa. Molestias
          aliquid ratione voluptatum illo est porro delectus fuga quibusdam quo
          hic officiis magni totam, laudantium odio rem labore velit laborum
          atque iure pariatur minus magnam vitae quidem sint? Id maxime rerum
          sint.
        </p>
      </Col>
      <Col span={12} style={{ textAlign: "center", padding: "0 20px" }}>
        <img
          src="/taptopay.jpg"
          alt="Description"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Col>
    </Row>
    </div>
  );
}

export default MerchantServices;
