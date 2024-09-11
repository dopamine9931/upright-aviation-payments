import React from "react";
import AboutUsHero from "../components/aboutus/aboutusHero";
import MeetOurTeam from "../components/aboutus/aboutusTeam";
import FormlessEmbed from "../components/formlessai";
import ContactUsMini from "../components/contactusmini";
function AboutUs () {
  return (
    <>
    <AboutUsHero />
    <MeetOurTeam />
    <FormlessEmbed />
    <ContactUsMini />
    </>
  );
}

export default AboutUs;
