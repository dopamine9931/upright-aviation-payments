import React, { useEffect } from "react";
import InfoSection from "../components/infosection.jsx";
import Solutions from "../components/solutions/solutioncards.jsx";
import FormlessEmbed from "../components/formlessai";
import Contactusmini from "../components/contactusmini";
import Testimoanials from "../components/testimoanials";
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

      <header >
          
        Aviation Payments
                
      </header>

      <main>
        <CarouselHeader />
        <InfoSection />

        <section id="solutions">
          <Solutions />
        </section>

        <section id="about" className="about">
          <h2>About Us</h2>
          <p>
            Aviation Payments is about introducing and promoting a Fintech
            company that specializes in financial technology solutions tailored
            for the aviation industry. The goal of the project is to
            revolutionize Fintech for aviation by providing cutting-edge
            services that streamline and enhance financial transactions.{" "}
          </p>
        </section>

        <FormlessEmbed />
        
        <Testimoanials />
        
        <TestimonialSlider />

        <Contactusmini />

      </main>

    </div>
  );
}

export default Homepage;

