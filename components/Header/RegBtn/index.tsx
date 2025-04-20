import AnimatedButton from "@/components/AnimatedButton";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
const RegButton = () => {
  return (
    <AnimatedButton
      text="Register Now"
      className="flex w-fit items-center gap-x-2 rounded-full px-4 py-3"
      id="register-button"
      to="https://tally.so/r/wkrR1o"
    >
      <BsArrowUpRightCircle className="text-[20px]" />
    </AnimatedButton>
  );
};

export default RegButton;
