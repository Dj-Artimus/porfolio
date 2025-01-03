import React, { useState, useEffect } from "react";

const Logo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlLogo = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY || window.scrollY > 20) {
        console.log('scroll', window.scrollY)
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
      className={`fixed h-fit w-fit z-50 right-[8vw] top-[9vw] lg:top-[10vh] sm:right-auto sm:left-[12vw] transition-all duration-1000 ${
        isVisible ? "translate-y-0 text-[10vw]" : " text-[7vw] -translate-y-[4vh] sm:-translate-y-[8vh]"
      }`}
    >
      <h1 className="lg:text-[3vw] w-fit font-extrabold text-blue-500 font-dancingScript rotate-6 sm:-rotate-12 bor der backdrop-blur-xl p-2 rounded-full leading-none">
        DjArtimus
      </h1>
    </div>
  );
};

export default Logo;
