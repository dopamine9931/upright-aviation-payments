import React, { useEffect } from "react";

const FormlessEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.formless.ai/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
        // needed to clean up script on dismount
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <iframe
      src="https://formless.ai/c/AqbDfpEbY2B9"
      className="formless-embed"
      width="100%"
      height="650px"
      loading="lazy"
      allow="microphone"
      style={{ border: 0, display: "block" }}
    ></iframe>
  );
};

export default FormlessEmbed;
