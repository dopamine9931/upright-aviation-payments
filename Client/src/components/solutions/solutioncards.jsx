import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const { Meta } = Card;

const cardData = [
  {
    id: 1,
    title: "Consulting",
    description: "Software & ERP",
    imageUrl: "../consulting.jpg",
    link: "/solutionsPage",
  },
  {
    id: 2,
    title: "Merchant Services",
    description: "POS and Payments",
    imageUrl: "merchantservices.jpg",
    link: "/solutionsPage",
  },
  {
    id: 3,
    title: "Gateway Connectivity",
    description: "Description for card 3",
    imageUrl: "connectivity.jpeg",
    link: "/solutionsPage",
  },
  {
    id: 4,
    title: "Fuel Card Solutions",
    description: "Description for card 4",
    imageUrl: "fuelcard.jpg",
    link: "/solutionsPage",
  },
  {
    id: 5,
    title: "ATM Solutions",
    description: "Description for card 5",
    imageUrl: "atmsolutions.jpg",
    link: "/solutionsPage",
  },
  {
    id: 6,
    title: "ACH Solutions",
    description: "Description for card 6",
    imageUrl: "banking.jpg",
    link: "/solutionsPage",
  },
];

const Solutions = () => {
  // Initialize the navigation hook
  const navigate = useNavigate();

  // Navigate to the desired route
  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div style={{ padding: 30 }}>
      <Title level={1} style={{ textAlign: "center" }}>
        Our Solutions
      </Title>
      <Row gutter={16}>
        {cardData.map(({ id, title, description, imageUrl, link }) => (
          <Col
            span={8}
            key={id}
            style={{
              marginBottom: 24,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={title} src={imageUrl} />}
              onClick={() => handleCardClick(link)}
            >
              <Meta title={title} description={description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Solutions;
