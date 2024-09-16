  // Footer
  // const Footer = () => {
  //   return (
  //     <footer>
  //           <p>&copy; 2024 Aviation Payments. Loren Ipsum etc... </p>
  //       </footer>
  //   );
  // };

  // export default Footer;


import React from "react";
import logo from "/avipay_logo_nobackground.png";
import "./component-css-files/footer.css"; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </div>
        <nav className="footer-nav">
          <a href="/aboutus">About Us / Contact</a>
          <a href="/solutionsPage">Solutions</a>
          {/* <a href="/contact">Contact Us</a>
          <a href="/faq">FAQ</a> */}
          <a href="/blog">Blog</a>
        </nav>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>&copy; 2024 Aviation Payments. All rights reserved.</p>
        <nav className="footer-bottom-nav">
          <a href="/legal/">Terms and Conditions</a>
          {/* <a href="/legal/#privacy-policy">Privacy Policy</a>
          <a href="/legal/#legal-info">Terms and Conditions</a>
          <a href="/legal/#cookie-policy">Cookie Policy</a> */}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;