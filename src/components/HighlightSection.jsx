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
  {
    icon: <FaReact size={40} />,
    title: "React & Next.js",
    description:
      "I build dynamic, scalable, and high-performing web applications using modern frameworks like React and Next.js.",
  },
  {
    icon: <FaNodeJs size={40} />,
    title: "Node.js & APIs",
    description:
      "I develop efficient server-side solutions and RESTful APIs, ensuring seamless communication between front-end and back-end systems.",
  },
  {
    icon: <FaDatabase size={40} />,
    title: "SQL & Data Management",
    description:
      "I design and manage robust databases using SQL ( Supabase ) and NoSQL technologies ( MongoDB ) , ensuring data integrity and scalability.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Responsive Design",
    description:
      "I craft user-centric, mobile-first designs that adapt seamlessly across all devices for an optimal experience.",
  },
  {
    icon: <FaCodeBranch size={40} />,
    title: "Version Control (Git)",
    description:
      "I utilize Git for version control and collaboration, ensuring efficient code management in team environments.",
  },
  {
    icon: <FaCloud size={40} />,
    title: "Cloud Deployment",
    description:
      "I deploy scalable applications on cloud platforms like Vercel and Render, ensuring reliability and performance.",
  },
];

const HighlightSection = () => (
  <section
    id="highlight"
    className="bg-gray-100 dark:bg-gray-900 py-6 pb-20 px-4 lg:px-24"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-10">
        My Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className=" hover:scale-105 transition-all duration-300 hover:shadow-md shadow-blue-600 dark:shadow-blue-500 rounded-xl">
            <motion.div
              className="bg-white dark:bg-gray-800 h-full shadow-md p-8 rounded-xl flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightSection;
