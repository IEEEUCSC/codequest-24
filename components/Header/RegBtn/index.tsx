import AnimatedButton from "@/components/AnimatedButton";
import React from "react";

const RegButton = () => {
  return (
    <AnimatedButton
      text="Registration Closed"
      className="flex w-fit cursor-not-allowed items-center gap-x-2 rounded-full px-4 py-3"
      id="register-button"
    />
  );
};

export default RegButton;
