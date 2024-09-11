import React from "react";
import LegalInfoSec from "./legalInfoSec";

const CookiePolicy = () => {
  return (
    <LegalInfoSec
      title="Cookie Policy"
      content={`Our website uses cookies to enhance your experience. Cookies are small text files that are stored on your device when you visit our site. We use cookies to provide essential functionality, analyze site traffic, and personalize content.

By using our site, you agree to the use of cookies as outlined in this policy. You may disable cookies through your browser settings, but doing so may affect the functionality of our website.

Types of cookies we use:
- **Essential Cookies**: These are necessary for the operation of our site.
- **Performance Cookies**: These help us understand how visitors interact with our site, such as the most visited pages.
- **Functionality Cookies**: These are used to recognize you when you return to our site and provide personalized content.
- **Advertising Cookies**: These cookies track your browsing habits to show relevant ads on other websites.

For more details on how we use cookies and how you can manage them, please refer to our full privacy policy.`}
      imageUrl="/monster_cookies.png"
      imagePosition="left" // Image on the left, text on the right
    />
  );
};

export default CookiePolicy;
