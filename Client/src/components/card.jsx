import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const Card = () => (
  <Card
  
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="http://placekitten.com/g/200/300" />}
  >
    <Meta title="title placeholder" description="insert website" />
  </Card>
);

export default Card;
