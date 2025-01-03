import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
  >
    {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
  </button>
);

export default ThemeToggle;