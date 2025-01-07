import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaMicrosoft,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiBookstack,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRender,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { FaCloudversify } from "react-icons/fa6";
import {
  TbBrandOffice,
  TbBrandVercelFilled,
  TbBrandVscode,
} from "react-icons/tb";
const techStack = [
  // Front-End
  { name: "HTML5", icon: <FaHtml5 size="40" className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt size="40" className="text-blue-700" /> },
  { name: "JavaScript", icon: <FaJs size="40" className="text-yellow-500" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size="40" className="text-purple-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size="40" className="text-teal-500" />,
  },
  {
    name: "Framer Motion",
    icon: (
      <FaCloudversify size="40" className="text-gray-600 dark:text-gray-300" />
    ),
  },
  { name: "React", icon: <FaReact size="40" className="text-blue-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs size="40" className="dark:text-gray-200 text-black" />,
  },
  {
    name: "Zustand",
    icon: <SiBookstack size="40" className="text-orange-500" />,
  },

  // Back-End
  { name: "Node.js", icon: <FaNodeJs size="40" className="text-green-500" /> },
  {
    name: "Express.js",
    icon: <SiExpress size="40" className="dark:text-gray-200 text-black" />,
  },
  { name: "Python", icon: <SiPython size="40" className="text-yellow-500" /> },
  {
    name: "Supabase",
    icon: <SiSupabase size="40" className="text-green-500" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size="40" className="text-blue-500" />,
  },
  { name: "MongoDB", icon: <SiMongodb size="40" className="text-green-500" /> },
  { name: "SQL", icon: <FaDatabase size="40" className="text-indigo-500" /> },

  // Tools & Platforms

  {
    name: "Postman",
    icon: <SiPostman size="40" className="text-orange-500" />,
  },
  { name: "Git", icon: <FaGitAlt size="40" className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub size="40" className="dark:text-gray-200 text-black" />,
  },
  {
    name: "VS Code",
    icon: <TbBrandVscode size="40" className="text-blue-500" />,
  },
  {
    name: "MS Office",
    icon: <TbBrandOffice size="40" className="text-red-500" />,
  },
  {
    name: "Vercel",
    icon: (
      <TbBrandVercelFilled
        size="40"
        className="dark:text-gray-200 text-black"
      />
    ),
  },
  { name: "Render", icon: <SiRender size="40" className="text-blue-500" /> },
  { name: "Netlify", icon: <SiNetlify size="40" className="text-teal-500" /> },
];

const TechStackCarousel = () => (
  <section
    id="skills"
    className="py-16 sm:px-14 bg-gray-100 dark:bg-gray-900 text-center"
  >
    <h2 className="text-4xl font-bold text-primary dark:text-white mb-8">
      My Tech Stack
    </h2>
    <div className=" max-w-4xl xl:max-w-6xl container mx-auto grid grid-cols-3 md:grid-cols-6 gap-8">
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
