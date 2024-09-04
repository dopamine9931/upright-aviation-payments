import React, { useEffect } from "react";

const FormlessChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://formless.ai/c/lyGxYC4U26KJ";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>{/* The chatbot will be automatically rendered by the script */}</div>
  );
};

export default FormlessChatbot;
