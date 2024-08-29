import React from "react";
import ThreeFeatures from "../threeFeatures";

const GatewayFeatures = () => {
  const features = [
    {
      title: "Secure Payment Processing",
      description:
        "Our Merchant Services offer secure payment processing solutions to protect your transactions.",
      buttons: [
        { label: "Learn More", link: "/learn-more" },
      ],
    },
    {
      title: "Fraud Protection",
      description:
        "We provide robust fraud protection measures to safeguard your business against fraudulent activities.",
      buttons: [
        { label: "Learn More", link: "/learn-more" },
      ],
    },
    {
      title: "Seamless Integration",
      description:
        "Our Merchant Services seamlessly integrate with your existing systems for a hassle-free experience.",
      buttons: [
        { label: "Learn More", link: "/learn-more" },
      ],
    },
  ];

  return (
    <div>
      <ThreeFeatures features={features} />
    </div>
  );
};

export default GatewayFeatures;
