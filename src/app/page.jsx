"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackCarousel from "@/components/TechStackCorousel";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Projects from "@/components/Projects";
import Logo from "@/components/Logo";
import LoadingModal from "@/components/LoadingModal";

const Home = () => {
  const [isDark, setDark] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDark(storedTheme === "dark");
    } else {
      const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(userPrefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  const toggleMusic = () => { setIsMusicOn((prev) => !prev); };

    // Control music playback when isMusicOn changes
    useEffect(() => {
      if (audioRef.current) {
        if (isMusicOn) {
          audioRef.current.play().catch((err) => {
            console.error("Failed to play audio:", err);
          });
        } else {
          audioRef.current.pause();
        }
      }
    }, [isMusicOn]);

  
  const assets = [
    `./videos/SayingHi_lightMode.mp4`,
    `./videos/PlayingGuitar_lightMode.mp4`,
    `./videos/WorkingOnLaptop_lightMode.mp4`,
    `./videos/TalkingAbout_lightMode.mp4`,
    `./videos/SayingHi_darkMode.mp4`,
    `./videos/PlayingGuitar_darkMode.mp4`,
    `./videos/WorkingOnLaptop_darkMode.mp4`,
    `./videos/TalkingAbout_darkMode.mp4`,
    `./audio/AC_DC_BackInBlack.m4a`,
    "./images/helloWorld.gif",
    "./images/responsiveDesigner.gif",
    "./images/continuousDev.gif",
    "./images/timeMoney.gif",
    "./images/ideasToReality.gif",
  ];

  useEffect(() => {
    const preloadAssets = async () => {
      let loadedCount = 0;
  
      const updateProgress = () => {
        loadedCount++;
        const percentage = Math.round((loadedCount / assets.length) * 100);
        setLoadingProgress(percentage);
      };
  
      const promises = assets.map((asset) => {
        return new Promise((resolve) => {
          const isVideo = asset.endsWith(".mp4");
          const element = isVideo
            ? document.createElement("video")
            : new Image();
          element.src = asset;
  
          element.onload = () => {
            updateProgress();
            resolve();
          };
  
          element.onerror = () => {
            updateProgress(); // Count failed assets as loaded to maintain progress
            resolve(); // Always resolve to avoid breaking Promise.all
          };
  
          if (isVideo) {
            element.onloadeddata = () => {
              updateProgress();
              resolve();
            };
          }
        });
      });
  
      await Promise.all(promises);
      setIsLoading(false); // Ensure this runs after all promises resolve
    };
  
    preloadAssets();
  }, []);

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <Head>
        <title>Pratik {"<DjArtimus>"} | Full-Stack Developer</title>
        <meta
          name="description"
          content="Pratik <DjArtimus> is a Full-Stack Developer skilled in React, Next.js, Node.js, Express.js, SQL, PostGreSQL and more. Check out Pratik's work and skills."
        />
      </Head>
      <Navbar onThemeToggle={toggleTheme} isDarkMode={isDark} onMusicToggle={toggleMusic} isMusicOn={isMusicOn} />
      <main className="text-black dark:text-white" >
        <Logo />
        <HeroSection isDark={isDark} isMusicOn={isMusicOn} />
        <TechStackCarousel />
        {/* <HomeSection /> */}
        {/* <HighlightSection /> */}
        <CallToAction isDark={isDark} />
        <Projects />
        <AboutSection isDark={isDark} />
        <ContactSection />
        <LoadingModal isLoading={isLoading} setIsLoading={setIsLoading} loadingProgress={loadingProgress} isDarkMode={isDark} isMusicOn={isMusicOn} onMusicToggle={toggleMusic} onThemeToggle={toggleTheme} />
        <audio ref={audioRef} src="./audio/AC_DC_BackInBlack.m4a" preload="auto" controls={false} controlsList="nodownload" loop={true} className="hidden" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
