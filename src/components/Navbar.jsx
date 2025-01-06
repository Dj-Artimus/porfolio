import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "../app/globals.css";
import { FaHome, FaLaptopCode, FaMoon, FaMusic } from "react-icons/fa";
import { FaPerson, FaUserTie, FaWandMagicSparkles } from "react-icons/fa6";
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
    <nav
      className={`w-full text-black dark:text-white lg:w-fit fixed right-0 bottom-0 lg:bottom-auto lg:top-0 z-50 border border-gray-600 flex flex-col items-center dark:bg-black bg-opacity-50 lg:bg-opacity-5 backdrop-blur-xl rounded-t-[3vw] lg:rounded-full transition-transform duration-300 lg:-translate-x-[12vw] ${
        isVisible
          ? "translate-y-0 lg:translate-y-[0.9vh]"
          : " translate-y-full lg:-translate-y-full"
      }`}
    >
      <div className="flex gap-[1vw] items-center px-[1vw] w-full lg:w-fit justify-between">
        {sections.map((section) => (
          <Link
            key={section.name}
            activeClass="text-sky-500 underline underline-offset-4"
            to={section.name}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() =>
              section.name === "settings" && setIsSettingsOpen(!isSettingsOpen)
            }
            className="cursor-pointer hover:text-sky-400 text-[3vw] p-[1.5vw] lg:p-0 lg:py-[0.3vh] lg:text-[1.2vw] flex flex-col gap-[0.4vw] items-center transition-all duration-300"
          >
            <span className="text-[6vw] lg:hidden">{section.icon}</span>
            {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
          </Link>
        ))}
        <div className="relative">
          {isSettingsOpen && (
            <div
              ref={settingsRef}
              className="absolute right-0 bottom-[4vh] lg:bottom-auto lg:top-[1.2vh] mt-2 w-[45vw] lg:w-[16vw] bg-white dark:bg-gray-900 border border-gray-700 dark:border-gray-300 rounded-lg shadow-lg p-[2vw] lg:p-[1.2vw]"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-[2vw] lg:gap-[1vw] items-center text-[5.5vw] lg:text-[1.4vw] font-bold">
                  <LuSettings2 />
                  <h2 className="">Settings</h2>
                </div>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 lg:text-[1.9vw] text-[7vw]"
                >
                  <IoClose />
                </button>
              </div>
              <div className="flex items-center gap-[2vw] lg:gap-[1vw] mb-[2vh]">
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
              <div className="flex items-center gap-[2vw] lg:gap-[1vw]">
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
                  handleDiameter={20}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
