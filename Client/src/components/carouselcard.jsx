import React from "react";
import { Carousel, Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const contentStyle = {
  height: "300px", // Adjust height as needed
  color: "#fff",
  lineHeight: "300px", // Adjust line height as needed
  textAlign: "center",
  background: "#364d79",
};

const CarouselCard = () => (
  <Carousel autoplay>
    <div>
      <Link to="/path-to-page-1">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="http://placekitten.com/g/200/300" />}
        >
          <Meta title="Europe Card Title" description="www.example.com" />
        </Card>
      </Link>
    </div>
    <div>
      <Link to="/path-to-page-2">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="http://placekitten.com/g/200/300" />}
        >
          <Meta title="Another Card Title" description="www.example.com" />
        </Card>
      </Link>
    </div>
    <div>
      <Link to="/path-to-page-3">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="http://placekitten.com/g/200/300" />}
        >
          <Meta title="Yet Another Card Title" description="www.example.com" />
        </Card>
      </Link>
    </div>
    <div>
      <Link to="/path-to-page-4">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="http://placekitten.com/g/200/300" />}
        >
          <Meta title="Final Card Title" description="www.example.com" />
        </Card>
      </Link>
    </div>
  </Carousel>
);

export default CarouselCard;
