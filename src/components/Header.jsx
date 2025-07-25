import { Menu } from 'lucide-react';
export default function Header() {
  return (
    <header className="bg-consulting-blue text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white text-consulting-blue flex items-center justify-center font-bold text-2xl">
            C
          </div>
          <h1 className="ml-2 text-2xl font-bold">Czifra Consulting</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-blue-200">Home</a>
          <a href="#services" className="hover:text-blue-200">Services</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </nav>
        <Menu className="md:hidden w-6 h-6" />
      </div>
    </header>
  );
}