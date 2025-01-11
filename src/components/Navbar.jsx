import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "../app/globals.css";
import { FaLaptopCode, FaMoon, FaMusic } from "react-icons/fa";
import { FaUserTie, FaWandMagicSparkles } from "react-icons/fa6";
import { BiSolidHomeHeart } from "react-icons/bi";
import { LuSettings2 } from "react-icons/lu";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import ReactSwitch from "react-switch";
import { IoClose } from "react-icons/io5";

const Navbar = ({ onThemeToggle, isDarkMode, onMusicToggle, isMusicOn }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setIsSettingsOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      document.addEventListener("mousedown", handleClickOutside);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [lastScrollY]);

  const sections = [
    { name: "home", icon: <BiSolidHomeHeart /> },
    { name: "skills", icon: <FaWandMagicSparkles /> },
    { name: "projects", icon: <FaLaptopCode /> },
    { name: "about", icon: <FaUserTie /> },
    { name: "contact", icon: <HiChatBubbleLeftRight /> },
    { name: "settings", icon: <LuSettings2 /> },
  ];

  return (
    <div className="fixed right-0 bottom-0 lg:bottom-auto lg:top-0 z-50 w-full flex justify-center pointer-events-none">
      <nav
        className={`w-full lg:max-w-6xl text-black dark:text-white flex sm:justify-center lg:justify-end lg:pe-14 transition-transform duration-300 ${
          isVisible
            ? "translate-y-0 lg:translate-y-[6px]"
            : " translate-y-full lg:-translate-y-full"
        } `}
      >
        <div className="flex items-center w-full sm:w-fit justify-around border border-gray-600 dark:bg-black dark:bg-opacity-30 lg:bg-opacity-5 backdrop-blur-xl rounded-t-2xl lg:rounded-full pointer-events-auto">
          {sections.map((section) => (
            <Link
              key={section.name}
              activeClass="text-sky-500 underline underline-offset-4"
              to={section.name}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() =>
                section.name === "settings" &&
                setIsSettingsOpen(!isSettingsOpen)
              }
              className="cursor-pointer w-full hover:text-sky-400 text-xs py-2 p-1 sm:px-3 lg:py-1 lg:text-base flex flex-col gap-1 items-center bor der transition-all duration-300"
            >
              <span className="text-2xl lg:hidden">{section.icon}</span>
              {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
            </Link>
          ))}
          <div className="relative">
            {isSettingsOpen && (
              <div
                ref={settingsRef}
                className="absolute right-2 bottom-10 lg:bottom-auto lg:top-3 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-700 dark:border-gray-300 rounded-lg shadow-lg p-3"
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex gap-3 items-center text-lg font-bold">
                    <LuSettings2 />
                    <h2 className="">Settings</h2>
                  </div>
                  <button
                    onClick={() => setIsSettingsOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
                  >
                    <IoClose />
                  </button>
                </div>
                <div className="flex items-center gap-4 my-3">
                  <FaMoon className="text-gray-500" />
                  <span>Dark Mode</span>
                  <ReactSwitch
                    onChange={onThemeToggle}
                    checked={isDarkMode}
                    onColor="#3b82f6" // Tailwind's blue-500 color
                    offColor="#ccc"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={20}
                    width={40}
                    handleDiameter={16}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <FaMusic className="text-gray-500" />
                  <span>Music</span>
                  <ReactSwitch
                    onChange={onMusicToggle}
                    checked={isMusicOn}
                    onColor="#3b82f6" // Tailwind's blue-500 color
                    offColor="#ccc"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={20}
                    width={40}
                    handleDiameter={16}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
