import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white dark:bg-[#0a1627] shadow-md h-[60px] flex items-center md:static md:top-0 md:z-50 relative z-[9999]">
      <div className="container max-w-[1200px] mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <span className="text-lg md:text-xl font-bold text-[#001F54] dark:text-white">Czifra Consulting</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          <Link to="/" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Home</Link>
          <Link to="/services" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Services</Link>
          <Link to="/about" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">About</Link>
          <Link to="/contact" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Contact</Link>
        </nav>
        {/* Hamburger for mobile */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
          <svg className="w-7 h-7 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMenuOpen(false)} aria-label="Close menu overlay" />
      )}
      {/* Mobile menu */}
      <nav id="mobile-menu" className={`fixed top-[60px] left-0 w-full bg-white dark:bg-[#0a1627] shadow-md z-50 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`} role="navigation" aria-label="Mobile navigation">
        <div className="flex flex-col items-center gap-4 py-6">
          <Link to="/" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}