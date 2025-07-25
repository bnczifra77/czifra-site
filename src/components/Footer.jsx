import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001F54] dark:bg-[#0a1627] text-white dark:text-white py-6 md:py-8 border-t border-blue-900 dark:border-blue-800">
      <div className="container max-w-[1200px] mx-auto px-4 flex flex-col items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
          <div className="bg-blue-500 dark:bg-blue-900 text-white font-bold text-xl md:text-2xl rounded-lg px-2 py-1 flex items-center justify-center" style={{ minWidth: 36, minHeight: 36 }}>C</div>
          <span className="text-base md:text-lg font-bold text-white dark:text-white">Czifra Consulting</span>
        </div>
        <div className="flex gap-3 md:gap-4 mb-1 md:mb-2">
          <a href="#" className="hover:text-blue-300 dark:hover:text-blue-200 transition" aria-label="LinkedIn"><Linkedin className="w-5 h-5 md:w-6 md:h-6" /></a>
          <a href="#" className="hover:text-blue-300 dark:hover:text-blue-200 transition" aria-label="Twitter"><Twitter className="w-5 h-5 md:w-6 md:h-6" /></a>
          <a href="mailto:email@example.com" className="hover:text-blue-300 dark:hover:text-blue-200 transition" aria-label="Email"><Mail className="w-5 h-5 md:w-6 md:h-6" /></a>
        </div>
        <p className="text-xs md:text-sm text-blue-100 dark:text-blue-200 text-center">© {new Date().getFullYear()} Czifra Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}