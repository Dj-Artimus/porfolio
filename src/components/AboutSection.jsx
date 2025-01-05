import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { HeroVideoTemplate } from "./HeroTemplates";
import { motion } from "framer-motion";

const AboutSection = ({ isDark }) => (
  <section
    id="about"
    className="py-16 px-6 bg-white dark:bg-black text-gray-800 dark:text-gray-200"
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
          styles=" max-h-[500px] border border-white dark:border-black rounded-xl"
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
          About Me.
        </h2>
        <div className="text-lg text-left text-gray-600 font-semibold dark:text-gray-400 flex flex-col gap-3">
          <FaQuoteLeft className="text-xl inline-block text-gray-400 dark:text-gray-600" />
          <p>
            Hello again!{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              {" "}
              I'm Pratik {"<DjArtimus>"}
            </span>{" "}
            , a detail-oriented{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              Full-Stack Developer.
            </span>{" "}
            I specialize in creating dynamic, responsive, and scalable web
            applications using modern tools like{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              React, Next.js, Node.js, and SQL databases.
            </span>{" "}
            With a strong foundation in frontend and backend technologies, I aim
            to transform complex problems into seamless,{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              user-friendly solutions.
            </span>
          </p>
          <p>
            Beyond coding, I enjoy exploring new technologies, contributing to
            open-source projects, and mentoring aspiring developers. I'm always
            eager to tackle new challenges that push the{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              boundaries of innovation.
            </span>
          </p>
          <FaQuoteRight className=" text-xl inline-block text-gray-400 dark:text-gray-600" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
