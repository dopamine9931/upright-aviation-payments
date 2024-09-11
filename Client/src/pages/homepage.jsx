import React, { useEffect } from "react";
import InfoSection from "../components/infosection.jsx";
import Solutions from "../components/solutions/solutioncards.jsx";
import FormlessEmbed from "../components/formlessai";
import Contactusmini from "../components/contactusmini";
import TestimonialSlider from "../components/testimonialslider.jsx";
import CarouselHeader from "../components/carousel.jsx";

function Homepage() {

  return (
    <div className="landing-page">
      <main style={{ paddingTop: "20px" }}>
        <CarouselHeader />

        <InfoSection />

        <Solutions />

        <FormlessEmbed />

        <TestimonialSlider />

        <Contactusmini />
      </main>
    </div>
  );
}

export default Homepage;
