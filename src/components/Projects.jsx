import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Site",
    description: "Fully responsive portfolio built with Next.js and Tailwind.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "E-Commerce App",
    description:
      "An e-commerce web app with payment gateway integration using Stripe.",
    tags: ["React", "Node.js", "SQL"],
  },
];

const ProjectCard = ({ title, description, tags }) => (
  <motion.div
    className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
    <p className="mb-4">{description}</p>
    <div className="flex gap-2">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-primary text-white text-sm rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-16 px-8 bg-gray-200 dark:bg-gray-900">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-primary mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;