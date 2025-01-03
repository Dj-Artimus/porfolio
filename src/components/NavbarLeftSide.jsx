import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import '../app/globals.css';

const Navbar = ({ onThemeToggle, isDarkMode }) => (
  <nav className="fixed left-0 top-1/2 -translate-y-1/2 flex items-center z-50">
      <div className="flex flex-col gap-[2vh] w-[8vw] justify-center items-center -ms-[0.3vw]">
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <Link
            key={section}
            activeClass="text-primary"
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[1.7vw] hover:font-bold hover:text-cyan-400 transition-all duration-200"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
  </nav>
);

export default Navbar;