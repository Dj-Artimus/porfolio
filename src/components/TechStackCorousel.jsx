import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";

const techStack = [
  { name: "React", icon: <FaReact size="40" className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs size="40" className="text-green-500" /> },
  { name: "SQL", icon: <FaDatabase size="40" className="text-indigo-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size="40" className="text-blue-700" /> },
  { name: "HTML5", icon: <FaHtml5 size="40" className="text-orange-600" /> },
  { name: "JavaScript", icon: <FaJs size="40" className="text-yellow-500" /> },
];

const TechStackCarousel = () => (
  <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
    <h2 className="text-4xl font-bold text-primary dark:text-white mb-8">
      My Tech Stack
    </h2>
    <div className="container mx-auto grid grid-cols-3 md:grid-cols-6 gap-8">
      {techStack.map((tech, idx) => (
        <div key={idx} className="p-4 flex flex-col items-center">
          {tech.icon}
          <p className="mt-2 text-primary dark:text-gray-400">{tech.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TechStackCarousel;