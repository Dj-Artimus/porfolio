import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { HeroVideoTemplate } from "./HeroTemplates";
import { motion } from "framer-motion";

const AboutSection = ({ isDark }) => (
  <section
    id="about"
    className="py-16 px-6 sm:px-14 bg-white dark:bg-black text-gray-800 dark:text-gray-200"
  >
    <div className="mx-auto max-w-3xl lg:max-w-5xl flex flex-col-reverse lg:flex-row gap-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className=" w-full lg:w-1/2 flex justify-center items-center"
      >
        <HeroVideoTemplate
          videoKey="TalkingAbout_darkMode"
          src={`./videos/TalkingAbout_${isDark ? "darkMode" : "lightMode"}.mp4`}
          styles=" max-h-[350px] sm:max-h-[500px] rounded-xl"
          loop={true}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" w-full lg:w-1/2 flex flex-col gap-2"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          About Me
        </h2>
        <div className="text-lg text-left text-gray-600 font-semibold dark:text-gray-400 flex flex-col gap-3">
          <FaQuoteLeft className="text-xl inline-block text-gray-400 dark:text-gray-600" />
          <p>
            Hello again!{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              {" "}
              I'm Pratik{" "}
            </span>{" "}
            <span>/</span>{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              {" "}
              {"<DjArtimus>"}
            </span>{" "}
            , a quality-oriented{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              Full-Stack Developer.
            </span>{" "}
            I specialize in creating dynamic, responsive, and scalable web
            applications using modern technologies like{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              Next.js, MERN Stack, SQL Databases and more...
            </span>{" "}
            With a strong foundation in frontend and backend technologies, I aim
            to transform complex problems into seamless,{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              user-friendly solutions.
            </span>
          </p>
          <p>
            Beyond coding, I am facinated by exploring emerging fields like{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              robotics, ai, cyber-security, space science
            </span>
            . I also express my creativity through drawings, crafting arts and
            enjoy fitness trainings. I'm always eager to tackle new challenges
            that push the {" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
            boundaries of innovation
            </span>{" "}
            and{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              opportunities to collaborate 
            </span>{" "}
            on exciting projects and make{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              meaningful impacts in the tech industry.
            </span>
          </p>
          <h4 className="font-extrabold">Why Work With Me?</h4>
          <ul>
            <li>
              <span className="text-blue-700 dark:text-blue-500">
                User-Centric Developer
              </span>
              : I craft apps that are not only functional but visually engaging
              and intuitive
            </li>
            <li>
              <span className="text-blue-700 dark:text-blue-500">
                Lifelong Learner
              </span>
              : Always exploring new tech and improving my skills
            </li>
            <li>
              <span className="text-blue-700 dark:text-blue-500">
                Team Player
              </span>
              : Strong in collaboration and leadership, driving projects to
              success
            </li>
          </ul>
          <FaQuoteRight className=" text-xl inline-block text-gray-400 dark:text-gray-600" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
