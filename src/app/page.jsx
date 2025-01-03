"use client";

import Head from "next/head";
import React, { useState } from "react";
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

  const toggleTheme = () => setDark(!isDark);

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <Head>
        <title>Pratik {"<DjArtimus>"} | Full-Stack Developer</title>
        <meta
          name="description"
          content="Pratik <DjArtimus> is a Full-Stack Developer skilled in React, Next.js, Node.js, Express.js, SQL, PostGreSQL and more. Check out Pratik's work and skills."
        />
      </Head>
      <Logo />
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDark} />
        <main>
          <HeroSection />
          {/* <HomeSection /> */}
          <HighlightSection />
          <CallToAction />
          <TechStackCarousel />
          <Testimonials />
          <ProjectsSection />
          <Projects />
          <SkillSectionEnhanced />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
    </div>
  );
};

export default Home;
