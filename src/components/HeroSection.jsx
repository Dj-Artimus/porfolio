import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // Already installed
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import {
  HeroContentTemplate,
  HeroImageTemplate,
  HeroVideoTemplate,
} from "./HeroTemplates";
import Link from "next/link";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";

function Model() {
  const { scene } = useGLTF("/models/PortfolioModel.glb");
  return <primitive object={scene} scale={0.5} />;
}

const HeroSection = () => {
  // const [isMusicOn, setIsMusicOn] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(true);
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
                className="text-[6vw] sm:text-[5.5vw] lg:text-[2.5vw] font-bold"
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
                className="text-[14vw] sm:text-[12vw] lg:text-[7vw] font-bold leading-none"
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
                    className="block w-fit text-[8.35vw] sm:text-[7.2vw] lg:text-[4.2vw] text-gray-500"
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
                className=" text-[7vw] lg:text-[3.3vw] w-fit h-[6vh] text-gray-300 hover:text-blue-500 hover:font-bold"
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
            className="w-[50vw] sm:w-[35vw] lg:w-[13.5vw] aspect-[16/9] object-cover rounded-[4vw] lg:rounded-[1.6vw] bg-gray-900 p-[2.3vw] sm:p-[1.7vw] lg:p-[0.75vw] lg:hover:p-[0.5vw] transition-all duration-300"
          />
        ),
      },
    ],
    []
  );

  return (
    <section
      className={`h-screen flex justify-center items-center bg-gray-200 dark:bg-gray-900 relative p-[3%] lg:px-[8%]`}
    >
      <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-center items-center bg-white dark:bg-black rounded-[8vw] sm:rounded-[4.5vw] lg:rounded-[2.5vw] shadow-sm shadow-gray-500 lg:shadow-md lg:shadow-gray-500 lg:border border-gray-600 overflow-hidden">
        {/* <div className="w-full h-full border border-blue-500"></div>
        <div className="w-full h-full border border-red-500"></div> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="w-full h-1/2 sm:h-full lg:w-[80%] flex sm:flex-shrink flex-shrink-0 justify-center items-center bor der border-red-500 relative px-[3vw] lg:px-0 overflow-hidden"
        >
          <div className="relative w-1/2 lg:justify-center items-center hidden dark:flex ms-[10vw] lg:ms-0">
            {isActionModelHover ? (
              <HeroVideoTemplate
                videoKey="sayingHi_darkMode"
                src="./videos/SayingHi_darkMode.mp4"
                styles="h-full scale-[1.4] lg:scale-100 lg:h-[72vh] bo rder -ms-[5vw]"
                loop={false}
              />
            ) : isMusicOn ? (
              <HeroVideoTemplate
                videoKey="playingGuitar_darkMode"
                src="./videos/PlayingGuitar_darkMode.mp4"
                styles="h-full scale-[2] ms-[2vw] lg:scale-[1.5] lg:ms-0 lg:h-full bor der"
                loop={true}
              />
            ) : (
              <HeroVideoTemplate
                videoKey="workingOnLaptop_darkMode"
                src="./videos/WorkingOnLaptop_darkMode.mp4"
                styles="h-full scale-[1.4] lg:scale-100 lg:h-[76vh] bo rder"
                loop={true}
              />
            )}
            <div
              className="bo rder w-[20vw] h-[40vh] left-[3vw] lg:w-[8vw]  lg:h-[60vh] rounded-full absolute  lg:left-[32%]"
              onMouseOver={() => setIsActionModelHover(true)}
              onMouseLeave={() => setIsActionModelHover(false)}
              onClick={() => {
                setIsActionModelHover(!isActionModelHover);
              }}
            ></div>
          </div>
          <motion.div
            className="lg:hidden flex flex-col flex-shrink-0 justify-center w-1/2 h-full bor der relative border-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="w-full flex flex-col justify-center items-center gap-[3vh] px-[2vw]">
              <a
                href="#projects"
                className="text-[5vw] w-full px-[4vw] py-[1.5vh] text-center lg:p-[1.5vw] lg:py-[1.5vh] lg:text-[1.3vw] lg:hover:text-[1.5vw] border rounded-[2vw] hover:text-blue-300 hover:font-bold hover:shadow-blue-500 inline-block hover:scale-110 font-semibold shadow-md transition-all duration-200 active:scale-100"
              >
                Explore <br /> My Work
              </a>
              <a
                href="#contact"
                className="text-[5vw] w-full px-[4vw] py-[1.5vh] text-center lg:p-[1.5vw] lg:py-[1.5vh] lg:text-[1.3vw] lg:hover:text-[1.5vw] border rounded-full hover:text-blue-300 hover:font-bold hover:shadow-blue-500 inline-block hover:scale-110 font-semibold shadow-md transition-all duration-200 active:scale-100"
              >
                Contact Me
              </a>
            </div>
            <div className="flex gap-[5vw] mt-[3vh] flex-col justify-center items-center bor der ">
              <div className="flex w-[70%] justify-between">
                <Link
                  href="https://github.com/Dj-Artimus"
                  className=" text-[11vw] hover:text-[3.6vw] border transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
                >
                  <FaGithubSquare />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/pratikpansare"
                  className=" text-[11vw] hover:text-[3.6vw] border transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
                >
                  <FaLinkedin />
                </Link>
              </div>
              <div className="flex w-[70%] justify-between">
                <Link
                  href="https://youtube.com/@djartimus?si=J16h2VNskYw0YbHz"
                  className=" text-[11vw] hover:text-[3.6vw] border transform origin-center flex-shrink-0 rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
                >
                  <FaYoutubeSquare />
                </Link>
                <Link
                  href="https://x.com/Dj_Artimus?t=0HK49JZRYxEmeqWiD5M9yQ&s=09"
                  className=" text-[11vw] hover:text-[3.6vw] border transform origin-center flex-shrink-0 rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
                >
                  <FaSquareXTwitter />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="w-full h-1/2 sm:h-[50vh] lg:h-full flex flex-col sm:flex-shrink flex-shrink-0 justify-end lg:justify-center bo rder border-red-500 relative">
          <div className="px-[5vw] lg:px-0">
            {
              HeroContent(isNameHover, setIsNameHover)[currentHeroContent]
                .content
            }
          </div>
          <motion.div
            className="lg:flex w-[27vw] h-[7vh] mt-[5vh] bor der hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="w-full flex justify-between items-center">
              <a
                href="#projects"
                className="p-[1.5vw] py-[1.5vh] text-[1.3vw] hover:text-[1.5vw] border rounded-full hover:text-blue-300 hover:font-bold hover:shadow-blue-500 inline-block hover:scale-110 font-semibold shadow-md transition-all duration-200 active:scale-100"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="p-[1.5vw] py-[1.5vh] text-[1.3vw] hover:text-[1.5vw] border rounded-full hover:text-blue-300 hover:font-bold hover:shadow-blue-500 inline-block hover:scale-110 font-semibold shadow-md transition-all duration-200 active:scale-100"
              >
                Contact Me
              </a>
            </div>
            <div className="h-[6vh] w-[16vw] flex justify-between items-center bor der absolute top-[11vh]">
              <Link
                href="https://github.com/Dj-Artimus"
                className=" text-[3vw] hover:text-[3.6vw] border transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
              >
                <FaGithubSquare />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pratikpansare"
                className=" text-[3vw] hover:text-[3.6vw] border transform origin-center rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://youtube.com/@djartimus?si=J16h2VNskYw0YbHz"
                className=" text-[3vw] hover:text-[3.6vw] border transform origin-center flex-shrink-0 rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
              >
                <FaYoutubeSquare />
              </Link>
              <Link
                href="https://x.com/Dj_Artimus?t=0HK49JZRYxEmeqWiD5M9yQ&s=09"
                className=" text-[3vw] hover:text-[3.6vw] border transform origin-center flex-shrink-0 rounded-full hover:font-bold hover:shadow-blue-500 hover:scale-110 font-semibold shadow-md transition-all active:scale-100"
              >
                <FaSquareXTwitter />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 3 }}
            className="mx-auto mt-[2vh] mb-[1vh] sm:mt-0 sm:mb-0 sm:absolute sm:top-0 sm:right-0"
          >
            <div
              className="sm:-translate-x-[1.8vw] sm:translate-y-[1.3vh] lg:translate-y-[2.5vh] 2xl:translate-y-[3vh] lg:hover:-translate-x-[7.3vw] 2xl:hover:-translate-x-[6.5vw] lg:hover:translate-y-[8vh] rounded-[4vw] lg:rounded-[1.6vw] border border-gray-700 lg:border-gray-500 shadow-md shadow-gray-700 lg:shadow-gray-500 hover:shadow-blue-300 lg:skew-y-2 lg:-skew-x-6 hover:skew-x-0 hover:skew-y-0 lg:hover:scale-[1.75] hover:scale-110 active:scale-90 lg:active:scale-150  transition-all duration-300"
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
            className=" w-fit hidden absolute bottom-[3vh] right-[1.5vw] lg:flex items-center gap-2 border rounded-full p-[1.5vw] py-[1vh] hover:text-blue-300 hover:font-bold hover:shadow-blue-500 shadow-md text-[1.5vw] hover:text-[1.9vw] transition-all duration-200"
          >
            <p className="">Resume</p>
            <ImProfile className="" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className=" hidden w-fit absolute bottom-[3vh] right-[1.5vw] hover:flex items-center gap-2 border rounded-full p-[1.5vw] py-[1vh] hover:text-blue-300 hover:font-bold hover:shadow-blue-500 shadow-md text-[1.5vw] hover:text-[1.9vw] transition-all duration-300"
            >
              <ImProfile className="" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
