import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaCodeBranch,
  FaCloud,
} from "react-icons/fa";

const skills = [
  { icon: <FaReact size={40} />, title: "React & Next.js" },
  { icon: <FaNodeJs size={40} />, title: "Node.js & APIs" },
  { icon: <FaDatabase size={40} />, title: "SQL & Data Management" },
  { icon: <FaMobileAlt size={40} />, title: "Responsive Design" },
  { icon: <FaCodeBranch size={40} />, title: "Version Control (Git)" },
  { icon: <FaCloud size={40} />, title: "Cloud Deployment" },
];

const HighlightSection = () => (
  <section
    id="highlight"
    className="bg-gray-100 dark:bg-gray-900 py-16 px-4 lg:px-24"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-primary dark:text-white mb-10">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-md p-8 rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="text-primary mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {`I excel at ${skill.title.toLowerCase()} using modern, scalable solutions.`}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightSection;