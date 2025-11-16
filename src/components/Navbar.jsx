import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 shadow-lg transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My React App</h1>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/tasks" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Tasks</Link>
            <Link to="/components" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Components</Link>
            <Link to="/api-demo" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">API Demo</Link>
            <Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
