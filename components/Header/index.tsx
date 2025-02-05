import { NAV_LINKS } from "@/libs/data";
import NavigationTarget from "./NavigationTarget";

const Header = () => {
  return (
    <header className="  text-white container mx-auto p-4 flex justify-between items-center">
      <h1>logo</h1>
      <div className=" border px-4 py-1.5">
        <ul className="flex space-x-4">
          {NAV_LINKS.map((link) => (
            <NavigationTarget key={link.href} {...link} />
          ))}
        </ul>
      </div>
      <button>Register now</button>
    </header>
  );
};

export default Header;
