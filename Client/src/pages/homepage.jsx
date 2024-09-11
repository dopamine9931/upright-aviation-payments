import React, { useEffect } from "react";
import InfoSection from "../components/infosection.jsx";
import Solutions from "../components/solutions/solutioncards.jsx";
import FormlessEmbed from "../components/formlessai";
import Contactusmini from "../components/contactusmini";
import TestimonialSlider from "../components/testimonialslider.jsx";
import CarouselHeader from "../components/carousel.jsx";

function Homepage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div className="landing-page">
      <main>
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
