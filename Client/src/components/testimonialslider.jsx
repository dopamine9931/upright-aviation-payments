import React from "react";
import { Carousel } from "antd";

const testimonials = [
  {
    quote: "This product has completely changed my life for the better!",
    author: "John Doe",
    position: "CEO, ExampleCorp",
  },
  {
    quote:
      "The service was exceptional, and I highly recommend it to everyone.",
    author: "Jane Smith",
    position: "Marketing Manager, ExampleCo",
  },
  {
    quote: "Top-notch quality and fantastic customer support.",
    author: "Bob Johnson",
    position: "CTO, Tech Innovators",
  },
  {
    quote: "A game-changer in our industry, we couldn't be happier.",
    author: "Emily Davis",
    position: "Founder, StartupX",
  },
];

const contentStyle = {
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "40px",
  textAlign: "center",
  borderRadius: "10px",
  margin: "0 10px",
};

const quoteStyle = {
  fontSize: "1.5rem",
  fontStyle: "italic",
  marginBottom: "20px",
};

const authorStyle = {
  fontSize: "1rem",
  fontWeight: "bold",
  marginTop: "10px",
};

const positionStyle = {
  fontSize: "0.9rem",
  fontStyle: "normal",
  marginTop: "5px",
};

const TestimonialSlider = () => (
  <Carousel autoplay>
    {testimonials.map((testimonial, index) => (
      <div key={index}>
        <div style={contentStyle}>
          <p style={quoteStyle}>"{testimonial.quote}"</p>
          <p style={authorStyle}>- {testimonial.author}</p>
          <p style={positionStyle}>{testimonial.position}</p>
        </div>
      </div>
    ))}
  </Carousel>
);

export default TestimonialSlider;

