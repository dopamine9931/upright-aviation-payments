import React from "react";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const LegalInfoSec = ({
  title = "Default Title",
  content = "Default content goes here. Replace this with your custom content.",
  imageUrl = "/default-image.jpg",
  imagePosition = "right", // default image position is right
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <Row align="middle" style={{ height: "auto", margin: 0 }}>
      {/* Conditionally render the columns based on image position */}
      {isImageLeft && (
        <Col span={12} style={{ textAlign: "left", padding: "0 20px" }}>
          <img
            src={imageUrl}
            alt="Description"
            style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
          />
        </Col>
      )}
      <Col span={12} style={{ textAlign: "left", padding: "0 20px" }}>
        <Title level={1} style={{ textAlign: "center" }}>
          {title}
        </Title>
        <p style={{ fontSize: "18px", lineHeight: "1.5" }}>{content}</p>
      </Col>
      {!isImageLeft && (
        <Col span={12} style={{ textAlign: "right", padding: "0 20px" }}>
          <img
            src={imageUrl}
            alt="Description"
            style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
          />
        </Col>
      )}
    </Row>
  );
};

export default LegalInfoSec;
