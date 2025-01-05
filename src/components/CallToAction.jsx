import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { HeroVideoTemplate } from "./HeroTemplates";
import { motion } from "framer-motion";

const CallToAction = ({ isDark }) => (
  <section className="py-16 px-6 bg-white dark:bg-black dark:text-white text-black text-center">
    <div className="mx-auto max-w-3xl lg:max-w-5xl flex flex-col-reverse lg:flex-row gap-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className=" w-full lg:w-1/2 flex justify-center items-center"
      >
        <HeroVideoTemplate
          videoKey="workingOnPc_darkMode"
          src={`./videos/WorkingOnPC_${isDark ? "darkMode" : "lightMode"}.mp4`}
          styles="h-full"
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
          Skills in Motion : A Journey through Creation.
        </h2>
        <div className="text-lg text-left text-gray-600 font-semibold dark:text-gray-400 flex flex-col gap-3">
          <FaQuoteLeft className="text-xl inline-block text-gray-400 dark:text-gray-600" />
          <p>
            I specialize in crafting modern, responsive, and scalable
            applications. The skills you’ve explored above are the foundation of
            my journey—countless hours of{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              dedication, problem-solving, coding, and creativity
            </span>
            .
          </p>
          <p>
            The projects you’re about to explore are the proof of their
            application and what’s possible when{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              skills and creativity unites
            </span>
            : projects that transform ideas into user-centric solutions.
          </p>
          <p>
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              Great Projects Start with Great Ideas
            </span>{" "}
            and Every project tells a story—of innovation, challenges embraced,
            and a{" "}
            <span className=" font-semibold text-blue-700 dark:text-blue-500">
              commitment to excellence
            </span>
          </p>
          <FaQuoteRight className=" text-xl inline-block text-gray-400 dark:text-gray-600" />
          <p className="mt-2">
            Explore the results of these skills in action, and let’s craft
            something amazing together.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start gap-6">
          <a
            href="#contact"
            className="px-6 py-2 border border-gray-700 rounded-xl dark:border-gray-200 hover:bg-white hover:text-blue-600 dark:hover:text-blue-300 transition hover:scale-110"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CallToAction;
