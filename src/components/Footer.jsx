import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">
        Let’s Connect!
      </h2>
      <p className="mb-6">
        I’m actively looking for opportunities to collaborate or work on exciting projects. Feel free to connect with me through one of the platforms below.
      </p>
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 hover:text-primary transition"
        >
          <FaGithub size="28" />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 hover:text-primary transition"
        >
          <FaLinkedin size="28" />
        </a>
        <a
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 hover:text-primary transition"
        >
          <FaTwitter size="28" />
        </a>
      </div>
      {/* Footer Bottom */}
      <p className="text-sm">
        © {new Date().getFullYear()} Mark's Portfolio. Built with React, Next.js & Tailwind CSS.
      </p>
    </div>
  </footer>
);

export default Footer;