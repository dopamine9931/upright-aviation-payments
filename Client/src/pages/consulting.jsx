import React, { Routes, Route } from "react";
import { Card } from 'antd';
import "../components/component-css-files/imageoverlay.css"; // CSS file

const { Meta } = Card;

function Consulting() {
  return (
    <div>
      <h2> Consulting</h2>

      <div className="image-overlay-container">
        <Card
          cover={<img alt="hangar" src="/hangar.jpg" />}
          style={{ width: 900, height: 500, position: "relative"}}
          
        >
          <div className="overlay-text">
            <Meta
              title="We're here to guide you at every step ."
              style={{ fontSize: 18 }}
              description="Our world class team of expert consultants will work with you to meet your needs. Whether its your first time or your looking to expand. We've got you covered."
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Consulting;