import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#0a1627] shadow-md h-[60px] flex items-center">
      <div className="container max-w-[1200px] mx-auto px-4 flex items-center justify-between h-full">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Remove logo badge */}
          <span className="text-lg md:text-xl font-bold text-[#001F54] dark:text-white">Czifra Consulting</span>
        </div>
        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          <a href="#services" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Services</a>
          <a href="#about" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">About</a>
          <a href="#contact" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">Contact</a>
        </nav>
        {/* Right: Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:1234567890" className="border border-blue-500 text-blue-500 bg-transparent text-[16px] px-4 py-2 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900 transition">Call Now</a>
          <a href="#contact" className="bg-blue-500 text-white text-[16px] px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition">Get Quote</a>
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
          <Menu className="w-7 h-7 text-blue-500 dark:text-blue-400" />
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMenuOpen(false)} aria-label="Close menu overlay" />
      )}
      <nav id="mobile-menu" className={`fixed top-[60px] left-0 w-full bg-white dark:bg-[#0a1627] shadow-md z-50 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`} role="navigation" aria-label="Mobile navigation">
        <div className="flex flex-col items-center gap-4 py-6">
          <a href="#services" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="text-[16px] text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="tel:1234567890" className="border border-blue-500 text-blue-500 bg-transparent text-[16px] px-4 py-2 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900 transition w-4/5 text-center" onClick={() => setMenuOpen(false)}>Call Now</a>
          <a href="#contact" className="bg-blue-500 text-white text-[16px] px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition w-4/5 text-center" onClick={() => setMenuOpen(false)}>Get Quote</a>
        </div>
      </nav>
      <style>{`html { scroll-behavior: smooth; }`}</style>
    </header>
  );
}