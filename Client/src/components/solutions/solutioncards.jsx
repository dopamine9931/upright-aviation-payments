import React from "react";
import { Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const cardData = [
  {
    id:1,
    title: "Aviation Software & ERP Consulting",
    description: "Description for card 1",
    imageUrl: "http://placekitten.com/g/200/300",
    link: "/consulting"
  },
  {
    id:2,
    title: "Merchant Services",
    description: "Description for card 2",
    imageUrl: "http://placekitten.com/g/200/300",
    link: "/merchantservices"
  },
  {
    id:3,
    title: "Gateway Connectivity",
    description: "Description for card 3",
    imageUrl: "http://placekitten.com/g/200/300",
    link: "/gateway"
  },
  {
    id:4,
    title: "Fuel Card Solutions",
    description: "Description for card 4",
    imageUrl: "http://placekitten.com/g/200/300",
    link: "/fuelcard"
  },
  {
    id: 5,
    title: "ATM Solutions",
    description: "Description for card 5",
    imageUrl: "http://placekitten.com/g/200/300",
    link: "/atmsolutions"
  },
  {
    id: 6,
    title: "ACH Solutions",
    description: "Description for card 6",
    imageUrl: "http://placekitten.com/g/200/300",
    link: "/achsolutions"
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
    <div style={{ padding: 24 }}>
      <Row gutter={(16, 16)}>
        {cardData.map(({ id, title, description, imageUrl, link }) => (
          <Col span={8} key={id} style={{ marginBottom: 24 }}>
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
