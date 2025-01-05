"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightSection from "@/components/HighlightSection";
import TechStackCarousel from "@/components/TechStackCorousel";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Projects from "@/components/Projects";
import SkillSectionEnhanced from "@/components/SkillsSection";
import HomeSection from "@/components/HomeSection";
import Logo from "@/components/Logo";

const Home = () => {
  const [isDark, setDark] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        <HeroSection setIsLoading={setIsLoading} isDark={isDark} isMusicOn={isMusicOn} />
        <TechStackCarousel />
        {/* <HomeSection /> */}
        {/* <HighlightSection /> */}
        <CallToAction isDark={isDark} />
        <Projects />
        <AboutSection isDark={isDark} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
