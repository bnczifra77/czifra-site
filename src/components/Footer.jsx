import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001F54] text-white py-8 border-t border-blue-900">
      <div className="container max-w-[1200px] mx-auto px-4 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-500 text-white font-bold text-2xl rounded-lg px-2 py-1 flex items-center justify-center" style={{ minWidth: 40, minHeight: 40 }}>C</div>
          <span className="text-lg font-bold">Czifra Consulting</span>
        </div>
        <div className="flex gap-4 mb-2">
          <a href="#" className="hover:text-blue-300 transition" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:text-blue-300 transition" aria-label="Twitter"><Twitter className="w-6 h-6" /></a>
          <a href="mailto:email@example.com" className="hover:text-blue-300 transition" aria-label="Email"><Mail className="w-6 h-6" /></a>
        </div>
        <p className="text-sm text-blue-100 text-center">© {new Date().getFullYear()} Czifra Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}