import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/homepage.jsx";
import AboutUs from "./pages/aboutus.jsx";
import LeadCapture from "./components/leadCapture";

// import './App.css'

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herchantservices" element={<MerchantServices />} />
        <Route path="/gateway" element={<GatewayConnectivity />} />
        <Route path="/fuelcard" element={<FuelCardSolutions />} />
        <Route path="/atmsolutions" element={<ATMSolutions />} />
        <Route path="/achsolutions" element={<ACHSolutions />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <>
        {/* example of how to use lead capture button or form on a page. this will be removed. import LeadCapture is needed on page */}
        <div style={{ padding: "20px" }}>
          {/* LeadCapture component used as a modal example */}
          <LeadCapture isModal={true} />

          {/* LeadCapture component used directly on the page example */}
          <LeadCapture isModal={false} />
        </div>
        {/* end of lead capture form / button example. */}
      </>
    </>
  );
}




// Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
    return (
        <nav className="navbar">
            <div className="logo">Aviation Payments</div>
            <div className="navbar-links ${isOpen ? 'open' : ''}">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact Us</a>
                <a href="#about">About Us</a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </nav>
    );
  };  
  // export default Navbar
  

  // Footer
  const Footer = () => {
    return (
      <footer>
            <p>&copy; 2024 Aviation Payments. Loren Ipsum etc... </p>
        </footer>
    );
  };


  // Landing page components

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">Aviation Payments</div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
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
          <p>Aviation Payments is about introducing and promoting a fintech company that specializes in financial 
            technology solutions tailored for the aviation industry. The goal of the project is to revolutionize fintech for 
            aviation by providing cutting-edge services that streamline and enhance financial transactions. </p>
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
};




export default App;
