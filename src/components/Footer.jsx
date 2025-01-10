import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { RiMailFill } from "react-icons/ri";

const Footer = () => (
  <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8 px-3 sm:px-14">
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
          href="mailto:pratik.s.pansare.in@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 -mt-[1px] dark:text-gray-300 hover:text-primary transition"
        >
          <RiMailFill size="32"/>
        </a>
        <a
          href="https://github.com/Dj-Artimus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 hover:text-primary transition"
        >
          <FaGithub size="28" />
        </a>
        <a
          href="https://www.linkedin.com/in/pratikpansare"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 hover:text-primary transition"
        >
          <FaLinkedin size="28" />
        </a>
        <a
          href="https://x.com/Dj_Artimus?t=0HK49JZRYxEmeqWiD5M9yQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 hover:text-primary transition"
        >
          <FaSquareXTwitter size="28" />
        </a>
      </div>
      {/* Footer Bottom */}
      <p className="text-sm">
        © {new Date().getFullYear()} DjArtimus's Portfolio ❤.
      </p>
    </div>
  </footer>
);

export default Footer;