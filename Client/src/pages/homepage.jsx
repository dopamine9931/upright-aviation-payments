import React, { Routes, Route } from "react";
import LeadCapture from "../components/leadCapture";
import FormlessEmbed from "../components/formlessai";
import Contactusmini from "../components/contactusmini";
import Testimoanials from "../components/testimoanials";

function Homepage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">Aviation Payments</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="home">
          <h1>Welcome to Aviation Payments</h1>
          <p>lorem ipsum</p>
          <LeadCapture isModal={true} />
        </section>

        <section id="services" className="services">
          <h2>Our Services</h2>
          // ! Need to create service grid/array -LE
          <div className="service-grid">
            <div className="consulting">
              <h3>Solutions Consulting</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            </div>
            <div className="merchant-services">
              <h3>Merchant Services</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="connectivity">
              <h3>Gateway Connectivity</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="pos-services">
              <h3>Point-of-Sale Solutions</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="atm-services">
              <h3>ATM Solutions</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
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
        <Contactusmini />
      </main>

    </div>
  );
}

export default Homepage;

