"use client";
import { motion } from "framer-motion";
import Accordion from "./Accordion";
import {
  FaShoppingCart,
  FaLeaf,
  FaCubes,
  FaGlobe,
  FaUserTie,
  FaStar,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const workExperiences = [
  {
    id: 1,
    Icon: FaShoppingCart,
    title: "Maedric",
    subtitle: "Premium Jewellery & Gemstones E-Commerce Platform",
    role: "Full-Stack Developer",
    duration: "9+ Months",
    domain: "E-Commerce, Luxury Jewelry",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe", "Git"],
    overview:
      "Over the past 9+ months, I have been working with an international client on a project called Maedric, a premium jewelry e-commerce platform that evolved from a frontend task into a complete, production-grade e-commerce system.",
    sections: [
      {
        heading: "Project Overview",
        content: [
          {
            type: "text",
            value:
              "Over the past 9+ months, I have been working with an international client on a project called Maedric, a premium jewelry e-commerce platform.",
          },
          {
            type: "text",
            value:
              "This project started as a frontend website development task, but over time it evolved into a complete, production-grade e-commerce system covering the entire customer lifecycle:",
          },
          {
            type: "highlight",
            value:
              "Product Discovery > Wishlist > Cart > Checkout > Payment > Order History",
          },
          {
            type: "text",
            value:
              "This was not a one-time task. It became a long-term collaboration, where I continuously:",
          },
          {
            type: "list",
            items: [
              "Designed and developed new systems",
              "Improved existing architecture",
              "Solved real-world problems",
              "Delivered production-ready features",
            ],
          },
        ],
      },
      {
        heading: "How I Got the Project",
        content: [
          {
            type: "text",
            value: "This project is personally very important to me.",
          },
          {
            type: "text",
            value:
              "I got this opportunity through the LinkedIn Services marketplace, where I had listed my development services.",
          },
          {
            type: "list",
            items: [
              "The client discovered my profile",
              "Reached out directly based on my work",
              "Trusted me with their platform",
            ],
          },
          {
            type: "text",
            value:
              "This was a turning point for me because: It proved that my skills had real market value and that I wasn't just \"learning development\" — I was capable of delivering real-world solutions that clients trust and pay for.",
          },
        ],
      },
      {
        heading: "Client & Business Context",
        content: [
          {
            type: "list",
            items: [
              "Client Type: International Jewelry Brand",
              "Domain: E-commerce (Luxury Jewelry & Gemstones)",
              "Target Users: Customers looking to browse and purchase premium jewelry online",
            ],
          },
          {
            type: "subsection",
            heading: "Client's Goal",
            content: [
              { type: "text", value: "To build a platform that:" },
              {
                type: "list",
                items: [
                  "Reflects a premium brand experience",
                  "Provides a smooth and trustworthy shopping journey",
                  "Supports scalable product management",
                  "Enables secure and seamless transactions",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "Scope of Work",
        content: [
          {
            type: "subsection",
            heading: "1. Product Management System (Core Backend System)",
            content: [
              {
                type: "text",
                value:
                  "This is one of the most critical systems of the entire platform — and I built it 100% myself.",
              },
              {
                type: "subsection",
                heading: "What I Implemented",
                content: [
                  {
                    type: "list",
                    items: [
                      "Scalable product schema for Jewelry (with variants like size, metal, finish) and Gemstones (with attributes like carat, clarity, origin)",
                      "Multi-layer product identification: Internal database IDs, Admin Product IDs, Customer-facing SKUs",
                      "Backend APIs for product creation, updates, filtering, and pagination",
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                heading: "Why This Matters",
                content: [
                  { type: "text", value: "This system ensures:" },
                  {
                    type: "list",
                    items: [
                      "Scalability for large catalogs",
                      "Clean data management",
                      "Efficient filtering and search",
                    ],
                  },
                  {
                    type: "text",
                    value:
                      "This demonstrates strong backend architecture and database design skills.",
                  },
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "2. Product Catalog & Filtering System",
            content: [
              { type: "text", value: "Built dynamic category pages:" },
              {
                type: "list",
                items: ["Rings", "Earrings", "Necklaces", "Bracelets"],
              },
              { type: "text", value: "Implemented advanced filtering:" },
              {
                type: "list",
                items: ["Price", "Carat", "Color", "Origin"],
              },
              {
                type: "list",
                items: ["Supported multi-condition filtering (AND logic)"],
              },
              {
                type: "text",
                value: "Focused on performance + usability + scalability",
              },
            ],
          },
          {
            type: "subsection",
            heading: "3. End-to-End E-Commerce Lifecycle System (Most Critical Part)",
            content: [
              {
                type: "text",
                value:
                  "This is the heart of the platform and I built it entirely.",
              },
              {
                type: "text",
                value:
                  "These systems cover the most critical part of any platform: where users decide to spend money.",
              },
              {
                type: "text",
                value:
                  "I built everything with Security, stability, and scalability as non-negotiable priorities.",
              },
              {
                type: "subsection",
                heading: "A. Wishlist System",
                content: [
                  {
                    type: "list",
                    items: [
                      "Save products for later",
                      "Improve user engagement",
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                heading: "B. Cart System (Advanced Backend Logic)",
                content: [
                  {
                    type: "list",
                    items: [
                      "Works for both guest and logged-in users",
                      "Persistent cart storage (database-based)",
                      "Product snapshot system",
                      "Real-time validation",
                    ],
                  },
                  {
                    type: "subsection",
                    heading: "Complex Logic",
                    content: [
                      {
                        type: "list",
                        items: [
                          "Cart merging (guest > login)",
                          "Quantity validation",
                          "Data consistency",
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                heading: "C. Checkout System",
                content: [
                  {
                    type: "list",
                    items: [
                      "Minimal friction design",
                      "Email-first user flow",
                      "Auto account creation",
                      "Address handling",
                    ],
                  },
                  { type: "text", value: "Focused on conversion optimization" },
                ],
              },
              {
                type: "subsection",
                heading: "D. Payment Integration",
                content: [
                  {
                    type: "text",
                    value: "Integrated secure payments using Stripe",
                  },
                  {
                    type: "list",
                    items: ["Checkout sessions", "Webhooks"],
                  },
                ],
              },
              {
                type: "subsection",
                heading: "E. Order Management System",
                content: [
                  {
                    type: "list",
                    items: [
                      "Order creation after payment",
                      "Persistent order storage",
                      "User order history",
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "4. Frontend Development (Premium Experience)",
            content: [
              {
                type: "text",
                value: "I built ~60% of the frontend UI, including:",
              },
              {
                type: "list",
                items: [
                  "Homepage",
                  "Product catalog pages",
                  "Product detail pages",
                ],
              },
              {
                type: "subsection",
                heading: "Focus Areas",
                content: [
                  {
                    type: "list",
                    items: [
                      "Premium design implementation",
                      "Responsive layouts",
                      "Smooth interactions",
                    ],
                  },
                  {
                    type: "text",
                    value:
                      "Ensured the platform reflects the luxury brand identity.",
                  },
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "5. Backend Development (Major Contribution)",
            content: [
              {
                type: "text",
                value: "I built ~80% of the backend system, including:",
              },
              {
                type: "list",
                items: [
                  "APIs",
                  "Database schemas",
                  "Business logic",
                  "Authentication flows",
                ],
              },
              {
                type: "text",
                value:
                  "Strong focus on: Scalability, Maintainability, and Clean architecture.",
              },
            ],
          },
          {
            type: "subsection",
            heading: "6. Architecture Improvements & Migration",
            content: [
              {
                type: "list",
                items: [
                  "Migrated project to modern architecture (Next.js App Router)",
                  "Improved structure and performance",
                  "Fixed SSR and hydration issues",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "7. Security Handling (Real-World Incident)",
            content: [
              {
                type: "text",
                value:
                  "A critical security issue occurred: A crypto-miner was installed on the server. Root cause: RCE vulnerability.",
              },
              {
                type: "subsection",
                heading: "My Role",
                content: [
                  {
                    type: "list",
                    items: [
                      "Assisted in identifying the issue",
                      "Supported fixing and securing the system",
                    ],
                  },
                  {
                    type: "text",
                    value:
                      "This gave real exposure to production-level security challenges.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "Platforms & Tools Used",
        content: [
          {
            type: "list",
            items: [
              "Frontend: Next.js, Tailwind CSS",
              "Backend: Node.js (API routes), MongoDB",
              "Payments: Stripe",
              "Version Control: Git",
              "Deployment: Modern hosting platforms",
              "Communication: WhatsApp, Email",
            ],
          },
        ],
      },
      {
        heading: "How I Delivered Value",
        content: [
          { type: "text", value: "This was not just development work. I:" },
          {
            type: "list",
            items: [
              "Translated client ideas into scalable systems",
              "Suggested better architecture and flows",
              "Improved user experience and conversion",
              "Built systems that are production-ready",
            ],
          },
          {
            type: "text",
            value:
              "I acted as: Developer, Backend engineer, System designer, and Problem solver.",
          },
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        content: [
          {
            type: "subsection",
            heading: "Backend (Primary Focus)",
            content: [
              {
                type: "list",
                items: [
                  "API development",
                  "Database design (MongoDB)",
                  "Authentication systems",
                  "Payment integration",
                  "E-commerce system design",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "Frontend",
            content: [
              {
                type: "list",
                items: ["Next.js", "Responsive UI", "UX-focused development"],
              },
            ],
          },
          {
            type: "subsection",
            heading: "System Design",
            content: [
              {
                type: "list",
                items: [
                  "Full e-commerce lifecycle",
                  "Data modeling",
                  "Business logic implementation",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "Soft Skills",
            content: [
              {
                type: "list",
                items: [
                  "Client communication",
                  "Long-term project handling",
                  "Problem-solving",
                  "Ownership mindset",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "Challenges Faced",
        content: [
          {
            type: "list",
            items: [
              "Complex filtering systems",
              "Cart state management",
              "Checkout flow design",
              "Architecture migration",
              "Security vulnerabilities",
            ],
          },
          {
            type: "subsection",
            heading: "Solved Through",
            content: [
              {
                type: "list",
                items: [
                  "Structured thinking",
                  "Iterative improvements",
                  "Clear communication",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "What I Learned",
        content: [
          {
            type: "list",
            items: [
              "Building production-grade systems",
              "Designing scalable backend architectures",
              "Handling real-world client expectations",
              "Managing long-term projects (9+ months)",
              "Thinking beyond features — system-level thinking",
            ],
          },
        ],
      },
      {
        heading: "Client Feedback & Outcome",
        content: [
          {
            type: "list",
            items: [
              "Client continued working with me for 9+ months",
              "Gave multiple new phases and responsibilities",
              "Trusted me with critical backend systems",
            ],
          },
          {
            type: "text",
            value:
              "This indicates: High satisfaction, Strong trust, and Reliable delivery.",
          },
        ],
      },
      {
        heading: "Why This Project Matters",
        content: [
          {
            type: "text",
            value: "This is the biggest project of my career so far because:",
          },
          {
            type: "list",
            items: [
              "It is a real-world, long-term project (9+ months)",
              "Covers end-to-end platform development",
              "Includes: Backend architecture, E-commerce systems, UI/UX, Security, Client handling",
            ],
          },
          {
            type: "text",
            value:
              "Most Important: I built 100% of the Product Management System and 100% of the E-Commerce Lifecycle System — these are the core revenue-driving systems of any platform.",
          },
        ],
      },
      {
        heading: "Final Reflection",
        content: [
          {
            type: "text",
            value:
              "This project helped me grow from a developer who builds features to a developer who builds complete systems that businesses rely on.",
          },
          {
            type: "text",
            value:
              "It proved that: I can handle real clients, I can build production systems, and I can deliver high-quality work consistently.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    Icon: FaLeaf,
    title: "Heat Scheme",
    subtitle: "Energy-Efficient Home Improvements Platform",
    role: "Web Developer & UX Designer",
    duration: "6+ Months",
    domain: "Sustainability & Energy Efficiency",
    tags: ["Wix", "UI/UX Design", "Responsive Design", "Payment Integration"],
    overview:
      "Over 6+ months, I worked with a UK-based client on a platform called Heat Scheme, focused on helping households and employers understand and implement energy-efficient home improvements such as heating systems, insulation, solar panels, and related services.",
    sections: [
      {
        heading: "Project Overview",
        content: [
          {
            type: "text",
            value:
              "Over the past 6+ months, I worked with a UK-based client on a platform called Heat Scheme, focused on helping households and employers understand and implement energy-efficient home improvements such as heating systems, insulation, solar panels, and related services.",
          },
          {
            type: "text",
            value:
              "This was not just a single task project — it evolved into a long-term collaboration, where I handled multiple aspects of design, development, responsiveness, and user experience improvements.",
          },
        ],
      },
      {
        heading: "How I Got the Project",
        content: [
          {
            type: "text",
            value:
              "The project started as a freelance opportunity where the client was looking for someone who could:",
          },
          {
            type: "list",
            items: [
              "Design and develop pages on their website",
              "Improve layout and structure",
              "Implement functional flows like pricing plans and payment systems",
              "Continuously iterate based on feedback",
            ],
          },
          {
            type: "text",
            value:
              "Over time, due to consistent delivery and communication, the engagement grew into a long-term working relationship, with the client trusting me for multiple updates and new feature implementations.",
          },
        ],
      },
      {
        heading: "Client & Business Context",
        content: [
          {
            type: "list",
            items: [
              "Client Type: UK-based business (Heat Scheme)",
              "Domain: Sustainability / Energy Efficiency / Home Improvements",
              "Target Users: Households and employers looking to reduce energy costs and carbon footprint",
            ],
          },
          {
            type: "text",
            value:
              "The client's goal was to create a professional, user-friendly platform that:",
          },
          {
            type: "list",
            items: [
              "Educates users",
              "Offers structured service plans",
              "Enables conversions through payments and consultations",
            ],
          },
        ],
      },
      {
        heading: "Scope of Work",
        content: [
          {
            type: "subsection",
            heading: "1. Tariffs & Plans Page Development",
            content: [
              {
                type: "list",
                items: [
                  "Designed and developed a complete pricing structure",
                  "Implemented Bronze, Silver, Gold tiers",
                  "Created a comparison table UI for better decision-making",
                  "Ensured clarity and conversion-focused layout",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "2. Payment Integration",
            content: [
              {
                type: "list",
                items: [
                  "Set up payment gateway inside Wix",
                  "Enabled: Credit/Debit cards, Google Pay / Apple Pay",
                  "Handled: Checkout flow, Success / failure states",
                ],
              },
              {
                type: "text",
                value: "Focused on making the process simple and trustworthy.",
              },
            ],
          },
          {
            type: "subsection",
            heading: "3. Service Plan Pages (Multi-page System)",
            content: [
              { type: "text", value: "Created a structured system for:" },
              {
                type: "list",
                items: ["Gas Boiler Service", "Heat Pump Service"],
              },
              { type: "text", value: "Each included:" },
              {
                type: "list",
                items: [
                  "Main service page",
                  "Plan summary page",
                  "Terms & conditions page",
                ],
              },
              {
                type: "text",
                value: "Total: 6 fully developed pages. Ensured:",
              },
              {
                type: "list",
                items: [
                  "Consistent design system",
                  "Clear hierarchy of information",
                  "Smooth navigation across pages",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "4. Testimonials & Households Page (Advanced UX Work)",
            content: [
              {
                type: "text",
                value:
                  "This was one of the more complex and creative parts. The client provided:",
              },
              {
                type: "list",
                items: [
                  "Long-form testimonials (Q&A format)",
                  "Short review snippets",
                ],
              },
              { type: "text", value: "I:" },
              {
                type: "list",
                items: [
                  "Designed a professional testimonial system",
                  "Implemented collapsible sections for long content",
                  "Created clean card-based layout",
                  "Applied readability-focused UI",
                ],
              },
              {
                type: "text",
                value:
                  "Balanced: Visual design, Content density, User experience",
              },
            ],
          },
          {
            type: "subsection",
            heading: "5. Webinar Section",
            content: [
              {
                type: "list",
                items: [
                  'Created "Attend Free Webinar" section',
                  "Designed it to drive engagement and conversions",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "6. Site-wide Improvements",
            content: [
              { type: "text", value: "Worked across multiple pages:" },
              {
                type: "list",
                items: ["Homepage", '"What We Do"', "Other sections"],
              },
              { type: "text", value: "Improved:" },
              {
                type: "list",
                items: [
                  "Layout consistency",
                  "Content clarity",
                  "Visual hierarchy",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "7. Responsiveness Fixes (Critical Real-World Problem)",
            content: [
              { type: "text", value: "One key challenge:" },
              {
                type: "list",
                items: [
                  "Site looked fine on 1440px screens",
                  "Broke on smaller screens (client's users)",
                ],
              },
              { type: "text", value: "I:" },
              {
                type: "list",
                items: [
                  "Diagnosed the issue",
                  "Explained real-world device differences to client",
                  "Fixed layout issues across screen sizes",
                  "Made the entire site fully responsive",
                ],
              },
              {
                type: "text",
                value:
                  "This was a major value addition beyond basic development.",
              },
            ],
          },
        ],
      },
      {
        heading: "Platforms & Tools Used",
        content: [
          {
            type: "list",
            items: [
              "Wix (Primary Platform)",
              "Payment Gateway integrations (Wix Payments / third-party)",
              "UI/UX design principles (custom layouts inside Wix)",
              "Communication tools: Email, WhatsApp (for faster iteration)",
            ],
          },
        ],
      },
      {
        heading: "How I Delivered Value",
        content: [
          {
            type: "text",
            value: 'This wasn\'t just "building pages". I:',
          },
          {
            type: "list",
            items: [
              "Translated vague ideas into structured UI",
              "Suggested better UX (e.g., collapsible testimonials)",
              "Solved real user problems (responsiveness)",
              "Guided client decisions (platform limitations, improvements)",
              "Maintained clear communication and updates",
            ],
          },
          {
            type: "text",
            value: "I acted as both developer + problem solver + advisor.",
          },
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        content: [
          {
            type: "subsection",
            heading: "Technical",
            content: [
              {
                type: "list",
                items: [
                  "Responsive Web Design",
                  "UI/UX Design Thinking",
                  "Payment Integration",
                  "CMS-based Development (Wix)",
                  "Layout structuring",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "Soft Skills",
            content: [
              {
                type: "list",
                items: [
                  "Client Communication",
                  "Requirement Clarification",
                  "Problem Solving",
                  "Iterative Development",
                  "Time Management",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "Challenges Faced",
        content: [
          {
            type: "list",
            items: [
              "Ambiguous requirements (client evolving ideas)",
              "Platform limitations (Wix responsiveness)",
              "Complex content structuring (testimonials)",
              "Payment setup & international constraints",
            ],
          },
          {
            type: "subsection",
            heading: "Solved Through",
            content: [
              {
                type: "list",
                items: [
                  "Clear communication",
                  "Proposing solutions",
                  "Iterative improvements",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "What I Learned",
        content: [
          {
            type: "list",
            items: [
              "Handling long-term client relationships",
              "Turning unclear ideas into structured solutions",
              "Real-world UX problems (not just theory)",
              "Limitations of no-code platforms vs custom development",
              "Importance of responsiveness across devices",
            ],
          },
        ],
      },
      {
        heading: "Client Feedback & Outcome",
        content: [
          {
            type: "list",
            items: [
              "Client continued giving more work > strong trust",
              "Payment completed smoothly after setup",
              "Positive response on ease of collaboration",
              'Described process as "easy" (important signal)',
            ],
          },
          {
            type: "text",
            value:
              "This indicates: Satisfaction, Good communication, and Reliable delivery.",
          },
        ],
      },
      {
        heading: "Why This Project Matters",
        content: [
          {
            type: "text",
            value: "This project is important because:",
          },
          {
            type: "list",
            items: [
              "It's a real-world, long-term client project (6+ months)",
              "Covers end-to-end development lifecycle",
              "Includes: UI/UX, Payments, Business logic, Client handling",
              "Demonstrates ability to deliver consistently, handle evolving requirements, and think beyond just coding",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    Icon: FaCubes,
    title: "Immutag",
    subtitle: "Blockchain-Based Asset Verification Platform",
    role: "Full-Stack Web Developer (Frontend-Focused)",
    duration: "6+ Months",
    domain: "Blockchain, Web3, Tech",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
      "Nodemailer",
    ],
    overview:
      "This project began through a freelance opportunity where the client was looking for a developer to design and build a modern, interactive website for a blockchain-based platform called Immutag, eventually expanding from 10 to 29+ pages.",
    sections: [
      {
        heading: "How the Project Started",
        content: [
          {
            type: "text",
            value:
              "This project began through a freelance opportunity where the client was looking for a developer to design and build a modern, interactive website for a blockchain-based platform called Immutag.",
          },
          { type: "text", value: "Initially, the requirement was to:" },
          {
            type: "list",
            items: [
              "Design and develop 10 core pages",
              "Deliver a clean and professional UI aligned with blockchain/tech industry standards",
            ],
          },
          {
            type: "text",
            value:
              "However, what started as a small scoped project gradually evolved into a large-scale, iterative development project spanning over 6 months.",
          },
          {
            type: "text",
            value: "The client specifically mentioned that they valued:",
          },
          {
            type: "list",
            items: [
              "Strong communication",
              "Willingness to iterate",
              "Ability to understand their vision",
            ],
          },
          {
            type: "text",
            value:
              "This is why they chose to work with me over other candidates.",
          },
        ],
      },
      {
        heading: "Client Requirements & Expectations",
        content: [
          { type: "text", value: "The client wanted a website that:" },
          {
            type: "list",
            items: [
              "Clearly explains a blockchain-based ownership verification system",
              "Feels modern, premium, and trustworthy",
              "Includes smooth animations and interactive UI",
              "Is mobile-first and fully responsive",
              "Has structured navigation and scalability",
              "Supports real-world use case storytelling",
            ],
          },
          { type: "text", value: "Includes:" },
          {
            type: "list",
            items: [
              "Landing pages",
              "Platform overview",
              "Use cases",
              "Legal & compliance pages",
              "Contact & waitlist forms",
              "Media kit and resources",
              "Ecosystem pages",
            ],
          },
          {
            type: "text",
            value:
              "They also shared a reference website and expected: \"Something very close in feel, flow, animations, and structure â€” but improved.\"",
          },
        ],
      },
      {
        heading: "What Work Was Done",
        content: [
          {
            type: "subsection",
            heading: "1. Multiple Design Iterations (Very Important)",
            content: [
              {
                type: "text",
                value: "Instead of building just one version, I:",
              },
              {
                type: "list",
                items: [
                  "Created 3—4 different design versions (V1, V2, V3)",
                  "Continuously refined based on client feedback",
                  "Explored different layouts, animation styles, content structures, and UX flows",
                ],
              },
              {
                type: "text",
                value:
                  "Eventually, the client selected Version 2 as the base to move forward.",
              },
            ],
          },
          {
            type: "subsection",
            heading: "2. Full Website Development (Expanded Scope)",
            content: [
              {
                type: "text",
                value: "The project expanded from 10 pages > 29+ pages, including:",
              },
              {
                type: "list",
                items: [
                  "Home, About, How It Works, Features, Roadmap",
                  "Use Cases, Contact, Waitlist, Media Kit",
                  "Developers / Partners / Community",
                  "Legal Pages: Privacy Policy, Terms & Conditions, Compliance, Regulatory Stance",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "3. Advanced UI/UX Implementation",
            content: [
              {
                type: "text",
                value:
                  "I focused heavily on creating a premium user experience, including:",
              },
              {
                type: "list",
                items: [
                  "Parallax scrolling effects",
                  "Scroll-triggered animations",
                  "Counter animations (number increases on viewport entry)",
                  "Micro-interactions (hover effects, transitions)",
                  "Smooth section transitions",
                  "Clean typography and spacing",
                ],
              },
              {
                type: "text",
                value:
                  "The goal was: Make the site feel alive, modern, and engaging.",
              },
            ],
          },
          {
            type: "subsection",
            heading: "4. Responsive & Mobile-First Design",
            content: [
              {
                type: "text",
                value:
                  "A major requirement was: \"Most users will access via mobile\"",
              },
              { type: "text", value: "So I ensured:" },
              {
                type: "list",
                items: [
                  "Pixel-perfect responsiveness across: Mobile, Tablet (including iPad-specific fixes), Desktop",
                  "Adjusted layouts for readability and usability",
                  "Fixed real user feedback issues (e.g., logo size visibility on iPad)",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "5. Navigation System Restructuring",
            content: [
              {
                type: "text",
                value:
                  "The client later requested a complete navigation overhaul, including:",
              },
              {
                type: "list",
                items: [
                  "Clean top navigation with dropdowns",
                  "Structured grouping: Platform, Ecosystem Hub",
                  "Footer with categorized sections: Company, Legal, Resources, Social",
                ],
              },
              { type: "text", value: "I implemented:" },
              {
                type: "list",
                items: [
                  "Scalable navigation architecture",
                  "Better UX flow",
                  "Mobile-friendly hamburger menu with collapsible sections",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "6. Backend-Related Features (Functional Integration)",
            content: [
              {
                type: "text",
                value: "Although primarily frontend, I also worked on:",
              },
              {
                type: "subsection",
                heading: "Contact Form Integration",
                content: [
                  {
                    type: "list",
                    items: [
                      "Using email services (Nodemailer)",
                      "Sending messages directly to client's inbox",
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                heading: "Waitlist System",
                content: [
                  {
                    type: "list",
                    items: [
                      "Collecting user emails",
                      "Forwarding them to client",
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "7. Deployment & DevOps Work",
            content: [
              {
                type: "list",
                items: [
                  "Deployed multiple versions using Vercel",
                  "Managed live previews for client review",
                  "Prepared: Environment variables, Deployment setup, Domain integration readiness",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "8. Content Integration & Refinement",
            content: [
              { type: "text", value: "Client later provided:" },
              {
                type: "list",
                items: [
                  "Full website content documents",
                  "Legal text",
                  "Use case descriptions",
                ],
              },
              { type: "text", value: "I:" },
              {
                type: "list",
                items: [
                  "Integrated all content properly",
                  "Refined layout for readability",
                  "Ensured professional tone and clarity",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "How I Helped the Client Succeed",
        content: [
          {
            type: "text",
            value:
              "This project wasn't just development — it was collaboration + problem solving. I helped by:",
          },
          {
            type: "list",
            items: [
              "Translating abstract ideas into real UI/UX",
              "Suggesting better design approaches",
              "Improving structure beyond initial requirements",
              "Building multiple versions to find the best direction",
              "Continuously iterating even during client delays",
              "Handling both design + development + deployment",
            ],
          },
        ],
      },
      {
        heading: "Client Feedback",
        content: [
          {
            type: "text",
            value: "The client gave several positive responses, including:",
          },
          {
            type: "list",
            items: [
              '"It\'s a big improvement and closer to what I had in mind"',
              '"Version 2 looks good â€” clean and simple"',
              '"Initial impression is positive"',
              "Appreciated: Effort, Patience, Commitment, Ability to iterate",
            ],
          },
          {
            type: "text",
            value:
              '"I have another website lined up for you" â€” which indicates trust and satisfaction with the work.',
          },
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        content: [
          {
            type: "subsection",
            heading: "Technical Skills",
            content: [
              {
                type: "list",
                items: [
                  "Next.js (App Router)",
                  "React.js",
                  "Tailwind CSS",
                  "Responsive Design",
                  "UI/UX Design Principles",
                  "Animation & Interaction Design",
                  "Deployment (Vercel)",
                  "Email Integration (Nodemailer)",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "Soft Skills",
            content: [
              {
                type: "list",
                items: [
                  "Client Communication",
                  "Requirement Understanding",
                  "Iterative Development",
                  "Problem Solving",
                  "Patience & Professionalism",
                  "Handling Uncertainty (client delays, changing scope)",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "What I Learned",
        content: [
          {
            type: "list",
            items: [
              "How to handle long-term client projects",
              "Managing changing requirements",
              "Importance of clear communication",
              "Building scalable UI systems",
              "Designing for real-world users (not just aesthetics)",
              "Handling client inactivity professionally",
              "Delivering even when scope increases",
            ],
          },
        ],
      },
      {
        heading: "Importance of This Project in My Career",
        content: [
          {
            type: "text",
            value:
              "This project is one of the most important in my journey because:",
          },
          {
            type: "list",
            items: [
              "It transformed me from a developer â†’ problem solver",
              "I handled a real-world client with evolving needs",
              "Built a production-level, multi-page platform",
              "Gained experience in: Design thinking, System structuring, Client management",
            ],
          },
        ],
      },
      {
        heading: "Final Outcome",
        content: [
          {
            type: "list",
            items: [
              "Delivered a fully functional, scalable website",
              "Built 29+ pages",
              "Implemented modern UI/UX",
              "Prepared for deployment",
              "Awaiting final client inputs for full handover",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    Icon: FaGlobe,
    title: "GMT International Business Website",
    subtitle: "Design-to-Development Conversion Project",
    role: "Full-Stack Web Developer",
    duration: "3+ Months",
    domain: "Consulting, Service Business",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    overview:
      "Over a period of 3+ months, I worked with an international client to design and develop a fully functional, modern business website from provided design assets, transforming static design files into a high-performance, interactive web application.",
    sections: [
      {
        heading: "Project Overview",
        content: [
          {
            type: "text",
            value:
              "Over a period of 3+ months, I worked with an international client to design and develop a fully functional, modern business website from provided design assets. The project involved transforming static design files into a high-performance, interactive web application while ensuring alignment with the client's vision and business goals.",
          },
        ],
      },
      {
        heading: "How I Got the Project",
        content: [
          {
            type: "text",
            value:
              "I was approached by the client through a freelance platform after they reviewed my profile and previous work. The client had already completed the design phase but needed a developer who could:",
          },
          {
            type: "list",
            items: [
              "Convert the design into a fully functional website",
              "Ensure a modern, responsive, and interactive user experience",
              "Handle technical decisions independently",
              "Communicate clearly and guide them through technical aspects",
            ],
          },
          {
            type: "text",
            value:
              "Through clear communication and confidence in my approach, I was able to secure the project.",
          },
        ],
      },
      {
        heading: "Client Details",
        content: [
          {
            type: "list",
            items: [
              "International client (non-technical background)",
              "Running a consulting/service-based business",
              "Required a professional, clean, and engaging website to represent their brand",
            ],
          },
        ],
      },
      {
        heading: "Client Requirements",
        content: [
          { type: "text", value: "The client initially provided:" },
          {
            type: "list",
            items: [
              "Design files (.AI, PDF, and images)",
              "Content embedded within designs",
              "Logo and branding references (partially)",
              "Request for image updates and customization",
            ],
          },
          { type: "text", value: "Key expectations:" },
          {
            type: "list",
            items: [
              "Pixel-perfect implementation of designs",
              "Smooth animations and modern UI/UX",
              "Fully functional website with multiple pages",
              "Contact form integration",
              "Flexibility for future updates (social media integration, content updates)",
            ],
          },
        ],
      },
      {
        heading: "Work Scope & Responsibilities",
        content: [
          {
            type: "subsection",
            heading: "1. Design to Development Conversion",
            content: [
              {
                type: "list",
                items: [
                  "Analyzed design files and extracted all content manually",
                  "Reconstructed layout using modern frontend practices",
                  "Ensured pixel-perfect accuracy with the original design",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "2. Full Website Development",
            content: [
              { type: "text", value: "Developed a multi-page website including:" },
              {
                type: "list",
                items: [
                  "Landing Page (custom built from reference image)",
                  "Services Page (used as primary landing structure)",
                  "About Page",
                  "Contact Page (designed and implemented independently)",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "3. Technology Stack Used",
            content: [
              {
                type: "list",
                items: [
                  "Next.js (React framework)",
                  "Tailwind CSS (styling)",
                  "Framer Motion (animations)",
                  "Vercel (deployment & hosting)",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "4. UI/UX Enhancements",
            content: [
              {
                type: "text",
                value:
                  "Even though designs were provided, I improved the experience by:",
              },
              {
                type: "list",
                items: [
                  "Adding smooth animations and transitions",
                  "Implementing hover effects and micro-interactions",
                  "Creating parallax-style scrolling effects",
                  "Enhancing visual hierarchy for better readability",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "5. Problem Solving & Decision Making",
            content: [
              { type: "text", value: "Since the client was non-technical, I:" },
              {
                type: "list",
                items: [
                  "Took ownership of technical decisions",
                  "Suggested best practices (performance, hosting, structure)",
                  "Designed missing components (like contact page)",
                  "Handled incomplete requirements independently",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "6. Communication & Client Handling",
            content: [
              {
                type: "list",
                items: [
                  "Maintained consistent and clear communication",
                  "Explained technical concepts in simple terms",
                  "Managed delays professionally (client-side delays, holidays, etc.)",
                  "Built trust by delivering early previews and updates",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "7. Deployment & Preview",
            content: [
              {
                type: "list",
                items: [
                  "Deployed the project on Vercel",
                  "Provided live preview for feedback: Enabled real-time review, Improved collaboration, Reduced misunderstandings",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "8. Iteration & Feedback Handling",
            content: [
              {
                type: "list",
                items: [
                  "Incorporated client feedback efficiently",
                  "Updated images, layouts, and content as requested",
                  "Adjusted structure based on client clarification (e.g., landing page structure)",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "Challenges Faced",
        content: [
          {
            type: "list",
            items: [
              "Incomplete design files (missing pages like contact)",
              "No mobile/tablet designs provided",
              "Delays in client responses and content delivery",
              "Misinterpretation of design hierarchy initially (later corrected)",
            ],
          },
        ],
      },
      {
        heading: "How I Solved Them",
        content: [
          {
            type: "list",
            items: [
              "Designed missing sections independently",
              "Communicated clearly to confirm assumptions",
              "Built desktop-first version and proposed responsive upgrade",
              "Stayed patient and professional during delays",
            ],
          },
        ],
      },
      {
        heading: "Key Features Delivered",
        content: [
          {
            type: "list",
            items: [
              "Modern, responsive-ready website structure",
              "Smooth animations and interactive UI",
              "Clean, scalable codebase",
              "Contact form system (planned backend integration)",
              "Easy future extensibility",
            ],
          },
        ],
      },
      {
        heading: "Key Skills Demonstrated",
        content: [
          {
            type: "subsection",
            heading: "Technical Skills",
            content: [
              {
                type: "list",
                items: [
                  "Next.js & React development",
                  "Responsive UI development",
                  "Animation & interaction design",
                  "Design-to-code conversion",
                  "Deployment & hosting",
                ],
              },
            ],
          },
          {
            type: "subsection",
            heading: "Soft Skills",
            content: [
              {
                type: "list",
                items: [
                  "Client communication",
                  "Requirement understanding",
                  "Problem-solving",
                  "Project ownership",
                  "Time & expectation management",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "What I Learned",
        content: [
          {
            type: "list",
            items: [
              "How to work with real clients (non-technical)",
              "Importance of clear communication",
              "Handling incomplete requirements professionally",
              "Managing long-term freelance projects",
              "Delivering beyond expectations by adding value",
            ],
          },
        ],
      },
      {
        heading: "Impact of This Project",
        content: [
          { type: "text", value: "This project was highly valuable because:" },
          {
            type: "list",
            items: [
              "It gave me real-world production experience",
              "Improved both technical and communication skills",
              "Helped me understand client psychology",
              "Strengthened my confidence in handling end-to-end projects independently",
            ],
          },
        ],
      },
      {
        heading: "Client Feedback",
        content: [
          {
            type: "text",
            value: "The client expressed satisfaction multiple times:",
          },
          {
            type: "list",
            items: [
              '"It is looking great!"',
              '"I\'m so excited with the work so far"',
              "Appreciated: Quality of work, Clear communication, Patience and professionalism",
            ],
          },
        ],
      },
      {
        heading: "Conclusion",
        content: [
          { type: "text", value: "This project reflects my ability to:" },
          {
            type: "list",
            items: [
              "Take ownership of a project from start to finish",
              "Work independently with minimal guidance",
              "Deliver high-quality, modern web applications",
              "Communicate effectively with non-technical clients",
            ],
          },
        ],
      },
    ],
  },
];

const ContentBlock = ({ block, depth = 0 }) => {
  if (block.type === "text") {
    return (
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
        {block.value}
      </p>
    );
  }

  if (block.type === "highlight") {
    return (
      <div className="my-3 px-4 py-2 bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg">
        <p className="text-blue-700 dark:text-blue-300 font-semibold text-sm">
          {block.value}
        </p>
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mb-3 space-y-1">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
          >
            <FiChevronRight className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "subsection") {
    return (
      <div
        className={`mb-4 ${
          depth > 0
            ? "ml-4 pl-3 border-l border-gray-200 dark:border-gray-700"
            : ""
        }`}
      >
        <h5
          className={`font-semibold mb-2 ${
            depth === 0
              ? "text-gray-800 dark:text-gray-200 text-base"
              : "text-gray-700 dark:text-gray-300 text-sm"
          }`}
        >
          {block.heading}
        </h5>
        {block.content.map((inner, i) => (
          <ContentBlock key={i} block={inner} depth={depth + 1} />
        ))}
      </div>
    );
  }

  return null;
};

const ExperienceDetails = ({ sections }) => (
  <div className="w-full space-y-5 pt-2">
    {sections.map((section, idx) => (
      <div key={idx}>
        <h4 className="text-blue-700 dark:text-blue-400 font-bold text-base mb-3 pb-1 border-b border-gray-200 dark:border-gray-700">
          {section.heading}
        </h4>
        <div>
          {section.content.map((block, i) => (
            <ContentBlock key={i} block={block} depth={0} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ExperienceCard = ({ experience, idx }) => {
  const { Icon, title, subtitle, role, duration, domain, tags, overview, sections } =
    experience;

  return (
    <div className="hover:scale-[1.005] transition-all duration-300 hover:shadow-md shadow-blue-600 dark:shadow-blue-500 rounded-xl">
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 py-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.15 }}
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-700 dark:text-blue-400 text-2xl">
              <Icon />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 leading-tight">
                {title}
              </h3>
              <span className="flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                {duration}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-1">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-500">
              <span className="flex items-center gap-1">
                <FaUserTie className="text-gray-400" />
                {role}
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-gray-400" />
                {domain}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 px-1">
          {overview}
        </p>

        <div className="flex gap-2 flex-wrap mb-4 px-1">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 border border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        <Accordion
          title="View Full Experience"
          content={<ExperienceDetails sections={sections} />}
        />
      </motion.div>
    </div>
  );
};

const WorkExperience = () => (
  <section
    id="experience"
    className="py-16 px-8 sm:px-14 bg-white dark:bg-black"
  >
    <div className="container mx-auto lg:max-w-3xl">
      <motion.h2
        className="text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>
      <motion.p
        className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Real-world projects. Long-term clients. Production-grade systems.
      </motion.p>
      <div className="grid grid-cols-1 gap-10">
        {workExperiences.map((exp, idx) => (
          <ExperienceCard key={exp.id} experience={exp} idx={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default WorkExperience;