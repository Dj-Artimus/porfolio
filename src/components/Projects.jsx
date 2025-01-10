import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Accordion from "./Accordion";
import ProjectDetails from "./ProjectDetails";

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
      "Zustand",
      "Supabase",
      "PostgreSQL",
      "Framer Motion",
    ],
    links: {
      liveDemo: "https://social-ocean.vercel.app/",
      github: "https://github.com/Dj-Artimus/The-Ocean",
    },
    details: {
      logo: "/icons/theOcean.png",
      name: "The Ocean",
      description: "Unified Social Media Platform",
      duration: "Oct 24 - Dec 24",
      content: `"The Ocean 🌊

Overview:

The Ocean is a revolutionary social media platform designed to unify and simplify your digital interactions. Inspired by the vast and interconnected nature of the ocean, it brings together features from your favorite platforms into a single, seamless experience. Whether you want to connect, share, explore, or engage, The Ocean offers it all with a touch of creativity and innovation. 🌐✨

Getting Started:

Visit The Ocean 🌊: https://social-ocean.vercel.app/  

Start Exploring: Engage with Droplets, follow Anchors, and make Ripples.

Features:

Core Functionalities:

💧 Droplets: Share posts, stories, and reels effortlessly, making every moment count.  
🌊 Ripples: Engage in meaningful conversations and discussions with a community that values your input.  
⭐ Stars: Appreciate and highlight content you love with a simple, elegant interaction.  
⚓ Anchors: Follow and stay connected with creators and friends you admire.  
💬 Real-time Messaging: Instant chat with friends and followers, keeping the connection alive.  
📱 Unified Feed: A streamlined view of content from all your connected accounts for effortless scrolling.  

Upcoming Aspirations:

The Ocean envisions features like:  

🌟 Unified Feed integration with multiple platforms.  
📞 Advanced calling and video calling.  
📋 The Ocean Board for collaborative projects.  

Explore these dreams through the Ocean Vision Toggle, a glimpse into what the future holds.  

Why The Ocean?  

The Ocean is born out of a need for simplicity in a world full of fragmented social platforms. By combining the best aspects of various platforms, it offers users a unified and seamless social media experience. It’s a testament to innovation, persistence, and the desire to make connections as vast and effortless as the ocean itself. 🌊🌟

Tech Stack:  

The Ocean leverages modern technologies to deliver a top-notch user experience:  

📦 Next.js: For seamless front-end development and server-side rendering.  
⚡ Supabase: Handles authentication, real-time databases, and backend services.  
🎨 Tailwind CSS: Provides a utility-first approach for elegant UI design.  
🐘 PostgreSQL: Powers the relational database system.  
📚 Zustand: Simplifies state management.  
⚙️ Material UI: Enhances user interfaces with accessible and beautiful components.  
💨 Framer Motion: Animates UI elements for a smooth user experience.  
🔥 React Hot Toast: Delivers notifications with style.  

Functional Features:  

While some aspects of the vision are yet to be realized, The Ocean already boasts several functional features:  

💧 Create and Share: Post your content as Droplets. Explore, Star, and Ripple them.  
🌊 Engage: Dive into conversations and leave a mark through Ripples (comments).  
💬 Real-time Interaction: Chat with followers and friends in an instant.  
🌙 Dynamic Themes: Switch between light and dark modes, or let the system theme guide the look.  

Journey:

The Ocean began as a dream to unify social platforms into one seamless experience. Although some integrations remain aspirational, the platform is a testament to the possibilities of pushing boundaries and learning from challenges. It continues to evolve, fueled by innovation and user-centric design.  

🌊 The Ocean Story:  

The Ocean was crafted with the vision to eliminate the fragmentation of social media. 🌐 Imagine one place where Facebook, Instagram, Twitter, Reddit, and YouTube merge to give you a unified experience. A place where you can connect deeply 🤝, share effortlessly 🖋️, and explore freely 🌟.  

💡 The Inspiration Behind The Ocean:  

Have you ever wondered about the people you follow on social media—how their personas shift across platforms? That’s where it all started for me. 🤔  

For example, imagine a creator named DjArtimus. On YouTube 🎥, he’s a coder, sharing valuable programming tutorials. But on LinkedIn 💼, he’s sharing professional insights on success. Then on Twitter 🐦, he’s posting opinions on the latest news, and over on Instagram 📸, he’s sharing snapshots of his personal life—maybe a vacation 🌴 or a fancy dinner 🍽️.  

\"What’s he really like across all these platforms?\"  

To get the full picture, I’d need to find him on each platform, follow him, switch apps, and piece it all together. That’s when the idea struck me: Why can’t all this content exist in one place? 🤯  

What if you could scroll through a unified feed 📜 and see, \"Oh, he just released a new coding video on YouTube,\" scroll a bit further and discover, \"Wow, he’s sharing motivational tips on LinkedIn,\" and with another scroll, \"Oh, he’s tweeting about the latest tech trends.\"  

Wouldn’t that make consuming your favorite creator’s content effortless and more enjoyable? 🎉  

🌟 The Ocean Score: Recognizing True Influence:  

I also noticed how perception shifts based on followers. Let’s stick with DjArtimus. He has 100k subscribers on YouTube, which makes him popular and credible in that space. But on LinkedIn, he only has 1k followers. For someone discovering him on LinkedIn, they might think, \"He’s not very influential,\" even if his content is insightful. 🤷‍♂️  

That’s the second challenge The Ocean aims to solve. Why should someone’s credibility be judged solely by one platform? 🤔 What if we could give creators a unified metric—a single number that shows their overall influence across all platforms? 💯  

For DjArtimus, it wouldn’t just be 100k subscribers on YouTube or 1k followers on LinkedIn. It would be 101k people across all platforms. 🌎  

This number—what we call the Ocean Score—levels the playing field. ⚖️ It shows the true scale of someone’s influence, helping people appreciate the value they bring across all platforms. 🙌  

These two ideas—unifying social media and recognizing true influence—are what led me to create The Ocean. 🌊 It’s a journey that’s just beginning, but I believe it’s one worth taking. 🚀  

Contribution:  

Contributions are welcome! Whether you have ideas for new features or want to help with development, feel free to join the journey.  

Dive in and explore the endless possibilities with The Ocean! 🌊"
`,
      images: [
        "/images/theOcean1.jpg",
        "/images/theOcean2.jpg",
        "/images/theOcean3.jpg",
        "/images/theOcean4.jpg",
        "/images/theOcean5.jpg",
        "/images/theOcean6.jpg",
        "/images/theOcean7.jpg",
      ],
      videos: ["/videos/theOceanPromo.mp4"],
    },
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
      github: "https://github.com/Dj-Artimus/Friendly-PAI-C",
    },
    details: {
      logo: "/icons/friendlyPAI.png",
      name: "Friendly PAI",
      description: "Your Personalized AI Companion! 🤖",
      duration: "Sep 24 - Aug 24",
      content: `🚀 Introducing Friendly PAI: Your Personalized AI Companion! 🤖

I’m excited to unveil my latest project, Friendly PAI (Personalized Artificial Intelligence)! This chatbot is designed to provide friendly, personalized, and relevant interactions tailored to users of all ages, with a visually appealing UI and a host of powerful features.

🔹 Friendly PAI Live Demo : https://friendly-pai.vercel.app/

Note: The back-end is hosted on Render’s free tier. If the app hasn’t been used recently, it might take about 50 to 60 seconds to start up. Thanks for your patience and enjoy exploring Friendly PAI!

🔹 Key Features:
💬 Personalized Interactions: Tailored responses based on user preferences, age, and interests. For example, a 12-year-old interested in dinosaurs, cars, and Avengers will receive responses related to those topics.

🖥️ Responsive Design: Optimized for all devices to ensure a seamless experience.

🌐 Simple and Understandable: Designed to provide easy-to-understand responses for users of all ages.

🎨 Visually Appealing UI: Crafted with attention to detail to ensure an engaging and pleasant user experience.

🔹 Tech Stack:
💻 MERN Stack: MongoDB, Express.js, React, Node.js

🎨 Tailwind CSS: For styling and responsive design

📦 Third-Party Packages: Framer-Motion, Zustand, and more

🛠️ Postman: For API testing

🔹 Why Friendly PAI?
Friendly PAI is not just another chatbot; it’s a comprehensive tool designed to make your interactions more engaging and efficient. With its unique personalized approach and responsive design, it stands out as a versatile and user-friendly app.

📣 Call to Action:
I’m excited to hear your feedback and thoughts on Friendly PAI. Feel free to try it out and let me know what you think!

Let’s make interactions smarter and more enjoyable with Friendly PAI – because who said conversations can’t be engaging? 🚀😄`,
      images: [
        "/images/friendlyPAI1.jpg",
        "/images/friendlyPAI2.jpg",
        "/images/friendlyPAI3.jpg",
        "/images/friendlyPAI4.jpg",
        "/images/friendlyPAI5.jpg",
      ],
      videos: ["/videos/friendlyPaiPromo.mp4"],
    },
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
      github: "https://github.com/Dj-Artimus/Task-Orbit",
    },
    details: {
      logo: "/icons/taskOrbit.png",
      name: "Task Orbit",
      description: "Orbiting Towards Success",
      duration: "Aug 2024",
      content: `Task Orbit

Task Orbit! This Progressive Web App (PWA) is designed to help you manage your tasks efficiently with a visually appealing UI and a host of powerful features.

Link to visit: https://tasksorbit.netlify.app/

Progressive Web App

Key Features:

• 📝 Add, Edit, Delete Tasks: Manage your tasks seamlessly.

• 📊 Progress Bar: Track the number of tasks and completed tasks.

• 🔄 Past Tasks Toggle: Easily access and review past tasks.

• 🚀 Missions & Orbits: Each task is a “mission” with a title and description, and each day is an “orbit” to complete.

• 🎯 Mission Levels: Categorize tasks by importance with three levels - Prime (🔴 Red), Power (🔵 Blue), and Lite (🟡 Yellow).

• 🌗 Themes: Switch between light mode, dark mode, and system mode for a personalized experience.

Tech Stack:

• 💻 HTML, Bootstrap, JavaScript: Built with a solid foundation of web technologies.

• 🌐 GitHub & Netlify: Repository and deployment for easy access and sharing.

Why Task Orbit?  Task Orbit is not just another task organizer; it’s a comprehensive tool designed to make your daily task management more engaging and efficient. With its unique mission-based approach and customizable themes, it stands out as a versatile and user-friendly app.`,
      images: [
        "/images/taskOrbit1.jpg",
        "/images/taskOrbit2.jpg",
        "/images/taskOrbit3.jpg",
        "/images/taskOrbit4.jpg",
        "/images/taskOrbit5.jpg",
      ],
    },
  },
  {
    title: "Temporal Journey of Eternal Ticker - The Birth Clock",
    description:
      "This is a progressive web app that functions as a running timer, ticking every millisecond from the users birth date and time. It visually represents the time elapsed since the users existence in the universe.",
    points: [
      "Real-Time Timer:Continuously updates to show the exact time since the users birth.",
      "Progressive Web App:Offers a  app like experience across all operating systems.",
      "Responsive Design:Ensures a seamless experience on both desktop and mobile devices.",
    ],
    tags: ["Java Script", "CSS", "HTML"],
    links: {
      liveDemo: "https://the-birth-clock.netlify.app/",
      github: "https://github.com/Dj-Artimus/The-Birth-Clock",
    },
    details: {
      logo: "/icons/theBirthClock.png",
      name: "The Birth Clock",
      description: "Temporal Journey of Eternal Ticker",
      duration: "Jul 2024",
      content: `"Temporal-Journey-of-Eternal-Ticker(The-Birth-Clock) ✨⏳🌌

⭐ Project Overview : Temporal Journey of Eternal Ticker is a progressive web app that functions as a running timer, ticking every millisecond from the users birth date and time. It visually represents the time elapsed since the users existence in the universe. Built using HTML, CSS, and JavaScript, this project was a great opportunity to hone my skills and explore new technologies. 🚀🛠️

Key Features:

  🔥 Real-Time Timer : ⏱️ Continuously updates to show the exact time since the users birth.

  📱 Progressive Web App : 💻 Offers an app-like experience across all operating systems.

  🌟 Responsive Design : 🖥️📲 Ensures a seamless experience on both desktop and mobile devices.

  🌐 Deployment : Available on GitHub Pages and Netlify for easy access.

🔗 Link To Visit Github Page : https://dj-artimus.github.io/The-Birth-Clock/
🔗 Link To Visit Progressive Web App on Netlify : https://the-birth-clock.netlify.app/

⌛ The Birth Clock :

\"Temporal Journey of Eternal Ticker\" is a captivating and thought-provoking name. Let's delve into its significance and meaning:

⏳ Temporal Journey:

  Temporal: Refers to time, the ever-flowing river of moments that shape our existence. It encapsulates our experiences, memories, and the unfolding of events. 🌊⏰
  Journey: Implies movement, progression, and exploration. Life itself is a journey—a passage through time. 🌍✈️

🕰️ Eternal Ticker:

  Eternal: Beyond the confines of time. It transcends the fleeting nature of our mortal lives. Eternal signifies permanence, something that endures beyond the temporal. ♾️✨
  Ticker: Evokes the idea of a clock or timepiece. It's the heartbeat of existence, the rhythmic pulse that measures our days. ❤️⏱️

🌌 Combined Meaning:

  Temporal Journey: The voyage through our finite existence, marked by milestones, memories, and growth. It's the exploration of our personal timeline. 📜🌠
  Eternal Ticker: The cosmic clock that ticks beyond our individual lives—a reminder of something greater, timeless, and eternal. 🌌⏳

Philosophical Reflections:

  🌟 T. S. Eliot's Influence:
  - In T. S. Eliot's \"Four Quartets,\" he grapples with time, permanence, and human reality. Eliot suggests that only the present moment truly exists, and what might have been remains speculative. 🕊️
  - Our journey through time is both personal and universal. 🌍⏳

  🧭 Hierarchical Ordering:
  - Eliot recognizes a hierarchy: our lived experiences are mere semblances of deeper reality. The eternal underpins our temporal existence¹. 🌌🕰️

  ✝️ Biblical Perspective:
  - The name echoes biblical themes—our earthly journey toward an eternal destination. It reminds us that our choices matter beyond the ticking clock of life². ✝️🌟

💖 Emotional Resonance:

  🌈 Hope: Despite life's impermanence, the Eternal Ticker offers hope. It suggests that our journey connects to something timeless.
  🔍 Reflection: We contemplate our past, present, and future—a pilgrimage toward eternity. 🕊️

In summary, \"Temporal Journey of Eternal Ticker\" encapsulates the human experience: our fleeting moments within the grand tapestry of existence. It invites us to explore, reflect, and find meaning beyond the ticking seconds. 🌟⏰✨

(1) Time and Permanence in T. S. Eliot’s Four Quartets. https://kirkcenter.org/essays/time-permanence-eliot-four-quartets/.

(2) Biblical Risk Taking: Leveraging the Temporal for Eternal Gain https://kenboa.org/living-out-your-faith/biblical-risk-taking-leveraging-the-temporal-for-eternal-gain/.

(3) Desmond Tutu: 'The price of freedom is eternal vigilance.' https://www.socratic-method.com/quote-meanings/desmond-tutu-the-price-of-freedom-is-eternal-vigilance."
`,
      images: [
        "/images/theBirthClock1.jpg",
        "/images/theBirthClock2.jpg",
        "/images/theBirthClock3.jpg",
      ],
    },
  },
];

const ProjectCard = ({
  idx,
  title,
  description,
  points,
  tags,
  links,
  details,
}) => (
  <div className="hover:scale-[1.01] transition-all duration-300 hover:shadow-md shadow-blue-600 dark:shadow-blue-500 rounded-xl">
    <motion.div
      className="p-3  py-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
    >
      <div className=" w-full flex flex-row justify-between gap-2 mb-2 border-gray-500 dark:border-gray-600 items-start border rounded-xl p-2 pt-[10px]">
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">
          {title}
        </h3>
        <div className="flex flex-col lg:flex-row justify-end items-center gap-2 lg:gap-4 text-2xl mt-[1px]">
          <Link
            href={links.liveDemo}
            target="_blank"
            className="hover:text-blue-700 dark:hover:text-blue-400 hover:scale-125 transition-all duration-300 inline-block"
          >
            <FaExternalLinkAlt />
          </Link>
          <Link
            href={links.github}
            target="_blank"
            className="hover:text-blue-700 dark:hover:text-blue-400 hover:scale-125 transition-all duration-300 inline-block"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
      <p className="mb-2 px-3 font-semibold">{description}</p>
      <ul className="text-gray-800 dark:text-gray-200">
        {points.map((point, idx) => (
          <li key={idx} className="list-disc ml-6 mb-2">
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <hr className="my-4 border-gray-700 dark:border-gray-300" />
      <div className="flex gap-2 px-1 flex-wrap my-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 lg:px-3 py-1 border border-gray-800 dark:border-gray-300 font-semibold text-black dark:text-white text-sm rounded-xl sha dow shadow-blue-600 dark:shadow-blue-500"
          >
            {tag}
          </span>
        ))}
      </div>
      <Accordion
        title={"View Details"}
        content={
          <ProjectDetails
            logo={details.logo}
            name={details.name}
            username={"DjArtimus"}
            description={details?.description}
            duration={details?.duration}
            content={details?.content}
            images={details?.images}
            videos={details?.videos}
            demo={links.liveDemo}
            github={links.github}
          />
        }
      />
    </motion.div>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-8 sm:px-14 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto lg:max-w-3xl">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard {...project} key={idx} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
