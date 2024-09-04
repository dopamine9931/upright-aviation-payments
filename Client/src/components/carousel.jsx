import React from "react";
import { Carousel } from "antd";


const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Carousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src="/womanbywindow.jpg" alt="Woman by window" />
      </div>
      <div>
        <img src="/propeller.jpg" alt="Propeller" />
      </div>
      <div>
        <img src="/banwsideview.jpg" alt="Side view of a plane" />
      </div>
      <div>
        <img src="/bandwfrontview.jpg" alt="Front view of a plane" />
      </div>
    </Carousel>
  );
};
  
export default Carousel;
    