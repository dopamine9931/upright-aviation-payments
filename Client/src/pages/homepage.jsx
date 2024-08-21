import React, { Routes, Route } from "react";
import LeadCapture from "../components/leadCapture";
import { Button } from "antd"; //add an import call on your components pulled from antd (in your component.jsx)
//adding a button to test, delete in future version

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

        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          // ! Need to confirm line 123 is correct for lead capture -LE
          <LeadCapture isModal={false} />
        </section>
      </main>

      <footer className="footer">
        <p>Lorem Ipsum</p>
      </footer>
    </div>
  );
}

export default Homepage;
