import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutus.jsx";
import MerchantServices from "./pages/merchantservices.jsx";
import Gateway from "./pages/gateway.jsx";
import FuelCardSolutions from "./pages/fuelcard.jsx";
import ATMSolutions from "./pages/atmsolutions.jsx";
import ACHSolutions from "./pages/achsolutions.jsx";
import ContactUs from "./pages/contactus.jsx";
import { ApiKeyProvider } from "./context/apiKeyContext.jsx";
import OurSolutions from "./pages/solutionsPage.jsx";
import Homepage from "./pages/homepage.jsx";
import "./App.css";
import { ConfigProvider } from "antd";
import AdminPage from "./pages/adminPage.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import BlogPage from "./pages/blog.jsx";
import LegalInfo from "./pages/legalInfo.jsx";

function App() {
  return (
    <ApiKeyProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#787878",
            colorBgContainer: "#141414",
            colorText: "#f3f3f3",
            colorIcon: "#ffffff",
          },
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/solutionsPage" element={<OurSolutions />} />
            <Route path="/merchantservices" element={<MerchantServices />} />
            <Route path="/gateway" element={<Gateway />} />
            <Route path="/fuelcard" element={<FuelCardSolutions />} />
            <Route path="/atmsolutions" element={<ATMSolutions />} />
            <Route path="/achsolutions" element={<ACHSolutions />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/legal" element={<LegalInfo />} />
          </Routes>
        </Router>
        <Footer />
      </ConfigProvider>
    </ApiKeyProvider>
  );
}

export default App;
