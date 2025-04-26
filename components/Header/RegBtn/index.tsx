import AnimatedButton from "@/components/AnimatedButton";
import React from "react";

const RegButton = () => {
  return (
    <AnimatedButton
      text="Register Closed"
      className="flex w-fit items-center gap-x-2 rounded-full px-4 py-3 cursor-not-allowed"
      id="register-button"
    />
  );
};

export default RegButton;
