import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // Already installed
import {
  HeroContentTemplate,
  HeroImageTemplate,
  HeroVideoTemplate,
} from "./HeroTemplates";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";

const HeroSection = ({ isDark, isMusicOn }) => {
  // const [isMusicOn, setIsMusicOn] = useState(false);
  const [isActionModelHover, setIsActionModelHover] = useState(false);
  const [isNameHover, setIsNameHover] = useState(false);
  const [currentHeroContent, setCurrentHeroContent] = useState(0);

  const HeroContent = useCallback(
    (isNameHover, setIsNameHover) => [
      {
        content: (
          <>
            <AnimatePresence mode="wait">
              <motion.h1
                key={"helloWorld"}
                className=" text-[7vw] xs3:text-3xl md:text-5xl lg:text-4xl font-bold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Hello World
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.h1
                key={"helloWorld"}
                className=" text-[15vw] xs3:text-6xl md:text-8xl lg:text-7xl xl:text-8xl font-bold leading-none my-1 md:my-3"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I'm{" "}
                <span
                  className="text-primary"
                  onMouseOver={() => {
                    setIsNameHover(true);
                  }}
                  onMouseLeave={() => {
                    setIsNameHover(false);
                  }}
                >
                  Pratik
                </span>
                {isNameHover && (
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    }}
                    className="block w-fit text-[9vw] xs3:text-4xl md:text-[57px] md:my-2 md:mb-6 lg:text-[43px] xl:text-[58px] text-gray-700 dark:text-gray-500"
                    onMouseOver={() => {
                      setIsNameHover(true);
                    }}
                    onMouseLeave={() => {
                      setIsNameHover(false);
                    }}
                  >
                    {"aka < DjArtimus >"}
                  </motion.span>
                )}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={"helloWorld"}
                className=" w-fit text-[7vw] xs3:text-[33px] md:text-5xl lg:text-4xl xl:text-5xl text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 hover:font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                a{" "}
                <Typewriter
                  words={[
                    "Full-Stack Developer",
                    "Front-End Developer",
                    "React Enthusiast",
                    "Next.js Developer",
                    "MERN Stack Developer",
                    "Software Innovator",
                    "Creative Thinker",
                    "Problem Solver",
                    // "Life-Long Learner",
                  ]}
                  loop
                />
              </motion.div>
            </AnimatePresence>
          </>
        ),
        image: (
          <HeroImageTemplate
            imageKey="helloWorld"
            src="./images/helloWorld.gif"
          />
        ),
      },
      {
        content: (
          <HeroContentTemplate
            key={"responsiveDesign"}
            sHeading="I craft"
            bHeading="Responsive"
            mHeading="Magic in Every Pixel"
          />
        ),
        image: (
          <HeroImageTemplate
            imageKey="responsiveDesign"
            src="./images/responsiveDesigner.gif"
          />
        ),
      },
      {
        content: (
          <HeroContentTemplate
            key={"continuousInnovation"}
            sHeading="Continuous"
            bHeading="Innovation"
            mHeading="in Design & Development"
          />
        ),
        image: (
          <HeroImageTemplate
            imageKey="continuousInnovation"
            src="./images/continuousDev.gif"
          />
        ),
      },
      {
        content: (
          <HeroContentTemplate
            key={"timeMoney"}
            sHeading="Respecting"
            bHeading="Your Time"
            mHeading="and Investment"
          />
        ),
        image: (
          <HeroImageTemplate
            imageKey="timeMoney"
            src="./images/timeMoney.gif"
          />
        ),
      },
      {
        content: (
          <HeroContentTemplate
            key={"ideatsToReality"}
            sHeading="Turning"
            bHeading="Ideas into"
            mHeading="Digital Reality"
          />
        ),
        image: (
          <img
            src="./images/ideasToReality.gif"
            alt="ideasToReality"
            className=" w-44 xs2:w-48 xs3:w-52 md:w-64 lg:w-52 aspect-[16/9] object-cover rounded-xl md:rounded-3xl dark:bg-gray-900 p-2 lg:p-[10px] lg:hover:p-2 transition-all duration-300"
          />
        ),
      },
    ],
    []
  );

  return (
    <section
      id="home"
      className={`w-full flex justify-center items-center bg-gray-100 dark:bg-gray-900 relative p-2 sm1:px-12 lg:p-11 bor der`}
    >
      <div className="w-full lg:max-w-6xl flex flex-col-reverse lg:flex-row justify-center items-center bg-white dark:bg-black rounded-b-3xl lg:rounded-[30px] shadow-sm shadow-gray-500 lg:shadow-gray-500 border-[3px] border-gray-600 overflow-hidden relative">
        {/* <Logo /> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className=" w-full lg:w-3/4 h-80 xs2:h-[390px] md:h-[450px] md1:h-[550px] lg:h-full px-1 flex justify-around lg:justify-center items-center bor der border-red-500 relative xl:overflow-hidden"
        >
          <div className="relative hidden xs2:w-96 xs3:w-60 xs:flex flex-shrink min-h-96 lg:justify-center items-center bor der-2 p-2">
            {isActionModelHover ? (
              <HeroVideoTemplate
                videoKey="sayingHi_darkMode"
                src={`./videos/SayingHi_${
                  isDark ? "darkMode" : "lightMode"
                }.mp4`}
                styles=" xs1:max-w-[180px] xs2:max-w-[220px] md1:scale-[1.3] lg:scale-100 lg:max-w-[280px] xl:max-w-72 bor der"
                loop={false}
              />
            ) : isMusicOn ? (
              <HeroVideoTemplate
                videoKey="playingGuitar_darkMode"
                src={`./videos/PlayingGuitar_${
                  isDark ? "darkMode" : "lightMode"
                }.mp4`}
                styles="scale-[1.35] xs1:max-w-[180px] xs1:scale-[1.55] xs2:scale-[1.8] md1:scale-[2.4] lg:scale-100 lg:max-w-[390px] xl:max-w-[410px] translate-x-7 xs2:translate-x-16 lg:translate-x-10 bor der"
                loop={true}
              />
            ) : (
              <HeroVideoTemplate
                videoKey="workingOnLaptop_darkMode"
                src={`./videos/WorkingOnLaptop_${
                  isDark ? "darkMode" : "lightMode"
                }.mp4`}
                styles=" scale-[1.04] xs1:max-w-[180px] xs2:scale-100 xs2:max-w-[230px] md1:scale-[1.3] lg:scale-100 lg:max-w-[280px] xl:max-w-[300px] translate-x-4  xs2:translate-x-6 lg:translate-x-10 bor der"
                loop={true}
              />
            )}
            <div
              className="bor der-4 w-20 h-[70%] xs2:h-[90%] md1:w-24 md1:h-[110%] lg:w-28 lg:h-[90%] rounded-full absolute left-[25%] xs2:left-[30%] xs3:left-[35%] md1:left-[28%] lg:left-auto"
              onMouseOver={() => setIsActionModelHover(true)}
              onMouseLeave={() => setIsActionModelHover(false)}
              onClick={() => {
                setIsActionModelHover(!isActionModelHover);
              }}
            ></div>
          </div>
          <motion.div
            className="lg:hidden flex flex-col flex-shrink-0 gap-3 sm:gap-4 justify-center w-40 md:w-60 h-full bord er-2 relative border-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="w-full flex flex-col justify-center items-center gap-3 md:gap-5 px-4">
              <a
                href="#projects"
                className="text-lg md:text-2xl w-full px-2 py-1 md:px-4 md:py-3 text-center border border-gray-900 dark:border-gray-200 rounded-xl hover:text-blue-600 dark:hover:text-blue-300 hover:font-bold hover:shadow-blue-500 inline-block hover:scale-110 font-semibold shadow-md transition-all duration-200 active:scale-100"
              >
                Explore <br /> My Work
              </a>
              <a
                href="#contact"
                className="text-lg md:text-2xl w-full px-2 py-1 md:px-4 md:py-3 text-center border border-gray-900 dark:border-gray-200 rounded-xl hover:text-blue-600 dark:hover:text-blue-300 hover:font-bold hover:shadow-blue-500 inline-block hover:scale-110 font-semibold shadow-md transition-all duration-200 active:scale-100"
              >
                Contact Me
              </a>
              <Link
                href={
                  "https://drive.google.com/file/d/1tfZankoER687X23j0JZ9BVZwov_wSYPj/view?usp=drivesdk"
                }
                target="_blank"
                className="text-lg md:text-2xl w-full px-2 py-1 md:px-4 md:py-3 text-center border border-gray-900 dark:border-gray-200 rounded-xl hover:text-blue-600 dark:hover:text-blue-300 hover:font-bold hover:shadow-blue-500 inline-block hover:scale-110 font-semibold shadow-md transition-all duration-200 active:scale-100"
              >
                Resume
              </Link>
            </div>
            <div className=" w-fit mx-auto grid grid-cols-2 gap-4 place-items-center bo rder ">
              <Link
                href="https://github.com/Dj-Artimus"
                target="_blank"
                className=" text-4xl md:text-6xl border border-gray-900 dark:border-gray-200 transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-125 font-semibold shadow-md transition-all active:scale-100"
              >
                <FaGithubSquare />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pratikpansare"
                target="_blank"
                className="text-4xl md:text-6xl border border-gray-900 dark:border-gray-200 transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-125 font-semibold shadow-md transition-all active:scale-100"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://youtube.com/@djartimus?si=J16h2VNskYw0YbHz"
                target="_blank"
                className="text-4xl md:text-6xl border border-gray-900 dark:border-gray-200 transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-125 font-semibold shadow-md transition-all active:scale-100"
              >
                <FaYoutubeSquare />
              </Link>
              <Link
                href="https://x.com/Dj_Artimus?t=0HK49JZRYxEmeqWiD5M9yQ&s=09"
                target="_blank"
                className="text-4xl md:text-6xl border border-gray-900 dark:border-gray-200 transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-125 font-semibold shadow-md transition-all active:scale-100"
              >
                <FaSquareXTwitter />
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <div className="w-full h-full flex flex-col md:flex-col-reverse sm:flex-shrink flex-shrink-0 bor der border-red-500 relative">
          <div className="flex h-full bor der lg:pb-24">
            <div className="flex flex-col w-full gap-6 bor der h-52 xs2:h-56 sm1:h-60 lg:h-[380px] justify-end">
              <div className="px-4 xs3:px-8 sm1:px-16 md:px-12 lg:px-0">
                {
                  HeroContent(isNameHover, setIsNameHover)[currentHeroContent]
                    .content
                }
              </div>
              <motion.div
                className="lg:flex lg:w-[360px] xl:w-3/5 h-[115px] flex-col gap-7 justify-between bor der hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <div className="w-full flex justify-between items-center gap-4">
                  <a
                    href="#projects"
                    className="p-4 py-2 text-xl border rounded-full hover:text-blue-300 hover:font-bold hover:shadow-blue-500 inline-block hover:scale-110 font-semibold shadow-md transition-all duration-200 active:scale-100"
                  >
                    Explore My Work
                  </a>
                  <a
                    href="#contact"
                    className="p-4 py-2 text-xl border rounded-full hover:text-blue-300 hover:font-bold hover:shadow-blue-500 inline-block hover:scale-110 font-semibold shadow-md transition-all duration-200 active:scale-100"
                  >
                    Contact Me
                  </a>
                </div>
                <div className=" w-full flex items-center gap-6 bo rder">
                  <Link
                    href="https://github.com/Dj-Artimus"
                    target="_blank"
                    className=" text-[40px] border transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
                  >
                    <FaGithubSquare />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/pratikpansare"
                    target="_blank"
                    className=" text-[40px] border transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="https://youtube.com/@djartimus?si=J16h2VNskYw0YbHz"
                    target="_blank"
                    className="  text-[40px] border transform origin-center flex-shrink-0 rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
                  >
                    <FaYoutubeSquare />
                  </Link>
                  <Link
                    href="https://x.com/Dj_Artimus?t=0HK49JZRYxEmeqWiD5M9yQ&s=09"
                    target="_blank"
                    className="  text-[40px] border transform origin-center flex-shrink-0 rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
                  >
                    <FaSquareXTwitter />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 3 }}
            className="bo rder flex justify-center items-center md:items-start lg:items-center md:justify-end h-28 my-3 md:my-0 xs2:h-32 sm1:h-36"
          >
            <div
              className=" md:-translate-x-4 md:translate-y-3 lg:translate-y-0 md:hover:-translate-x-7 md:hover:translate-y-5 md:active:-translate-x-3 md:active:translate-y-2 lg:hover:-translate-x-[75px] xl:hover:-translate-x-[94px] h-fit lg:hover:translate-y-[38px] xl:hover:translate-y-[46px] rounded-xl md:rounded-3xl border border-gray-700 lg:border-gray-500 shadow-md shadow-gray-700 lg:shadow-gray-500 hover:shadow-blue-300 lg:skew-y-2 lg:-skew-x-6 hover:skew-x-0 hover:skew-y-0 lg:hover:scale-[1.5] xl:hover:scale-[1.75] hover:scale-110 active:scale-90 xl:active:scale-150  transition-all duration-300"
              onClick={() => {
                currentHeroContent === 4
                  ? setCurrentHeroContent(0)
                  : setCurrentHeroContent((prev) => prev + 1);
              }}
            >
              {HeroContent()[currentHeroContent].image}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 4 }}
            className=" w-fit hidden lg:block absolute bottom-5 right-5"
          >
            <Link
              href={
                "https://drive.google.com/file/d/1tfZankoER687X23j0JZ9BVZwov_wSYPj/view?usp=drivesdk"
              }
              target="_blank"
              className="flex items-center gap-2 border rounded-full p-4 py-2 text-xl hover:text-blue-300 hover:font-bold hover:shadow-blue-500 hover:scale-110 shadow-md transition-all duration-200 active:scale-100"
            >
              <p className="">Resume</p>
              <ImProfile className="" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
