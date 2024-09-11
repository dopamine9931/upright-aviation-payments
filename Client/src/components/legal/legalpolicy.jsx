import React from "react";
import LegalInfoSec from "./legalInfoSec"; // Assuming the reusable section is named LegalInfoSec

const LegalPolicy = () => {
  return (
    <LegalInfoSec
      title="Legal Policy"
      content={`This website and all its content are provided for informational purposes only. While we make every effort to ensure that the information on this website is accurate and up to date, we do not guarantee its accuracy or completeness.

All trademarks, service marks, trade names, and logos used on this website are the property of their respective owners. You may not reproduce, distribute, or display any part of this website without prior written consent from the appropriate parties.

We are not responsible for any loss or damage resulting from the use of this website, including but not limited to the loss of data, profits, or business. The legal information provided here does not constitute legal advice, and you should consult with a qualified legal professional for specific legal guidance.`}
      imageUrl="/legalpolicy.webp" // Path to your legal information image
      imagePosition="left" // Image on the right, text on the left
    />
  );
};

export default LegalPolicy;
