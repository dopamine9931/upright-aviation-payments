import React, { Routes, Route } from "react";
import InfoSection from "../components/infosection.jsx";
import Solutions from "../components/solutions/solutioncards.jsx";
import FormlessEmbed from "../components/formlessai";
import Contactusmini from "../components/contactusmini";
import TestimonialSlider from "../components/testimonialslider.jsx";

function Homepage() {
  return (
    <div className="landing-page">

      <header className="header">Aviation Payments</header>


      <main>
        <InfoSection />

        <Solutions />

        <section id="about" className="about"></section>

        <FormlessEmbed />

        <TestimonialSlider />

        <Contactusmini />
      </main>
    </div>
  );
}

export default Homepage;

