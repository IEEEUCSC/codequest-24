import React from "react";
import AnimatedButton from "../AnimatedButton";
const ECertificate = () => {
  return(
    <AnimatedButton
      text="Get Your E-Certificate"
      className="bg-primary-400 background-glow inline-block rounded-2xl px-4 py-2"
      id="register-button"
      to="/ECertificate"
    >
    </AnimatedButton>
  );
};

export default ECertificate;
