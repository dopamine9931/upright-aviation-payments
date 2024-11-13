import React, { Routes, Route } from "react";
import { Card, Typography } from 'antd';
import "../components/component-css-files/consultingimageoverlay.css"; // CSS file
const { Title } = Typography;
const { Meta } = Card;

function Consulting() {
  return (
    <div>
      <Title
        level={1}
        style={{
          textDecoration: "underline",
        }}
        classname="consultingtitle"
      >
        Consulting
      </Title>
      <div className="consulting-container">
        <Card
          className="hangar-img"
          cover={<img alt="hangar" src="/hangar.jpg" />}
          bordered={false}
        >
          <div className="overlay-text">
            <Meta
              title="We're here to guide you at every step of the way."
              description="Our world class team of expert consultants will work with you to meet your needs. Whether its your first time or your looking to expand. We've got you covered."
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Consulting;