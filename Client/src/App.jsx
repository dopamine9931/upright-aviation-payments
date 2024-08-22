import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutus.jsx";
import MerchantServices from "./pages/merchantservices.jsx";
import Gateway from "./pages/gateway.jsx";
import FuelCardSolutions from "./pages/fuelcard.jsx";
import ATMSolutions from "./pages/atmsolutions.jsx";
import ACHSolutions from "./pages/achsolutions.jsx";
import ContactUs from "./pages/constactus.jsx";
import { ApiKeyProvider } from "./context/apiKeyContext.jsx";
import Homepage from "./pages/homepage.jsx";

import "./App.css";
import { ConfigProvider } from "antd";
import AdminPage from "./components/adminPage.jsx";

function App() {
  return (
<<<<<<< HEAD
  <ApiKeyProvider>
    <Router>
      <Routes>
< HEAD
        <><Route path="/" element={<Home />} /><Route path="/merchantservices" element={<MerchantServices />} /><Route path="/gateway" element={<GatewayConnectivity />} /><Route path="/fuelcard" element={<FuelCardSolutions />} /><Route path="/atmsolutions" element={<ATMSolutions />} /><Route path="/achsolutions" element={<ACHSolutions />} /><Route path="/contactus" element={<ContactUs />} /><Route path="/aboutus" element={<AboutUs />} /></>
      </Routes>
  </Router>
</ApiKeyProvider>
=======
    <ApiKeyProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#787878",
            colorBgContainer: "#141414",
            colorText: "#f3f3f3",
          },
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/merchantservices" element={<MerchantServices />} />
            <Route path="/gateway" element={<Gateway />} />
            <Route path="/fuelcard" element={<FuelCardSolutions />} />
            <Route path="/atmsolutions" element={<ATMSolutions />} />
            <Route path="/achsolutions" element={<ACHSolutions />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </ApiKeyProvider>
>>>>>>> c2c6ec95937c4558049d0e184b2547a73b2b878d
  );
}

export default App;
