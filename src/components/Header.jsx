import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  };

  // Close menu on escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setMenuOpen(false);
    }
  };

  // Always scroll to top when Home/About/Services is clicked
  const handleNavClick = (route) => {
    if (location.pathname === route) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Header - Always visible */}
      <header className="hidden md:block w-full bg-white dark:bg-[#0a1627] shadow-md h-[60px] flex items-center sticky top-0 z-[9999]">
        <div className="container-responsive flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="header-nav-link flex items-center gap-2 md:gap-3 hover-lift">
            <span className="text-lg md:text-xl font-bold text-[#001F54] dark:text-white">Czifra Consulting</span>
          </Link>
          {/* Desktop Nav */}
          <nav className="flex items-center gap-6" role="navigation" aria-label="Main navigation">
            <Link to="/" onClick={() => handleNavClick('/')} className="header-nav-link text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 outline-none focus:outline-none active:outline-none no-underline">Home</Link>
            <Link to="/services" onClick={() => handleNavClick('/services')} className="header-nav-link text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 outline-none focus:outline-none active:outline-none no-underline">Services</Link>
            <Link to="/about" onClick={() => handleNavClick('/about')} className="header-nav-link text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 outline-none focus:outline-none active:outline-none no-underline">About</Link>
            <Link to="/contact" onClick={() => handleNavClick('/contact')} className="header-nav-link text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 outline-none focus:outline-none active:outline-none no-underline">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Header - Only shows when menu is open */}
      {menuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[9999]"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="absolute top-0 left-0 w-full bg-white dark:bg-[#0a1627] shadow-lg safe-area-top">
            <div className="flex items-center justify-between p-4">
              <Link to="/" className="header-nav-link flex items-center gap-2 touch-target" onClick={() => { setMenuOpen(false); handleNavClick('/'); }}>
                <span className="text-lg font-bold text-[#001F54] dark:text-white">Czifra Consulting</span>
              </Link>
            </div>
            <nav className="flex flex-col py-4" role="navigation" aria-label="Mobile navigation">
              <Link to="/" onClick={() => { setMenuOpen(false); handleNavClick('/'); }} className="header-nav-link px-4 py-4 text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 touch-target">Home</Link>
              <Link to="/services" onClick={() => { setMenuOpen(false); handleNavClick('/services'); }} className="header-nav-link px-4 py-4 text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 touch-target">Services</Link>
              <Link to="/about" onClick={() => { setMenuOpen(false); handleNavClick('/about'); }} className="header-nav-link px-4 py-4 text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 touch-target">About</Link>
              <Link to="/contact" onClick={() => { setMenuOpen(false); handleNavClick('/contact'); }} className="header-nav-link px-4 py-4 text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 touch-target">Contact</Link>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Menu Button - Fixed in corner */}
      <button 
        className="md:hidden fixed top-4 right-4 z-[10000] shadow-none w-14 h-14 aspect-square flex items-center justify-center bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 touch-target safe-area-top safe-area-right"
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label="Open menu" 
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <svg className="w-7 h-7 text-blue-500 dark:text-blue-400 block mx-auto my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
}