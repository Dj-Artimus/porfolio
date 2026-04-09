import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "../app/globals.css";
import { FaLaptopCode, FaMoon, FaMusic, FaBriefcase } from "react-icons/fa";
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
