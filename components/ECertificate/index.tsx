import React from "react";
import AnimatedButton from "../AnimatedButton";
const ECertificate = () => {
  return(
    <AnimatedButton
      text="Get Your E-Certificate"
      className="flex w-fit items-center gap-x-2 rounded-full px-4 py-3"
      id="register-button"
      to="/ECertificate"
    >
    </AnimatedButton>
  );
};

export default ECertificate;
