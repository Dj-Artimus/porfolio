import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlLogo = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 20) {
        // if scroll down hide the logo
        setIsVisible(false);
      } else {
        // if scroll up show the logo
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlLogo);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlLogo);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`fixed h-fit w-fit z-50 right-0 top-0 sm:right-auto sm:left-0 transition-all duration-500 ${
        isVisible
          ? " -translate-x-[6vw] translate-y-[5vh] text-[11vw] rotate-6 sm:-rotate-6 sm:translate-x-[7vw] sm:translate-y-[8vh] lg:translate-x-[12vw] lg:text-[3.5vw]"
          : " text-[5vw] -translate-y-0 -translate-x-[5vw] sm:translate-x-[5vw] lg:text-[2vw] lg:translate-x-[9vw] rotate-0"
      }`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        className="w-fit font-extrabold dark:text-blue-500 text-blue-700 font-dancingScript bor der rounded-full leading-none"
      >
        DjArtimus
      </motion.h1>
    </div>
  );
};

export default Logo;
