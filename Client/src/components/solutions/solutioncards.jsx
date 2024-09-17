import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "../component-css-files/solutioncards.css";
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
  // Initialize state for window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Initialize the navigation hook
  const navigate = useNavigate();

  // Navigate to the desired route
  const handleCardClick = (link) => {
    navigate(link);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div class="solutioncards">
      <Title level={1} className="solutioncards-title">
        Our Solutions
      </Title>
      <Row gutter={16}>
        {cardData.map(({ id, title, description, imageUrl, link }) => (
          <Col xs={24} sm={12} md={8} lg={8} xl={8} key={id}>
            <Card
              hoverable
              className="solutioncards-card"
              style={{ width: "100%", maxWidth: 240 }}
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
