import React from "react";
import LegalInfoSec from "./legalInfoSec"; // Reusable section component

const PrivPolicy = () => {
  return (
    <LegalInfoSec
      title="Privacy Policy"
      content={`At Aviation Payments, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal data when you visit our website or use our services.

**1. Data Collection:**
We collect personal information such as your name, email address, phone number, and payment details when you provide them voluntarily. This data is collected through forms on our website, during transactions, or when you communicate with us.

**2. Use of Data:**
The personal data you provide is used to:
- Process transactions and provide services.
- Send you relevant updates or promotional materials.
- Improve the overall user experience of our website.
- Ensure security and prevent fraud.

**3. Data Sharing:**
We do not sell or share your personal data with third parties, except:
- When required by law.
- With trusted service providers who assist us in processing your data.

**4. Data Security:**
We implement security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no online transmission is 100% secure, and we cannot guarantee absolute security.

**5. Your Rights:**
You have the right to access, update, or delete your personal information. If you wish to exercise any of these rights, please contact us.

By using our website, you agree to the collection and use of your personal data as outlined in this Privacy Policy. For further inquiries, feel free to contact us.`}
      imageUrl="/privacypolicy.webp" // Path to your privacy policy image
      imagePosition="right" // Image on the right, text on the left
    />
  );
};

export default PrivPolicy;
