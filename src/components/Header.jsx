import { Menu, Moon, Sun, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#0a1627] shadow-md h-[60px] flex items-center">
      <div className="container max-w-[1200px] mx-auto px-4 flex items-center justify-between h-full">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <span className="text-lg md:text-xl font-bold text-[#001F54] dark:text-white">Czifra Consulting</span>
        </Link>
        
        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          <Link to="/" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Home</Link>
          <Link to="/services" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Services</Link>
          <Link to="/about" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">About</Link>
          <Link to="/contact" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Contact</Link>
        </nav>
        
        {/* Right: Dark mode toggle and LinkedIn */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
          <a 
            href="https://www.linkedin.com/in/benjaminczifra/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Open menu" 
          aria-expanded={menuOpen} 
          aria-controls="mobile-menu"
        >
          <Menu className="w-7 h-7 text-blue-500 dark:text-blue-400" />
        </button>
      </div>
      
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMenuOpen(false)} aria-label="Close menu overlay" />
      )}
      
      {/* Mobile menu */}
      <nav 
        id="mobile-menu" 
        className={`fixed top-[60px] left-0 w-full bg-white dark:bg-[#0a1627] shadow-md z-50 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`} 
        role="navigation" 
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col items-center gap-4 py-6">
          <Link to="/" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          {/* Mobile dark mode toggle and LinkedIn */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700 w-full justify-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <a 
              href="https://www.linkedin.com/in/benjaminczifra/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}