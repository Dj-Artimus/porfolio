import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../app/globals.css";

const Navbar = ({ onThemeToggle, isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsVisible(false);
      } else {
        // if scroll up show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed hidden right-[12vw] lg:top-[0.3vh] 2xl:top-[1vh] z-50 border h-[4vh] lg:flex flex-col items-center bg-black bg-opacity-5 backdrop-blur-xl rounded-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex gap-[2vh] items-center px-[1vw]">
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <Link
            key={section}
            activeClass="text-primary"
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-sky-200 hover:font-bold text-[1.2vw] hover:text-[1.3vw] underline-offset-4 hover:underline transition-all duration-300"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
