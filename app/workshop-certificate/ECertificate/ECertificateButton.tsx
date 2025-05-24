import React from "react";
import AnimatedButton from "../../../components/AnimatedButton";

const ECertificateButton = () => {
  return (
    <AnimatedButton
      text="Get Your E-Certificate"
      className="bg-primary-400 background-glow inline-block w-fit rounded-2xl px-4 py-2"
      id="e-certificate-button"
      to="/initialround-certificate"
    ></AnimatedButton>
  );
};

export default ECertificateButton;
