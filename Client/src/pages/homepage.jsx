import React, { Routes, Route } from "react";
import InfoSection from "../components/infosection.jsx";
import Solutions from "../components/solutions/solutioncards.jsx";
import FormlessEmbed from "../components/formlessai";
import Contactusmini from "../components/contactusmini";
import Testimoanials from "../components/testimoanials";
import TestimonialSlider from "../components/testimonialslider.jsx";



function Homepage() {
  return (
    
    <div className="landing-page">

      <header >
          
        Aviation Payments
                
      </header>

      <main>
        
        <InfoSection />

        <Solutions />


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

