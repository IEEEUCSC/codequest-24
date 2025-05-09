import React from "react";
import AnimatedButton from "../AnimatedButton";

const ECertificateButton = () => {
  return (
    <AnimatedButton
      text="Get Your E-Certificate"
      className="bg-primary-400 background-glow inline-block w-fit rounded-2xl px-4 py-2"
      id="e-certificate-button"
      to="/ECertificate"
    ></AnimatedButton>
  );
};

export default ECertificateButton;
