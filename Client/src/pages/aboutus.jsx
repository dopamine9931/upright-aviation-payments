import React, { Routes, Route } from "react-router-dom";
// import React from "react";
import { Card } from "antd";

// const { Meta } = Card;

function AboutUs () {
  return (
    <div>
      <h1> About Aviation Payments </h1>

      <div>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>

      <div>
        <h2>Our Team</h2>
      </div>
    </div>
  );
};

export default AboutUs;
