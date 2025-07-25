import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Desktop Header - Always visible */}
      <header className="hidden md:block w-full bg-white dark:bg-[#0a1627] shadow-md h-[60px] flex items-center sticky top-0 z-[9999]">
        <div className="container max-w-[1200px] mx-auto px-4 flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <span className="text-lg md:text-xl font-bold text-[#001F54] dark:text-white">Czifra Consulting</span>
          </Link>
          {/* Desktop Nav */}
          <nav className="flex items-center gap-6" role="navigation" aria-label="Main navigation">
            <Link to="/" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Home</Link>
            <Link to="/services" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Services</Link>
            <Link to="/about" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">About</Link>
            <Link to="/contact" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Header - Only shows when menu is open */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[9999]">
          <div className="absolute top-0 left-0 w-full bg-white dark:bg-[#0a1627] shadow-lg">
            <div className="flex items-center justify-between p-4">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <span className="text-lg font-bold text-[#001F54] dark:text-white">Czifra Consulting</span>
              </Link>
              <button onClick={() => setMenuOpen(false)} className="p-2">
                <svg className="w-6 h-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col py-4" role="navigation" aria-label="Mobile navigation">
              <Link to="/" className="px-4 py-3 text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/services" className="px-4 py-3 text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link to="/about" className="px-4 py-3 text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/contact" className="px-4 py-3 text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Menu Button - Fixed in corner */}
      <button 
        className="md:hidden fixed top-4 right-4 z-[10000] bg-white dark:bg-[#0a1627] rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700" 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label="Open menu" 
        aria-expanded={menuOpen}
      >
        <svg className="w-6 h-6 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
}