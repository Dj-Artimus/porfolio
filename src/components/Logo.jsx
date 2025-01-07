import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlLogo = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 30) {
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
      className={`w-full md:w-fit sticky h-0 xl:max-w-6xl z-50 right-0 top-0 2xl:mx-auto flex justify-end md:justify-start 2xl:w-auto transition-all duration-500 ${
        isVisible
          ? " -translate-x-4 translate-y-6 sm1:-translate-x-20 md:translate-x-20 lg:translate-x-18 lg:translate-y-16 xl:translate-x-28 2xl:translate-x-8 2xl:translate-y-5 text-[11vw] rotate-6 md:-rotate-6 sm1:text-5xl md:text-6xl lg:text-5xl"
          : "text-xl xs2:text-2xl rotate-0 -translate-x-4 sm1:-translate-x-20 md:translate-x-20 lg:translate-x-16 xl:translate-x-28 2xl:translate-x-10"
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
