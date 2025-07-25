import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001F54] dark:bg-[#0a1627] text-white dark:text-white py-6 md:py-8 border-t border-blue-900 dark:border-blue-800 safe-area-bottom">
      <div className="container-responsive flex flex-col items-center justify-center gap-2 md:gap-4">
        <div className="flex flex-col items-center gap-4">
          <span className="text-lg md:text-xl font-bold text-white">Czifra Consulting</span>
          <p className="text-sm text-blue-100 dark:text-blue-200 text-center">Empowering You</p>
        </div>
        <div className="flex gap-3 md:gap-4 mb-1 md:mb-2">
          <a 
            href="https://www.linkedin.com/in/benjaminczifra/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 dark:hover:text-blue-200 transition-colors duration-200 touch-target p-2" 
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
        <p className="text-xs md:text-sm text-blue-100 dark:text-blue-200 text-center">
          © {new Date().getFullYear()} Czifra Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}