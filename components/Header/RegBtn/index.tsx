import AnimatedButton from "@/components/AnimatedButton";
import { BsArrowUpRightCircle } from "react-icons/bs";
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
