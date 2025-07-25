import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md h-[60px] flex items-center">
      <div className="container max-w-[1200px] mx-auto px-4 flex items-center justify-between h-full">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 text-white font-bold text-2xl rounded-lg px-2 py-1 flex items-center justify-center" style={{ minWidth: 40, minHeight: 40 }}>
            C
          </div>
          <span className="text-[20px] font-bold text-[#001F54]">Czifra Consulting</span>
        </div>
        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-[16px] text-gray-500 hover:text-blue-500 transition">Services</a>
          <a href="#about" className="text-[16px] text-gray-500 hover:text-blue-500 transition">About</a>
          <a href="#contact" className="text-[16px] text-gray-500 hover:text-blue-500 transition">Contact</a>
        </nav>
        {/* Right: Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:1234567890" className="border border-blue-500 text-blue-500 bg-transparent text-[16px] px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition">Call Now</a>
          <a href="#contact" className="bg-blue-500 text-white text-[16px] px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition">Get Quote</a>
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <Menu className="w-7 h-7 text-blue-500" />
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMenuOpen(false)} />
      )}
      <div className={`fixed top-[60px] left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center gap-4 py-6">
          <a href="#services" className="text-[16px] text-gray-500 hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" className="text-[16px] text-gray-500 hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="text-[16px] text-gray-500 hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="tel:1234567890" className="border border-blue-500 text-blue-500 bg-transparent text-[16px] px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition w-4/5 text-center" onClick={() => setMenuOpen(false)}>Call Now</a>
          <a href="#contact" className="bg-blue-500 text-white text-[16px] px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition w-4/5 text-center" onClick={() => setMenuOpen(false)}>Get Quote</a>
        </nav>
      </div>
    </header>
  );
}