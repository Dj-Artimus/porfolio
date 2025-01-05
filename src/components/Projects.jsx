import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "The Ocean - Unified Social Media Platform",
    description:
      "Designed and implemented a Next.js-based unified social media app integrating features inspired by LinkedIn, Twitter, Instagram, Facebook and YouTube.",
    points: [
      "Utilized Supabase, improving development by 30% for tasks like authentication, real-time messaging, and database management, alongside Tailwind CSS for a clean, ocean-themed interface.",
      "Innovated terminologies like Anchors (Followers), Droplets (Posts), Stars (Likes), Ripples (Comments), and Gems (Bookmarks) to align with the platform's theme and enhance user engagement by 40%.",
      "Improved session management and state synchronization efficiency by 20% using Zustand.",
    ],
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Framer Motion",
      "Zustand",
    ],
    links: {
      liveDemo: "https://social-ocean.vercel.app/",
      github: "https://github.com/Dj-Artimus/The-Ocean"
    }
  },
  {
    title: "Friendly PAI - Personalized AI Chatbot",
    description:
      "Developed a chatbot using the MERN stack, tailored to provide friendly and personalized responses based on user preferences, interests, and age from 8 to 90 years.",
    points: [
      "Crafted a visually appealing and 100% responsive UI using Tailwind CSS.",
      "Leveraged packages like Framer Motion and Zustand to enhanced interactivity and state management by 20%.",
      "Optimized API performance, reducing response times by 15% through efficient back-end integration via robust API testing using Postman.",
    ],
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "LLM",
      "Socket.io",
      "Framer Motion",
      "Zustand",
    ],
    links: {
      liveDemo: "https://friendly-pai.vercel.app/",
      github: "https://github.com/Dj-Artimus/Friendly-PAI-C"
    }
  },
  {
    title: "Task Orbit - Task Management Web App",
    description:
      "Built a mission-based task management PWA with 3 task levels (Prime, Power, Lite) to enhance user engagement.",
    points: [
      "Progressive Web App (PWA) is designed to help users to manage tasks efficiently with a visually appealing UI and a host of powerful features.",
      "Add, Edit, Delete Tasks:Manage tasks seamlessly, Progress Bar:Track the number of tasks and completed tasks, Past Tasks Toggle:Easily access and review past tasks.",
      "Missions & Orbits:Each task is a mission with a title and description, and each day is an orbit to complete.Themes:Switch between light mode, dark mode",
    ],
    tags: ["Java Script", "Bootstrap", "HTML"],
    links: {
      liveDemo: "https://tasksorbit.netlify.app/",
      github: "https://github.com/Dj-Artimus/Task-Orbit"
    }
  },
  {
    title: "Temporal Journey of Eternal Ticker - The Birth Clock",
    description:
      "Temporal Journey of Eternal Ticker is a progressive web app that functions as a running timer, ticking every millisecond from the users birth date and time. It visually represents the time elapsed since the users existence in the universe. Built using HTML, CSS, and JavaScript, this project was a great opportunity to hone my skills and explore new technologies.",
    points: [
      "Real-Time Timer:Continuously updates to show the exact time since the users birth.",
      "Progressive Web App:Offers a  app like experience across all operating systems.",
      "Responsive Design:Ensures a seamless experience on both desktop and mobile devices.",
    ],
    tags: ["Java Script", "CSS", "HTML"],
    links: {
      liveDemo: "https://the-birth-clock.netlify.app/",
      github: "https://github.com/Dj-Artimus/The-Birth-Clock"
    }
  },
];

const ProjectCard = ({ title, description, points, tags, links }) => (
  <motion.div
    className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-2 lg:mb-0">
      <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">
        {title}
      </h3>
      <div className="flex justify-end items-center gap-4 text-xl ">
        <Link href={links.liveDemo} className="hover:text-blue-700 dark:hover:text-blue-400 hover:scale-125 inline-block" >
          <FaExternalLinkAlt />
        </Link>
        <Link href={links.github} className="hover:text-blue-700 dark:hover:text-blue-400 hover:scale-125 inline-block" >
        <FaGithub />
        </Link>
      </div>
    </div>
    <p className="mb-2 font-semibold">{description}</p>
    <ul className="text-gray-800 dark:text-gray-200">
      {points.map((point, idx) => (
        <li key={idx} className="list-disc ml-6 mb-2">
          <span>{point}</span>
        </li>
      ))}
    </ul>
    <hr className="my-4"/>
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="px-2 lg:px-3 py-1 border border-gray-800 dark:border-gray-300 font-semibold text-black dark:text-white text-sm rounded-xl sha dow shadow-blue-600 dark:shadow-blue-500"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto max-w-3xl 2xl:max-w-5xl">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
