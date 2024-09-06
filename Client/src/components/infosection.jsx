import React from "react";
import { Row, Col, Typography } from "antd";
// import "antd/dist/infosection.css";
const { Title } = Typography;

const InfoSection = () => {
  return (
    <Row align="middle" style={{ height: "70vh", margin: 0 }}>
      <Col span={12} style={{ textAlign: "left", padding: "0 20px" }}>
        <Title level={1} style={{ textAlign: "center" }}>
          Welcome to Aviation Payments - Simplifying Transactions
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
      <Col span={12} style={{ textAlign: "right", padding: "0 20px" }}>
        <img
          src="/aviation_small.jpg"
          alt="Description"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Col>
    </Row>
  );
};

export default InfoSection;
