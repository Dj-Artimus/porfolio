import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";
import "../app/globals.css";

const Navbar = ({ onThemeToggle, isDarkMode }) => (
  <nav className="hidden fixed right-[12vw] lg:top-[0.3vh] 2xl:top-[1vh] z-50 bor der h-[4vh] lg:flex flex-col items-center bg-black bg-opacity-5 backdrop-blur-xl rounded-full">
    <div className="flex gap-[2vh] items-center px-[1vw]">
      {["home", "about", "skills", "projects", "contact"].map((section) => (
        <Link
          key={section}
          activeClass="text-primary"
          to={section}
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-sky-200 hover:font-bold text-[1.2vw] hover:text-[1.3vw] underline-offset-4  hover:un derline transition-all duration-300"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}
    </div>
  </nav>
);

export default Navbar;
