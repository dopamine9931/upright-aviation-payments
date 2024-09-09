
import React from "react";
import { Carousel } from "antd";

const { Title } = Typography; // For legibility -LE

const carouselStyle = {
  width: "15%", 
  margin: "20px auto", 
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#000",
  borderRadius: "10px",
  padding: "20px",
  overflow: "hidden", // Keep images from overlapping other elements -LE
};

const imageStyle = {
  width: "100%",
  height: "200px", // Adjust height as needed -LE
  objectFit: "cover", // Keep images from stretching -LE
}

const textStyle = {
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const Carousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src="/womanbywindow.jpg" alt="Woman by window" style={imageStyle} />
      </div>
      <div>
        <img src="/propeller.jpg" alt="Propeller" style={imageStyle} />
      </div>
      <div>
        <img src="/banwsideview.jpg" alt="Side view of a plane" style={imageStyle} />
      </div>
      <div>
        <img src="/bandwfrontview.jpg" alt="Front view of a plane" style={imageStyle} />
      </div>
    </Carousel>
  );
};
  
export default Carousel;
