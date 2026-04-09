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
import WorkExperience from "@/components/WorkExperience";
import Logo from "@/components/Logo";
import LoadingModal from "@/components/LoadingModal";
import HighlightSection from "@/components/HighlightSection";
import ImageViewer from "@/components/ImageViewer";

const Home = () => {
  const [isDark, setDark] = useState(true);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const audioRef = useRef(null);
  const [imgViewerSources, setImgViewerSources] = useState([]);
  const [imgViewerIndex, setImgViewerIndex] = useState(0);

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   if (storedTheme) {
  //     setDark(storedTheme === "dark");
  //   } else {
  //     const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
