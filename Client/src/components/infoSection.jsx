import React from "react";
import "../components/component-css-files/infoSection.css";

const InfoSection = ({ subtitle, title, description }) => {
  return (
    <div className="info-section">
      <h4 className="info-subtitle">{subtitle}</h4>
      <h1 className="info-title">{title}</h1>
      <p className="info-description">{description}</p>
    </div>
  );
};

export default InfoSection;
