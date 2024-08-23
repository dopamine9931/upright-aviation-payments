import React from "react";
import { Card } from "antd";

function Card() {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src="http://placekitten.com/g/200/300" />}
    >
      <Meta title="placeholder" description="www.instagram.com" />
    </Card>
  );
}

export default Card;
