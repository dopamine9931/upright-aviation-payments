import React, {   createBrowserRouter,
  createRoutesFromElements,Routes, Route } from "react-router-dom";
import Home from "./pages/homepage.jsx";
import AboutUs from "./pages/aboutus.jsx";
import { Button } from "antd"; //add an import call on your components pulled from antd (in your component.jsx)
//adding a button to test, delete in future version
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
        <Button type="primary">This uses antd</Button>
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

export default App;
